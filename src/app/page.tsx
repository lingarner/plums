'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import BottomMenu from "./components/bottomMenu";
import SideMenu from "./components/sideMenu";

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
    <main className="bg-gray-100">
      {isSmallScreen? <BottomMenu /> : <SideMenu/>}
    </main>
  );
}

export default Home;
