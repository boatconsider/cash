import { useState } from 'react';
import Headder from "./components/Headder"
import Footer from "./components/Footer"
import axios from 'axios';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/router";

export default function information() {
  const router = useRouter();

  return (
    <div className="h-full bg-slate-200 min-h-[400px]">
      <Headder />
      <div className="flex justify-center items-center mt-5 ml-5">
        <img src="itsupport.png" alt="" width={300} height={300} />
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex items-center w-[650px] h-auto p-3 bg-white flex-col rounded-lg">
        <div className='text-center'>
          <h1>เริ่มจากเลือกบริษัทที่เราจะแจ้ง
          </h1>
          <img src='สเต็บ1.png' alt=''/>
          <h1>หรือเลือกจากด้านล่างก็ได้
          </h1>
          <img src='1.1.png'alt=''/>
          <h1>หลังจากเราคลิกเลือกบริษัทจะขึ้น form ให้กรอกดังนี้
          </h1>
            <img src='เลือกได้แล้ว.png 'alt=''/>
            <h1>กรอกformให้ครบดังตัวอย่าง
          </h1>
          <img src='form.png' alt=''/>
          <h1>จากนั้นกดปุ่มยืนยัน
          </h1>
          <img src='confirm.png' alt=''/>
          <h1>ระบบจะแสดง popupดังนี้ถ้าระบบไม่ผิดพลาด
          </h1>
          <img src='fin.png' alt=''/>
          <h1>กรณีกรอกข้อมูลไม่ครบ
          </h1>
          <img src='filed.png' alt=''/>
        </div>
      </div>

      </div>
      <Footer />
    </div>
  );
}
