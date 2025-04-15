import './App.css';
import Navbar from './Components/Navbar';
import CryptoIntroSection from './Components/CryptoIntroSection';
import CryptoDashboard from './Components/CryptoDashboard';
import WhyBTCMarket from './Components/WhyBTCMarket';
import TradeSecction from './Components/Trade&Wallet/TradeSection';
import WalletSection from './Components/Trade&Wallet/WalletSection';
import VIPSection from './Components/VIPSection';
import Start from './Components/Start';
import CryptoNews from './Components/CryptoNews';
import CreateAccount from './Components/CreateAccount';
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <div className=' custom-font'>
     <Navbar/>
     <CryptoIntroSection/>
     <CryptoDashboard/>
     <WhyBTCMarket/>
     <TradeSecction/>
     <WalletSection/>
     <VIPSection/>
     <Start/>
     <CryptoNews/>
     <CreateAccount/>
     <Footer/>
     </div>
    </>
  )
}

export default App
