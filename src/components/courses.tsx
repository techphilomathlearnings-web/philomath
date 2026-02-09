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
              description="Complete programming concepts, Java, logic building and board exam preparation."
            />
            <CourseCard
              title="ISC Computer Science"
              target="For Classes XI & XII"
              description="Java programming, data structures, practicals and board oriented training."
            />
            <CourseCard
              title="CBSE Computer Science"
              target="For Classes XI & XII"
              description="Python programming, SQL, practical projects and exam focused teaching."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
