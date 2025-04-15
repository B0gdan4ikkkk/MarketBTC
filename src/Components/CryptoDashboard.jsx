import CryptoDashboardItem from "../Hooks/CryptoDashboardItem.jsx";
import XPR from '../assets/XPR.jpg'
import Bitcoin from '../assets/Bitcoin.jpg'
import Ethereum from '../assets/Ethereum.jpg'
import Tether from '../assets/Tether.jpg'
import EnjinCoin from '../assets/Enjin Coin.jpg'
import arrowright from '../assets/arrow-right.jpg'
import smallBitcoin from '../assets/smallBitcon.jpg'
import smallEthereum from '../assets/smallEthereum.jpg'
import smallTether from '../assets/smallTether.jpg'
import smallXRP from '../assets/smallXRP.jpg'

function CryptoDashboard () {
    return(
    <div className="mx-8 bg-[#FFFFFF] shadow-[0px_0px_16px_rgba(9,24,26,0.04)] ">
        <div className="flex justify-center py-6 text-sm font-normal" >
            <p className="pr-8">Most Popular</p>
            <p className="text-[#71717A]">Top Movers</p>
        </div>
        <hr className=" h-px border-0 bg-[#F4F4F5]" />
        <div className="flex justify-start py-4 text-sm font-normal ">
            <p className="pl-12">Asset</p>
            <p className="pl-64">Last Price</p>
            <p className="pl-56">24hr Change</p>
            <p className="pl-48">Market Cap</p>
        </div>
        <hr className=" h-px border-0 bg-[#F4F4F5]" />
    <CryptoDashboardItem Cryptocurrencies_img={XPR} Name="XRP" Price="$0.5617" Change="1.57%" Capital="$28B" />
    <CryptoDashboardItem Cryptocurrencies_img={Bitcoin} Name="Bitcoin" Price="$30,165.43" Change="-0.08%" Capital="$582B" />
    <CryptoDashboardItem Cryptocurrencies_img={Ethereum} Name="Ethereum" Price="$2,215.50" Change="-1.08%" Capital="$267B" />
    <CryptoDashboardItem Cryptocurrencies_img={Tether} Name="Tether" Price="$1.4544" Change="2.36%" Capital="$96B" />
    <CryptoDashboardItem Cryptocurrencies_img={EnjinCoin} Name="Enjin Coin" Price="$0.6129" Change="16.41%" Capital="$629M" />
        <div className="relative flex justify-center py-6 text-sm font-normal items-center">
            <img src={smallBitcoin} alt="" className="absolute z-10 top-[22px] left-[496px]" />
            <img src={smallEthereum} alt="" className="absolute z-20 top-[22px] left-[516px]" />
            <img src={smallTether} alt="" className="absolute z-30 top-[22px] left-[536px]" />
            <img src={smallXRP} alt="" className="absolute z-40 top-[22px] left-[556px]" />
            <p className="mr-2">View all markets</p>
            <img src={arrowright} alt="" className="w-5 h-3"/>
        </div>
    </div>
    )
}

export default CryptoDashboard;