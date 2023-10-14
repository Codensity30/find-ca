import logo from "../assets/images/vector/footer_logo.png";
import socials from "../assets/images/vector/socials.png";

const Footer = () => {
  return (
    <>
      <footer className="text-white footer-bg font-sans h-80 p-14">
        <div className="container px-5 mx-auto h-4/5 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="" />
            </a>
            <p className="mt-2 text-white">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="flex flex-col gap-3 list-none font-light">
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">About</a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Pricing</a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Careers</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Solutions
              </h2>
              <nav className="flex flex-col gap-3 list-none font-light">
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Search</a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Connect</a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">
                    Research
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Academy</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Resources
              </h2>
              <nav className="flex flex-col gap-3 list-none font-light">
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Blogs</a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Forms</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Legal
              </h2>
              <nav className="flex flex-col gap-3 list-none font-light">
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Privacy</a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">Terms</a>
                </li>
                <li>
                  <a className=" hover:text-gray-200 cursor-pointer">
                    Accessibility
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] h-1 w-full border-white mt-8"></div>
        <div className="flex justify-between items-center">
          <div className="mt-4 px-5 text-sm font-light">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </div>
          <img src={socials} alt="socials" className="h-5 px-5" />
        </div>
      </footer>
      <div className="bg-black h-14 text-white text-xs font-extralightlight flex items-center justify-center">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
