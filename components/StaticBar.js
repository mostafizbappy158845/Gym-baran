import Image from "next/image";
import dancerMotion from '../public/assets/dancerMotion.png'

const StaticBar = () => {
    return (
        <section className="mx-24 rounded-[30px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] ">
            <div className="  w-[1236px] h-[274px] grid items-center justify-items-center grid-cols-1 grid-cols-3 ">

                <div className="grid grid-cols-2 justify-items-center ">
                    <div className="w-[100px] h-[100px] rounded-[20px] bg-white backdrop-blur-[32px] opacity-20">
                        <Image className="bg-white" src={dancerMotion} alt='dancerMotion'></Image>
                    </div>
                    <div className="mr-4 text-white font-['Poppins'] font-bold">
                        <h1>Get that 11 line <br /> in 30 days</h1>
                    </div>
                </div>

                <div>
                    <h1>14 days</h1>
                </div>
                <div>Get flat</div>
            </div>
        </section>
    );
};

export default StaticBar;