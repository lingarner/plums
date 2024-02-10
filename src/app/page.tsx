'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import BottomMenu from "./components/bottomMenu";
import SideMenu from "./components/sideMenu";
import AddButton from "./components/addButton";
import TopicCarousel from "./components/topicCarosel";
import './globals.css';
import TopicList from "./components/topicList";

function Home() {
  const topics = ['Math', 'Science', 'English', 'History', 'Geography', 'Art'];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main className="">
      {isSmallScreen ? (
        <>
        <TopicList topics={topics}/>
        <BottomMenu />
       
        <AddButton  styles ='fixed  bottom-14 left-1/2 transform -translate-x-1/2'page = "home" />
      
        </>
      ) : (
        <>
          <SideMenu />
          <div className="absolute left-56 top-20 md:w-3/4  m-8">
          <TopicCarousel title="Study Topics" topics={topics}/>
          <TopicCarousel title="Pinned" topics={topics}/>
          </div>
    
          <AddButton styles='fixed  bottom-3 right-1 transform -translate-x-1/2'page = "home"/>
   
        </>
      )}

      
    </main>
  );
}

export default Home;
