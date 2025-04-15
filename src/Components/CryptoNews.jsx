import Newsletter from "../Hooks/Newsletter";
import Facebook from '../assets/Facebook-icon.svg'
import Twitter from '../assets/Twitter-icon.svg'
import Instagram from '../assets/Instagram-icon.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Telegram from '../assets/Telegram-icon.svg'



function CryptoNews () {
   return(
    <section className=" flex flex-col items-center">
        
        <div className="pt-[127px] pb-[64px]"><h1 className="text-[31px]">Find out the latest crypto news</h1></div>
        <div className="flex items-center gap-x-8">
            <Newsletter Date="Jan 19th 2023"
             Kind="Newsletter"
              Desc="This Week in Crypto: 19th January 2023"/>
            <Newsletter Date="Jan 12th 2023"
             Kind="Newsletter"
              Desc="This Week in Crypto: 12th January 2023"/>
            <Newsletter Date="Dec 27th 2022"
             Kind="Informational"
              Desc="BTC Markets Brand Refresh"/>
        </div>
        <div className="py-[64px]">
            <p>Check out more of our crypto news</p>
        </div>
        <div className="flex gap-[32px] items-center">
      <div className="flex items-center "><img src={Twitter} alt="" className="w-[19px] h-[19px] pr-2"/> <p className="text-[16px]"> Twitter</p></div>  
      <div className="flex items-center "><img src={Facebook} alt="" className="w-[19px] h-[19px] pr-2"/> <p className="text-[16px]"> Facebook</p></div>  
      <div className="flex items-center "><img src={LinkedIn} alt="" className="w-[19px] h-[19px] pr-2"/>  <p className="text-[16px]"> LinkedIn</p></div>  
      <div className="flex items-center "><img src={Telegram} alt="" className="w-[19px] h-[19px] pr-2"/>  <p className="text-[16px]"> Telegram</p></div>  
      <div className="flex items-center "><img src={Instagram} alt="" className="w-[19px] h-[19px] pr-2"/>  <p className="text-[16px]"> Instagram</p></div>  
        </div>
    </section>
   )
}


export default CryptoNews;