import Courses from "./Courses/Courses";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div className="px-4 md:px-2">
            <Slider></Slider>
            <Courses></Courses>
        </div>
    );
};

export default Home;