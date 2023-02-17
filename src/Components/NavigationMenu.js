import React from "react";

import { Link } from "react-router-dom"; 
function NavigationMenu(props) {
  return (

    <div className="   fixed bg-white  top-0 left-0 w-5/6 h-full z-50 shadow  rounded-r-3xl ">
    <div className="font-bold p-3 text-[#012454] bg-[] ">THIS IS MENU</div>
    <ul className="bg-[#012454]">
      <li>
        <Link
          to="/"
          className="text-white  p-3 border-t border-b block"
          onClick={props.closeMenu}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-white p-3  border-t border-b block"
          onClick={props.closeMenu}
        >
          ABOUT
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default NavigationMenu;
