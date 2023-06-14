// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  console.log(instructors);
  return (
    <div className="bg-theme-300">
      <div className="container mx-auto lg:py-24 md:py-16 py-12 ">
        <SectionTitle
          subTitle="Instructors"
          title="Our Most Popular Instructor"
          description="On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."
        ></SectionTitle>

        {/* <>
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
            {
              instructors?.map(instructor =>
                <SwiperSlide key={instructor.id}>
              <div className="card w-96 shadow-xl border border-theme-300">
                <figure className="px-5 pt-5 h-full">
                  <img
                    className="w-full h-56 rounded-2xl"
                    src={instructor.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body p-5 ">
                  <div className="">
                    <h2 className="font-bold text-xl">{instructor.name}</h2>
                    <p className="text-sm -mt-1">{instructor.email}</p>
                  </div>
                  <div className="flex justify-around py-2">
                    <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-100 p-3">
                      Total Class: {instructor.totalClass}
                    </h2>
                    <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-200 p-3">
                      Experience: {instructor.experience} Years
                    </h2>
                  </div>
                  <div className="card-actions justify-end">
                    <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                      <FaArrowRight></FaArrowRight>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
            )
             }
          </Swiper>
        </> */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 :grid-cols-2">
            {instructors?.map((instructor) => (
              <div
                key={instructor.id}
                href="/"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src={instructor.image}
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        {instructor.name}
                      </h6>
                      <p className="text-sm text-gray-900">
                        {instructor.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/"
              className="rounded-xl mt-4 text-lg btn bg-theme-100 text-white hover:bg-theme-200 duration-300 normal-case"
            >
              Show All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
