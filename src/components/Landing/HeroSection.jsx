import NavBar from "../NavBar";
import SearchBox from "./SearchBox";
import hero_1 from "../../assets/images/hero/hero_1.png";
import hero_2 from "../../assets/images/hero/hero_2.png";
import hero_3 from "../../assets/images/hero/hero_3.png";
import hero_vector from "../../assets/images/vector/hero_vector.png";

const HeroSection = () => {
  return (
    <div className="h-[80%] hero-bg">
      <NavBar />
      <div className="flex h-[70%] items-center gap-20 px-10 pl-14">
        <div className="w-2/5">
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
        <div className="w-1/2 flex gap-5">
          <img src={hero_1} className="mt-52 z-10" />
          <img src={hero_2} className="mt-32 mb-14 z-10" />
          <img src={hero_3} className="mt-40 mb-10 z-10" />
        </div>
      </div>
      <img src={hero_vector} className="relative bottom-8" />
    </div>
  );
};

export default HeroSection;
