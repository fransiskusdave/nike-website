import { useState } from "react";

import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full padding-x fixed z-20 py-8 bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center cursor-pointer max-lg:hidden">
          <p className="font-semibold text-lg">Sign in / Explore Now</p>
        </div>

        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          <img
            src={`${toggle ? close : hamburger}`}
            alt="hamburger"
            width={30}
            height={30}
          />
          {toggle && (
            <ul className="slide-bottom flex fixed left-0 top-[94px] w-full flex-col justify-center items-center bg-white gap-y-4 py-3 border-t shadow-md">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
