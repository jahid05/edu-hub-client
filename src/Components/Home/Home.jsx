import Blog from "../Blog/Blog";
import Features from "../Fea/Features";
import PopularInstructors from "../Intructors/PopularInstructors";
import PopularCourses from "./Courses/PopularCourses";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <PopularCourses></PopularCourses>
      <Features></Features>
      <PopularInstructors></PopularInstructors>
      <Blog></Blog>
    </div>
  );
};

export default Home;
