import TopperCard from "./topper-card"

const Toppers = () => {
    return (
        <div id="results" className="hero bg-base-100 py-20">
            <div className="hero-content text-center">
                <div className="space-y-12">
                    <h1 className="text-4xl font-bold">Our Star Achievers</h1>
                    <div className="flex flex-col md:flex-row md:px-12 gap-4 md:gap-12 lg:gap-32 w-fit md:w-full mx-auto md:flex-wrap">
                        <TopperCard
                            link="/ishani.jpg"
                            title="Ishani Mandal"
                            board="ICSE 2024"
                            credits1={98.4}
                            subject="Computer Applications"
                            credits2={100}
                        />
                        <TopperCard
                            link="/syamantak.png"
                            title="Syamantak Sengupta"
                            board="ICSE 2024"
                            credits1={93}
                            subject="Computer Applications"
                            credits2={99}
                        />
                        <TopperCard
                            link="/ishani.jpg"
                            title="Kaustav Rai"
                            board="ICSE 2024"
                            credits1={96.8}
                            subject="Computer Science"
                            credits2={96}
                        />
                        <TopperCard
                            link="/mainak.png"
                            title="Mainak Chaki"
                            board="ICSE 2025"
                            credits1={94}
                            subject="Computer Science"
                            credits2={99}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toppers