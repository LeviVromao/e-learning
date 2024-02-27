import {
    Carousel,
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious 
} from "./ui/carousel"
import { Card, CardHeader } from "./ui/card"
import Image from "next/image"

export default function ThirdSection(){

  return (
    <div className="flex flex-col items-center h-screen bg-black gap-12">
      <div className="flex flex-col items-center p-4 gap-8 md:p-12">
        <h2 className="text-white text-4xl text-playfair italic font-bold md:text-5xl">Popular <span className="text-yellow-main border-2 not-italic border-yellow-main rounded-[38px] px-5">Courses</span></h2>
        <div className="flex flex-wrap justify-center gap-8 text-white py-0.5 px-1.5 rounded-lg border border-gray">
            <p className="flex items-center text-playfair text-white italic font-bold cursor-pointer p-0.5 rounded-lg h-8 hover:bg-yellow-main hover:text-black">See All</p>
            <p className="flex items-center text-playfair text-white italic font-bold cursor-pointer p-0.5 rounded-lg h-8 hover:bg-yellow-main hover:text-black">Trending</p>
            <p className="flex items-center text-playfair text-white italic font-bold cursor-pointer p-0.5 rounded-lg h-8 hover:bg-yellow-main hover:text-black">Featured</p>
            <p className="flex items-center text-playfair text-white italic font-bold cursor-pointer p-0.5 rounded-lg h-8 hover:bg-yellow-main hover:text-black">Design</p>
            <p className="flex items-center text-playfair text-white italic font-bold cursor-pointer p-0.5 rounded-lg h-8 hover:bg-yellow-main hover:text-black">Marketing</p>
            <p className="flex items-center text-playfair text-white italic font-bold cursor-pointer p-0.5 rounded-lg h-8 hover:bg-yellow-main hover:text-black">Development</p>
        </div>
      </div>
      <Carousel className="w-[69%] md:w-1/2"> 
        <CarouselContent className="-ml-4 text-playfair">
            <CarouselItem className="relative basis-full md:basis-2/5">
              <div className="bg-yellow-main rounded-xl">
                <Card className="cursor-pointer flex flex-col transition-all delay-100 justify-evenly p-4 h-96 hover:translate-x-3 hover:translate-y-1.5">
                  <CardHeader className="p-0">
                    <Image src="/computer.jpg" alt="An computer" className="rounded-lg w-full border border-black object-cover" width={200} height={200}/>
                  </CardHeader>
                    <div className="flex justify-between items-center">
                        <p className="text-xs font-bold">Trendy</p>
                        <p className="text-xl font-bold">$19.99<span className="text-xs font-normal line-through">$39.99</span></p>
                    </div>
                    <div className="flex justify-between font-bold text-xs">
                        <div>
                            <p>Beginner</p>
                        </div>
                        <div>
                            <p>12 Hours</p>
                        </div>
                        <div>
                            <p>4.9 <span className="text-gray font-normal text-[0.70rem]">(490 Review)</span></p>
                        </div>
                    </div>
                    <h2 className="font-bold text-base">Photography Masterclass: A Complete Guide To Photography</h2>
                    <button className="self-start border-black font-bold text-sm border-2 rounded-lg p-1.5 hover:bg-yellow-main">View Course</button>
                </Card>
              </div>          
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-2/5">
              <div className="bg-yellow-main rounded-xl">
                <Card className="cursor-pointer flex flex-col transition-all delay-100 justify-evenly p-4 h-96 relative hover:translate-x-3 hover:translate-y-1.5">
                  <CardHeader className="p-0">
                    <Image src="/setup.jpg" alt="An setup gamer" className="rounded-lg w-full border border-black object-cover" width={200} height={200}/>
                  </CardHeader>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold">Writing</p>
                    <p className="text-xl font-bold">$12.99<span className="text-xs font-normal line-through">$29.99</span></p>
                  </div>
                  <div className="flex justify-between font-bold text-xs">
                    <div>
                      <p>Beginner</p>
                    </div>
                    <div>
                      <p>12 Hours</p>
                    </div>
                    <div>
                      <p>4.9 <span className="text-gray font-normal text-[0.70rem]">(140 Review)</span></p>
                    </div>
                  </div>
                  <h2 className="font-bold text-base">Content Is A King: Content Writing & Marketing</h2>
                  <button className="self-start border-black font-bold text-sm border-2 rounded-lg p-1.5 hover:bg-yellow-main">View Course</button>
                </Card>
                </div>          
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-2/5">
              <div className="bg-yellow-main rounded-xl">
                <Card className="cursor-pointer flex flex-col transition-all delay-100 justify-evenly p-4 h-96 relative hover: ranslate-x-3 hover:translate-y-1.5">
                  <CardHeader className="p-0">
                      <Image src="/computer_2.jpg" alt="An computer" className="rounded-lg w-full border border-black object-cover" width={200} height={200}/>
                  </CardHeader>
                  <div className="flex justify-between items-center">
                      <p className="text-xs font-bold">Design</p>
                      <p className="text-xl font-bold">$29.99<span className="text-xs font-normal line-through">$49.99</span></p>
                  </div>
                  <div className="flex justify-between font-bold text-xs">
                  <div>
                      <p>Advance</p>
                  </div>
                  <div>
                      <p>36 Hours</p>
                  </div>
                  <div>
                      <p>4.9 <span className="text-gray font-normal text-[0.70rem]">(890 Review)</span></p>
                  </div>
                  </div>
                  <h2 className="font-bold text-base">UX Design : Build Wireframes And Prototypes</h2>
                  <button className="self-start border-black font-bold text-sm border-2 rounded-lg p-1.5 hover:bg-yellow-main">View Course</button>
                </Card>
              </div>          
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="cursor-pointer"/>
      </Carousel>
    </div>
   )
}