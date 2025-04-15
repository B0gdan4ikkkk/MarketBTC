import TradeWallet from '../assets/Trade Wallet.jpg'
import Getstarted from '../Hooks/Getstarted'
import Google from '../assets/Google.svg'
import Star from '../assets/Star.svg'
import Halfstar from '../assets/Half-star.svg'
import Signup from '../assets/Sign up.jpg'
import Trade from '../assets/Trade.jpg'
import Appstore from '../assets/Appstore.jpg'
import GooglePlay from '../assets/GooglePlay.jpg'
import EmptyStar from '../assets/EmptyStar.jpg'


function Start () {
    return(
        <div>
    <div className='mt-[122px] flex flex-col items-center text-center'>
        <div className='pb-[102px]'>
        <h1 className='text-[48px] font-normal leading-[48px] tracking-[1px]'>Start trading in 
            <br /> 3 easy steps</h1>
        </div>
        <div className='flex items-center gap-x-[90px] pb-[46px] leading-[24px]'>
          <div className='pl-[151px] flex flex-col items-center'>
            <img src={Signup} alt=""  className='pb-8 '/>
            <p className='pb-[18px]'>1. Create</p>
            <p>Sign up and verify your
                <br /> free account.</p>
          </div>
          <div className=' flex flex-col items-center'>
            <img src={TradeWallet} alt=""  className='pb-8'/>
            <p className=''>2. Deposit</p>
            <p className='pt-[18px]'>Add AUD or crypto to your wallet
                <br /> using our secure methods.</p>
          </div>
          <div className='pr-[141px] flex flex-col items-center'>
            <img src={Trade} alt="" className='pb-8' />
            <p className='pb-[18px]'>3. Trade</p>
            <p>You’re all set. Buy, sell and
                <br /> trade crypto immediately.</p>
          </div>
        </div>
        <div className='pb-[131px]'>
            <Getstarted/>
            <div className='flex items-center gap-x-1 pt-8'>
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
    </div>
    <div className='pl-[72px] pt-[226px] pb-[106px]'>
     <div>
        <h1 className='text-[46px] font-normal pb-6'>Trade on the go</h1>
        <p className='pb-8 leading-[24px] tracking-[0.2px]'>Place simple and advanced trades on the go with the BTC
             <br />Markets app. You can also manage your portfolio, monitor
             <br />prices, and track market movements, anywhere, anytime.</p>
     </div>
     <div className='flex items-center'>
    <div className=' pr-9'>
        <img src={Appstore} alt="" />
        <div className='flex items-center pt-5'>
       <img src={Star} alt="" />
       <img src={Star} alt="" />
       <img src={Star} alt="" />
       <img src={Star} alt="" />
       <img src={Halfstar} alt="" />
       <p>4.6</p>
        </div>
    </div>
    <div>
    <img src={GooglePlay} alt="" />
        <div className='flex items-center pt-5'>
        <img src={Star} alt="" />
       <img src={Star} alt="" />
       <img src={Star} alt="" />
       <img src={Star} alt="" />
       <img src={EmptyStar} alt="" /> 
       <p>3.9</p>
        </div>
        
    </div>
    
     </div>
     <div className='pt-[34px] '>
        <p className=''>Learn more</p>
        </div>
    </div>
    <hr />
    </div>
    )
}
export default Start;