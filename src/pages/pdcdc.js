import { useState } from 'react';
import Headder from "./components/Headder"
import Footer from "./components/Footer"
import axios from 'axios';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/router";

export default function pdcdc() {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [problem, setProblem] = useState(""); 
  const [img, setImg] = useState(""); 

  const handleSubmission = () => {
  
    axios.post('https://node-api-u9ix.onrender.com/rsmpdcdc', {
      name: name,
      passwordsell: password,
      problem: problem,
      img: img
    })
    .then((response) => {
      const result = response.data;
      console.log(result);

      // Handle login success here
      if (result.status === "ok") {
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: "success",
        }).then(() => {
          router.push("/");
        });
      } else {
        MySwal.fire({
          title: <strong>Login failed.</strong>,
          icon: "error",
        });
      }
    })
    .catch((error) => {
      console.log("Error:", error.message);
      // Handle the error here
    });
  }

  return (
    <div className="h-full bg-slate-200 min-h-[400px]">
      <Headder />
      <div className="flex justify-center items-center mt-2">
        <img src="itsupport.png" alt="" width={300} height={300} />
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex items-center w-[650px] h-[650px] bg-white flex-col rounded-lg">
          <div>
            <img src="1.png" alt="" width={150} height={100} />
          </div>
          <h1 className="text-2xl font-medium">แจ้งปัญหา pdcdc</h1>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>ชื่อผู้แจ้งปัญหา</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>รหัส PS, MAS, VANSell</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>บอกที่มาของปัญหา</h1>
            <input className="p-8 bg-[#fff] border-2 border-cyan-400  outline-none rounded-lg" onChange={(e) => setProblem(e.target.value)} value={problem} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>อัปโหลดรูปภาพ</h1>
            <input type="file" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} />
          </div>
          <button className='bg-cyan-400 text-[#fff] hover:bg-amber-400 hover:text-[#fff] p-2 mt-4 rounded-md flex items-center outline-none text-sm' onClick={handleSubmission}>ยืนยัน</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
