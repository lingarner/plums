'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import SideMenu from "./components/Menu";
import AddButton from "./components/addButton";
import TopicCarousel from "./components/topicCarousel";
import './globals.css';
import TopicList from "./components/topicList";
import HeaderMobile from "./components/headerMoblie";
import { Topic, Tag } from './types';
import { useUser } from '@auth0/nextjs-auth0/client';


function Home() {
  const { user, isLoading } = useUser();

  const [topics, setTopics] = useState<Topic[]>([]);
  const [pinned, setPinned] = useState<Topic[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagContent, setTagContent] = useState<Topic[]>([]); 

  const addTopic = (id : number, name: string, description: string) => {
    setTopics((prevTopics: Topic[]) => [
      ...prevTopics,
      { id: prevTopics.length + 1, name, description, pinned: false, parentId: null }
    ]);
  };

  const fetchTopics = async () => {
    if (!user) {
      return;
    }
    try {
      const response = await fetch("/api/topics?userId=" + user?.sub); 
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
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const fetchTagsAndTopics = async () => {
    if (!user) {
      return;
      
    }
    
    try {
      const response = await fetch("/api/tags/topic?userId=" + user?.sub); 
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setTags(data);
   
      const tagContentArray: Topic[] = [];
      data[0].topics.forEach((topic: any) => {
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
    filterTopics(topics);
  }, [user]);

  

  



  return (
    <main className="">
      <div className="sm:hidden">
        <>
          <HeaderMobile userId={user?.sub} page="home" />
          {!user && !isLoading?
            <div className="absolute left-16 top-0 sm:left-1/2 flex justify-center items-center h-screen">
              <div className="bg-sideMenu bg-opacity-20 rounded-lg p-8 shadow-md">
                <div className="text-center">
                  <p className="mb-4 text-lg text-darkPlum">Login to View Content </p>
                  <a href="/api/auth/login" className="inline-block px-4 py-2 bg-buttonColor text-white rounded hover:bg-darkPlum-dark transition duration-300 ease-in-out">Login</a>
                </div>
              </div>
            </div> 
            :  
           <>
           <h2 className="pl-2 text-lg font-semibold text-darkPlum mb-4">All Topics</h2>
          <TopicList topics={topics}/>
          {tags && tags.map((tag) => {
                const tagContentArray: Topic[] = [];
                tag.topics.forEach((topic: any) => {
                  tagContentArray.push(topic.topic);
                });
                
              
                return (
                  <div key={tag.id}>
                    <h2 className="pl-2 text-lg font-semibold text-darkPlum mb-4">{capitalizeFirstLetter(tag.name)}</h2>
                    <TopicList topics={tagContentArray} />
                  </div>
                );
              })}
              </>}
          <AddButton onAdd={addTopic} page="home" />
        </>
      </div>

      <div className="hidden sm:block">
        <div>
          <div className="flex">
           {!user && !isLoading?
            <div className="absolute left-1/2 flex justify-center items-center h-screen">
              <div className="bg-sideMenu bg-opacity-20 rounded-lg p-8 shadow-md">
                <div className="text-center">
                  <p className="mb-4 text-lg text-darkPlum">Login to View Content </p>
                  <a href="/api/auth/login" className="inline-block px-4 py-2 bg-buttonColor text-white rounded hover:bg-darkPlum-dark transition duration-300 ease-in-out">Login</a>
                </div>
              </div>
            </div> 
            :  
           <>
          <div className="absolute left-56 top-1 p-5  text-darkPlum font-semibold text-xl">{user && user.name ? `Welcome ${user.name[0]}!` : ""}</div>
            <div className="absolute left-60 top-6 md:w-3/4 m-16 my-16">
              
              
              <TopicCarousel type="pinned" topics={pinned} title="Pinned" />
              <TopicCarousel type="all" topics={topics} title="All Topics" />
              {tags && tags.map((tag) => {
                const tagContentArray: Topic[] = [];
                tag.topics.forEach((topic: any) => {
                  tagContentArray.push(topic.topic);
                });
              
                return (
                  <div key={tag.id}>
                    <TopicCarousel topics={tagContentArray} type="tag" title={capitalizeFirstLetter(tag.name)} />
                  </div>
                );
              })}
            </div>
            </>
              }
            <AddButton onAdd={addTopic} page="home" />
            <SideMenu
              userId = {user?.sub}
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
