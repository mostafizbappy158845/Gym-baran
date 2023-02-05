import Image from 'next/image';
import grouppic from '../public/assets/Group 4227.png';
import brandPic from '../public/assets/brand-pic.png';

const Hero = () => {
    return (
        <section className="px-32 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-5 ">
                <div className="basis-1/2">
                    <span className=" font-bold lg:text-[56px] md:text-[28px] tracking-widest text-[#262524]">Healthy in side</span> <br />
                    <span className="font-bold lg:text-[56px] md:text-[28px] tracking-widest text-[#8382EB]">fresh</span>
                    <span className="font-bold lg:text-[56px] md:text-[28px] tracking-widest"> out side</span>
                    <div className="pt-4">
                        <span className="text-[#262524] tracking-widest opacity-60 font-normal"> Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</span>
                        <div className="pt-4"></div>
                        <div className="flex">

                            <button className="flex items-center justify-between px-4 h-[56px] w-[246px] rounded-[10px]  text-white bg-[#264373]">Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </button>
                            <button className=" flex items-center justify-between px-4 ml-[35px] h-[56px] w-[174px] rounded-[10px]  text-[#264373] shadow-lg shadow-[0px 14.2857px 57.1429px rgba(51, 78, 123, 0.3)] bg-[#fff]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                </svg>

                                Learn more

                            </button>
                            

                        </div>
                        <div className='mt-12'>
                            <p className='text-[#262524;]'>
                                Brands:</p>
                                <Image className='mt-4' src={brandPic} alt='brand-pic'/>
                            </div>
                    </div>
                </div>
                <div className="basis-1/2  ">
                    <Image className='w-full h-[340px] object-cover lg:w-[584px] lg:h-[580px] ' src={grouppic} alt="pic" />

                </div>

            </div>
        </section>
        // <section className="px-32 py-32">
        //     <div className="flex flex-row space-x-12 ">
        //         <div className="basis-1/2">
        //             <span className=" font-bold text-[56px] tracking-widest text-[#262524]">Healthy in side</span> <br />
        //             <span className="font-bold text-[56px] tracking-widest text-[#8382EB]">fresh</span>
        //             <span className="font-bold text-[56px] tracking-widest"> out side</span>
        //             <div className="pt-4">
        //                 <span className="text-[#262524] tracking-widest opacity-60 font-normal"> Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</span>
        //                 <div className="pt-4"></div>
        //                 <div className="flex">

        //                         <button className="px-4 h-[56px] w-[246px] rounded-[10px]  text-white bg-[#264373]">Get Started

        //                         </button>
        //                         <button className="px-4 ml-[35px] h-[56px] w-[174px] rounded-[10px]  text-[#264373] shadow bg-[#fff]">Learn more

        //                         </button>



        //                 </div>
        //             </div>
        //         </div>
        //         <div className="basis-1/2 top-44 ">
        //             <Image className='' src={grouppic} alt="pic" />

        //         </div>

        //     </div>
        // </section>
    );
};

export default Hero;