import {cardData} from "./CardData.js";
export const Cards = () => {




    return (
        <>

               <div className={' flex flex-row mx-auto flex-wrap justify-center items-center gap-3'}>
                   {
                       cardData.map((card, index) => (
                           <div key={index} className={'rounded-[10px] text-[black] flex flex-col items-center gap-[16px] px-[30px] text-black hover:bg-btnColor  hover:text-whiteColor  cursor-pointer transition-all duration-300 w-[218px] h-[300px] shadow-md shadow-[gray]   justify-evenly'}>


                                   <h2 className={'text-[20px] '}>{card.title}</h2>
                               <div>
                                   <p className={'font-light py-5 '}>{card.content}</p>
                                   <button className={'border-therd border-[1px] px-2 rounded'}>{card.button}</button>
                                   <button></button>

                               </div>

                           </div>
                       ))
                   }
               </div>


        </>
    )
}