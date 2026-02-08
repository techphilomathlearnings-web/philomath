import Link from "next/link"
import Image from "next/image"

const Nav = () => {
    return (
        <div id="home" className="fixed top-0 z-10 flex w-full h-fit pl-4 md:pl-8 md:pr-4 lg:px-12 py-2 justify-between items-center bg-base-100">
            <div className="flex items-center">
                <Image src="/logo.png" alt="Philomath" width={100} height={100} className="" />
            </div>
            <div className="hidden md:flex items-center md:gap-2 lg:gap-8">
                <Link href="/" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Home</Link>
                <Link href="#courses" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Courses</Link>
                <Link href="#results" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Results</Link>
                <Link href="#contact" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Contact</Link>
            </div>
            <div className="dropdown dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn px-2 rounded-lg hover:rounded-lg m-2 btn-ghost transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367] border-none focus:bg-linear-to-r focus:from-accent focus:to-[#FF6300] focus:text-[#0B0367]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>
                </div>
                <ul tabIndex={-1} className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 mx-2 shadow-sm">
                    <Link href="/" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Home</Link>
                    <Link href="#courses" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Courses</Link>
                    <Link href="#results" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Results</Link>
                    <Link href="#contact" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav