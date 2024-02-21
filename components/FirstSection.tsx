import Image from "next/image"
export default function FirstSection() {
  return (
    <div className="flex pt-12 pb-12 px-2 h-screen bg-black">
      <div className="flex flex-col gap-1.5 md:w-[53%] justify-center lg:pl-11">
        <h2 className="text-white text-2xl">Learning Excellence</h2>
        <h1 className="text-white text-[2.9rem] leading-[3rem] font-playfair font-bold lg:text-5xl">Learning Skills For Better Carrer</h1>
        <p className="text-[#B1B1B4] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem sunt dicta veniam rerum ducimus laudantium voluptatum adipisci nemo cum. Impedit voluptatum eos a cum, natus culpa perspiciatis optio facilis.</p>
        <div className="w-full">
          <Image src="/child_with_book.avif" className="w-full md:hidden" alt="an little girl happy reading a book" width={80} height={80}/>
        </div>
        <div className="flex gap-4">
            <button className="text-black font-bold rounded-lg p-2 bg-yellow-main">See All Course</button>
            <button className="text-white rounded-lg p-2 font-bold border border-[#B1B1B4]">Learn More</button>
        </div>
        <p className="text-[#B1B1B4]">4000+ Student Complete There Course</p>
        <p className="text-[#B1B1B4]">From E-Lering</p>
        <div className="flex gap-4">
          <Image src="/universidadZara.png" className="sm:w-40" alt="An logo of the university Zaragoza" width={80} height={80}/>
          <Image src="/universidadZara.png" className="sm:w-40" alt="An logo of the university Zaragoza" width={80} height={80}/>
          <Image src="/universidadZara.png" className="sm:w-40" alt="An logo of the university Zaragoza" width={80} height={80}/>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-end w-[47%]">
        <Image src="/copy-space-woman-reading-book.jpg" className="w-[450px] rounded-t-2xl object-cover" alt="an girl holding a yellow book while looking at you" width={450} height={80}/>
      </div>
    </div>
  )
}