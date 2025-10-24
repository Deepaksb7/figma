"use client"
import { useEffect, useRef, useState } from 'react';
import Logos from './Logos'

const Widget2 = () => {

  const imageUrl = "./image.jpg";

  const defaultImages: string[] = [
    imageUrl,
    imageUrl,
    imageUrl,
  ];

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const savedImages = localStorage.getItem("images");
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      setImages(defaultImages);
    }
  }, []);


  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem("images", JSON.stringify(images));
    }
  }, [images]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = 220;

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    } 
  };

  const handleAddImage = () => {
    setImages(prev => [...prev, imageUrl])
  };
  return (
    <div className="absolute w-[720px] h-[330px] top-[453px] left-[922px] rounded-[18.89px] py-[16px] px-[8px] bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
      <div className=' relative flex justify-between items-between flex-col'>
        <Logos />

        <div className='mx-11 my-1 flex justify-between items-center'>

          <div className='w-[149px] h-[62px] rounded-[20px] bg-[#171717] text-white flex items-center justify-center' >
            <p className='font-poppins font-medium text-[20px] text-center'>
              Gallery
            </p>
          </div>

          <div className='flex gap-4 items-center justify-center'>
            <button onClick={handleAddImage} className='w-[131.32px] cursor-pointer h-[46px] mr-5 rounded-full bg-[#FFFFFF08] backdrop-blur-[104.5599365234375px] shadow-[inset_0px_3.26px_3.26px_0px_#FFFFFF26,inset_0px_0px_48.91px_0px_#FFFFFF0D,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40] '>
              <div className="flex items-center justify-center gap-1 text-white font-plusjakarta font-bold text-[12px] ">
                <img src="/Add.png" alt="add" />
                <span>ADD IMAGE</span>
              </div>
            </button>

            <div className='flex space-x-4 mr-3 items-center justify-center'>
              <div onClick={() => handleScroll('left')} className="cursor-pointer w-[45px] h-[45px] bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)] rounded-full shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-5px_#96BEE7] flex items-center justify-center">
                <img src="/left.png" alt="" />
              </div>

              <div onClick={() => handleScroll('right')} className="cursor-pointer w-[45px] h-[45px] bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)] rounded-full shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-5px_#96BEE7] flex items-center justify-center">
                <img src="/right.png" alt="" />
              </div>

            </div>
          </div>
        </div>


        <div ref={scrollContainerRef} className="mx-8 flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden relative">
          {images.map((imgSrc, index) => (
            <div key={index} style={{ zIndex: 100 - index }} className={`my-11 ${index === 0 ? 'ml-5' : ''} ${index === images.length - 1 ? 'mr-7' : ''} flex-none w-[190px] h-[179px] rounded-3xl relative  filter grayscale hover:grayscale-0
                     transition-transform duration-300 ease-in-out
                     origin-left 
                     hover:-rotate-6 hover:scale-108 hover:-translate-y-2
                     hover:shadow-[5px_5px_15px_5px_#00000066] `}>
              <div className={`w-full h-full relative  rounded-3xl overflow-hidden`}>
                <img
                  src={imgSrc}
                  alt={`image-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>





      </div>
    </div>

  )
}

export default Widget2
