import Navbar from './Navbar'
import Logos from './Logos'

const Widget1 = () => {
  return (
    <div className="absolute w-[720px] h-[316px] top-[96px] left-[922px] bg-[#363C43] rounded-[18.89px] py-[16px] px-[8px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
      <div className='relative flex justify-center items-center flex-col'>
    
        <Logos />
        <Navbar />
        <div className="w-2 h-16 rounded-lg absolute top-[94px] left-[691px] bg-black bg-[linear-gradient(177.32deg,#888989_5.6%,#4A4E54_93.28%)] shadow-[4px_4px_4.9px_0px_rgba(0,0,0,0.25)]">
          
        </div>

        <div className='relative w-[614px] h-[62px]'>
          <p className=' absolute top-[35px] font-plusjakarta font-normal text-[20px] leading-[25px] overflow-y-auto text-[#969696] '>
            Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve been working at this awesome company for 3 years now.
            <br /><br />
            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>

      </div>
    </div>
  )
}

export default Widget1
