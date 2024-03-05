import { useState, useEffect } from 'react';
import Headder from "./components/Headder";
import Footer from "./components/Footer";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [list, setList] = useState("");
  const [cash, setCash] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch total cash when component mounts
    axios.get('https://node-api-u9ix.onrender.com/cashtotal')
      .then((response) => {
        const result = response.data;
        if (result.status === "ok") {
          setTotal(result.total);
        } else {
          // Handle error
        }
      })
      .catch((error) => {
        // Handle error
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  const handleSubmission = () => {
    if (!list || !cash) {
      MySwal.fire({
        title: <strong><h1>กรุณากรอกข้อมูลให้ครบ</h1></strong>,
        icon: "error",
      });
      return;
    }

    axios.post('https://node-api-u9ix.onrender.com/cash', {
      "list": list,
      "cash": cash,
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
      <div className="flex justify-center items-center mt-5 ml-5">
        <img src="f5wvEZcH6s-removebg-preview.png" alt="" width={300} height={300} />
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex items-center w-[650px] h-auto p-3 bg-white flex-col rounded-lg">
          <div>
            <img src="pngtree-bookkeeping-details-image_2243074_0-removebg-preview.png" alt="" width={150} height={100} />
          </div>
          <h1 className="text-2xl font-medium">รายรับรายจ่าย</h1>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>รายการ</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setList(e.target.value)} value={list} />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>จำนวนเงิน</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" onChange={(e) => setCash(e.target.value)} value={cash} />
          </div>
          <button className='bg-cyan-400 text-[#fff] hover-bg-amber-400 hover-text-[#fff] p-2 mt-2 rounded-md flex items-center outline-none text-sm' onClick={handleSubmission}>ยืนยัน</button>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>เงินคงเหลือ: {total} บาท</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
