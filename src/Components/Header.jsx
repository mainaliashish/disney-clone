import { useState } from "react";
import logo from "../assets/images/logo.svg";
import userLogo from "../assets/images/userLogoOne.png";
import { HiDotsVertical, MENU } from "../utils/constants";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="logo-Image"
          className="w-[70px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {MENU.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {MENU.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical}/>
            {toggle && (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
              {MENU.map(
                (item, index) =>
                  index > 3 && (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                  )
              )}
            </div>
            )}
          </div>
        </div>
      </div>
      <img className="w-[40px] rounded-md mr-3" alt="userLogo" src={userLogo} />
    </div>
  );
};
export default Header;
