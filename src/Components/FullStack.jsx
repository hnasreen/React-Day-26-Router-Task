import CourseCard from './CourseCard';
import image1 from '../assets/fsd1.jpeg'
import image2 from '../assets/fsd2.webp'
import image3 from '../assets/fsd3.webp'

const FullStack = () => {
  // Assuming you have a list of full-stack courses
  const fullStackCourses = [
    { name: 'Best Web Development Roadmap for Beginners 2024', image: image1},
    { name: 'Hot Topics that you need to know in Full Stack Developer Syllabus | 2024', image: image2 },
    { name: 'Best Full Stack Development Project Ideas', image: image3 },
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
