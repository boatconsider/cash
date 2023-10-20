import Headder from "./components/Headder"
import Footer from "./components/Footer"
export default function van(){
    return(
        <div className="h-full bg-slate-200  min[400px]:h-auto">
        <Headder/>
        <div className="flex justify-center items-center mt-5">
  <div className=" flex justify-center items-center w-[650px] h-[600px] bg-white flex-col rounded-lg">
  <div className="flex justify-center items-center mt-5">
        <div className=" flex  items-center w-[650px] h-[600px] bg-white flex-col rounded-lg">
          <div>
            <img src="3.png" alt="" width={150} height={100} />
          </div>
          <h1 className="text-2xl font-medium">แจ้งปัญหา VAN</h1>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>ชื่อผู้แจ้งปัญหา</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>รหัส PS, MAS, VANSell</h1>
            <input className="p-1  bg-[#fff] border-2 border-cyan-400  outline-amber-400 rounded-lg" />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>บอกที่มาของปัญหา</h1>
            <input className="p-8 bg-[#fff] border-2 border-cyan-400  outline-none rounded-lg" />
          </div>
          <div className="flex flex-col items-center mt-[1rem] ">
            <h1>อัปโหลดรูปภาพ</h1>
            <input type="file"  />
          </div>
        <button className='bg-white text-[#333] hover:bg-[#333] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none text-sm'>ยืนยัน</button>
        </div>
      </div>

            </div>
        </div>
        <Footer/>
    </div>
    )
}