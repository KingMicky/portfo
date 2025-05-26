"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tenor_Sans, Cardo } from "next/font/google";

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navigation() {
  const pathName = usePathname();

  const navItems = [
    { name: "home", href: "/" },
  ];

  return (
    <nav className="w-full px-6 sm:px-20 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div>
        <h1 className={`text-3xl sm:text-4xl text-[#614051] dark:text-[#F1DDCF] ${tenor.className}`}>
          Okechukwu Joshua Onyedikachi
        </h1>
        <h2 className={`text-[#222] dark:text-[#aaa] text-sm ${cardo.className}`}>
          Cloud & DevOps Engineer
        </h2>
      </div>

      <div className={`flex gap-8 text-lg ${tenor.className}`}>
        {navItems.map((item) => {
          const isActive = pathName === item.href;
          return (
            <div key={item.name} className="relative group">
              <Link href={item.href}>
                <span
                  className={`cursor-pointer transition-colors ${
                    isActive
                      ? "text-[#AB274F] font-semibold"
                      : "text-[#614051] dark:text-[#ddd] font-light"
                  } hover:text-[#AB274F]`}
                >
                  {item.name}
                </span>
              </Link>
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#AB274F]" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}