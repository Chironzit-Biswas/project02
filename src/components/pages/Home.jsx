import {Animation} from "../Animation.jsx";

export const Home = () => {
    return (
        <>
            <div
                className={'max-w-[1200px] flex md:flex-row mx-auto justify-center items-center py-[60px] gap-[20px] '}>
                <div className={'w-full mx-[20px]'}>
                    <h3 className={'md:text-4xl text-2xl text-[#180D50] font-bold '}>Get an Easier and <br/> More
                        Enjoyable <span className={'text-[#FF7278]'}><br/>Online Shopping Experience</span></h3>
                    <p className={'text-[#98A2B3] md:w-1/2 my-4 font-light'}>Get attractive prizes by purchasing certain
                        products or services during the promo period.</p>
                    <button
                        className={'w-[162px] h-[47px] bg-[#806DE1] hover:bg-therd duration-300   text-[white] rounded capitalize  font-light '}>Join
                        Now
                    </button>
                </div>

                <div className={'w-full'}>
                    <Animation/>
                </div>

            </div>


            <div className={'flex justify-center mt-[50px] items-center '}>
                <div
                    className={'w-[473px] h-[113px] shadow-md shadow-black flex justify-center items-center gap-[50px]  '}>
                    <div>
                        <p className={'text-secondary text-[20px] font-light'}>Customer</p>
                        <h2 className={'text-[24px] font-bold'}>467K</h2>
                    </div>
                    <div>
                        <p className={'text-secondary text-[20px] font-light'}>Traffic</p>
                        <h2 className={'text-[24px] text-therd font-bold'}>35,0M</h2>
                    </div>
                    <div>
                        <p className={'text-secondary text-[20px] font-light'}>Last Sale</p>
                        <h2 className={'text-[24px]  font-bold'}>150K</h2>
                    </div>
                </div>
            </div>


        </>
    )
}