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

const PopularInstructors = () => {
  return (
    <div className="container mx-auto pb-24">
      <SectionTitle
        subTitle="Instructors"
        title="Our Most Popular Instructor"
        description="On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."
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
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                <img
                  className="w-full rounded-2xl"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <div className="">
                  <h2 className="font-bold text-xl">Alexander Lucas</h2>
                  <p className="text-sm -mt-1">Senior instructor</p>
                </div>
                <div className="flex justify-around py-2">
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-100 p-3">Total Class: 12</h2>
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-200 p-3">Experience: 2 Years</h2>
                </div>
                <div className="card-actions justify-end">
                  <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                <img
                  className="w-full rounded-2xl"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <div className="">
                  <h2 className="font-bold text-xl">Alexander Lucas</h2>
                  <p className="text-sm -mt-1">Senior instructor</p>
                </div>
                <div className="flex justify-around py-2">
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-100 p-3">Total Class: 12</h2>
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-200 p-3">Experience: 2 Years</h2>
                </div>
                <div className="card-actions justify-end">
                  <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                <img
                  className="w-full rounded-2xl"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <div className="">
                  <h2 className="font-bold text-xl">Alexander Lucas</h2>
                  <p className="text-sm -mt-1">Senior instructor</p>
                </div>
                <div className="flex justify-around py-2">
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-100 p-3">Total Class: 12</h2>
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-200 p-3">Experience: 2 Years</h2>
                </div>
                <div className="card-actions justify-end">
                  <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                <img
                  className="w-full rounded-2xl"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <div className="">
                  <h2 className="font-bold text-xl">Alexander Lucas</h2>
                  <p className="text-sm -mt-1">Senior instructor</p>
                </div>
                <div className="flex justify-around py-2">
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-100 p-3">Total Class: 12</h2>
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-200 p-3">Experience: 2 Years</h2>
                </div>
                <div className="card-actions justify-end">
                  <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                <img
                  className="w-full rounded-2xl"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <div className="">
                  <h2 className="font-bold text-xl">Alexander Lucas</h2>
                  <p className="text-sm -mt-1">Senior instructor</p>
                </div>
                <div className="flex justify-around py-2">
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-100 p-3">Total Class: 12</h2>
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-200 p-3">Experience: 2 Years</h2>
                </div>
                <div className="card-actions justify-end">
                  <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                <img
                  className="w-full rounded-2xl"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <div className="">
                  <h2 className="font-bold text-xl">Alexander Lucas</h2>
                  <p className="text-sm -mt-1">Senior instructor</p>
                </div>
                <div className="flex justify-around py-2">
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-100 p-3">Total Class: 12</h2>
                  <h2 className="text-md rounded-lg font-bold badge text-white bg-theme-200 p-3">Experience: 2 Years</h2>
                </div>
                <div className="card-actions justify-end">
                  <Link className="rounded-lg text-2xl btn bg-theme-100 text-white hover:bg-theme-200 duration-300">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default PopularInstructors;
