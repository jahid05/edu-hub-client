import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const CourseDetails = () => {
  const details = useLoaderData();

  console.log(details);
  return (
    <div className="container mx-auto md:py-16 py-12">
        <SectionTitle title="Course Details"></SectionTitle>
      <div className="grid md:gap-x-12 gap-y-12  md:grid-cols-2 grid-cols-1">
        <img className="rounded-2xl" src={details.image} alt="" />
        <div className="space-y-6">
            <h1 className="text-2xl text-theme-100 font-bold font-custom-200 inline-block px-6 border-b-4 border-theme-100">Course Features</h1>
            <div className="">
            <p className="text-lg font-semibold my-3">Course Duration: 2 months</p>
            <p className="text-lg font-semibold my-3">No. of Classes: 22</p>
            <p className="text-lg font-semibold my-3">No. of Exam: 2</p>
            <p className="text-lg font-semibold my-3">Class Duration: 2 Hours</p>
            <p className="text-lg font-semibold my-3">Certificate: Yes</p>
            <p className="text-lg font-semibold my-3">Course Fee: ৳ {details.price}</p>
            </div>
            <button className="rounded-lg md:text-xl text-md px-16 btn bg-theme-100 text-white hover:bg-theme-200 duration-300 normal-case">Enroll</button>
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-xl font-bold">Course Name: {details.courseName}</h1>
        <p className="text-lg py-4 text-justify">{details.description}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
