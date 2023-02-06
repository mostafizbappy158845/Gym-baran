import Image from 'next/image';
import grouppic from '../public/assets/Group 4227.png';
import brandPic from '../public/assets/brand-pic.png';
import Link from 'next/link';

const Hero = () => {
    return (

        <section className=''>
            <div className="container flex flex-col md:flex-row items-center justify-center  px-6 md:px-12   lg:pt-20">
                <div className='px-12 pt-[120px] md:pt-[200px] flex flex-col   md:w-1/2'>
                    <h1 className='max-w-md  font-bold mb-4 tracking-[.01em] leading-[39px]  text-[28px] font-["Sporting_Grotesque"]  lg:text-[56px] md:leading-[47px] lg:leading-[73px]'>Healthy in side<br /> <span className='text-[#8382EB]'> fresh</span> out side</h1>
                    <p className='max-w-sm font-normal text-[#928f8a] text-justify
                    text-xs leading-[22px] lg:leading-[28px] lg:text-base tracking-[.01em]
                    '>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    <div className="pt-4"></div>
                    <div className="flex ">
                            <button className=" p-4 lg:w-[220px] w-[170px] md:w-[206px] flex items-center justify-between md:px-2 sm:px-8   rounded-[10px]  text-white bg-[#264373]">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </button>
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

        

    );
};

export default Hero;