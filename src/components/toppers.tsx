import TopperCard from "./topper-card"

const Toppers = () => {
    return (
        <div id="results" className="hero bg-base-100 py-20">
            <div className="hero-content text-center">
                <div className="space-y-12">
                    <h1 className="text-4xl font-bold">Our Star Achievers</h1>
                    <div className="flex flex-col md:flex-row md:px-12 gap-4 md:gap-12 w-fit md:w-full mx-auto">
                        <TopperCard
                            link="https://img.daisyui.com/images/profile/demo/distracted3@192.webp"
                            title="Rahul Sharma"
                            board="ICSE"
                            credits1={98.6}
                            subject="Computer Applications"
                            credits2={100}
                        />
                        <TopperCard
                            link="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                            title="Ananya Das"
                            board="ISC"
                            credits1={97.4}
                            subject="Computer Science"
                            credits2={99}
                        />
                        <TopperCard
                            link="https://img.daisyui.com/images/profile/demo/distracted2@192.webp"
                            title="Amit Roy"
                            board="CBS"
                            credits1={96.8}
                            subject="Computer Science"
                            credits2={98}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toppers