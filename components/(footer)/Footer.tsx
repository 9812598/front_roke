import React from "react";
import FooterMenu from "./FooterMenu";
import FooterMenu2 from "./FooterMenu2";
import FooterLegal from "./FooterLegal";
import FooterCopyright from "./FooterCopyright";
import FooterAddress from "./FooterAddress";

export default function Footer() {
  return (
    <div className="m-5 p-7 bg-[hsl(var(--roke-bg-dark))]">
      <div className="grid grid-cols-2  text-[hsl(var(--roke-white))] ">
        <FooterAddress />
        <div className="grid grid-cols-4 place-items-start">
          <FooterMenu />
          <FooterMenu2 />
        </div>
        <h5 className="col-span-2 text-center">info@roke.com</h5>
        <FooterLegal />
        <FooterCopyright />
      </div>
    </div>
  );
}
