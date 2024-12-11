import { FaSearch } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <div className={'max-w-[1200px] mx-auto'}>
                <div
                    className={'w-[939px] h-[250px] bg-btnColor mx-[50px] md:mx-auto  rounded-[20px] items-center z-40'}>
                    <div className={'grid mx-[50px] grid-cols-2 content-center '}>
                        <div className={'w-[400px font-bold] py-9 px-9'}>
                            <h2 className={'text-2xl font-bold text-whiteColor '}>Subscribe to Our <span
                                className={'text-therd'}>Product Discount</span> for Today</h2>
                            <p className={'py-3'}>Get inspiration and creative ideas to beautify your design with our
                                products </p>

                            <div className={'flex flex-row bg-therd h-[50px] items-center rounded-[10px] py-1 '}>
                                <input type="text" placeholder={'Search '}
                                       className={'bg-whiteColor h-[20px] w-[393px] p-6 rounded-l-lg '}/>
                                <div className={'gap-1 px-1 '}>
                                    <button className={'py-1 items-center'}> <FaSearch className={' text-3xl text-whiteColor'}/></button>
                                </div>
                            </div>

                        </div>


                        <div className={'border border-dashed m-[30px] rounded'}>

                        </div>
                    </div>
                </div>
                <div
                    className={'max-w-[1200px] flex md:flex-col p-[50px] mt-[-20px] bg-[#180D50] mx-auto border-therd border-2 z-30'}>
                    <div className={'grid grid-cols-5 text-whiteColor content-center list-none font-light'}>
                        <div className={'col-span-2 w-1/2'}>
                            <h2 className={'text-2xl mb-4'}>DIGI Creative</h2>
                            <p>Get inspiration and creative ideas to beautify your design with our products </p>
                        </div>
                        <div>
                            <h2 className={'text-2xl mb-4'}>Product</h2>
                            <li>Music Pro</li>
                            <li>E-Book Pro</li>
                            <li>Software Pro</li>
                            <li>Video Pro</li>
                        </div>
                        <div>
                            <h2 className={'text-2xl mb-4'}>Support</h2>
                            <li>Help</li>
                            <li>Call Center</li>
                            <li>Team Of Service</li>
                            <li>Privacy Police</li>
                        </div>

                        <div>
                            <h2 className={'text-2xl mb-4'}>
                                Contact Us
                            </h2>
                            <p>+1 (123) 456-7890</p>
                            <p>Email: info@digicreative.com</p>
                            <p>Address: 123 Main St, City, State, Zip</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}