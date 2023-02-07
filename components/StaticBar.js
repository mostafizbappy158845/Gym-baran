import Image from "next/image";
import pose1 from '../public/assets/pose1.png'
import pose2 from '../public/assets/pose2.png'
import pose3 from '../public/assets/pose3.png'
import head1 from '../public/assets/head1.png'

const StaticBar = () => {
    return (
        // mx-10 px-2 
        <section className="container px-6 md:px-12 lg:px-24   lg:pt-20 ">
            {/* mx-10 max-w-[1100px] */}
            {/* container px-6 md:px-12   lg:pt-20 */}
            {/* px-12 pt-[120px] md:pt-[200px] */}
            <div className="pt-[10px] md:pt-[20px] rounded-[30px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-[40px] lg:py-20 lg:px-5 py-7">
                
                <div className="flex relative flex-col-2   justify-items-center gap-4 ">
                    <div className=" w-[100px] h-[100px] rounded-[20px] bg-[#A09EEE]">
                    <Image className="absolute top-[19%] left-[9%]" src={pose1} alt='dancerMotion'></Image>
                        
                    </div>
                    <div className="mr-[32px] ">
                        {/* text-[13px] md:text-[16px] lg:text-[20px] font-['Poppins'] leading-4 sm:leading-6 md:leading-7 font-bold */}
                        <h1 className=" text-white text-[13px] md:text-[16px] lg:text-[20px] font-['Poppins'] leading-7 font-bold">Get that 11 line<br />in 30 days</h1>
                        <div className="flex justify-between items-center">
                            {/* mt-4 font-normal text-white text-[16px] tracking-[.01em]  */}
                            <p className="mt-4 font-normal text-[#A09EEE] text-[16px] tracking-[.01em]  ">Learn more</p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-4 text-white  w-6 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            

                        </div>
                    </div>
                </div>
                    
                <div className="relative flex flex-col-2  justify-items-center gap-8 ">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-[#A09EEE]">
                        {/* <Image className="" src={dancerMotion} alt='dancerMotion'></Image> */}
                        <Image className="absolute top-[16%] left-[8%]" src={pose2} alt='dancerMotion'></Image>
                    </div>
                    <div className="mr-[30px]">
                        <h1 className=" text-white text-[13px] md:text-[16px] lg:text-[20px] font-['Poppins'] leading-4 sm:leading-6 md:leading-7 font-bold">14 Days<br />sherd challenge</h1>
                        <div className="flex justify-between items-center t ">
                            <p className="mt-4 font-normal text-[#A09EEE] text-[16px] tracking-[.01em]  ">Learn more</p>
                           
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mt-4 w-6 h-5 text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            

                        </div>
                    </div>

                </div>
            
                <div className="relative flex flex-col-2  justify-items-center gap-8">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-[#A09EEE]">
                        {/* <Image className="" src={dancerMotion} alt='dancerMotion'></Image> */}
                        <Image className="absolute top-[20%] left-[9%]" src={pose3} alt='dancerMotion'></Image>
                    </div>
                    <div className=" mr-[47px]">
                        <h1 className=" text-white text-[13px] md:text-[16px] lg:text-[20px] font-['Poppins'] leading-7 font-bold">Get flat belly <br/>in 30 days</h1>
                        <div className="flex justify-between items-center">
                            <p className="mt-4 font-normal text-[#c7c7fc] text-[16px] tracking-[.01em] opacity-50  ">Learn more </p>
                           
                            
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