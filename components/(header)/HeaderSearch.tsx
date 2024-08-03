import React from "react";
import { CiSearch } from "react-icons/ci";

export default function HeaderSearch() {
  return (
    <div className="block h-full border">
      <form action="" className="flex justify-between items-center h-full">
        <input
          placeholder="Что вы хотите найти?"
          className="flex-1 h-full py-3 px-7"
        ></input>
        <button type="submit" className="px-4 w-[70px] h-full">
          <CiSearch className="w-[24px] h-[24px]" />
        </button>
      </form>
    </div>
  );
}
