import Link from "next/link";
import { Cardo } from 'next/font/google';

import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Footer() {
  return (
    <footer className="w-full px-6 py-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 dark:border-[#333]">
      <h1 className={`text-sm sm:text-base mb-3 sm:mb-0 text-gray-800 dark:text-gray-300 ${cardo.className}`}>
        get in touch with me:
      </h1>
      <div className="flex space-x-4 items-center">
        <Link href="mailto:onyedikachi0813@gmail.com" passHref>
          <span className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition">
            <MdOutlineMail size={24} className="text-[#5B3256] hover:text-[#B284BE]" />
          </span>
        </Link>
        <Link href="https://github.com/KingMicky" target="_blank" rel="noopener noreferrer">
          <span className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition">
            <FaGithub size={22} className="text-[#5B3256] hover:text-[#B284BE]" />
          </span>
        </Link>
        <Link href="https://x.com/kaacchhii" target="_blank" rel="noopener noreferrer">
          <span className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition">
            <FaXTwitter size={22} className="text-[#5B3256] hover:text-[#B284BE]" />
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/onyedikachiokechukwu/" target="_blank" rel="noopener noreferrer">
          <span className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition">
            <FaLinkedinIn size={22} className="text-[#5B3256] hover:text-[#B284BE]" />
          </span>
        </Link>
      </div>
    </footer>
  );
}
