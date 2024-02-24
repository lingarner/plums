'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import SideMenu from "./components/Menu";
import AddButton from "./components/addButton";
import TopicCarousel from "./components/topicCarosel";
import './globals.css';
import TopicList from "./components/topicList";
import HeaderMobile from "./components/headerMoblie";


function Home() {




  return (
    <main className="">
      <div className="sm:hidden">
        <>
        <HeaderMobile/>
        <TopicList />
        
        <AddButton  page = "home"/>
        </>
        </div>

      <div className="hidden sm:block">
        <div>
          <div className="flex">
          <SideMenu menu={true} page="home" topic={null} />
          <div className="absolute right-0 top-6 md:w-3/4 m-16 my-16">
          <TopicCarousel title="Study Topics"/>
          <TopicCarousel title="Pinned" />
          </div>
    
          <AddButton page = "home"/>
          </div>
        </div>
      </div>

      
    </main>
    
  );
}

export default Home;
