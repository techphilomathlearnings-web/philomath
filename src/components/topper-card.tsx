import Image from "next/image";
import { topperCard } from "@/typs/api";

const TopperCard = ({
  link,
  title,
  board,
  credits1,
  subject,
  credits2,
}: topperCard) => {
  return (
    <div className="card card-border bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-2 hover:scale-101 transition-all dark:shadow-accent">
      <figure className="relative w-68 h-58 flex justify-center items-center mt-2">
        <Image
          src={link}
          alt="topper_pic"
          fill={true}
          objectFit="contain"
          className="rounded-xl w-fit"
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-col gap-0">
          <h2 className="card-title w-fit mx-auto">{title}</h2>
          <h2 className="card-title w-fit mx-auto">{board}</h2>
        </div>
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
  );
};

export default TopperCard;
