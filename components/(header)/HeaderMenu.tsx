import React from "react";

export default function HeaderMenu() {
  return (
    <nav className="col-span-2  border ">
      <ul className="grid grid-cols-5 place-content-stretch h-full place-items-center">
        <li className="">О компании</li>
        <li className="">Новости</li>
        {/* <li className="">Производство</li> */}
        <li className="">Оплата/Доставка</li>
        <li className="">Документы</li>
        {/* <li className="">Аналоги</li>
        <li className="">Отзывы</li> */}
        <li className="">Контакты</li>
      </ul>
    </nav>
  );
}
