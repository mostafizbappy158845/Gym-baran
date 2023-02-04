import Image from "next/image";
import Link from "next/link";
import Logo from '../public/assets/logo-1.png'


const Navbar = () => {
    return (
        <nav className="w-[1246px] h-[50px] left[95px] top-[42px] absolute flex items-center justify-between">
            <div className="cursor-pointer w-[141px] h-[38px]" >
                {/* w-[141px] h-[38px] left-[95px] top-[48px] */}
                
                <Image src={Logo} alt='logo-pic'></Image>
            </div>
            <div className="right-side">
                <ul className="flex gap-6">
                    <li className="">
                        {/* mx-4 my-6 md:my-0 */}
                        <Link href="" className="texl-xl">Home</Link>
                    </li>
                    <li className="">
                        <Link href="" className="texl-xl">Program</Link>
                    </li>
                    <li className="">
                        <Link href="" className="texl-xl">Blog</Link>
                    </li>
                    <li className="">
                        <Link href="" className="texl-xl">About us</Link>
                    </li>
                    <li className="">
                        <Link href="" className="texl-xl">About us</Link>
                    </li>

                </ul>
            </div>
            <div>
            <button className="bg-black text-white cursor-pointer">Login</button>
            </div>


        </nav>
    );
};

export default Navbar;