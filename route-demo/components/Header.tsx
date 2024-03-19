// components/Header.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerList = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

function Header() {
  const pathName = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col justify-center items-start md:flex-row gap-5 pt-10">
      {headerList.map((link) => {
        const isActive = pathName == link.href;
        return (
          <li
            key={link.href}
            className={`${
              isActive && "text-green-500"
            } flex-center whitespace-nowrap font-semibold`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Header;
