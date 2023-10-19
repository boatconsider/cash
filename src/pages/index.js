import Footer from "./components/Footer";
import Headder from "./components/Headder";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  

  return (
    <div className="h-full bg-slate-200  min[400px]:h-auto">
      <Headder />
     <div className="flex justify-center items-center mt-5">
      <div className=" flex justify-center items-center w-[600px] h-[500px] bg-white flex-col rounded-lg">
      <div className="text-xl flex  flex-col justify-center items-center flex-wrap">
      <h1 className=" font-semibold text-2xl">คู่มือวิธีการใช้งานแจ้งปัญหา</h1>
        <h3>1. คลิกบริษัทที่ท่านทำงานดังนี้ SDO  PDC/DC หรือ VANSEll</h3>
        <h3>2. จะมีฟอร์มแก้ปัญหาสิ่งที่ต้องกรอกมีดังนี้</h3>

        <h3> -ชื่อผู้แจ้งปัญหา </h3>

        <h3>-รหัส PS,MAS,VANSEll</h3>

        <h3> -บอกที่มาของปัญหาคร่าวๆ</h3>
    

        <h3>*ไม่ว่าจะเป็นการย้าย
แฟ้มหรือปัญหาอื่นๆก็กรอกมาทั้งหมด</h3>
<h3> -บอกที่มาของปัญหาคร่าวๆ</h3>
<h3>3. แล้วกด Submit แล้วรอทางทีมไอทีรับเรื่องและทำการแก้ไข</h3>
<h3> 4. หลังจากนั้นรอทางทีม IT Support ดำเนินงาน</h3>
      </div>

      </div>
     </div> 
       <div className=" flex justify-center items-center flex-row flex-wrap   mt-[1rem] max-[500px]:flex max-[500px]:flex-col    ">
       <div className="flex justify-center items-center w-[300px] h-[300px]  bg-white rounded-lg max-[500px]:ml-0   max-[500px]:mt-[1rem] ">
        
        </div>
        <div className="flex justify-center items-center w-[300px] ml-[1rem] h-[300px] bg-white rounded-lg max-[500px]:ml-0  max-[500px]:mt-[1rem] ">
        
        </div>
        <div className="flex justify-center items-center w-[300px] h-[300px] ml-[1rem] bg-white rounded-lg max-[500px]:ml-0  max-[500px]:mt-[1rem] max-[920px]:m-2  ">
        
        </div>
        <div className="flex justify-center items-center w-[300px] h-[300px] bg-white ml-[1rem] rounded-lg max-[500px]:ml-0  max-[500px]:mt-[1rem] max-[920px]:m-1    ">
        
        </div> 
       </div>
       
        <Footer  />
      </div>

  );
}
