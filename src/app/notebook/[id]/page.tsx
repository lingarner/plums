'use client'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

import HeaderMobile from "../../components/headerMoblie";
import SideMenu from "../../components/Menu";
import Notebook from "../../components/notebook";
import { useUser } from '@auth0/nextjs-auth0/client';
import DeleteTopicModal from '../../components/deleteTopicModal';
import MyEditor from "@/app/components/editor";


function EditNote() {
  const params = useParams();
  const { user, isLoading } = useUser();
  const [content, setContent] = useState<any>('');

  useEffect(() => {
    fetchEntryContent();
  }, []);
  

  const fetchEntryContent = async () => {
    try {
      const response = await fetch("/api/notebookEntries?entryId=" + params.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }); 
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      console.log(response);
      const data = await response.json();
      setContent(data);

      if(!data){
        setContent('Add Content')
      }
      
    } catch (error) {
      console.error("Failed to fetch entry content:", error);
    }
  };


  const deleteNote = async (deleted: boolean) => {
    const entryId: string = params.id[0];
    const entryIdNum = parseInt(entryId, 10);
    if (deleted) {
      try {
        const response = await fetch("/api/notebookEntries?entryId=" + params.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: entryIdNum
          })
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        alert("Deleted successfully");
      } catch (e) {
        console.error("error here" + e);
        return new Response(JSON.stringify({ error: "Unable to delete entry" }), {
          status: 500,
        });
      }
    }
  };


  return ( 
    <main className="">
      <div className="sm:hidden">
        <>
        <HeaderMobile userId={user?.sub} page={"NotebookEntry"}/>
        (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-darkPlum "></h1>s
              <button className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" ><p className='text-white'>Delete Note</p></button>
            </div>

          </>
        )
        </>
      </div>

      <div className="hidden sm:block">
        <div>
          <SideMenu userId={user?.sub} menu={false} page="notebook" topic='notebook' contentFilter='' onContentFilterChange={() => { }}/>
          <div className="flex">
            <div className="absolute top-10 left-24 flex-col">
              {/* <a className=" text-lg text-darkPlum"href={`/topic/${attachmentData?.topicId}`}>Back to Topic</a></div> */}
              <button className="my-4 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => deleteNote(true)} ><p className='text-white'>Delete Note</p></button>
            </div>
           </div>

          <div className="flex">

            <div className="absolute left-60 top-1 md:w-3/4 m-16 my-16">
                <MyEditor entry={content} topicId={params.id}/>

            
            </div>

          </div>

         
        </div>
      </div>
    </main>
  );
}

export default EditNote;
