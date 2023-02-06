import Image from "next/image";
import dancerMotion from '../public/assets/dancerMotion.png'

const StaticBar = () => {
    return (
        <section className=" mx-10 px-2 ">
            <div className=" max-w-[1100px] rounded-[30px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-[40px] p-7">
                
                <div className="flex relative  flex-col-2   justify-items-center gap-4 ">
                    <div className=" w-[100px] h-[100px] rounded-[20px] bg-[#A09EEE]">
                        <div >
                        <Image className="absolute bottom-5" src={dancerMotion} alt='dancerMotion'></Image>
                        </div>
                    </div>
                    <div className="mr-[32px] text-[16px] text-white font-['Poppins'] leading-7 font-bold">
                        <h1 className=" text-white text-[13px] md:text-[16px] lg:text-[20px] font-['Poppins'] leading-7 font-bold">Get that 11 line<br />in 30 days</h1>
                        <div className="flex justify-between items-center opacity-50">
                            <p className="mt-4 font-normal text-white text-[16px] tracking-[.01em]  ">Learn more</p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-4  w-6 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            

                        </div>
                    </div>
                </div>
                    
                <div className="flex flex-col-2  justify-items-center gap-8 ">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-white backdrop-blur-[32px] opacity-20">
                        {/* <Image className="" src={dancerMotion} alt='dancerMotion'></Image> */}
                    </div>
                    <div className="mr-[30px]">
                        <h1 className=" text-white text-[13px] md:text-[16px] lg:text-[20px] font-['Poppins'] leading-4 sm:leading-6 md:leading-7 font-bold">14 Days<br />sherd challenge</h1>
                        <div className="flex justify-between items-center opacity-50">
                            <p className="mt-4 font-normal text-white text-[16px] tracking-[.01em]  ">Learn more</p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-4 w-6 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            

                        </div>
                    </div>

                </div>
            
                <div className="flex flex-col-2  justify-items-center gap-8">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-white backdrop-blur-[32px] opacity-20">
                        {/* <Image className="" src={dancerMotion} alt='dancerMotion'></Image> */}
                    </div>
                    <div className=" mr-[47px] text-white font-['Poppins'] leading-7 font-bold">
                        <h1 className=" text-white text-[13px] md:text-[16px] lg:text-[20px] font-['Poppins'] leading-7 font-bold">Get flat belly <br/>in 30 days</h1>
                        <div className="flex justify-between items-center">
                            <p className="mt-4 font-normal text-white text-[16px] tracking-[.01em] opacity-50  ">Learn more </p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-4 w-6 h-5 text-[#262524] ">
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