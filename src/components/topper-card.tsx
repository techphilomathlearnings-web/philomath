import Image from "next/image"
import { topperCard } from "@/typs/api"

const TopperCard = ({ link, title, board, credits1, subject, credits2 }: topperCard) => {
    return (
        <div className="hover-3d shadow-md rounded-xl">
            {/* content */}
            <figure className="max-w-60">
                <div className="card bg-base-100 h-full">
                    <figure>
                        <Image src={link} alt="topper_pic" width={300} height={200} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="flex">
                            <p className="text-start">{board}:</p>
                            <p className="text-end">{credits1}%</p>
                        </div>
                        <div className="flex items-end">
                            <p className="text-start text-wrap">{subject}:</p>
                            <p className="text-end">{credits2}/100</p>
                        </div>
                    </div>
                </div>
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default TopperCard