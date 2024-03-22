'use client'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

import Image from "next/image";
import HeaderMobile from "../../components/headerMoblie";
import SideMenu from "../../components/Menu";
import TopicMenu from "../../components/TopicMenu";
import AddButton from "../../components/addButton";
import AttachmentCarousel from "../../components/attachmentCarousel";
import { Attachment, Topic, Url } from "../../types";
import DeleteTopicModal from '../../components/deleteTopicModal';
import Notebook from "../../components/notebook";
import TopicCarousel from "@/app/components/topicCarousel";
import LinkCarousel from "@/app/components/LinkCarousel";



function Home() {
  const params = useParams();
 
  const [pinned, setPinned] = useState<Attachment[]>([]);
  const [topicData, setTopicData] = useState<Topic>();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [attachmentData, setAttachmentData] = useState<Attachment[]>([]);
  const [contentFilter, setContentFilter] = useState('All');
  const [subtopicData, setSubtopicData] = useState<Topic[]>([]);
  const [urls, setUrls] = useState<Url[]>([]);

  const handleContentFilterChange = (newFilter:string) => {
    setContentFilter(newFilter);
  };


  // Function to render content based on contentFilter
  const renderContent = () => {
    if (contentFilter === 'All') {
      return (
        <>
        
          {pinned.length > 0 ? <AttachmentCarousel title="Pinned" Attachments={pinned}/> :<><h2 className="text-lg font-semibold text-darkPlum mb-4">Pinned</h2> <p className="text-gray-500 mt-2">Pinned is currently empty</p></>}
          {attachmentData.length > 0 ? <AttachmentCarousel title="Attachments" Attachments={attachmentData}/> : <><h2 className="text-lg font-semibold text-darkPlum mb-4">Attachments</h2><p className="text-gray-500 mt-2">Attachments are currently empty</p></>} 
          {urls.length > 0 ?  <LinkCarousel title="Links" Links={urls} /> :<> <h2 className="text-lg font-semibold text-darkPlum mb-4">Links</h2><p className="text-gray-500 mt-2">Links are currently empty</p></>}  
          {subtopicData.length > 0 ?  <TopicCarousel title="Subtopics" topics={subtopicData} /> : <><h2 className="text-lg font-semibold text-darkPlum mb-4">Subtopics</h2> <p className="text-gray-500 mt-2">Subtopics are currently empty</p></>}
          
         
         
          <Notebook />
        </>
      )
    } else if (contentFilter === 'Pinned') {
      return (
        <>
          {pinned.length > 0 ? <AttachmentCarousel title="Pinned" Attachments={pinned}/> : <><h2 className="text-lg font-semibold text-darkPlum mb-4">Pinned</h2><p className="text-gray-500 mt-2">Pinned is currently empty</p></>}
        </>
      );
    } else if (contentFilter === 'Notebook') {
      return (
        <>
          <Notebook />
        </>
      );
    } else if (contentFilter === 'Subtopics') {
      return (
        <>
        {subtopicData.length > 0 ?  <TopicCarousel title="Subtopics" topics={subtopicData} /> : <p className="text-gray-500 mt-2">Subtopics are currently empty</p>} 

        </>
      )
    }
    else if (contentFilter === 'Attachments') {
      return (
        <>
          {attachmentData.length > 0 ? <AttachmentCarousel title="Attachments" Attachments={attachmentData}/> : <p className="text-gray-500 mt-2">Attachments are currently empty</p>} <AttachmentCarousel title="Attachments" Attachments={attachmentData}/>
        </>
      )
    }
    else if (contentFilter === 'Links') {
      return (
        <>
        {urls.length > 0 ?  <LinkCarousel title="Links" Links={urls} /> :<> <h2 className="text-lg font-semibold text-darkPlum mb-4">Links</h2><p className="text-gray-500 mt-2">Links are currently empty</p></>}  
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
    const fetchUrlData = async () => {
      try {
        const response = await fetch(`/api/urls?topicId=${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        setUrls(data);
      } catch (error) {
        console.error("Failed to fetch attachments:", error);
      }
    };

    fetchTopicData();
    fetchAttachmentData();
    filterAttachments(attachmentData);
    fetchUrlData();
  }, [params.id, attachmentData, urls]);

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
      {deleteModalOpen && topicData ? <DeleteTopicModal isOpen={deleteModalOpen} topic={topicData} onClose={() => setDeleteModalOpen(false)}/> : <></>}
      <div className="sm:hidden">
        <>
        <HeaderMobile page={"topic"}/>
        {topicData && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-darkPlum ">{(topicData as { name: string }).name}</h1>
              <button className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => setDeleteModalOpen(true)}><p className='text-white'>Delete Topic</p></button>
            </div>

            <AttachmentCarousel title="Pinned" Attachments={pinned}/>
            <AttachmentCarousel title="Attachments" Attachments={attachmentData}/>
            {urls.length > 0 ?  <LinkCarousel title="Links" Links={urls} /> :<> <h2 className="text-lg font-semibold text-darkPlum mb-4">Links</h2><p className="text-gray-500 mt-2">Links are currently empty</p></>}  
            {subtopicData.length > 0 ?  <TopicCarousel title="Subtopics" topics={subtopicData} /> : <p className="text-gray-500 mt-2">Subtopics are currently empty</p>} 

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
          
            <div className="fixed left-60 top-1 md:w-3/4 m-16 my-16">
            
             

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
