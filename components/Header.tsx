import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <div className="fixed top-[0%] w-[100%] flex items-center justify-evenly bg-black p-0.5">
      <Link href="/" className="flex items-center gap-0.5">
        <p className="text-white text-xl font-playfair italic font-semilhold"><span className="text-yellow-main">e</span>-learn<span className="text-yellow-main">ing.</span></p>
      </Link>
      <nav className="hidden sm:flex justify-evenly w-[48%]">
        <Link className="text-white" href="/">Home</Link>
        <Link className="text-white" href="/">About Us</Link>
        <Link className="text-white" href="/">Courses</Link>
        <Link className="text-white" href="/">Testimonial</Link>
        <Link className="text-white" href="/">Contact</Link>
      </nav>
      <div className="group relative flex gap-3.5">
        <Image src="/menu-bar.png" className="peer relative z-[1000] block w-8 cursor-pointer sm:hidden" alt="an icon represeting an burguer menu" width={70} height={70}/>
        <nav className="shadow-md absolute opacity-0 flex flex-col gap-1.5 w-screen bg-black bottom-[163%] right-[-24%] will-change-transform duration-1000 translate-y-[0%] hover:translate-y-[147%] hover:opacity-100 peer-hover:translate-y-[147%] peer-hover:opacity-100">
          <Link className="text-white" href="/">Home</Link>
          <Link className="text-white" href="/">About Us</Link>
          <Link className="text-white" href="/">Courses</Link>
          <Link className="text-white" href="/">Testimonial</Link>
          <Link className="text-white" href="/">Contact</Link>
        </nav>
        <button className="text-yellow-main font-openSans font-bold border-2 border-yellow-main rounded-lg p-1">Login</button>
        <button className="text-black font-openSans font-bold bg-yellow-main border-2 border-yellow-main rounded-lg p-1">Sign Up</button>
      </div>
    </div>
  )
}