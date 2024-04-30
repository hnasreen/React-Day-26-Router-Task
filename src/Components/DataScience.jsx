import CourseCard from './CourseCard';
import image1 from '../assets/datascience1.webp'
import image2 from '../assets/datascience2.webp'
import image3 from '../assets/datascience3.webp'

const DataScience = () => {
  // Assuming you have a list of data science courses
  const dataScienceCourses = [
    { name: 'Best Data Science Roadmap for Beginners 2024', image: image1},
    { name: 'Hot Topics that you need to know in Data Science Syllabus | 2024', image: image2 },
    { name: 'Best Data Science Project Ideas', image: image3},
  ];

  return (
    <div className="card-deck">
      {dataScienceCourses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default DataScience;