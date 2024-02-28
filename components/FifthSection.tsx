import Image from "next/image"
import { ImQuotesLeft } from "react-icons/im"

export default function FifthSection() {
  return (
    <div className="flex flex-col items-center bg-lightBlack p-6 gap-5">
      <h1 className="text-white text-4xl font-bold">What Clients Have To Say About Us</h1>
      <p className="text-white">Interdum Et Malesuada Famus Ac Ante Ipsum</p>
      <ImQuotesLeft className="text-yellow-main text-8xl"/>
      <p className="text-gray max-w-4xl text-center">"Thanks To E-Learning, Booz Allen Has Armed Our Workforce, Specifially its Data Scientists, With Highly Relevant And In-Demand Tech Skills That Are Enabling Scientists, With Highly Relevant And in-Demand Tech Skills That Are Enabling COnsutltants to Stay Ahead Of Big Data Trends And Raise The Bar On proficienc. Skills And Competencies To Meet Client Demand"</p>
       <h2 className="text-white text-2xl font-bold">Washim Akram</h2>
       <p className="text-white">UI/UX Designer</p>
        <div className="flex gap-3.5">
          <div className="rounded-full p-1.5 cursor-pointer">
            <Image src="/client_1.jpg" className="rounded-full object-cover w-24 h-24" alt="An person represent the clients" width={210} height={210}/>
          </div>
          <div className="rounded-full p-1.5 cursor-pointer border-2 border-yellow-main">
            <Image src="/client_2.jpg" className="rounded-full object-cover w-24 h-24" alt="An person represent the clients" width={210} height={210}/>
          </div>
          <div className="rounded-full p-1.5 cursor-pointer">
            <Image src="/client_3.jpg" className="rounded-full object-cover w-24 h-24" alt="An person represent the clients" width={210} height={210}/>
          </div>
     </div>
    </div>
  )
}