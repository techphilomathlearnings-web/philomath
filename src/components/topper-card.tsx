import Image from "next/image"
import { topperCard } from "@/typs/api"

const TopperCard = ({ link, title, board, credits1, subject, credits2 }: topperCard) => {
    return (
        <div className="hover-3d shadow-md rounded-xl">
            {/* content */}
            <figure className="max-w-68">
                <div className="card bg-base-100 h-full">
                    <figure className="relative w-68 h-58 flex justify-center items-center mt-2">
                        <Image src={link} alt="topper_pic" layout="fill" objectFit="contain" className="rounded-xl"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title w-fit mx-auto">{title}</h2>
                        <h2 className="card-title w-fit mx-auto">{board}</h2>
                        <div className="flex">
                            <p className="text-start">Percentage:</p>
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