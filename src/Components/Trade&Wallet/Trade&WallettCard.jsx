


function Tradecard ({img, name, desc}) {
    return(
    <div className="w-64">
        <img src={img} alt="" />
        <p className="text-base font-normal pt-2 pb-4">{name}</p>
        <p className="text-base font-normal tracking-[0.2px] leading-6">{desc}</p>
    </div>
    )
}
export default Tradecard;