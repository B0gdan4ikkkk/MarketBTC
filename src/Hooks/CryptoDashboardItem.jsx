import arrow from '../assets/arrow.jpg';


function CryptoDashboardItem({ Cryptocurrencies_img, Price, Name, Change, Capital }) {

  const isPositive = Change.includes('-') ? false : true;
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (


    <div>
      <hr className=" h-px border-0  bg-[#F4F4F5]" />
      <div className="flex justify-between items-center h-16 px-4 text-sm font-medium ">
       
        <div className="flex items-center space-x-2 min-w-[140px] pl-8">
          <img src={Cryptocurrencies_img} alt="" className="w-8 h-8 object-contain" />
          <p className="whitespace-nowrap">{Name}</p>
        </div>

        
        <div className="flex items-center space-x-1 min-w-[120px] justify-items-start">
          <p className="text-sm">{Price}</p>
          <p className="text-xs text-[#A1A1AA] tracking-wide align-top">AUD</p>
        </div>

       
        <div className="flex items-center space-x-1 min-w-[100px] justify-items-start">
          <p className={`text-sm ${changeColor}`}>{Change}</p>
          <img src={arrow} alt="" className="w-4 h-4 object-contain" />
        </div>

        
        <div className="flex items-center min-w-[100px] justify-items-start">
          <p className="text-sm">{Capital}</p>
        </div>

       
        <div className="min-w-[80px] text-right pr-8">
          <button className="text-[#18181B] bg-[#4CFDC7] px-4 py-2 
          hover:bg-white hover:text-[#18181B] transition 
          text-xs font-normal rounded-md whitespace-nowrap">
            Buy
          </button>
        </div>
      </div>
      <hr className=" h-px border-0 bg-[#F4F4F5]" />
    </div>
  );
}

export default CryptoDashboardItem;