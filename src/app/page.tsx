'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import BottomMenu from "./components/bottomMenu";
import SideMenu from "./components/sideMenu";
import AddButton from "./components/addButton";
import Topic from "./components/topic";

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
    <main className="relative">
      {isSmallScreen ? (
        <BottomMenu />
      ) : (
        <>
          <SideMenu />
          <div className="absolute bottom-7 right-1 transform -translate-x-1/2">
            <AddButton />
          </div>
        </>
      )}
      <div className="flex justify-center items-center sm:absolute sm:left-1/4 sm:top-24 lg:m-0">
        <div>
          <h2 className="text-lg font-semibold text-darkPlum">Study Topics</h2>
          <Topic topic="Topic" />
        </div>
      </div>
    </main>
  );
}

export default Home;
