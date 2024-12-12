import {Animation} from "../Animation.jsx";

export const Feature = () => {
    return (
        <>
            <div className={'max-w-[1200px] flex flex-row mx-[50px] md:mx-auto'}>
                <div className={'w-[1200px] '}>
                    <h2 className={'text-[32px] w-[300px] '}>Enjoy Fast and Responsive <span className={'text-therd'}>Customer Service</span>
                    </h2>
                    <p className={'w-[300px] py-2 text-justify font-light '}>Get inspiration and creative ideas to
                        beautify your design with our products get attractive prizes by purchasing certain products</p>
                    <button
                        className={'w-[162px] h-[47px] bg-[#806DE1] hover:bg-therd duration-300  text-[white] rounded capitalize  font-light my-4'}>Read
                        More
                    </button>
                </div>
                <div className={'w-[500px]'}>
                    <Animation className={'w-[600px]'}/>
                </div>
            </div>
            <div
                className={'w-full flex flex-col justify-center items-center my-[100px] border-[black] border border-dashed py-[30px] text-center '}>
                <h2 className={'text-[32px] w-[300px] '}>Join Us <span className={'text-therd'}>Now</span></h2>
                <p className={' py-2 font-light '}>Get inspiration and creative ideas to beautify your design with our
                    products get attractive prizes by purchasing certain products</p>
                <button
                    className={'w-[162px] h-[47px] bg-[#806DE1] hover:bg-therd duration-300  text-[white] rounded capitalize  font-light my-4'}>Start
                    Now
                </button>
            </div>
        </>
    )
}