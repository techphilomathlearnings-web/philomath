import { featureCard } from "@/typs/api";

const FeatureCard = ({ title, description }: featureCard) => {
  return (
    <div className="card card-border bg-base-100 w-72 shadow-md hover:shadow-lg hover:-translate-y-2 hover:scale-101 transition-all">
      <div className="card-body">
        <h2 className="card-title flex justify-center">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
