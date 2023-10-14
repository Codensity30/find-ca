import logo from "../assets/images/logo.png";
import downArrow from "../assets/svg/down_arrow.svg";

const NavBar = () => {
  return (
    <div className="flex h-20 items-center justify-between md:px-14">
      <ul className="flex gap-10 items-center">
        <li>
          <img src={logo} alt="logo image" />
        </li>
        <li className="text-lg font-bold flex cursor-pointer hover:text-zinc-600 transition-colors">
          Solutions <img src={downArrow} alt="down_arrow" />
        </li>
        <li className="text-lg font-bold flex cursor-pointer hover:text-zinc-600 transition-colors">
          Features <img src={downArrow} alt="down_arrow" />
        </li>
        <li className="text-lg font-bold flex cursor-pointer hover:text-zinc-600 transition-colors">
          About <img src={downArrow} alt="down_arrow" />
        </li>
      </ul>
      <div className="flex gap-5">
        <button className="w-24 h-11 text-base font-bold text-custom-blue bg-transparent border-[1.5px] border-custom-blue rounded-md hover:bg-custom-blue hover:text-white transition-colors">
          Login
        </button>
        <button className="w-24 h-11 text-base text-white font-bold bg-custom-blue border-[1.5px] border-custom-blue rounded-md hover:bg-transparent hover:text-custom-blue transition-colors">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
