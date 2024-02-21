import Image from "next/image"
export default function SecondSection(){
    //Vou finalizar ainda 
  return (
    <div className="bg-white h-screen">
        <div className="flex items-center justify-center">
          <div className="w-[39%] border-2 rounded height-[174px]">
            <h1 className="font-playfair text-[29px] font-bold">What To <span>Expect From A</span> E-Learning Course</h1>
            <button>See All Features</button>
          </div>
          <div>
            <Image src="/certificado.png" alt="" width={80} height={80}/>
            <h2>Certificate</h2>
            <p>Add Value To Your Certificates And Increase Your Chance of Getting Hired In Your Dream Job</p>
          </div>
        </div>
        <div>
          <div>
            <Image src="/ensinar.png" alt="" width={80} height={80}/>
            <h2>Amazing Instructor</h2>
            <p>Our Amazing Instructors Bring Experience, Knowledge And Fun On The Glass</p>
          </div>
          <div>
            <Image src="/servico-on-line.png" alt="" width={80} height={80}/>
            <h2>Life Time Support</h2>
            <p>You Will Have Life Times Access Of The Courses & Resources. Also Contacting Instrucotrs Any Time!</p>
          </div>
          <div>
            <Image src="/edicao-de-video.png" alt="" width={80} height={80}/>
            <h2>Video Lesson</h2>
            <p>Recorded Version Of Lectures From Professional Instructions To Boost Your Growth</p>
          </div>
        </div>
    </div>
  )
}