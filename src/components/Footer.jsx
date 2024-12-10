export const Footer = () => {
    return (
        <>
          <div className={'w-[939px] h-[250px] bg-btnColor mx-[50px] md:mx-auto  rounded-[20px] items-center'}>
              <div className={'grid mx-[50px] grid-cols-2 content-center '}>
                  <div className={'w-[400px font-bold] py-9 px-9'}>
                      <h2 className={'text-2xl font-bold text-whiteColor '}>Subscribe to Our <span className={'text-therd'}>Product Discount</span> for Today</h2>
                      <p className={'py-3'}>Get inspiration and creative ideas to beautify your design with our products </p>

                      <input type="text" placeholder={'Search '} className={'bg-whiteColor h-[20px] w-[393px] p-6 rounded-[10px] '}/>
                  </div>
                  <div className={'border border-dashed m-[30px] rounded'}>

                      <div>
                          {/*There is no content*/}
                      </div>

                      <div className={'bg-[#180D50] '}>
                           <div className={'grid grid-cols-4 text-whiteColor'}>
                               <div>
                                   <h2>DIGI Creative</h2>
                                   <p>Get inspiration and creative ideas to beautify your design with our products </p>
                               </div>
                               <div>
                                   <h2>Product</h2>
                                   <li>Music Pro</li>
                                   <li>E-Book Pro</li>
                                   <li>Software Pro</li>
                                   <li>Video Pro</li>
                               </div>
                               <div>
                                   <h2>Support</h2>
                                   <li>Help</li>
                                   <li>Call Center</li>
                                   <li>Team Of Service</li>
                                   <li>Privacy Police</li>
                               </div>

                               <div>
                                   <h2>
                                  Contact Us
                               </h2>
                                   <p>+1 (123) 456-7890</p>
                                   <p>Email: info@digicreative.com</p>
                                   <p>Address: 123 Main St, City, State, Zip</p>
                               </div>
                           </div>
                      </div>

                  </div>
              </div>
          </div>
        </>
    )
}