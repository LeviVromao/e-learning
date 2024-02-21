import Image from "next/image"
export default function SecondSection(){
  return (
    <div className="flex flex-col bg-[#F9F6F0] p-3 gap-6 md:py-12 md:px-[8.5rem]">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <div className="w-[96%] rounded-2xl height-[174px] p-4 bg-lightBlack">
            <h1 className="font-playfair font-italic text-white text-3xl font-bold mb-[4.19rem]">What To <span className="text-yellow-main">Expect From A</span> E-Learning Course</h1>
            <button className="text-lightBlack font-semibold bg-yellow-main rounded-lg p-2">See All Features</button>
          </div>
          <div className="bg-yellow-main border-2 border-lightBlack rounded-2xl p-4 w-[79%]">
            <Image src="/certificado.png" alt="" width={80} height={80}/>
            <h2 className="text-lightBlack font-italic font-black">Get Certificate</h2>
            <p className="text-lightBlack font-italic font-bold">Add Value To Your Certificates And Increase Your Chance of Getting Hired In Your Dream Job</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3.5 gap-y-3.5 md:flex-nowrap">
          <div className="flex flex-col gap-1.5 rounded-lg bg-white p-3 w-44 md:w-auto h-[17rem]">
            <Image src="/ensinar.png" alt="" width={80} height={80}/>
            <h2 className="font-bold font-playfair font-italic ">Amazing Instructor</h2>
            <p className="font-medium font-playfair font-italic text-gray">Our Amazing Instructors Bring Experience, Knowledge And Fun On The Glass</p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-lg bg-white p-3 w-44 md:w-auto h-[17rem]">
            <Image src="/servico-on-line.png" alt="" width={80} height={80}/>
            <h2 className="font-bold font-playfair font-italic ">Life Time Support</h2>
            <p className="font-medium font-playfair font-italic text-gray">You Will Have Life Times Access Of The Courses & Resources. Also Contacting Instrucotrs Any Time!</p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-lg bg-white p-3 basis-[100%] md:basis-auto h-[17rem]">
            <Image src="/edicao-de-video.png" alt="" width={80} height={80}/>
            <h2 className="font-bold font-playfair font-italic ">Video Lesson</h2>
            <p className="font-medium font-playfair font-italic text-gray">Recorded Version Of Lectures From Professional Instructions To Boost Your Growth</p>
          </div>
        </div>
    </div>
  )
}