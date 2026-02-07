import Link from "next/link"

const Nav = () => {
    return (
        <div id="home" className="flex w-full h-fit px-12 py-8 justify-between items-center">
            <h1 className="text-4xl font-bold italic">Philomath</h1>
            <div className="flex items-center gap-8">
                <Link href="/" className="px-4 py-2 rounded-2xl font-bold transition-all">Home</Link>
                <Link href="#courses" className="px-4 py-2 rounded-2xl font-bold transition-all">Courses</Link>
                <Link href="#results" className="px-4 py-2 rounded-2xl font-bold transition-all">Results</Link>
                <Link href="#contact" className="px-4 py-2 rounded-2xl font-bold transition-all">Contact</Link>
            </div>
        </div>
    )
}

export default Nav