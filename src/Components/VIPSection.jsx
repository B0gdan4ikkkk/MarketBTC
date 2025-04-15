import API from '../assets/API.jpg'
import Fees from '../assets/Fees.jpg'
import AccountManager from '../assets/AccountManager.jpg'
import VIPimg from '../assets/VIPimg.jpg'

function VIPSection (){
    return(
   <section className='flex flex-col items-center text-center bg-[#FAFAFA] mt-[190px]'>
    <div className='pb-[49px]'>
       <p className='pb-4 font-normal text-[15px]'>VIP Program</p>
       <h1 className='pb-8 font-normal text-[40px]'>When you need more than
        <br /> just a crypto exchange</h1>
       <p className='font-normal text-[15px] pb-[48px]'>Access world-class APIs, a lower fee structure and a dedicated Account Manager.</p>
    </div>
    <div className='flex items-center font-normal text-base pb-[90px]'>
       <div className='flex'>
        <img src={API} alt="" className='pr-2'/>
        <p>API integrations</p>
       </div>
       <div className='px-[77px] flex '>
        <img src={Fees} alt="" className='pr-2'/>
        <p>Lower fees</p>
       </div>
       <div className='flex'>
        <img src={AccountManager} alt="" className='pr-2'/>
        <p>Dedicated Account Manager</p>
       </div>
    </div>
    <div className='pb-[64px]'>
       <button className='border-x border-y border-[#18181B] text-[#18181B] 
          bg-white px-[35px] py-[9px]  hover:bg-[#4CFDC7] hover:text-white transition 
          h-auto font-normal text-xs whitespace-nowrap ml-4 rounded-md '>Learn more</button>
    </div>
    <div>
      <img src={VIPimg} alt="" />
    </div>
   </section>
    )
}



export default VIPSection