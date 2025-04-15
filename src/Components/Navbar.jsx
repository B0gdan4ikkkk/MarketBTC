import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Dropdown from '../Hooks/Dropdown.jsx';
import '../assets/styles.css'

function Navbar() {
 
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (id) => {
    setOpenDropdown((prevId) => (prevId === id ? null : id));}


  return (
    <nav className="flex justify-between">
      <img src={Logo} alt="Logo" className="pt-8 pl-8 pr-5 max-w-45" />
      <div className=' justify-between flex gap-x-8 mr-8 pt-8 items-center' >
        <Dropdown 
        id="menu1"
        text="Products"
        link1="Financial instruments"
        link2="Wallets"
        link3="Cryptocurrencies"  
        isOpen={openDropdown === "menu1"}
        onToggle={handleToggle}/>
        <a href="#" className="">Prices</a>
        <Dropdown 
        id="menu2"
         text="Buy"
        link1="Trade"
        link2="Buy crypto"
        link3="Exchange"  
        isOpen={openDropdown === "menu2"}
        onToggle={handleToggle}/>
        <a href="#" className="">OTC</a>
        <Dropdown 
        id="menu3"
        text="Learn" 
        link1="Guides" 
        link2="Courses" 
        link3="Articles"
        isOpen={openDropdown === "menu3"} 
        onToggle={handleToggle}/>
        <Dropdown 
        id="menu4" 
        text="Help" 
        link1="Support" 
        link2="FAQ"  
        isOpen={openDropdown === "menu4"} 
        onToggle={handleToggle}/>
        <div className="flex">
          <button className="mr-2 border-x border-y border-[#18181B] text-[#18181B] 
          bg-white px-4 py-2 hover:bg-[#4CFDC7] hover:text-white transition 
          w-17 h-auto font-normal text-xs whitespace-nowrap rounded-md">
            Log in
          </button>
          <button className="border-x border-y border-[#18181B] text-[#18181B] 
          bg-[#4CFDC7] px-4 py-2 hover:bg-white hover:text-[#18181B] transition 
          w-17 h-auto font-normal text-xs whitespace-nowrap rounded-md">
            sign up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar