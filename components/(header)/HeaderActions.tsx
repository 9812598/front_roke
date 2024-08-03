import React from "react";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function HeaderActions() {
  return (
    <div className="grid auto-cols-auto grid-flow-col ">
      <div className="flex-1 flex justify-center items-center  border">
        <CiHeart className="w-[24px] h-[24px]" />
      </div>
      <div className="flex-1 flex justify-center items-center border">
        <CiShoppingCart className="w-[24px] h-[24px]" />
      </div>
      <div className="flex-1 flex justify-center items-center border">
        <CiUser className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
}
