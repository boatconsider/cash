import { useState } from 'react';
import Headder from "./components/Headder"
import Footer from "./components/Footer"
import axios from 'axios';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/router";

export default function edit() {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState(""); 

  const [problem, setProblem] = useState(""); 
  const [newstore ,setNewstore]=useState("");
  const [tax,setTax]=useState("");
  const [cardcode, setCardcode] = useState(""); 
  const [cardname, setCardname] = useState(""); 
  const handleSubmission = () => {
    if (!name || !problem || !cardcode || !cardname || !tax || !newstore) {
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
      imageUrl: 'https://www.mindphp.com/images/articles/202001/IT_Support.jpg',
      imageWidth: 300,
      imageHeight: 200,
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
        
       
       

    
  
    axios.post('https://node-api-u9ix.onrender.com/rsmedit', {
      "passsell": name,
      "cardcode": cardcode,
      "cardname": cardname,
        "newcardname": newstore,
      "tax": tax,
      "problem":problem  
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
          <h1 className="text-2xl font-medium max-[450px]:text-lg">  แจ้งเปลี่ยนเลขที่เสียภาษีหรือแก้ชื่อร้าน</h1>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>SlsperID</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>CardCode</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setCardcode(e.target.value)} value={cardcode} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>CardName</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setCardname(e.target.value)} value={cardname} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>newcardname</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setNewstore(e.target.value)} value={newstore} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>Tax</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setTax(e.target.value)} value={tax} />
          </div>


          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>บอกที่มาของปัญหา</h1>
            <input className="p-8 bg-[#fff] border-2 border-cyan-400  outline-none rounded-lg" onChange={(e) => setProblem(e.target.value)} value={problem} />
          </div>
       
             <button className='bg-cyan-400 text-[#fff] hover-bg-amber-400 hover-text-[#fff] p-2 mt-2 rounded-md flex items-center outline-none text-sm' onClick={handleSubmission}>ยืนยัน</button> 
          
         
        </div>
      </div>
      <Footer />
    </div>
  );
}
