import React from "react";
import Link from "next/link";

export default function HeaderInfo() {
  return (
    <ul className="grid grid-cols-2  place-content-stretch ">
      <Link href={"tel:+78123098600"} className="place-content-stretch grid">
        <li className=" border grid place-items-center ">+7 (812) 309-86-00</li>
      </Link>
      <Link href="mailto:info@roke.com" className="place-content-stretch grid">
        <li className=" border grid place-items-center ">info@roke.com</li>
      </Link>
    </ul>
  );
}
