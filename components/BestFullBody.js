import Image from "next/image";
import bestFullBody from '../public/assets/bestFullBody.png'

const BestFullBody = () => {
    return (
        <section className="mx-[100px] my-[120px]">
            <div className="max-w-[1241px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 ">
                <div className=" -order-1 min-w-[241px] min-h-[287px]">
                    <Image src={bestFullBody} alt='' />
                </div>
                <div className="  grid grid-cols-1 py-10">
                    <div className="max-w-[558px] text-[#262524] sm:text-[28px] md:text-[36px]  lg:text-[46px] font-normal sm:leading-[39px] md:leading-[55px] lg:leading-[73px]">
                        <h1>Best full body <br />workout to lose fat</h1>
                    </div>
                    <div className="max-w-[553px] opacity-50 text-[#262524] sm:text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px] md:leading-[26px] sm:leading-[22px] tracking-[.01em]">
                        <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    </div>
                    <div>
                        <button className="lg:w-[246px] md: sm:w-[176px] flex items-center justify-between mx-4 p-4 rounded-[10px]  text-white bg-[#264373]">Get Started
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>


                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestFullBody;