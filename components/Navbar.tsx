'use client'
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("About Me");
  const menuItems = ["About Me", "Experiences", "Recommended"];

  // find where the active item is to position the pill
  const activeIndex = menuItems.indexOf(active);
  const highlightLeft = `${activeIndex * 202}px`; // (195px width + 7px spacing)

  return (
    <div className="relative w-[614px] h-[62px] rounded-[23px] bg-[#171717] text-white flex justify-center items-center">
      <div className="relative w-[597px] h-[49px]">
        {/* 🔹 Moving pill background */}
        <div
          className="absolute top-0 h-[49px] w-[195px] bg-[#2a2c30] rounded-[16px] transition-all duration-500 ease-in-out shadow-[0_40px_30px_-10px_rgba(0,0,0,0.7),0_-40px_60px_-22px_rgba(255,255,255,0.4)]"
          style={{ left: highlightLeft }}
        ></div>

        {/* 🔸 Navigation text and hover effect */}
        <nav className="relative z-10">
          <ul className="flex items-center justify-between text-[18px] text-center font-medium ">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`relative cursor-pointer w-[195px] h-[49px] rounded-[16px] flex justify-center items-center overflow-hidden group `}
              >
                {/* Text */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    active === item ? "text-white" : "text-gray-500"
                  }`}
                >
                  {item}
                </span>

                {/* Hover animation layer (left → right) */}
                <span
                  className={`absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#5a5a5a]/6 to-[#c0c2c5]/6 transition-all duration-200 ease-out group-hover:w-full`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
