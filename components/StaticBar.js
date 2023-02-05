import Image from "next/image";
import dancerMotion from '../public/assets/dancerMotion.png'

const StaticBar = () => {
    return (
        <section className="mx-24 py-10 rounded-[30px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] ">
            <div className="max-w-[1236px] max-h-[412px] grid  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 items-center justify-items-center  ">

                <div className="grid grid-cols-2 sm:pb-5 md:pb-7 justify-items-center ">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-white backdrop-blur-[32px] opacity-20">
                        {/* <Image className="" src={dancerMotion} alt='dancerMotion'></Image> */}
                    </div>
                    <div className="mr-[32px] text-white font-['Poppins'] leading-7 font-bold">
                        <h1>Get that 11 line<br />in 30 days</h1>
                        <div className="flex justify-between items-center opacity-50">
                            <p className="mt-4 font-normal text-white text-xs tracking-[.01em]  ">Learn more</p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-4 w-4 h-3 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:pb-5 md:pb-7 justify-items-center ">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-white backdrop-blur-[32px] opacity-20">
                        {/* <Image className="" src={dancerMotion} alt='dancerMotion'></Image> */}
                    </div>
                    <div className="mr-[30px] text-white font-['Poppins'] leading-7 font-bold">
                        <h1>14 Days<br />sherd challenge</h1>
                        <div className="flex justify-between items-center opacity-50">
                            <p className="mt-4 font-normal text-white text-xs tracking-[.01em]  ">Learn more</p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-4 w-4 h-3 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            

                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-2 sm:pb-5 md:pb-7 justify-items-center ">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-white backdrop-blur-[32px] opacity-20">
                        {/* <Image className="" src={dancerMotion} alt='dancerMotion'></Image> */}
                    </div>
                    <div className=" mr-[47px] text-white font-['Poppins'] leading-7 font-bold">
                        <h1>Get flat belly <br/>in 30 days</h1>
                        <div className="flex justify-between items-center">
                            <p className="mt-4 font-normal text-white text-xs tracking-[.01em] opacity-50  ">Learn more</p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-4 w-4 h-3 text-[#262524] ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default StaticBar;