import Image from "next/image"
import NavIng from '../Assets/pic.png'

export default function Header(){
    return(
        <>
        <div className="bg-white filter drop-shadow-md p-5">
        <div className="container">
            <div className="flex justify-between">
                <a className="text-green-500 font-bold text-3xl flex" href=""><Image className="mx-2" src={NavIng}alt=""/>Eduspace.</a>
                <div className="my-auto">
                    <ul className="hidden md:flex font-bold text-gray-600">
                        <li className="pr-4"><a className="px-3 py-2 border border-green-100 hover:border-purple-300 rounded"  href="">About</a></li>
                        <li className="pr-4"><a className="px-3 py-2 border border-green-100 hover:border-purple-300 rounded"  href="">Past Papers</a></li>
                        <li className="pr-4"><a className="px-3 py-2 border border-green-100 hover:border-purple-300 rounded"  href="">Elaborations</a></li>
                        <li className="pr-4"><a className="px-3 py-2 border border-green-100 hover:border-purple-300 rounded"  href="">Tutorials</a></li>
                    </ul>
                </div>
                {/* <!-- Small Devices Menu--> */}
                <div className="cursor-pointer md:hidden" onclick="showNavbar()" id="menubtn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
            {/* <!-- Navbar After Minimize --> */}
            <div className="m-2 p-2 w-2/3 rounded-b-lg md:hidden" id="sidenav">
                <div className="cursor-pointer my-2" onclick="closeNavbar()" id="closebtn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>                      
                </div>
                <div className="text-left rounded-b-xl shadow-xl bg-gray-100">
                    <ul className="text-gray-600 font-semibold">
                        <li className="px-3 py-1 hover:border border-b-green-500"><a href="">About</a></li>
                        <li className="px-3 py-1 hover:border border-b-green-500"><a href="">Past Papers</a></li>
                        <li className="px-3 py-1 hover:border border-b-green-500"><a href="">Elaborations</a></li>
                        <li className="px-3 py-1 hover:border border-b-green-500"><a href="">Tutorials</a></li>
                    </ul>
                </div>
            </div>
    </div>
        </>
    )
}