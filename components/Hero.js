import Image from 'next/image';
import grouppic from '../public/assets/Group 4227.png';
import brandPic from '../public/assets/brand-pic.png';
import Link from 'next/link';

const Hero = () => {
    return (

        <section className=''>
            {/* space-y-0 md:space-y-0 */}
            <div className="container flex flex-col md:flex-row items-center justify-center  px-6 md:px-12   lg:pt-20">
                {/* left-item */}
                {/* md:text-left  text-center mt-14 space-y-12 text-center*/}
                <div className='px-12 pt-[120px] md:pt-[200px] flex flex-col   md:w-1/2'>
                    <h1 className='max-w-md  font-bold mb-4 tracking-[.01em] leading-[39px]  text-[28px] font-["Sporting_Grotesque"]  lg:text-[56px] md:leading-[47px] lg:leading-[73px]'>Healthy in side<br /> <span className='text-[#8382EB]'> fresh</span> out side</h1>
                    <p className='max-w-sm font-normal text-[#928f8a] text-justify
                    text-xs leading-[22px] lg:leading-[28px] lg:text-base tracking-[.01em]
                    '>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    {/* <div className='flex justify-center md:justify-start  '>
                        <p className='p-3 px-6 pt-2 text-blue rounded-full baseline hover:bg-red-200'>Get Started</p>


                    </div> */}
                    <div className="pt-4"></div>
                    <div className="flex ">
                                {/* h-[56px] md:w-[160px] w-[176px] */}
                                {/* lg:w-[246px] w-[176px] sm:w-[206px] flex items-center justify-between mx-4 p-4 rounded-[10px]  text-white bg-[#264373] */}
                            <button className=" p-4 lg:w-[220px] w-[170px] md:w-[206px] flex items-center justify-between md:px-2 sm:px-8   rounded-[10px]  text-white bg-[#264373]">
                                {/* pr-8 py-2 */}
                                {/* <p className=''>Get Started</p> */}
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </button>

                            {/* h-[56px] w-[174px] */}
                            <button className=" flex items-center justify-between px-4 ml-[35px]  rounded-[10px]  text-[#264373] shadow-lg shadow-[0px 14.2857px 57.1429px rgba(51, 78, 123, 0.3)] bg-[#fff]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                </svg>

                                Learn more

                            </button>


                        </div>
                        <div className='mt-12 mb-12'>
                            <p className='text-[#262524;]'>
                                Brands:</p>
                            <Image className='mt-4' src={brandPic} alt='brand-pic' />
                        </div>
                    
                    

                </div>
                {/* Right-item */}
                <div className='md:w-1/2'>
                    <Image src={grouppic} alt='' />
                </div>

            </div>
        </section>

        // px-28  sm:px-12
        // <section className="container mx-auto ">
        //     <div className=" m-10 lg:m-24 sm:mx-2  flex flex-col-1 lg:flex-col-2 items-center justify-items-center gap-5 ">
        //         <div className="basis-1/2 mt-28 ">
        //             <h1 className='font-bold lg:text-[56px] md:text-[28px] tracking-[.01em] leading-[39px] sm:leading-[49px] lg:leading-[73px] text-[#262524]'>Healthy in side <br /> <span className='text-[#8382EB]'>fresh</span> out side</h1>
        //             <div className="pt-4">
        //                 <span className="text-[#928f8a] tracking-widest  font-normal"> Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</span>
        //                 <div className="pt-4"></div>
        //                 <div className="flex ">
        //                         {/* h-[56px] md:w-[160px] w-[176px] */}
        //                     <button className="flex items-center justify-between md:px-2 sm:px-8   rounded-[10px]  text-white bg-[#264373]"><p className='pr-8 py-4'>Get Started</p>
        //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block h-6">
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        //                         </svg>

        //                     </button>

        //                     {/* h-[56px] w-[174px] */}
        //                     <button className=" flex items-center justify-between px-4 ml-[35px]  rounded-[10px]  text-[#264373] shadow-lg shadow-[0px 14.2857px 57.1429px rgba(51, 78, 123, 0.3)] bg-[#fff]">
        //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
        //                         </svg>

        //                         Learn more

        //                     </button>


        //                 </div>
        //                 <div className='mt-12'>
        //                     <p className='text-[#262524;]'>
        //                         Brands:</p>
        //                     <Image className='mt-4' src={brandPic} alt='brand-pic' />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="basis-1/2  ">
        //             {/*  h-[340px] w-[210px] object-cover sm:w-[350px] md:w-[584px] lg:w-[584px] lg:h-[580px] */}
        //             <Image className='' src={grouppic} alt="pic" />

        //         </div>

        //     </div>
        // </section>

    );
};

export default Hero;