'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import SideMenu from "./components/Menu";
import AddButton from "./components/addButton";
import TopicCarousel from "./components/topicCarousel";
import './globals.css';
import TopicList from "./components/topicList";
import HeaderMobile from "./components/headerMoblie";
import { Topic, Tag } from './types'

function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [pinned, setPinned] = useState<Topic[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagContent, setTagContent] = useState<Topic[]>([]); 

  const addTopic = (name: string, description: string) => {
    setTopics((prevTopics: Topic[]) => [
      ...prevTopics,
      { id: prevTopics.length + 1, name, description, pinned: false, parentId: null }
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
   
      console.log(data[0]);

      // Initialize an array to hold the tag content
      const tagContentArray: Topic[] = [];

   
      data[0].topics.forEach((topic: any) => {
        console.log(topic.topic);
        tagContentArray.push(topic.topic);
      });

      setTagContent(tagContentArray);


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
    fetchTagsAndTopics();
  }, []);

  return (
    <main className="">
      <div className="sm:hidden">
        <>
          <HeaderMobile page="home" />
          <TopicList topics={topics}/>
          {tags && tags.map((tag) => {
                const tagContentArray: Topic[] = [];
                tag.topics.forEach((topic: any) => {
                  tagContentArray.push(topic.topic);
                });
              
                return (
                  <div key={tag.id}>
                    <h2 className="text-lg font-semibold text-darkPlum mb-4">{tag.name}</h2>
                    <TopicList topics={tagContentArray} />
                  </div>
                );
              })}
          <AddButton onAdd={addTopic} page="home" />
        </>
      </div>

      <div className="hidden sm:block">
        <div>
          <div className="flex">
            <div className="absolute left-60 top-6 md:w-3/4 m-16 my-16">
              <TopicCarousel type="pinned" topics={pinned} title="Pinned" />
              <TopicCarousel type="all" topics={topics} title="All Topics" />
              {tags && tags.map((tag) => {
                const tagContentArray: Topic[] = [];
                tag.topics.forEach((topic: any) => {
                  console.log(topic.topic);
                  tagContentArray.push(topic.topic);
                });
              
                return (
                  <div key={tag.id}>
                    <TopicCarousel topics={tagContentArray} type="tag" title={tag.name} />
                  </div>
                );
              })}
            </div>
            <AddButton onAdd={addTopic} page="home" />
            <SideMenu
              menu={true}
              page="home"
              topic={null}
              contentFilter=""
              onContentFilterChange={() => { }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
