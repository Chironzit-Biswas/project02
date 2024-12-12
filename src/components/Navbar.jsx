import { FaSearch } from "react-icons/fa";
export const Navbar = () => {
    return (

           <div className={'max-w-[1200px] py-5 flex flex-row items-center justify-between mx-[20px] md:mx-auto '}>
               <div className={''}>
                   <h2 className={'md:text-2xl font-bold'}>DIGI Creative</h2>
               </div>
               <div className={'flex w-[800px]'}>
                   <ul className={'flex gap-[20px] '}>
                       <li className={'hover:border-b border-therd'}><a href="#">Home</a></li>
                       <li className={'hover:border-b border-therd'}><a href="#">Featured</a></li>
                       <li className={'hover:border-b border-therd'}><a href="#">Help</a></li>
                   </ul>
                   <div className={'flex items-center  text-whiteColor'}>
                       <FaSearch />
                       <input type={'text'} placeholder={'Search'} className={'border-2 border-therd px-5 rounded'} />
                   </div>

                   <div>
                       <button className={'border-1 bg-btnColor px-3 text-whiteColor ml-4 rounded'}>Login</button>
                   </div>

               </div>
           </div>

    )
}