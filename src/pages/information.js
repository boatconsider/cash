import { useState } from 'react';
import Headder from "./components/Headder"
import Footer from "./components/Footer"
import axios from 'axios';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/router";

export default function information() {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [problem, setProblem] = useState(""); 
  const [img, setImg] = useState(""); 

  const handleSubmission = () => {
  
    axios.post('https://node-api-u9ix.onrender.com/rsmask', {
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
      <div className="flex justify-center items-center mt-5 ml-5">
        <img src="itsupport.png" alt="" width={300} height={300} />
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex items-center w-[650px] h-auto p-3 bg-white flex-col rounded-lg">
     
      </div>

      </div>
      <Footer />
    </div>
  );
}
