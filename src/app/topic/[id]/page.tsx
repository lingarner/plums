'use client';
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

import Image from "next/image";
import HeaderMobile from "../../components/headerMoblie";
import SideMenu from "../../components/Menu";
import TopicMenu from "../../components/TopicMenu";
import AddButton from "../../components/addButton";
import AttachmentCarousel from "../../components/attachmentCarousel";
import { Attachment, Topic } from "../../types";
import DeleteTopicModal from '../../components/deleteTopicModal';
import Notebook from "../../components/notebook";

function Home() {
  const params = useParams();
  const topics = ['Math', 'Science', 'English', 'History', 'Geography', 'Art'];
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [topicData, setTopicData] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [attachmentData, setAttachmentData] = useState<Attachment[]>([]);
  const [display, setDisplay] = useState('All');

  const convertToTopics = (topics: string[]): Attachment[] => {
    return topics.map(topic => ({
      name: topic,
      file: `This is the description for ${topic}`,
      pinned: false, 
    }));
  
  
  };
  const topicObjects: Attachment[] = convertToTopics(topics);

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

  const fetchAttachmentData = async () => {
    try {
      const response = await fetch(`/api/attachments?topicId=${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      
      setAttachmentData(data);
      console.log(data)
    
    } catch (error) {
      console.error("Failed to fetch attachments:", error);
    }
  };

 
  useEffect(() => {
  
    fetchTopicData();
    fetchAttachmentData();
  }, []);

  return (

    <main className="">
    {deleteModalOpen? <DeleteTopicModal isOpen={deleteModalOpen} topic={topicData} onClose={() => setMenuOpen(false)}/> : <></>}
    <div className="sm:hidden">
      <>
      <HeaderMobile/>
      
      {topicData && (
        <>
          <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-darkPlum ">{(topicData as { name: string }).name}</h1>
          <button className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => setDeleteModalOpen(true)}><p className='text-white'>Delete Topic</p></button>
          </div>
          <AttachmentCarousel title="Pinned" Attachments={attachmentData}/>
          <AttachmentCarousel title="Attachments" Attachments={attachmentData}/>
          <Notebook />
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
                <AttachmentCarousel title="Pinned" Attachments={attachmentData}/>
                <AttachmentCarousel title="Attachments" Attachments={attachmentData}/>
                <Notebook />
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
