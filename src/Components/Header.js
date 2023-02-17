import React from "react";
import Navigator from "./Navigator";

function Header() {
  return (
    <header className="border-b font-bold p-3 flex justify-between items-center">
      <span className="p-3 ">Welcome best seller online shop</span>

      <Navigator />
    </header>
  );
}
export default Header;
