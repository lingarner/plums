
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopicCard from './topic';
import { Topic, Notebook} from '../types';
import AttachmentCard from './attachmentCard';
import { TagsOnTopic } from '@prisma/client';
import { useParams } from 'next/navigation'
import { useState, useEffect } from "react"

//fetch the titles of all the notes in the notebook
const Notebook = (topicId: any) => {
  const params = useParams();
  const [notes, setNotes] = useState<Notebook | undefined>();

//Fetch notes from Database based on topicId
const fetchTopicData = async () => { console.log(topicId);
  try {
    const response = await fetch("/api/notes?topicId=" + params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }); 
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    setNotes(data);
    
  } catch (error) {
    console.error("Failed to fetch topics:", error);
  }
};

useEffect(() => {
  if (topicId!==undefined) {
    fetchTopicData();
  }
}, []);
  


  return (
    <div >
      <h2 className="text-lg font-semibold text-darkPlum mb-4">Notebook</h2>

      {/* button to add new note */}
      <div>
      <a className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" >Add New Note</a>
      </div>

      <div className='rounded-xl grid grid-cols-1  px-3  sm:w-full sm:px-0 sm:grid-cols-3 gap-2'>
     {notes?.entries.map((entry)=> {
      return(
        <div className='bg-white rounded p-5' key={entry.id}>
          <a href={`/notebook/${entry.id}`}>{entry.title}</a>
        </div>
      )
     })}
      </div>
    </div>
  );
};

export default Notebook;
