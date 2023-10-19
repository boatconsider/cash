import Headder from "./components/Headder"
import Footer from "./components/Footer"
export default function van(){
    return(
        <div className="h-full bg-slate-200  min[400px]:h-auto">
        <Headder/>
        <div className="flex justify-center items-center mt-5">
  <div className=" flex justify-center items-center w-[600px] h-[500px] bg-white flex-col rounded-lg">
    

            </div>
        </div>
        <Footer/>
    </div>
    )
}