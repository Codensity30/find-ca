import logo from "../assets/images/logo.png";
import downArrow from "../assets/svg/down_arrow.svg";

const NavBar = () => {
  return (
    <div className="flex h-20 items-center justify-between px-5 lg:px-14">
      <div className="flex gap-8">
        <img src={logo} alt="logo image" />
        <ul className="gap-8 items-center hidden md:flex">
          <li className="tex-sm lg:text-base font-bold flex cursor-pointer hover:text-zinc-600 transition-colors">
            Solutions <img src={downArrow} alt="down_arrow" />
          </li>
          <li className="tex-sm lg:text-base font-bold flex cursor-pointer hover:text-zinc-600 transition-colors">
            Features <img src={downArrow} alt="down_arrow" />
          </li>
          <li className="tex-sm lg:text-base font-bold flex cursor-pointer hover:text-zinc-600 transition-colors">
            About <img src={downArrow} alt="down_arrow" />
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <button className="w-20 h-10 lg:w-24 lg:h-11 text-sm lg:text-base lg:font-bold text-custom-blue bg-transparent border-[1.5px] border-custom-blue rounded-md hover:bg-custom-blue hover:text-white transition-colors">
          Login
        </button>
        <button className="w-20 h-10 lg:w-24 lg:h-11 text-sm lg:text-base text-white lg:font-bold bg-custom-blue border-[1.5px] border-custom-blue rounded-md hover:bg-transparent hover:text-custom-blue transition-colors">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
