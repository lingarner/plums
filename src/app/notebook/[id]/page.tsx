'use client'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

import HeaderMobile from "../../components/headerMoblie";
import SideMenu from "../../components/Menu";
import Notebook from "../../components/notebook";
import { useUser } from '@auth0/nextjs-auth0/client';
import DeleteTopicModal from '../../components/deleteTopicModal';
import MyEditor from "@/app/components/editor";


function OldNote() {
  const { user, isLoading } = useUser();
  const params = useParams();
 

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

            <div className="absolute left-60 top-1 md:w-3/4 m-16 my-16">
                <MyEditor/>
            </div>
          </div>
         
        </div>
      </div>
    </main>
  );
}

export default OldNote;
