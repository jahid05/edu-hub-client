import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Courses = () => {
    const [courses, setCourses] = useState();
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  
    return (
        <div className="container mx-auto md:py-16 py-12">
            <SectionTitle title="Our All Courses" description="Language skills are also foundational, and absolutely required, for a number of other career paths."></SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {
                courses?.map(course => 
                  <div key={course._id} className="card w-96 shadow-xl border border-theme-300">
                  <figure className="px-5 pt-5">
                    {course.availableSeats === 0 ? (
                      <div className="gap-2 text-white bg-red-600 border-none badge rounded-lg absolute top-10 left-10">
                        <p className="text-sm font-semibold">
                          Booked {course.availableSeats}
                        </p>
                      </div>
                    ) : (
                      <div className="gap-2 text-white bg-theme-100 border-none  badge rounded-lg absolute top-10 left-10">
                        <p className="text-sm font-semibold">
                          Available {course.availableSeats}
                        </p>
                      </div>
                    )}

                    <img
                      className="w-full rounded-2xl"
                      src={course.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body p-5 ">
                    <h2 className="font-bold text-lg">
                      {course.courseName}
                    </h2>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <figure className=" bg-theme-200 rounded-full">
                          <img className="w-12 h-12" src={course.instructorImage} alt="" />
                        </figure>
                        <div className="">
                          <p className="text-md font-semibold">
                           {course.instructorName}
                          </p>
                          <p className="text-sm">{course.instructorDesignation}</p>
                        </div>
                      </div>
                      <div className="">
                        <h2 className="text-lg font-bold">৳ {course.price}</h2>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                        <FaArrowRight></FaArrowRight>
                      </Link>
                    </div>
                  </div>
                </div>)
              }
            </div>
        </div>
    );
};

export default Courses;