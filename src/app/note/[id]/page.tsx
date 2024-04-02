'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import SideMenu from "../../components/Menu";
import AddButton from "../../components/addButton";
import TopicCarousel from "../../components/topicCarousel";
import './globals.css';
import HeaderMobile from "../../components/headerMoblie";
import { Notebook } from "../../components/notebook";



function AddNote() {

  return (
    <main className="">
        <div className="sm:hidden">
        <>
        <HeaderMobile page = "home"/>
        
        <AddButton onAdd={addTopic} page = "home"/>
        </>
        </div>

        <div className="hidden sm:block">
            <div>
            <Notebook/>
            </div>

            <div>
            <AddButton onAdd={addTopic} page = "home"/>
            <SideMenu menu={true} page="home" topic={null} />
            </div>
        </div>

      
    </main>
    
  );
}

export default AddNote;
