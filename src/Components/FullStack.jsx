import CourseCard from './CourseCard';

const FullStack = () => {
  // Assuming you have a list of full-stack courses
  const fullStackCourses = [
    { name: 'Best Web Development Roadmap for Beginners 2024', image: 'src/assets/fsd1.jpeg' },
    { name: 'Hot Topics that you need to know in Full Stack Developer Syllabus | 2024', image: 'src/assets/fsd2.webp' },
    { name: 'Best Full Stack Development Project Ideas', image: 'src/assets/fsd3.webp' },
  ];

  return (
    <div className="card-deck">
      {fullStackCourses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default FullStack;
