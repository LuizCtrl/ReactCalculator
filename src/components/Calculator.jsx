import Pad from "./Pad"
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState('');
  return (
    <div className="flex flex-col justify-center items-center bg-black shadow-xl rounded-lg w-[320px] text-white p-4">
        <div className="w-full h-[150px] bg-slate-950 mb-4 text-gray-500 overflow-hidden"> 
            <div className="h-full flex justify-end items-end p-2 font-bold">
                {display}
            </div>
        </div>
        <Pad display={display} setDisplay={setDisplay} />
    </div>
  )
}

export default Calculator