import instructor from "../../../assets/Images/bannerImg2.png";
import coverImg from "../../../assets/Images/cover.png";

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

const Courses = () => {
  const available = 10;
  return (
    <div className="container mx-auto md:py-20 py-12">
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
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                {available ? (
                  <div className="gap-2 text-white bg-theme-100 border-none  badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">
                      Available {available}
                    </p>
                  </div>
                ) : (
                  <div className="gap-2 text-white bg-red-600 border-none badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">Booked {available}</p>
                  </div>
                )}

                <img
                  className="w-full rounded-2xl"
                  src={coverImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <h2 className="font-bold text-lg">
                  IELTS Course by Munzereen Shahid
                </h2>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="w-10 bg-theme-200 rounded-full">
                      <img src={instructor} alt="" />
                    </figure>
                    <div className="">
                      <p className="text-md font-semibold">Munzereen Shahid</p>
                      <p className="text-sm">Senior instructor</p>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold">৳ 500</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link className="btn text-2xl text-white bg-theme-100">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                {available ? (
                  <div className="gap-2 text-white bg-theme-100 border-none  badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">
                      Available {available}
                    </p>
                  </div>
                ) : (
                  <div className="gap-2 text-white bg-red-600 border-none badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">Booked {available}</p>
                  </div>
                )}

                <img
                  className="w-full rounded-2xl"
                  src={coverImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <h2 className="font-bold text-lg">
                  IELTS Course by Munzereen Shahid
                </h2>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="w-10 bg-theme-200 rounded-full">
                      <img src={instructor} alt="" />
                    </figure>
                    <div className="">
                      <p className="text-md font-semibold">Munzereen Shahid</p>
                      <p className="text-sm">Senior instructor</p>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold">৳ 500</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link className="btn text-2xl text-white bg-theme-100">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                {available ? (
                  <div className="gap-2 text-white bg-theme-100 border-none  badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">
                      Available {available}
                    </p>
                  </div>
                ) : (
                  <div className="gap-2 text-white bg-red-600 border-none badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">Booked {available}</p>
                  </div>
                )}

                <img
                  className="w-full rounded-2xl"
                  src={coverImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <h2 className="font-bold text-lg">
                  IELTS Course by Munzereen Shahid
                </h2>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="w-10 bg-theme-200 rounded-full">
                      <img src={instructor} alt="" />
                    </figure>
                    <div className="">
                      <p className="text-md font-semibold">Munzereen Shahid</p>
                      <p className="text-sm">Senior instructor</p>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold">৳ 500</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link className="btn text-2xl text-white bg-theme-100">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                {available ? (
                  <div className="gap-2 text-white bg-theme-100 border-none  badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">
                      Available {available}
                    </p>
                  </div>
                ) : (
                  <div className="gap-2 text-white bg-red-600 border-none badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">Booked {available}</p>
                  </div>
                )}

                <img
                  className="w-full rounded-2xl"
                  src={coverImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <h2 className="font-bold text-lg">
                  IELTS Course by Munzereen Shahid
                </h2>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="w-10 bg-theme-200 rounded-full">
                      <img src={instructor} alt="" />
                    </figure>
                    <div className="">
                      <p className="text-md font-semibold">Munzereen Shahid</p>
                      <p className="text-sm">Senior instructor</p>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold">৳ 500</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link className="btn text-2xl text-white bg-theme-100">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                {available ? (
                  <div className="gap-2 text-white bg-theme-100 border-none  badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">
                      Available {available}
                    </p>
                  </div>
                ) : (
                  <div className="gap-2 text-white bg-red-600 border-none badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">Booked {available}</p>
                  </div>
                )}

                <img
                  className="w-full rounded-2xl"
                  src={coverImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <h2 className="font-bold text-lg">
                  IELTS Course by Munzereen Shahid
                </h2>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="w-10 bg-theme-200 rounded-full">
                      <img src={instructor} alt="" />
                    </figure>
                    <div className="">
                      <p className="text-md font-semibold">Munzereen Shahid</p>
                      <p className="text-sm">Senior instructor</p>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold">৳ 500</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link className="btn text-2xl text-white bg-theme-100">
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 shadow-xl border border-theme-300">
              <figure className="px-5 pt-5">
                {available ? (
                  <div className="gap-2 text-white bg-theme-100 border-none  badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">
                      Available {available}
                    </p>
                  </div>
                ) : (
                  <div className="gap-2 text-white bg-red-600 border-none badge rounded-lg absolute top-10 left-10">
                    <p className="text-sm font-semibold">Booked {available}</p>
                  </div>
                )}

                <img
                  className="w-full rounded-2xl"
                  src={coverImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-5 ">
                <h2 className="font-bold text-lg">
                  IELTS Course by Munzereen Shahid
                </h2>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="w-10 bg-theme-200 rounded-full">
                      <img src={instructor} alt="" />
                    </figure>
                    <div className="">
                      <p className="text-md font-semibold">Munzereen Shahid</p>
                      <p className="text-sm">Senior instructor</p>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold">৳ 500</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link className="btn text-2xl text-white bg-theme-100">
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

export default Courses;
