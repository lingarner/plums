'use client'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

import HeaderMobile from "../../components/headerMoblie";
import SideMenu from "../../components/Menu";
import { Url } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import DeleteAttachmentModal from "@/app/components/deleteAttachmentModal";

function Home() {
  const params = useParams();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [urlData, seturlData] = useState<Url>();
  const [data, setData] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    const fetchurlData = async () => {
      try {
        const response = await fetch(`/api/urls/url?urlId=${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        seturlData(data);
  
        // Set the initial value of comments from the fetched data
        setComments(data.comments || ''); 
      } catch (error) {
        console.error("Failed to fetch url data:", error);
      }
    };
  
    
  fetchurlData();
  
  }, [params.id]);

  const DeleteUrl = async () => {
    try {
      const response = await fetch(`/api/urls`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: urlData?.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete attachment');
      }

      window.location.href = `/topic/${urlData?.topicId}`;

    } catch (error) {
      console.error('Error deleting attachment:', error);
    }
    
  };
  

  const onSave = async () => {

    try {
      const response = await fetch(`/api/urls/url`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: urlData?.id,
          comments: comments
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle pin status');
      }

    } catch (error) {
      console.error('Error changing status:', error);
    }
  };

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value); // Update the comments state directly with the new value
  };
  



  return (
    <main className="">
      <div className="sm:hidden">
        <>
          <HeaderMobile page="url"/>
          <a href={`/topic/${urlData?.topicId}`}>Back to Topic</a>
          <div className="flex flex-col justify-center align-center">
          <h2 className="text-xl font-semibold text-darkPlum mb-2 border-b border-darkPlum">{urlData?.name}</h2>
          <a className="w-full text-buttonColor overflow-wrap break-words p-2 text-sm align-left font-semibold sm:pt-2" href="{urlData?.url}">{urlData?.url}</a>
            <h3 className="text-lg font-semibold text-darkPlum mb-2">Comments</h3>
            <textarea 
             className="w-full h-24 border border-gray-300 rounded-md p-2" 
             onChange={handleCommentsChange}
             value={comments}  
          />

          <button  onClick={onSave} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">
         Save
        </button>
          </div>
        </>
      </div>
      <div className="hidden sm:block">
        <div>
          <SideMenu  onContentFilterChange={() => {}} contentFilter="all" menu={false} page="url" topic={urlData}/>
          <div className="flex">
            <div className="absolute top-10 left-24 flex-col">
            <div><a className=" text-lg text-darkPlum"href={`/topic/${urlData?.topicId}`}>Back to Topic</a></div>
            <button className="my-4 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => DeleteUrl()}><p className='text-white'>Delete</p></button>

           </div>
            <div className="absolute right-0 top-1 md:w-3/4 m-16 my-16">
           
              <h2 className="text-xl font-semibold text-darkPlum mb-2 border-b border-darkPlum">{urlData?.name}</h2>
              <div>
              <a className="w-full text-buttonColor overflow-wrap break-words p-2 text-sm align-left font-semibold sm:pt-2" href="{urlData?.url}">{urlData?.url}</a>
              </div>
              <h3 className="text-lg font-semibold text-darkPlum mb-2">Comments</h3>
              <textarea 
             className="w-full h-24 border border-gray-300 rounded-md p-2" 
             onChange={handleCommentsChange}
             value={comments}  
          />

              <button  onClick={onSave} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">
             Save
           </button>
           
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .pdf-embed {
            zoom: 100%;
          }
        }
      `}</style>
    </main>
  );
}


export default Home;
