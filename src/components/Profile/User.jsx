import star from "../../assets/svg/star-fill.svg";
import calendar from "../../assets/svg/calendar.svg";
import slider from "../../assets/svg/slider.svg";

const User = ({ caData }) => {
  return (
    <div className="w-1/3">
      <h1 className="text-3xl font-bold">{caData.name}</h1>
      <p className="mt-5">{caData.intro}</p>
      <div className="flex items-center gap-1 mt-5">
        <img src={star} alt="star" className="w-4" />
        <p className="text-sm">
          <span className="text-custom-blue font-bold">{caData.rating}</span> (
          {caData.reviewCount})
        </p>
      </div>
      <div className="w-full custom-shadow rounded-2xl py-5 px-7 mt-10">
        <div className="flex justify-between">
          <p>{caData.taskComplexity}</p>
          <p className="font-bold">{caData.price}</p>
        </div>
        <div className="flex gap-3 mt-8">
          <img src={calendar} alt="calendar" className="w-4" />
          <p>{caData.deliveryTime}</p>
        </div>
        <div className="flex mt-7 justify-between items-center">
          <button className="w-[45%] h-11 text-sm text-white font-bold bg-custom-blue border-[1.5px] border-custom-blue rounded-md hover:bg-transparent hover:text-custom-blue transition-colors">
            Request Proposal
          </button>
          <button className="w-[45%] h-11 text-sm font-bold text-custom-blue bg-transparent border-[1.5px] border-custom-blue rounded-md hover:bg-custom-blue hover:text-white transition-colors">
            Chat with me
          </button>
        </div>
      </div>
      <div className="w-full custom-shadow rounded-2xl py-5 px-7 mt-10">
        <h3 className="text-3xl font-bold">What people say?</h3>
        <p className="mt-5">{caData.testimonial.text}</p>
        <img src={slider} alt="slider" className="mt-10 mx-auto w-16" />
      </div>
    </div>
  );
};

export default User;
