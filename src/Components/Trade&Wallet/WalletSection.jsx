import Tradecard from "./Trade&WallettCard"
import Storage from '../../assets/Storage.jpg'
import Location from '../../assets/Location.jpg'
import Wallet from '../../assets/Wallet.jpg'
import Downoload from '../../assets/Downoload.jpg'
import WalletPhone from '../../assets/WalletPhone.jpg'



function WalletSection () {
    return(
    <div className="flex flex-row-reverse justify-between mt-[244px] ">
            <div className="pl-8">
        <div className="mb-[54px]">
            <p className="text-base font-normal pb-4">Wallet</p>
            <h1 className="font-normal text-[40px] leading-[50px] tracking-[0.1px]">Simple and secure wallet
              <br /> services</h1>
        </div>
        <div className="grid grid-cols-2 gap-[66px]">
      <Tradecard img= {Storage}
      name="Secure asset storage"
       desc="We use multi-signature technology to securely store your assets."/>
      <Tradecard  img= {Location}
      name="Assets held in Australia"
       desc="100% Australian-based custody of your assets."/>
      <Tradecard img= {Wallet}
      name="Multi-coin wallet"
       desc="Store multiple assets simultaneously in one wallet."/>
      <Tradecard img= {Downoload}
      name="Fast funding"
       desc="Credit your wallet with AUD in seconds using Osko PayID."/>
        </div>
        </div>
        <div className="pl-[43px] pt-4">
      <img src={WalletPhone} alt="" />
        </div>
        </div>
    )
}

export default WalletSection