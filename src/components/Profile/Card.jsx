import star from "../../assets/svg/star-fill.svg";
import rectangle from "../../assets/images/vector/Rectangle 376.png";

const Card = ({ name, fees, rating, reviews }) => {
  return (
    <div className="w-[405px] h-[450px] rounded-2xl custom-shadow">
      <img src={rectangle} alt="rectangle image" />
      <div className="flex justify-between px-7 mt-5">
        <p className="font-bold text-lg">{name}</p>
        <p className="font-bold text-lg">{fees}</p>
      </div>
      <p className="px-7 mt-5">
        I will do business evaluation and corporate services
      </p>
      <div className="flex items-center gap-1 mt-5 px-7">
        <img src={star} alt="star" className="w-4" />
        <p className="text-sm">
          <span className="text-custom-blue font-bold">{rating}</span> (
          {reviews})
        </p>
      </div>
      <div className="px-7 mt-5">
        <button className="w-[98%] h-11 text-sm text-white font-bold bg-custom-blue border-[1.5px] border-custom-blue rounded-md hover:bg-transparent hover:text-custom-blue transition-colors">
          View Services
        </button>
      </div>
    </div>
  );
};

export default Card;
