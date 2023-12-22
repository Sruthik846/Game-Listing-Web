import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import { HiMiniMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { Themecontext } from "../Context/ThemeContext";

const Header = () => {
  const {theme, setTheme} = useContext(Themecontext);

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo-image" height={60} width={60} />
      <div className="flex w-full bg-slate-200 p-2 items-center rounded-full mx-5 ">
        <HiMiniMagnifyingGlass />
        <input type="text" className="bg-transparent outline-none px-2" placeholder=" search games" />
      </div>
      <div>
        {theme === 'light' ? (
          <HiMoon
            className="text-[35px] bg-slate-300 rounded-full p-1 text-black cursor-pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-300 rounded-full p-1 text-black cursor-pointer"
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
