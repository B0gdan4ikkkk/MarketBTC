import News from '../assets/News.jpg'

function Newsletter ({Date, Kind, Desc}) {
    return(
        <div className='shadow-[0px_0px_16px_rgba(9,24,26,0.04)] w-[357px] h-[344px] flex flex-col'>
            <div className='pb-[18px]'>
                <img src={News} alt="" />
            </div>
            <div className='flex flex-col justify-between flex-1'>
                <div>
                    <div className='flex pb-[22px] text-[12px]'>
                        <div className='inline-block pl-4'>
                            <p className='bg-[#BDFFEB] px-2 py-0.5 rounded'>{Kind}</p>
                        </div> 
                        <p className='pl-6 tracking-[1px] uppercase'>{Date}</p>
                    </div>
                    <div className='pl-4 pr-4'>
                        <h1 className='text-[24px]'>{Desc}</h1>
                    </div>
                </div>
                <div className='pl-4 pb-8'>
                    <a href="#" className='text-[16px]'>Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;