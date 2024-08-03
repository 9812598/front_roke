import React from "react";

export default function FooterMenu() {
  return (
    <nav>
      <ul className="grid grid-cols-1 place-content-stretch h-full place-items-start">
        <li className="">О компании</li>
        <li className="">Каталог</li>
        <li className="">PDF-каталог</li>
        <li className="">Оплата/Доставка</li>
        <li className="">Документы</li>
      </ul>
    </nav>
  );
}
