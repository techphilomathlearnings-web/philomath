import { courseCard } from "@/typs/api"

const CourseCard = ({ title, target, description }: courseCard) => {
    return (
        <div className="hover-3d shadow-md rounded-lg">
            {/* content */}
            <figure className="max-w-100">
                <div className="card card-border bg-linear-to-r from-primary from-10% via-[#0B0367] via-50% to-secondary to-90% text-secondary-content w-72 h-full">
                    <div className="card-body">
                        <h2 className="card-title flex justify-center">{title}</h2>
                        <p>{target}</p>
                        <p>{description}</p>
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

export default CourseCard