import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderInfo from "./HeaderInfo";
import HeaderSubMenu from "./HeaderSubMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <div className="grid border border-t-0 mx-4 grid-cols-4">
      <HeaderLogo />
      <HeaderMenu />
      <HeaderInfo />
      <HeaderSubMenu />
      <HeaderSearch />
      <HeaderActions />
    </div>
  );
}
