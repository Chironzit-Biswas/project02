import {Cards} from "../Cards.jsx";

export const Services = () => {
    return (
        <>
            <div className={'flex flex-col justify-center items-center mx-auto py-[150px] '}>
                <div className={'flex flex-col items-center justify-center'}>
                    <h2 className={'text-2xl w-[400px] text-center'}>Join Thousands Of Our Loyal Customers And <span
                        className={'text-therd text-2xl font-bold'}>
              Feel The Benefits
          </span></h2>
                    <p className={'text-secondary w-[60%] text-center py-5 font-light '}>Get attractive prizes by
                        purchasing certain products or
                        services during the promo period.</p>
                </div>

                <div className={'my-[130px]'}>
                    <Cards/>
                </div>
            </div>


        </>
    )
}