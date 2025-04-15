import Security from '../assets/security.jpg'
import Support from '../assets/Support.jpg'
import Speed from '../assets/Speed.jpg'

function WhyBTCMarket () {
    return(
    <div className="flex flex-col items-center mt-32"> 
        <h1 className="text-5xl font-normal">Why BTC Markets?</h1>
        <div className="mt-32 flex justify-between ">
        <div className="flex flex-col items-center text-center">
            <img src={Security} alt="" className="mb-8"/>
            
                <p className="mb-4 font-normal text-xl">Security</p>
                <p className="font-normal text-sm leading-6 tracking-[0.2px]">Multiple layers of account
                    <br /> security, 2FA, address
                    <br /> whitelisting, Biometrics </p>
            </div>
            <div className="flex flex-col items-center text-center ml-[169px] mr-[174px]">
            <img src={Speed} alt="" className="mb-8"/>
            
                <p className="mb-4 font-normal text-xl">Speed</p>
                <p className="font-normal text-sm leading-6 tracking-[0.2px]">Fast trade executions with an 
                    <br />industry leading uptime of 99.99% </p>
            </div>
            <div className="flex flex-col items-center text-center">
            <img src={Support} alt="" className="mb-8"/>
            
                <p className="mb-4 font-normal text-xl">Support</p>
                <p className="font-normal text-sm leading-6 tracking-[0.2px]">100% Australian-based
                    <br /> customer support, OTC desk and
                    <br /> VIP Program. </p>
            </div>
        </div>
    </div>
    )
}

export default WhyBTCMarket