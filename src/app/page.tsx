'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import SideMenu from "./components/Menu";
import AddButton from "./components/addButton";
import TopicCarousel from "./components/topicCarosel";
import './globals.css';
import TopicList from "./components/topicList";
import HeaderMobile from "./components/headerMoblie";
import {Topic} from './types';

function Home() {
  const topics = ['Math', 'Science', 'English', 'History', 'Geography', 'Art'];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const convertToTopics = (topics: string[]): Topic[] => {
    return topics.map(topic => ({
      title: topic,
      description: `This is the description for ${topic}`,
      pinned: false, 
    }));
  
  
  };
  const topicObjects: Topic[] = convertToTopics(topics);


  return (
    <main className="">
      <div className="sm:hidden">
        <>
        <HeaderMobile/>
        <TopicList topics={topicObjects}/>
        
        <AddButton  page = "home"/>
        </>
        </div>

      <div className="hidden sm:block">
        <div>
          <div className="flex">
          <SideMenu />
          <div className=" md:w-3/4  m-16 my-32">
          <TopicCarousel title="Study Topics" topics={topicObjects}/>
          <TopicCarousel title="Pinned" topics={topicObjects}/>
          </div>
    
          <AddButton page = "home"/>
          </div>
        </div>
      </div>

      
    </main>
    
  );
}

export default Home;
