import CourseCard from './CourseCard';

const DataScience = () => {
  // Assuming you have a list of data science courses
  const dataScienceCourses = [
    { name: 'Best Data Science Roadmap for Beginners 2024', image: 'src/assets/datascience1.webp' },
    { name: 'Hot Topics that you need to know in Data Science Syllabus | 2024', image: 'src/assets/datascience2.webp' },
    { name: 'Best Data Science Project Ideas', image: 'src/assets/datascience3.webp' },
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