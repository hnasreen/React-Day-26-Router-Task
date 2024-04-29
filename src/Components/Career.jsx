import CourseCard from './CourseCard';

const Career = () => {
  const career = [
    { name: 'Hot Topics that you need to know in Full Stack Developer Syllabus | 2024', image: 'src/assets/fsd2.webp' },
      { name: 'Hot Topics that you need to know in Cyber Security Syllabus | 2024', image: 'src/assets/cyber2.webp' },
      { name: 'Hot Topics that you need to know in Data Science Syllabus | 2024', image: 'src/assets/datascience2.webp' },
  ];

  return (
    <div className="card-deck">
      {career.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default Career