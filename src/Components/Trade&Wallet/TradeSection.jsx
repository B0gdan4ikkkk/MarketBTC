import Tradecard from "./Trade&WallettCard"
import arrows from '../../assets/arrows.jpg';
import TradePhone from '../../assets/TradePhone.jpg'
import Graphic from '../../assets/Graphic.jpg'
import Portfolio from '../../assets/Portfolio.jpg'
import Mobileapp from '../../assets/Mobileapp.jpg'

function TradeSecction (){
    return(
        <div className="flex justify-between mt-[174px]">
            <div className="pl-8">
        <div className="mb-[54px]">
            <p className="text-base font-normal pb-4">Trade</p>
            <h1 className="font-normal text-[40px] leading-[50px] tracking-[0.1px]">Buy, sell and trade crypto with confidence</h1>
        </div>
        <div className="grid grid-cols-2 gap-[66px]">
      <Tradecard img= {arrows}
      name="Simple buy & sell options"
       desc="Buy and sell cryptocurrency 
        quickly and easil."/>
      <Tradecard  img= {Graphic}
      name="Advanced trading"
       desc="Access advanced order types
        including limit, market, stop limit
         and dollar cost averaging."/>
      <Tradecard img= {Portfolio}
      name="Portfolio tracking"
       desc="Track your total asset holdings,
        values and equity over time."/>
      <Tradecard img= {Mobileapp}
      name="Mobile app"
       desc="Monitor markets, manage your
        portfolio, and trade crypto on
         the go."/>
        </div>
        </div>
        <div className="pr-[43px]">
      <img src={TradePhone} alt="" />
        </div>
        </div>
    )
}

export default TradeSecction