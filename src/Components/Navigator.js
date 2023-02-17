import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from "./NavigationMenu";
function Navigator() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  let menuMask;
  if (showMenu) {
    menu = (
    <NavigationMenu closeMenu={()=>{setShowMenu(false)}}/>
    );
    menuMask = (
      <div
        className="bg-black-t-50  fixed top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(false)}
      >
        {" "}
      </div>
    );
  }
  return (
    <nav className="text-xl">
      <span>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {menuMask}
      {menu}
    </nav>
  );
}
export default Navigator;
