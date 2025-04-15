import Google from '../assets/Google.svg'
import Star from '../assets/Star.svg'
import Halfstar from '../assets/Half-star.svg'
import Getstarted from '../Hooks/Getstarted';
import Phone from '../assets/Phone.svg'


function CryptoIntroSection () {
    return (
        <section className='flex justify-between'>
            <div className='mt-44 ml-8 custom-font'>
                <div className='mb-7'>
                    <h1  className="pb-8 text-7xl font-normal whitespace-nowrap line-height tracking-wider">
                    Buy, sell and trade 
                    <br/>crypto today
                    </h1>
                    <p className="text-xl font-normal leading-8 whitespace-nowrap">Trade with confidence and build your future
                        <br/> with Australia’s fastest crypto exchange.
                    </p>
                </div>
                <div className=' mb-4'>
                    <Getstarted/>
                    <button className="border-x border-y border-[#18181B] text-[#18181B] 
          bg-white px-8 py-2  hover:bg-[#4CFDC7] hover:text-white transition 
          h-auto font-normal text-xs whitespace-nowrap ml-4 rounded-md">
            View exchange
                    </button>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img src={Google} alt="Google" className='mr-1'/>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Halfstar} alt="Halfstar" />
                    <p className='font-normal text-sm pl-2'>4.6</p>
                </div>
            </div>
            <div className='ml-32 mr-24 mt-32'>
                <img src={Phone} alt="" className='' />
            </div>
        </section>
      );
}


export default CryptoIntroSection