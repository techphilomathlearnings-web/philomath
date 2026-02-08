import Link from "next/link"
import Image from "next/image"

const Nav = () => {
    return (
        <div id="home" className="fixed top-0 z-10 flex w-full h-fit px-12 py-2 justify-between items-center bg-base-100">
            <div className="flex items-center">
                <Image src="/logo.png" alt="Philomath" width={100} height={100} className="" />
            </div>
            <div className="flex items-center gap-8">
                <Link href="/" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Home</Link>
                <Link href="#courses" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Courses</Link>
                <Link href="#results" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Results</Link>
                <Link href="#contact" className="px-4 py-2 font-bold rounded-full hover:rounded-full transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367]">Contact</Link>
            </div>
        </div>
    )
}

export default Nav