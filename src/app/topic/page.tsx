'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import BottomMenu from "../components/bottomMenu";
import SideMenu from "../components/sideMenu";
import AddButton from "../components/addButton";
import Topic from "../components/topic";


function Home() {
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
    <main>
      {isSmallScreen? 

      <BottomMenu /> 
      : 
      <>
        <SideMenu/>
        <div className="absolute bottom-7  right-1 transform -translate-x-1/2">
        <AddButton/>
        <div></div>
        </div>
      </>
      }
      <div className="absolute left-1/4 top-20">
        <Topic/>
      </div>
      
      
      
    </main>
  );
}

export default Home;
