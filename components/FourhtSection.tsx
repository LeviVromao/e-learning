import React from "react";
import Image from "next/image";

export default function FourthSection(){
  return (
    <div className="flex gap-11 flex-col items-center py-16 bg-darkWhite">
      <h1 className="text-center text-4xl font-bold font-playfair md:text-5xl">Our <span className="bg-lightBlack font-semibold text-yellow-main italic px-4 rounded-[36px]">Success Story</span></h1>
      <p className="text-center text-gray font-semibold text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eum maxime quas, natus officia</p>
      <video src="/video (720p).mp4" controls loop className="rounded-3xl w-[95%] sm:max-w-4xl"></video>
      <div className="flex justify-center flex-col gap-3.5 md:flex-row">
        <div className="flex flex-col justify-between pt-11 md:w-[40%]">
          <div className="flex gap-3.5 flex-col">
            <h1 className="text-3xl font-bold">Meet <span className="text-yellow-main bg-lightBlack py-1 px-4 rounded-3xl italic font-semibold">Our Mentor</span></h1>
            <p className="font-semibold">Clarity Gives You The Blocks & Components You Need to Create A Truly Professional Website, Landing Page Or Admin Panel For Your Saas COmponents You Need to Create A truly Clarity Gives You The Blocks & Components</p>
            <button className="self-start rounded-3xl bg-lightBlack text-white p-3">See All Mentor</button>
          </div>
          <div className="flex gap-3.5">
            <Image src="/mentors_1.jpg" className="hidden w-[260px] h-[260px] object-cover md:block" alt="" width={260} height={260} />
            <Image src="/mentors_2.jpg" className="hidden w-[260px] h-[260px] object-cover md:block" alt="" width={260} height={260} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          <Image src="/mentors_3.jpg" className="w-[260px] h-[260px] object-cover" alt="" width={260} height={260} />
          <Image src="/mentors_4.jpg" className="w-[260px] h-[260px] object-cover" alt="" width={260} height={260} />
          <Image src="/mentors_5.jpg" className="w-[260px] h-[260px] object-cover" alt="" width={260} height={260} />
          <Image src="/mentors_6.jpg" className="w-[260px] h-[260px] object-cover" alt="" width={260} height={260} />
          <Image src="/mentors_1.jpg" className="w-[260px] h-[260px] object-cover md:hidden" alt="" width={260} height={260} />
          <Image src="/mentors_2.jpg" className="w-[260px] h-[260px] object-cover md:hidden" alt="" width={260} height={260} />
        </div>
      </div>
    </div>
  )
}