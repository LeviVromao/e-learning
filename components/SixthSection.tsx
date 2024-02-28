import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function SixthSection(){
  return (
    <div className="flex flex-col items-center justify-center bg-darkWhite h-screen md:flex-row">
      <div className="flex flex-col gap-4 md:w-2/5">
        <h1 className="text-5xl font-bold font-playfair">Its Easy To Start</h1>
        <h2 className="w-fit py-2 px-4 bg-yellow-main rounded-3xl text-3xl font-bold italic border-2 border-lightBlack">Learning</h2>
        <p className="text-p-color font-semibold font-playfair">Our Sing-In Process Lets Start Your Learning Journey Without Much Hassle. Our Aim Is To Create A Great Learning Experience For You.</p>
        <div className="flex items-center gap-2.5">
          <FaCheck className="bg-yellow-main rounded-full w-7 h-7 p-0.5"/>
          <p className="font-bold">Create Account</p>
        </div>
        <div className="flex items-center gap-2.5">
          <FaCheck className="bg-yellow-main rounded-full w-7 h-7 p-0.5"/>
          <p className="font-bold">Purchaser Course</p>
        </div>
        <div className="flex items-center gap-2.5">
          <FaCheck className="bg-yellow-main rounded-full w-7 h-7 p-0.5"/>
          <p className="font-bold">Start Learning</p>
        </div>
      </div>
      <Image src="/book.png" className="md:w-2/5" alt="" width={672} height={672}/>
    </div>
  )
}