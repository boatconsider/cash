import Footer from "./components/Footer";
import Headder from "./components/Headder";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <div className="h-full bg-slate-200  min[400px]:h-auto">
      <Headder />
     <div className="flex justify-center items-center mt-5">
      <div className=" flex justify-center items-center w-[600px] h-[500px] bg-white flex-col rounded-lg">
      <div className="text-xl flex  flex-col justify-center items-center flex-wrap max-[500px]:text-base">
      <h1 className=" font-semibold text-2xl">คู่มือวิธีการใช้งานแจ้งปัญหา</h1>
        <h3>1. คลิกบริษัทที่ท่านทำงานดังนี้ SDO  PDC/DC หรือ VANSEll</h3>
        <h3>2. จะมีฟอร์มแก้ปัญหาสิ่งที่ต้องกรอกมีดังนี้ </h3>

        <h3> -ชื่อผู้แจ้งปัญหา </h3>

        <h3>-รหัส PS,MAS,VANSEll</h3>

        <h3> -บอกที่มาของปัญหาคร่าวๆ</h3>
    

<h3> -บอกที่มาของปัญหาคร่าวๆ</h3>
<h3>3. แล้วกด Submit แล้วรอทางทีมไอทีทำการแก้ไข</h3>
<h3> 4. หลังจากนั้นรอทางทีม IT Support ดำเนินงาน</h3>
<button onClick={() => router.push("/information")} className="  text-cyan-400 ">คลิกดูรายละเอียดการใช้งานเพิ่มเติม</button>
      </div>

      </div>
     </div> 
     <div className="flex justify-center items-center mt-[1rem] flex-warp">
     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
  <div class="bg-white rounded-lg p-4 w-[300px] h-[300px]">
    <div className="flex justify-center items-center flex-col">
    <img src="1.png" alt="" width={250} height={100}/>
    <button  onClick={() => router.push("/sdo")} className="  text-cyan-400 ">คลิกที่นี้</button>
    </div>
  
  </div>
  <div class="bg-white rounded-lg p-4 w-[300px] h-[300px]">
  <div className="flex justify-center items-center flex-col">
    <img src="2.png" alt=""  width={250} height={100}/>
    <button onClick={() => router.push("/pdcdc")} className="  text-cyan-400 ">คลิกที่นี้</button>
    </div>
  
  </div>
  <div class="bg-white rounded-lg p-4 w-[300px] h-[300px]">
  <div className="flex justify-center items-center flex-col">
    <img src="3.png" alt=""  width={250} height={100}/>
    <button onClick={() => router.push("/van")}  className="  text-cyan-400 ">คลิกที่นี้</button>
    </div>

  </div>
  <div class="bg-white rounded-lg p-4 w-[300px] h-[300px]">
  <div className="flex justify-center items-center flex-col">
    <img src="5.png" alt=""width={250} height={100}  />
    <button onClick={() => router.push("/information")} className="  text-cyan-400 ">คลิกที่นี้</button>
    </div>

  </div>
</div>

</div>

        <Footer  />
      </div>

  );
}
