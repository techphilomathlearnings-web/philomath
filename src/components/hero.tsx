import Link from "next/link"


const Hero = () => {
    return (
        <div className="hero bg-linear-to-r from-primary from-10% via-[#0B0367] via-50% to-secondary to-90% pt-32 pb-12 text-primary-content">
            <div className="hero-content text-center">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl font-bold">Quality Computer Education for a Bright Future</h1>
                    <p className="pb-2">
                        Expert guidance for ICSE, ISC and CBSE Computer Science students
                    </p>
                    <Link href="#courses" className="btn btn-accent btn-lg bg-linear-to-r from-accent to-[#FF6300] border-none text-[#0B0367] font-bold hover:scale-105 transition-all">Explore Courses</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero