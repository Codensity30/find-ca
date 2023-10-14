import Feature from "./Feature";
import search from "../../assets/images/features/search.png";
import connect from "../../assets/images/features/connect.png";
import academy from "../../assets/images/features/academy.png";
import research from "../../assets/images/features/research.png";
import teacher from "../../assets/images/features/Teacher.png";
import student from "../../assets/images/features/Student.png";

const features = [
  {
    image: search,
    title: "Search",
    desc: " for vital company information",
  },
  {
    image: connect,
    title: "Connect",
    desc: " with the resources to meet your business needs",
  },
  {
    image: research,
    title: "Research",
    desc: " and generate reports that drive growth",
  },
  {
    image: academy,
    title: "ACADEMY",
    desc: " to give you the skills for success in your career",
  },
];

const AllInOne = () => {
  return (
    <div className="flex flex-col px-3 gap-10 lg:flex-row w-full justify-center pt-24 lg:py-32 bg-[#FAFBFC]">
      <div className="w-full lg:w-2/5 ">
        <h1 className="text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
            All-in-One
          </span>{" "}
          platform that Makes Easier
        </h1>
        <p className="mt-7">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        <div className="w-full mt-10 grid grid-cols-2 gap-10">
          {features.map((ele, i) => (
            <Feature
              key={i}
              image={ele.image}
              title={ele.title}
              desc={ele.desc}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-2/5 md:mx-auto lg:mx-0 ">
        <div className="flex">
          <div className="w-2/3 flex flex-col items-end gap-2 mt-7">
            <div className="rounded-xl h-7 rounded-br-none bg-[#EFD9F9] text-center px-3">
              <span className="text-[0.5rem] md:text-xs font-medium ">
                Hey, check out loreumipsum services.
              </span>
            </div>
            <div className="rounded-xl h-7 rounded-br-none bg-[#EFD9F9] text-center px-3 ">
              <span className="text-[0.5rem] md:text-xs font-medium ">
                I learned from their videos, got my first job.
              </span>
            </div>
            <div className="rounded-xl h-7 rounded-br-none bg-[#EFD9F9] text-center px-3">
              <span className="text-[0.5rem] md:text-xs font-medium ">
                You won't be disappointed with their services.
              </span>
            </div>
            <div className="rounded-xl h-7 rounded-bl-none bg-[#DDF3FF] text-center px-3 mt-8 lg:self-start">
              <span className="text-[0.5rem] md:text-xs font-medium ">
                I got a perfect analysis report from them too
              </span>
            </div>
            <div className="rounded-xl h-7 rounded-bl-none bg-[#DDF3FF] text-center px-3">
              <span className="text-[0.5rem] md:text-xs font-medium ">
                Oh, that's great.
              </span>
            </div>
          </div>
          <div className="w-2/5">
            <img src={student} alt="student image" />
          </div>
        </div>
        <div className="w-[45%] flex justify-end items-start relative md:-top-20 lg:-top-10 lg:-right-7">
          <img src={teacher} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
