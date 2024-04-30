import CourseCard from './CourseCard';
import image1 from '../assets/cyber1.webp'
import image2 from '../assets/cyber2.webp'
import image3 from '../assets/cyber4.webp'

const CyberSecurity = () => {
  // Assuming you have a list of cybersecurity courses
  const cyberSecurityCourses = [
    { name: 'Best Cyber Security Roadmap for Beginners 2024', image: image1 },
      { name: 'Hot Topics that you need to know in Cyber Security Syllabus | 2024', image: image2 },
      { name: 'Best Cyber Security Project Ideas', image: image3 },
  ];

  return (
    <div className="card-deck">
      {cyberSecurityCourses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CyberSecurity;