import logo from "../assets/images/vector/footer_logo.png";
import socials from "../assets/images/vector/socials.png";

const Footer = () => {
  return (
    <>
      <footer className="text-white footer-bg font-sans py-14 md:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-20 ">
            <div className="md:w-1/3 text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src={logo} alt="" />
              </a>
              <p className="mt-2 text-white px-2">
                India's first platform dedicated to simplifying partner search
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="font-light">
                <ul className="list-none text-center md:text-start">
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">About</a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Solutions
              </h2>
              <nav className="font-light">
                <ul className="list-none text-center md:text-start">
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">Search</a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">
                      Connect
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">
                      Research
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">
                      Academy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Resources
              </h2>
              <nav className="font-light">
                <ul className="list-none text-center md:text-start">
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">Blogs</a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">Forms</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-3">
                Legal
              </h2>
              <nav className="font-light">
                <ul className="list-none text-center md:text-start">
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">Terms</a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200 cursor-pointer">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8"></div>
        <div className="flex flex-col-reverse md:flex-row gap-2 justify-between items-center md:py-4 px-5 text-sm font-light">
          <div className="text-center md:text-left md:w-2/3">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <img src={socials} alt="socials" className="h-5" />
          </div>
        </div>
      </footer>

      <div className="bg-black h-14 text-white text-xs font-extralightlight text-center py-5">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
