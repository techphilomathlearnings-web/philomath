import CourseCard from "./course-card";

const Courses = () => {
  return (
    <div id="courses" className="hero bg-base-200 py-12">
      <div className="hero-content text-center">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-secondary dark:text-accent">
            Featured Courses
          </h1>
          <div className="flex gap-4 md:gap-12 flex-wrap justify-center lg:flex-nowrap">
            <CourseCard
              title="ICSE Computer Applications"
              target="For Classes VIII – X"
              description="Fundamentals of Programming, with a strong focus on logic building and Java basics."
            />
            <CourseCard
              title="ISC Computer Science"
              target="For Classes XI & XII"
              description="Concept-based learning, with equal importance to Digital Electronics, Java and Data Structures."
            />
            <CourseCard
              title="CBSE Computer Science"
              target="For Classes XI & XII"
              description="Structured learning path, curated for the CBSE Examinations, with a strong focus on Python."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
