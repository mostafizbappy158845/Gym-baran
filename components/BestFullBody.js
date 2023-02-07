import Image from "next/image";
import bestFullBody from '../public/assets/bestFullBody.png'
import ArrowRight from '../public/assets/ArrowRight.png'

const BestFullBody = () => {
    return (
        
        <section className="">
            <div className="flex  flex-col-reverse md:flex-row items-center justify-center  px-6 md:px-12 lg:pt-20 ">
                <div className=" pt-[40px]   md:w-1/2">
                    <Image src={bestFullBody} alt='' />
                </div>
                <div className="px-12 mt-12 container flex flex-col   md:w-1/2 ">
                    <h1 className="max-w-md  font-bold mb-4 tracking-[.01em] leading-[39px]  text-[28px] font-['Sporting_Grotesque']  lg:text-[46px] md:leading-[47px] lg:leading-[73px]">Best full body <br />workout to lose fat</h1>
                    <p className=" max-w-sm font-normal text-[#928f8a] text-justify
                    text-xs leading-[22px] lg:leading-[28px] lg:text-base tracking-[.01em]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    
                    <div className="pt-4"></div>
                    <div>
                        <button className="lg:w-[246px] w-[176px] sm:w-[206px] flex items-center justify-around md:px-2 sm:px-8 p-4 rounded-[10px]  text-white bg-[#264373]">
                            <p>Get Started</p>

                        <Image src={ArrowRight} alt=""></Image>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg> */}


                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestFullBody;