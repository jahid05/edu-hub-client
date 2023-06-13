// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PopularCourses = () => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetch("https://edu-hub-server-sigma.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return (
    <div className="bg-theme-300">
      <div className="container mx-auto lg:py-24 md:py-16 py-12 ">
        <SectionTitle
          subTitle="Explore Programs"
          title="Our Most Popular Courses"
          description="Let's join our famous course, the knowledge provided will definitely be useful for you."
        ></SectionTitle>

        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {courses?.map((course) => course?.availableSeats === 0 ? (
              <SwiperSlide key={course.course_id}>
                <div className="card w-96 shadow-xl border bg-red-500 text-white border-theme-300">
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
                    <h2 className="font-bold text-lg">{course.courseName}</h2>

                    <div className="flex justify-between">
                      <div className="text-white bg-theme-200 border-none p-3 badge rounded-lg">
                        <p className="text-sm font-semibold">
                          Course Enrollment: {course.enrollCourse}
                        </p>
                      </div>
                      <div className="">
                        <h2 className="text-lg font-bold">৳ {course.price}</h2>
                      </div>
                    </div>
                    <div className="card-actions justify-between items-center">
                    <div className="flex items-center gap-2">
                        <figure className=" bg-theme-200 rounded-full">
                          <img
                            className="w-12 h-12"
                            src={course.instructorImage}
                            alt=""
                          />
                        </figure>
                        <div className="">
                          <p className="text-md font-semibold">
                            {course.instructorName}
                          </p>
                          <p className="text-sm">
                            {course.instructorDesignation}
                          </p>
                        </div>
                      </div>
                      <Link to={`/courseDetails/${course._id}`} className="rounded-lg text-2xl border-none btn bg-theme-300 text-theme-200 hover:text-theme-300 hover:bg-theme-100 duration-300">
                        <FaArrowRight></FaArrowRight>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) :
            (
              <SwiperSlide key={course.course_id}>
                <div className="card w-96 shadow-xl border border-theme-300">
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
                    <h2 className="font-bold text-lg">{course.courseName}</h2>

                    <div className="flex justify-between">
                      <div className="text-white bg-theme-200 border-none p-3 badge rounded-lg">
                        <p className="text-sm font-semibold">
                          Course Enrollment: {course.enrollCourse}
                        </p>
                      </div>
                      <div className="">
                        <h2 className="text-lg font-bold">৳ {course.price}</h2>
                      </div>
                    </div>
                    <div className="card-actions justify-between items-center">
                    <div className="flex items-center gap-2">
                        <figure className=" bg-theme-200 rounded-full">
                          <img
                            className="w-12 h-12"
                            src={course.instructorImage}
                            alt=""
                          />
                        </figure>
                        <div className="">
                          <p className="text-md font-semibold">
                            {course.instructorName}
                          </p>
                          <p className="text-sm">
                            {course.instructorDesignation}
                          </p>
                        </div>
                      </div>
                      <Link to={`/courseDetails/${course._id}`} className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                        <FaArrowRight></FaArrowRight>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default PopularCourses;
