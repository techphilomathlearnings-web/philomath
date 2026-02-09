import { courseCard } from "@/typs/api";

const CourseCard = ({ title, target, description }: courseCard) => {
  return (
    <div className="card card-border bg-linear-to-r from-primary from-10% via-[#0B0367] via-50% to-secondary to-90% text-secondary-content w-72 shadow-md hover:shadow-lg hover:-translate-y-2 hover:scale-101 transition-all dark:shadow-accent">
      <div className="card-body">
        <h2 className="card-title flex justify-center">{title}</h2>
        <p>{target}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
