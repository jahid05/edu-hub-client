import PopularInstructors from "../Intructors/PopularInstructors";
import PopularCourses from "./Courses/PopularCourses";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <PopularCourses></PopularCourses>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
