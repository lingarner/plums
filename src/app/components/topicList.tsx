// components/TopicCarousel.js
import React, { useState, useEffect } from 'react';

import TopicCard from './topic';
import { Topic } from '../types';

const TopicList = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch("/api/topics");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setTopics(data);
        
      } catch (error) {
        console.error("Failed to fetch topics:", error);
      }
    };

    fetchTopics();


    
  }, []); 

  return (
    <div className="sm:absolute sm:left-56 sm:top-20 md:w-3/4  m-8">
      <h2 className="text-lg font-semibold text-darkPlum mb-4">Study Topics</h2>
    
        {topics.map((topic, index) => (
          <div key={index} > 
            <TopicCard topic={topic} />
          </div>
        ))}
      
    </div>
  );
};

export default TopicList;
