import rectangle from "../../assets/images/vector/Rectangle 376.png";
import slider from "../../assets/svg/slider_dark.svg";

const AboutUser = ({ caData }) => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="h-96 w-full">
        <img
          src="https://source.unsplash.com/random/?finance"
          alt="rectangle"
          className="object-cover h-full w-full rounded-xl custom-shadow"
        />
        <img
          src={slider}
          alt="slider"
          className="z-10 relative -top-8 mx-auto w-16"
        />
      </div>
      <h1 className="text-3xl font-bold mt-10">{`About ${caData.name}`}</h1>
      <div className="flex justify-between mt-10">
        <div>
          <p className="uppercase text-[#999999] font-bold text-sm">from</p>
          <p className="uppercase text-lg mt-5">{caData.about.from}</p>
        </div>
        <div>
          <p className="uppercase text-[#999999] font-bold text-sm">
            partner since
          </p>
          <p className="uppercase text-lg mt-5">{caData.about.partnerSince}</p>
        </div>
        <div>
          <p className="uppercase text-[#999999] font-bold text-sm">
            Average response time
          </p>
          <p className="uppercase text-lg mt-5">
            {caData.about.averageResponseTime}
          </p>
        </div>
      </div>
      <div className="mt-12">
        <p className="uppercase text-[#999999] font-bold text-sm">about</p>
        <p className="mt-5">{caData.about.description}</p>
      </div>
      <div className="flex justify-between mt-12">
        <div>
          <p className="uppercase text-[#999999] font-bold text-sm">
            services I offer
          </p>
          <div className="px-1 mt-3">
            {caData.about.services.map((ele, i) => (
              <li key={i}>{ele}</li>
            ))}
          </div>
        </div>
        <div>
          <p className="uppercase text-[#999999] font-bold text-sm">why me?</p>
          <div className="px-1 mt-3">
            {caData.about.benefits.map((ele, i) => (
              <li key={i}>{ele}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
