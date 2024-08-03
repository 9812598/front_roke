import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <div className="py-8 px-4 flex justify-center items-center row-span-2  border ">
      <Link href="/">
        <Image
          src="./main/roke_logo_top.svg"
          alt="logo"
          width={220}
          height={60}
        />
      </Link>
    </div>
  );
}
