import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex justify-between px-10 h-[80px] items-center bg-black text-white">
      <div>Close</div>
      <div>
        <ul className="flex gap-8">
          <div className="flex items-center gap-3">
            <li>Product</li>
            <MdKeyboardArrowDown />
          </div>
          <li>Pricing</li>
          <li>Blog</li>
          <div className="flex items-center gap-3">
            <li>Resources</li>
            <MdKeyboardArrowDown />
          </div>
          <li>About</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-8 items-center">
          <li>Log in</li>
          <li className="bg-[#d61549] rounded-3xl p-3 px-4">Try Close</li>
          <li className="bg-[#d61549] rounded-3xl p-3 px-4">See Demo</li>
        </ul>
      </div>
    </div>
  );
}
