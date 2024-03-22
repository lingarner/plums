'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import SideMenu from "./components/Menu";
import AddButton from "./components/addButton";
import TopicCarousel from "./components/topicCarousel";
import './globals.css';
import TopicList from "./components/topicList";
import HeaderMobile from "./components/headerMoblie";
import {Topic} from './types'


function Home() {
  const [topics, setTopics] = useState([]);
  const [pinned, setPinned] = useState([]);
  const [tags, setTags] = useState([]);

  const addTopic = (name: string, description: string) => {
    setTopics((prevTopics: Topic[]) => [
      ...prevTopics,
      { name, description }
    ]);
  };

  const fetchTopics = async () => {
    try {
      const response = await fetch("/api/topics");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const filteredTopics = data.filter((topic: Topic) => topic.parentId === null);
      setTopics(filteredTopics);
      
    } catch (error) {
      console.error("Failed to fetch topics:", error);
    }
  };
  
  const fetchTagsAndTopics = async () => {
    try {
      const response = await fetch("/api/tags/topic");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error("Failed to fetch topics:", error);
    }
  }
  const filterTopics = (topics: Topic[]) => {
       const filtered: Topic[] = topics.filter((topic) => topic.pinned);
    
      setPinned(filtered);

    };  
    

 
  useEffect(() => {
    fetchTopics();

    filterTopics(topics);
    fetchTagsAndTopics();
  }, [topics]);

  return (
    <main className="">
      <div className="sm:hidden">
        <>
        <HeaderMobile page = "home"/>
        <TopicList />
        
        <AddButton onAdd={addTopic} page = "home"/>
        </>
        </div>

      <div className="hidden sm:block">
        <div>
          <div className="flex">
          
          <div className="absolute left-60 top-6 md:w-3/4 m-16 my-16">
          <TopicCarousel type="pinned" topics={pinned} title="Pinned" />
          <TopicCarousel type = "all" topics={topics} title="All Topics"/>
          {tags && tags.map((tag) => (
            <TopicCarousel key={tag.id} topics={tag.topics} type = "tag" title={tag.name} />
          ))}
 
          </div>
    
          <AddButton onAdd={addTopic} page = "home"/>
          <SideMenu menu={true} page="home" topic={null} />
          </div>
        </div>
      </div>

      
    </main>
    
  );
}

export default Home;
