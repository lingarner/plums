'use client';
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

import Image from "next/image";
import HeaderMobile from "../../components/headerMoblie";
import SideMenu from "../../components/Menu";
import TopicMenu from "../../components/TopicMenu";
import AddButton from "../../components/addButton";
import AttachmentCarousel from "../../components/attachmentCarousel";
import { Attachment } from "../../types";


function Home() {
  const params = useParams();
  const topics = ['Math', 'Science', 'English', 'History', 'Geography', 'Art'];
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [topicData, setTopicData] = useState(null);

  const convertToTopics = (topics: string[]): Attachment[] => {
    return topics.map(topic => ({
      name: topic,
      file: `This is the description for ${topic}`,
      pinned: false, 
    }));
  
  
  };
  const topicObjects: Attachment[] = convertToTopics(topics);


  useEffect(() => {
   
    const fetchTopicData = async () => {
      try {
        const response = await fetch(`/api/topics/topic?topicId=${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        
        setTopicData(data);
      
      } catch (error) {
        console.error("Failed to fetch topics:", error);
      }
    };

    fetchTopicData();
    
  }, []);

  return (
    <main className="">
    <div className="sm:hidden">
      <>
      <HeaderMobile/>
      {topicData && (
        <>
          <h1 className="text-2xl font-semibold text-darkPlum mb-4 pt-6">{(topicData as { name: string }).name}</h1>
          <AttachmentCarousel title="Pinned" attachments={topicObjects}/>
          <AttachmentCarousel title="Attachments" attachments={topicObjects}/>
          <AttachmentCarousel title="Notebook" attachments={topicObjects}/>
        </>
      )}
      
      <AddButton page="topic"/>
      </>
    </div>

    <div className="hidden sm:block">
      <div>
      <SideMenu menu={false} page="topic" topic={topicData}/>
        <div className="flex">
          <div className="fixed">
          
          </div>
          <div className="absolute right-0 top-1 md:w-3/4 m-16 my-16">
            {topicData && (
              <>
                <AttachmentCarousel title="Pinned" attachments={topicObjects}/>
                <AttachmentCarousel title="Attachments" attachments={topicObjects}/>
                <AttachmentCarousel title="Notebook" attachments={topicObjects}/>
              </>
            )}
          </div>

          <AddButton page="topic"/>
        </div>
      </div>
    </div>

    
  </main>
  );
}

export default Home;
