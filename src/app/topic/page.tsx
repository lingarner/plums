'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderMobile from "../components/headerMoblie";
import SideMenu from "../components/Menu";
import AddButton from "../components/addButton";
import AttachmentCarousel from "../components/attachmentCarousel";
import { Attachment } from "../types";


function Home() {
  const topics = ['Math', 'Science', 'English', 'History', 'Geography', 'Art'];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const convertToTopics = (topics: string[]): Attachment[] => {
    return topics.map(topic => ({
      name: topic,
      file: `This is the description for ${topic}`,
      pinned: false, 
    }));
  
  
  };
  const topicObjects: Attachment[] = convertToTopics(topics);


  return (
    <main className="">
    <div className="sm:hidden">
      <>
      <HeaderMobile/>
      <h1 className="text-2xl font-semibold text-darkPlum mb-4 pt-6">Topic Name</h1>
      <AttachmentCarousel title="Pinned" attachments={topicObjects}/>
      <AttachmentCarousel title="Attachments" attachments={topicObjects}/>
      <AttachmentCarousel title="Notebook" attachments={topicObjects}/>
      
      <AddButton page = "topic"/>
      </>
      </div>

    <div className="hidden sm:block">
      <div>
        <div className="flex">
        <SideMenu />
        <div className=" md:w-3/4  m-16 my-16">

        <AttachmentCarousel title="Pinned" attachments={topicObjects}/>
        <AttachmentCarousel title="Attachments" attachments={topicObjects}/>
        <AttachmentCarousel title="Notebook" attachments={topicObjects}/>
        </div>
  
        <AddButton page = "topic"/>
        </div>
      </div>
    </div>

    
  </main>
  );
}

export default Home;
