import CourseCard from './CourseCard';
import image1 from '../assets/fsd2.webp'
import image2 from '../assets/cyber2.webp'
import image3 from '../assets/datascience2.webp'

const Career = () => {
  const career = [
    { name: 'Hot Topics that you need to know in Full Stack Developer Syllabus | 2024', image: image1 },
      { name: 'Hot Topics that you need to know in Cyber Security Syllabus | 2024', image:image2 },
      { name: 'Hot Topics that you need to know in Data Science Syllabus | 2024', image: image3 },
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