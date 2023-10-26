import { useState } from 'react';
import Headder from "./components/Headder"
import Footer from "./components/Footer"
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

export default function van() {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [problem, setProblem] = useState(""); 
  const [img, setImg] = useState(""); 

  const handleSubmission = () => {
    if (!name || !password || !problem || !img) {
      MySwal.fire({
        title: <strong><h1>กรุณากรอกข้อมูลให้ครบ</h1></strong>,
        icon: "error",
      });
      return;
    }
    axios.post('https://node-api-u9ix.onrender.com/rsmvan', {
      name: name,
      passwordsell: password,
      problem: problem,
      img: img
    })
    .then((response) => {
      const result = response.data;
      console.log(result);

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
      console.log("Error:", error.message);
    });
  }

  return (
    <div className="h-full bg-slate-200 min-h-[400px]">
      <Headder />
      <div className="flex justify-center items-center ">
        <img src="itsupport.png" alt="" width={300} height={300} className='mt-5 ml-5' />
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex items-center w-[650px] h-auto p-3 bg-white flex-col rounded-lg">
          <div>
            <img src="1.png" alt="" width={150} height={100} />
          </div>
          <h1 className="text-2xl font-medium">แจ้งปัญหา van</h1>
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
          <div className="flex flex-col items-center mt-[1rem]  ">
            <h1>อัปโหลดรูปภาพ</h1>
            <div className="flex items-center justify-center w-full">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover-bg-bray-800 dark:bg-gray-700 hover-bg-gray-100 dark-border-gray-600 dark:hover-border-gray-500 dark:hover-bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-2 pb-6">
                  <svg className="w-2 h-2 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} type="file" className="hidden" />
              </label>
              
            </div>
            {img && (
              <img src={img} alt="Preview" className="mt-2 w-[150px] h-[150px]" />
            )}
             <button className='bg-cyan-400 text-[#fff] hover-bg-amber-400 hover-text-[#fff] p-2 mt-2 rounded-md flex items-center outline-none text-sm' onClick={handleSubmission}>ยืนยัน</button> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
