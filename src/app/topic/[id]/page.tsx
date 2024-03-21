'use client'
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
import TopicCarousel from "@/app/components/topicCarousel";


function Home() {
  const params = useParams();
 
  const [pinned, setPinned] = useState([]);
  const [topicData, setTopicData] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [attachmentData, setAttachmentData] = useState([]);
  const [contentFilter, setContentFilter] = useState('All');
  const [subtopicData, setSubtopicData] = useState([]);

  const handleContentFilterChange = (newFilter:string) => {
    setContentFilter(newFilter);
  };


  // Function to render content based on contentFilter
  const renderContent = () => {
    if (contentFilter === 'All') {
      return (
        <>
        
          <AttachmentCarousel title="Pinned" Attachments={pinned}/>
          
          <AttachmentCarousel title="Attachments" Attachments={attachmentData}/>
          {subtopicData && 
                <TopicCarousel title="Subtopics" topics={subtopicData} />
              }
          <Notebook />
        </>
      )
    } else if (contentFilter === 'Pinned') {
      return (
        <>
          <AttachmentCarousel title="Pinned" Attachments={pinned}/>
        </>
      );
    } else if (contentFilter === 'Notebook') {
      return (
        <>
          <Notebook />
        </>
      );
    } else if (contentFilter === 'Attachments') {
      return (
        <>
            <AttachmentCarousel title="Attachments" Attachments={attachmentData}/>
        </>
      )
    }
  };

  const addAttachment = (name: string, attachmentData: any, attachmentType: string) => {
    setAttachmentData((prevAttachments: Attachment[]) => [
      ...prevAttachments,
      { name, attachmentData, attachmentType }
    ]);
  };

  const filterAttachments = (attachments: Attachment[]) => {
    const filtered: Attachment[] = attachments.filter((attachment) => attachment.pinned);
    setPinned(filtered);
  }; 

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
      } catch (error) {
        console.error("Failed to fetch attachments:", error);
      }
    };

    fetchTopicData();
    fetchAttachmentData();
    filterAttachments(attachmentData);
  }, [params.id, attachmentData]);

  useEffect(() => {
    const fetchSubtopics = async () => {
      try {
        const response = await fetch(`/api/topics/subtopic?parentId=${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        setSubtopicData(data);
      } catch (error) {
        console.error("Failed to fetch attachments:", error);
      }
    };
    fetchSubtopics();

  }, [params.id, subtopicData]);
 


  return (
    <main className="">
      {deleteModalOpen? <DeleteTopicModal isOpen={deleteModalOpen} topic={topicData} onClose={() => setDeleteModalOpen(false)}/> : <></>}
      <div className="sm:hidden">
        <>
        <HeaderMobile/>
        {topicData && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-darkPlum ">{(topicData as { name: string }).name}</h1>
              <button className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => setDeleteModalOpen(true)}><p className='text-white'>Delete Topic</p></button>
            </div>
            <AttachmentCarousel title="Pinned" Attachments={pinned}/>
            <AttachmentCarousel title="Attachments" Attachments={attachmentData}/>
            <Notebook />
          </>
        )}
        <AddButton onAdd={addAttachment} page="topic"/>
        </>
      </div>

      <div className="hidden sm:block">
        <div>
          <SideMenu menu={false} page="topic" topic={topicData} contentFilter={contentFilter} onContentFilterChange={handleContentFilterChange} />
         
          <div className="flex">
            <div className="fixed">
              
            </div>
            <div className="absolute right-0 top-1 md:w-3/4 m-16 my-16">
            
             

              {topicData && (
                <>
                  {renderContent()}
                </>
              )}
            </div>
            <AddButton onAdd={addAttachment} page="topic"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
