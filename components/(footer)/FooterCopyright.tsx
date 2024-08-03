import React from "react";
import Link from "next/link";

export default function FooterCopyright() {
  return (
    <p className="text-[hsl(var(--roke-text-grey))] text-right">
      Разработка сайта <Link href="#">sokolagency.ru</Link>
    </p>
  );
}
