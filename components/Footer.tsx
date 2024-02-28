import { RiFacebookFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
  return (
    <div className="flex flex-col items-center justify-center bg-lightBlack pt-36 relative">
      <div className="absolute top-[-11%] bg-[#FFBB0B] rounded-3xl w-[93%] lg: w-[74%]">
        <div className="flex flex-col items-center gap-3 bg-yellow-main p-3.5 rounded-3xl translate-x-[-12px] translate-y-[-12px] md:flex-row justify-center">
            <h1 className="text-2xl font-bold font-playfair md:w-[55%] text-4xl xl:leading-[4rem] xl:text-5xl lg:w-2/5">Are You Ready To Start Your <span className="bg-white py-0.5 px-1.5 rounded-3xl border border-lightBlack">Online Course?</span></h1>
            <div className="flex justify-evenly items-center">
              <div className="flex items-center border border-lightBlack p-1.5">
                <FaGooglePlay />
                <div>
                    <p className="leading-none text-[7px]">AVAILABLE APP ON</p>
                    <h2 className="text-xs">Google Play</h2>
                </div>
              </div>
              <div className="flex items-start gap-1.5 bg-lightBlack text-white py-1.5 px-2.5">
                <FaApple className="text-xl"/>
                <div>
                    <p className="text-[10px] leading-none">Download on the</p>
                    <h2>App Store</h2>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <div className="flex flex-col p-3.5 gap-3.5 md:w-1/4">
          <h2 className="text-2xl text-yellow-main font-comicSans">UrAcademy</h2>
          <p className="text-gray">Through A Combination Of Lectures Reading. Discussion, Students Will Gain Solid Foundation In Educational.</p>
          <div className="flex gap-3.5">
            <RiFacebookFill className="text-4xl bg-yellow-main p-0.5"/>
            <GrTwitter className="text-4xl bg-yellow-main p-0.5"/>
            <ImLinkedin2 className="text-4xl bg-yellow-main p-0.5"/>
          </div>
          <h2 className="text-2xl text-yellow-main md:hidden">New Letters</h2>
          <p className="text-gray md:hidden">Sign Up For Our News letter And Get 35% Off Your Next Course.</p>
          <form className="w-fit p-1.5 border border-gray rounded-lg md:hidden">
            <input type="email" className="bg-transparent" placeholder="Enter Your Mail*"/>
            <input type="submit" className="bg-yellow-main p-1.5 rounded-lg font-bold" value="Subscribe" />
          </form>
          <div className="flex gap-1.5 md:hidden">
            <input type="checkbox" required id="checkbox" />
            <label htmlFor="checkbox" className="text-gray">
              I Agree To The Terms Of Use And Privacy Policy.
            </label>
          </div>
        </div> 
        <div className="hidden md:flex flex-col items-center w-1/4 gap-3.5">
          <h2 className="text-yellow-main">Useful Link</h2>
          <Link href="/" className="text-gray">
            About Uracademy
          </Link>
          <Link href="/" className="text-gray">
            Contact
          </Link>
          <Link href="/" className="text-gray">
            Help Center
          </Link>
          <Link href="/" className="text-gray">
            Refound
          </Link>
          <Link href="/" className="text-gray">
            Conditions
          </Link>
          <Link href="/" className="text-gray">
            Privacy Policy
          </Link>
        </div> 
        <div className="hidden md:flex flex-col gap-3.5">
            <h1 className="text-yellow-main">Categories</h1>
            <Link href="/" className="text-gray">Design Skills</Link>
            <Link href="/" className="text-gray">Development</Link>
            <Link href="/" className="text-gray">marketing</Link>
            <Link href="/" className="text-gray">Finance & Account</Link>
            <Link href="/" className="text-gray"></Link>
            <Link href="/" className="text-gray"></Link>
        </div>
        <div className="hidden md:flex flex-col gap-3.5 w-1/4">
          <h2 className="text-2xl text-yellow-main">New Letters</h2>
          <p className="text-gray">Sign Up For Our News letter And Get 35% Off Your Next Course.</p>
          <form className="w-fit p-1.5 border border-gray rounded-lg">
            <input type="email" className="bg-transparent" placeholder="Enter Your Mail*"/>
            <input type="submit" className="bg-yellow-main p-1.5 rounded-lg font-bold" value="Subscribe" />
          </form>
          <div className="flex gap-1.5">
            <input type="checkbox" required id="checkbox" />
            <label htmlFor="checkbox" className="text-gray">
              I Agree To The Terms Of Use And Privacy Policy.
            </label>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray text-xs text-gray text-center font-playfair font-bold h-6">
        <p>&copy; Uracademy All Rights Reserved By Levi13</p>
      </div>
    </div>
  )
}