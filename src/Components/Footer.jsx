import { FaTwitter, FaFacebook, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Logo.svg'
import Facebook from '../assets/Facebook-icon.svg'
import Twitter from '../assets/Twitter-icon.svg'
import Instagram from '../assets/Instagram-icon.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Telegram from '../assets/Telegram-icon.svg'
import Appstore from '../assets/Appstore.jpg'
import GooglePlay from '../assets/GooglePlay.jpg'

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-[143px] ml-[32px] mr-[96px]">
        <div className=' '>
            <img src={Logo} alt="" />
        </div>
      <div className="grid grid-cols-5 justify-between gap-x-[100px]  pt-[67px]">
       <div>
        <p className='text-[12px] uppercase pb-[38px]'>ABOUT</p>
        <ul className="space-y-4 leading-[21px] text-[12px]">
        <li>About us</li>
            <li>Mobile app</li>
            <li>Staking</li>
            <li>Self Managed Super Funds</li>
            <li>OTC Trading</li>
            <li>VIP Program</li>
            <li>Investor Study Report</li>
            <li>Contact Us</li>
            <li>Blog</li>
        </ul>
       </div>

       <div>
        <p className='text-[12px] uppercase pb-[38px]'>Legal</p>
       <ul className="space-y-4 leading-[21px] text-[12px]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>AML/CTF Policy</li>
            <li>Protect Yourself Online</li>
            <li>Information Requests</li>
          </ul>
       </div>

       <div>
        <p className='text-[12px] uppercase pb-[38px]'>Help</p>
        <ul className="space-y-4 leading-[21px] text-[12px]">
        <li>Support</li>
            <li>Complaints</li>
            <li>FAQs</li>
            <li>Fees</li>
            <li>Bug Bounty</li>
            <li>API</li>
            <li>Tax Reporting</li>
        </ul>
       </div>

       <div className='flex flex-col items-start '>
        <p className='text-[12px] uppercase pb-[38px]'>Follow</p>
        <div className="flex flex-col items-start gap-y-4 leading-[21px] text-[12px]">
            
                <a href="" className='flex items-center gap-x-2'><img src={Twitter} alt="" />Twitter</a>
        <a href="" className='flex items-center gap-x-2'><img src={Facebook} alt="" />Facebook</a>
            <a href="" className='flex items-center gap-x-2'><img src={LinkedIn} alt="" />LinkedIn</a>
            <a href="" className='flex items-center gap-x-2'><img src={Telegram} alt="" />Telegram</a>
            <a href="" className='flex items-center gap-x-2'><img src={Instagram} alt="" />Instagram</a>
        
          </div>
       </div>

       <div>
        <p className='text-[12px] uppercase pb-[38px]'>Get Started</p>
        <ul className="space-y-4 leading-[21px] text-[12px]">
            <li>Log in</li>
            <li>Sign up</li>
            <li><img src={Appstore} alt="" /></li>
            <li><img src={GooglePlay} alt="" /></li>
        </ul>
       </div>
      </div>


      <div className='pt-[88px] text-[12px] flex flex-col items-center '>
        <div className='flex flex-col items-start pl-8 pb-[68px] w-full'>
          <p className='uppercase pb-2 tracking-[1px]'>ACN 164 093 887 | ABN 45 164 093 887</p>
          <p>©2023BTC Markets Pty Ltd. All rights reserved.</p>
        </div>
        <div className='flex items-center'>
          <p>BTC Markets Pty Ltd ACN 164 093
             887 is an authorised representative (AR No. 1297122)
              of BTCM Payments Pty Ltd ACN 643 241 829 (AFSL No. 525840)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;