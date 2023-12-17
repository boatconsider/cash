import { useState } from 'react';
import Headder from "./components/Headder"
import Footer from "./components/Footer"
import axios from 'axios';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/router";

export default function move() {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [problem, setProblem] = useState(""); 
  const [img, setImg] = useState(""); 
  const [cardcode, setCardcode] = useState(""); 
  const [cardname, setCardname] = useState(""); 
  const handleSubmission = () => {
    if (!name || !password || !problem || !cardcode || !img || !cardname) {
      MySwal.fire({
        title: <strong><h1>กรุณากรอกข้อมูลให้ครบ</h1></strong>,
        icon: "error",
      });
      return;
    }
  
 
    const loadingSwal = Swal.fire({
      title: 'กำลังโหลด...',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      html: '<div style="border-radius: 100%; overflow: hidden;"><img src="https://www.mindphp.com/images/articles/202001/IT_Support.jpg" style="width: 100%; height: 100%; border-radius: 10px;"></div>',
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    
        
       
       

    
  
    axios.post('https://node-api-u9ix.onrender.com/rsmfam', {
      "passsell": name,
      "cardcode": cardcode,
      "cardname": cardname,
      "oldfam": img,
      "newfam": password,
      "problem": problem
    })
      .then((response) => {
        const result = response.data;
        console.log(result);
  
        // ปิด Loading Indicator
        loadingSwal.close();
  
        if (result.status === "ok") {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "success",
          }).then(() => {
            router.push("/");
          });
        } else {
          MySwal.fire({
            title: <strong>{result.message}</strong>,
            icon: "error",
          });
        }
      })
      .catch((error) => {

        loadingSwal.close();
        console.log("Error:", error.message);
      });
  }
  

  return (
    <div className="h-full bg-slate-200 min-h-[400px]">
      <Headder />
      <div className="flex justify-center items-center mt-5 ml-5">
        <img src="itsupport.png" alt="" width={300} height={300} />
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex items-center w-[650px] h-auto p-3 bg-white flex-col rounded-lg">
          <div>
            <img src="1.png" alt="" width={150} height={100} />
          </div>
          <h1 className="text-2xl font-medium">แจ้งย้ายแฟ้ม</h1>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>SlsperID</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>CardCode
</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setCardcode(e.target.value)} value={cardcode} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>CardName
</h1>
            <input className="p-1 bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg " onChange={(e) => setCardname(e.target.value)} value={cardname} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>แฟ้มเก่า</h1>
            <input className="p-1 bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setImg(e.target.value)} value={img} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>แฟ้มที่ต้องการย้าย</h1>
            <input className="p-1 bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>หมายเหตุเพิ่มเติม</h1>
            <input className="p-8 bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setProblem(e.target.value)} value={problem} />
          </div>
             <button className='bg-cyan-400 text-[#fff] hover-bg-amber-400 hover-text-[#fff] p-2 mt-2 rounded-md flex items-center outline-none text-sm' onClick={handleSubmission}>ยืนยัน</button> 
      
         
        </div>
      </div>
      <Footer />
    </div>
  );
}