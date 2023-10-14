import NavBar from "../NavBar";
import SearchBox from "./SearchBox";
import hero_1 from "../../assets/images/hero/hero_1.png";
import hero_2 from "../../assets/images/hero/hero_2.png";
import hero_3 from "../../assets/images/hero/hero_3.png";
import hero_vector from "../../assets/images/vector/hero_vector.png";

const HeroSection = () => {
  return (
    <div className="w-full lg:h-[800px] hero-bg">
      <NavBar />
      <div className="flex flex-col lg:flex-row h-[70%] items-center lg:justify-center lg:gap-20 md:px-10 px-5">
        <div className="w-full mt-20 lg:w-2/5">
          <h1 className="font-bold text-5xl">
            Find{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0076CE] to-[#9400D3]">
              Partners
            </span>{" "}
            (CAs) available online
          </h1>
          <p className="text-[#616161] mt-5">
            <span className="font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
          <SearchBox />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center gap-5 ">
          <img
            src={hero_1}
            className="mt-16 lg:mt-52 z-10 w-40 md:w-80 lg:w-full"
          />
          <img
            src={hero_2}
            className="mt-8 mb:7 lg:mt-32 lg:mb-14 z-10 w-40 md:w-80 lg:w-full"
          />
          <img
            src={hero_3}
            className="mt-12 mb:5 lg:mt-40 lg:mb-10 z-10 w-40 md:w-80 hidden md:block lg:w-full"
          />
        </div>
      </div>
      <img src={hero_vector} />
    </div>
  );
};

export default HeroSection;
