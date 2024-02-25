import React from "react";

export default function FourthSection(){
  return (
    <div className="flex gap-11 flex-col items-center h-screen py-16">
      <h1 className="text-center text-5xl font-bold font-playfair ">Our <span className="bg-black font-semibold text-yellow-main italic px-4 rounded-[36px]">Success Story</span></h1>
      <p className="text-center text-gray font-semibold text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eum maxime quas, natus officia</p>
      <video src="/video (720p).mp4" controls loop className="rounded-3xl max-w-4xl"></video>
    </div>
  )
}