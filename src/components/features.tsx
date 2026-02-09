import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <div className="hero bg-base-100 pt-20 pb-12">
      <div className="hero-content text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Why choose us?</h1>
            <p className="text-xl">
              Our most comprehensive and impactful learning experiences
            </p>
          </div>
          <div className="flex gap-4 md:gap-12 flex-wrap justify-center lg:flex-nowrap">
            <FeatureCard
              title="Concept-Based Learning"
              description="We focus on concepts that build strong logical foundations."
            />
            <FeatureCard
              title="Printed Study Materials"
              description="Chapterwise study notes are provided for easy understanding."
            />
            <FeatureCard
              title="Consistent Practice"
              description="Regular homeworks are provided to keep students on track."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
