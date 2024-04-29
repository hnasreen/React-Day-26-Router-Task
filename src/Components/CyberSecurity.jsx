import CourseCard from './CourseCard';

const CyberSecurity = () => {
  // Assuming you have a list of cybersecurity courses
  const cyberSecurityCourses = [
    { name: 'Best Cyber Security Roadmap for Beginners 2024', image: 'src/assets/cyber1.webp' },
      { name: 'Hot Topics that you need to know in Cyber Security Syllabus | 2024', image: 'src/assets/cyber2.webp' },
      { name: 'Best Cyber Security Project Ideas', image: 'src/assets/cyber4.webp' },
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