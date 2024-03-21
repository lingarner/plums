'use client'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

import HeaderMobile from "../../components/headerMoblie";
import SideMenu from "../../components/Menu";
import DeleteAttachmentModal from "../../components/deleteAttachmentModal";
import { Attachment } from "../../types";



function Home() {
  const params = useParams();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [attachmentData, setAttachmentData] = useState<Attachment>();
  const [data, setData] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    const fetchAttachmentData = async () => {
      try {
        const response = await fetch(`/api/attachments/attachment?attachmentId=${params.id}`, {
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
  
        // Set the initial value of comments from the fetched data
        setComments(data.comments || ''); 
        if (data.attachmentData && (Buffer.isBuffer(data.attachmentData) || data.attachmentData.type === 'Buffer')) {
          const base64String = Buffer.from(data.attachmentData).toString('base64');
          console.log(base64String)
          setData(base64String);
        }
      } catch (error) {
        console.error("Failed to fetch attachment data:", error);
      }
    };
  
    
  fetchAttachmentData();
  
  }, [params.id]);
  

  const onSave = async () => {
    console.log(comments)
    try {
      const response = await fetch(`/api/attachments/attachment`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: attachmentData?.id,
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
  

  const renderAttachment = () => {
    if (!attachmentData) return null;

    if (attachmentData.attachmentType.startsWith('image')) {
      return (
        <img src={`data:image/png;base64,${data}`} alt={attachmentData.name} className="max-h-[40vh] py-10" />
      );
    } else if (attachmentData.attachmentType.startsWith('application/pdf')) {
      // You need to implement a PDF viewer component here
      return (
        <embed className="w-[80%] sm:w-[100%] sm:h-[30vh] pdf-embed" style={{ zoom: '200%' }} src={`data:application/pdf;base64,${data}`}  />
      )
    } else if (attachmentData.attachmentType.startsWith('application')) {
      return (
        <a href={`data:application/msword;base64,${data}`} download={`${attachmentData.name}`} className="text-blue-600 underline">Download {attachmentData.name}</a>
        
      );
    } 
    else {
      return null; // Handle other attachment types if needed
    }
  };

  return (
    <main className="">
      {deleteModalOpen? <DeleteAttachmentModal isOpen={deleteModalOpen} attachment={attachmentData} onClose={() => setDeleteModalOpen(false)}/> : <></>}
      <div className="sm:hidden">
        <>
          <HeaderMobile/>
          <a href={`/topic/${attachmentData?.topicId}`}>Back to Topic</a>
          <div className="flex flex-col justify-center align-center">
          <h2 className="text-xl font-semibold text-darkPlum mb-2 border-b border-darkPlum">{attachmentData?.name}</h2>
              {renderAttachment()}
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
          <SideMenu menu={false} page="attachment" topic={attachmentData}/>
          <div className="flex">
            <div className="absolute top-10 left-24 flex-col">
            <div><a className=" text-lg text-darkPlum"href={`/topic/${attachmentData?.topicId}`}>Back to Topic</a></div>
            <button className="my-4 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => setDeleteModalOpen(true)}><p className='text-white'>Delete</p></button>

           </div>
            <div className="absolute right-0 top-1 md:w-3/4 m-16 my-16">
           
              <h2 className="text-xl font-semibold text-darkPlum mb-2 border-b border-darkPlum">{attachmentData?.name}</h2>
              {renderAttachment()}
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
