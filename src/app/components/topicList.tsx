// components/TopicCarousel.js
import React from 'react';

import Topic from './topic';

const TopicList = ({topics} : {topics: string[]}) => {

  return (
    <div className="sm:absolute sm:left-56 sm:top-20 md:w-3/4  m-8">
      <h2 className="text-lg font-semibold text-darkPlum mb-4">Study Topics</h2>
    
        {topics.map((topic, index) => (
          <div key={index} > 
            <Topic topic={topic} />
          </div>
        ))}
      
    </div>
  );
};

export default TopicList;
