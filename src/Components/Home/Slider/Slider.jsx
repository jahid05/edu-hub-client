import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Link } from "react-router-dom";

//Slider Images
import slider1 from "../../../assets/Images/bannerImg1.png";
import slider2 from "../../../assets/Images/bannerImg2.png";

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div ref={sliderRef} className="keen-slider px-4 md:px-2">
        <div className="keen-slider__slide number-slide1">
          <div className="min-h-[900px] container mx-auto grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="h-full flex-col flex justify-center space-y-12">
              <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold capitalize">
                up your skills to advance your career path
              </h1>
              <p className="text-lg text-slate-500">
                Provides you with the latest online learning system and material
                that help your knowledge growing.
              </p>
              <Link className="w-1/3 normal-case rounded-2xl md:text-md btn bg-theme-100 text-white hover:bg-theme-200 px-4  md:px-8 duration-300">
                Get Started
              </Link>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <div className="bg-theme-100 w-10 h-10 rounded-full -mt-72"></div>
              <div className="border border-theme-100 p-2 rounded-full">
                <div className="bg-theme-100 rounded-full">
                  <img className="w-full rounded-full" src={slider1} alt="" />
                </div>
              </div>
              <div className="bg-theme-300 p-3 rounded-xl -ms-10">
                <h1 className="text-xl font-bold">100K</h1>
              </div>
              <div className="w-20 h-20 border border-theme-200 p-2 -mb-96 rounded-full">
                <div className="w-full h-full rounded-full bg-theme-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="min-h-[900px] container mx-auto grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="h-full flex-col flex justify-center space-y-12 md:px-4 px-2">
              <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold capitalize">
                Your most trusted guide for English Language proficiency
              </h1>
              <p className="text-lg text-slate-500">
                Provides you with the latest online learning system and material
                that help your knowledge growing.
              </p>
              <Link className="w-1/3 normal-case rounded-2xl md:text-md btn bg-theme-100 text-white hover:bg-theme-200 px-4  md:px-8 duration-300">
                Get Started
              </Link>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <div className="bg-theme-100 w-10 h-10 rounded-full -mt-72"></div>
              <div className="border border-theme-100 p-2 rounded-full">
                <div className="bg-theme-100 rounded-full">
                  <img className="w-full rounded-full" src={slider2} alt="" />
                </div>
              </div>
              <div className="bg-theme-300 p-3 rounded-xl -ms-10">
                <h1 className="text-xl font-bold">100K</h1>
              </div>
              <div className="w-20 h-20 border border-theme-200 p-2 -mb-96 rounded-full">
                <div className="w-full h-full rounded-full bg-theme-100"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="keen-slider__slide number-slide3">
          <div className="min-h-[900px] container mx-auto grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="h-full flex-col flex justify-center space-y-12">
              <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold capitalize">
                up your skills to advance your career path
              </h1>
              <p className="text-lg text-slate-500">
                Provides you with the latest online learning system and material
                that help your knowledge growing.
              </p>
              <Link className="w-1/3 normal-case rounded-2xl md:text-md btn bg-theme-100 text-white hover:bg-theme-200 px-4  md:px-8 duration-300">
                Get Started
              </Link>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <div className="bg-theme-100 w-10 h-10 rounded-full -mt-72"></div>
              <div className="border border-theme-100 p-2 rounded-full">
                <div className="bg-theme-100 rounded-full">
                  <img className="w-full rounded-full" src={slider1} alt="" />
                </div>
              </div>
              <div className="bg-theme-300 p-3 rounded-xl -ms-10">
                <h1 className="text-xl font-bold">100K</h1>
              </div>
              <div className="w-20 h-20 border border-theme-200 p-2 -mb-96 rounded-full">
                <div className="w-full h-full rounded-full bg-theme-100"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Slider;
