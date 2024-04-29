import './CourseCard.css'

const CourseCard = ({ course }) => {
    return (
                <div className="col-md-4 mb-3">
                    <div className="card mb-3 mt-2 h-100">
                        <img src={course.image} className="card-img-top" alt={course.name} />
                        <div className="card-body">
                            <p className="card-text">{course.name}</p>
                        </div>
                    </div>
                </div>
               
        
    );
};

export default CourseCard;

