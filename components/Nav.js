import Link from "next/link";
import { useState } from "react";


const Nav = () => {

    const links = [
        { name: 'Home', link: '/', },
        { name: 'Program', link: '/', },
        { name: 'Blog', link: '/', },
        { name: 'About us', link: '/', },
    ]
    const [open, setOpen] = useState(true);
    return (
        // fixed top-0 left-0
        <div className="shadow-md fixed top-0 left-0   w-full  ">
            <div className="md:flex bg-white   items-center justify-between py-4 md:px-10 px-7 lg:px-28">
                <div className="font-normal text-2xl cursor-pointer flex items-center font-['Sporting_Grotesque']">
                    <span className="bg-[#6765F0] text-white rounded-[10px] mr-1 py-0 px-1">
                        Gym
                    </span>

                    <span className="text-[#6765F0]">baran </span>
                </div>
                {/* onClick={()=>setOpen(!open)} */}
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {open?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    :
                   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>}

                </div>
                     {/* name={open? 'close': 'menu'} */}
                    {/* <Bars3Icon name={open? 'close': 'menu'} ></Bars3Icon> */}
                <ul className={`md:flex md:items-certer md:pb-0 pb-10 absolute  md:static
                bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${!open? 'top-10 ': 'top-[-490px]'}`}>
                   {/*opacity-100, md:opacity-100 opacity-0 */}
                    {
                        links.map(link => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="text-[#262524]">{link.name}</a>
                            </li>
                        ))
                    }
                    <button className="bg-[#264373] text-white cursor-pointer py-2 px-6 md:ml-8 hover:bg-[#6765F0] rounded-[10px]">Login</button>
                </ul>
            </div>


        </div>
    );
};

export default Nav;