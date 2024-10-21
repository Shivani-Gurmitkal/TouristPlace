function Card({img,name,desc,visit,price,rating}){
    return (
        <>
        <div className="card bg-[#f9f9f9] w-[260px] rounded-lg border hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out ">
        <div className="relative flex items-center justify-center">
            <img src={img} className="absolute top-[-26%] rounded-full border-2 border-white-300 object-cover w-[150px] h-[150px]" alt="" />
            <div className="px-5 py-3">
                <div className="flex mt-24 items-center justify-between">
                    <p className="text-2xl font-semibold  text-center">{name}</p>
                        {
                            price >=12000 ? <div className="font-bold text-green-600 bg-green-50 rounded-lg p-1">Expensive</div> : <div className="font-bold text-yellow-600 bg-yellow-50 rounded-lg p-1">Cheaper</div>
                        }
                </div>
                <p className="text-sm mt-2 text-neutral-600">{desc}</p>
                <div className="flex items-center justify-between pt-2">
                {
                    visit == 'Winter' ?
                    <p className="flex gap-2 items-center text-blue-500"><span className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg></span>{visit}</p> :
                 <p className="flex gap-2 items-center text-orange-500"><span className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg></span>{visit}</p>
                }
                <p className="rating bg-blue-100 text-blue-600 font-semibold rounded-full px-2 py-1">{rating}</p>
                </div>   
            </div>
        </div>
       </div>
        </>
    )
}

export default Card;