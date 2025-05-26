"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tenor_Sans, Cardo } from 'next/font/google';

const tenor = Tenor_Sans({ subsets: ['latin'], weight: ['400'] });
const cardo = Cardo({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-5xl w-full space-y-10 text-[#333]">
        
        {/* Avatar + Intro Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <Image
            src="/avatar.png" // Assumes it's in the public folder
            alt="Okechukwu Joshua Avatar"
            width={140}
            height={140}
            className="rounded-full border-4 border-[#AB274F]"
          />
          <div>
            <h1 className={`text-5xl sm:text-7xl font-semibold text-[#2B1A2F] ${cardo.className}`}>
              Okechukwu Joshua Onyedikachi
            </h1>
            <p className={`mt-4 text-lg sm:text-xl max-w-3xl ${tenor.className}`}>
              Cloud & DevOps Engineer | Terraform, Kubernetes, Azure & AWS | Infrastructure as Code | Monitoring & CI/CD
            </p>
          </div>
        </div>

        {/* Summary */}
        <div>
          <p className={`text-base sm:text-lg max-w-3xl ${tenor.className}`}>
            I build scalable cloud architectures, automate deployments, and monitor systems for performance and reliability. 
            Passionate about simplifying complexity with clean infrastructure code and DevOps best practices.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link href="https://drive.google.com/file/d/1wBzQvNF1tiyh3EgnT-WKtSFVAZzJnJMS/view?usp=drive_link" className="bg-[#AB274F] text-white px-5 py-3 rounded-lg text-sm sm:text-base hover:bg-[#922043] transition">
            My CV for Download
          </Link>
          <Link href="https://github.com/KingMicky" className="border-2 border-[#AB274F] text-[#AB274F] px-5 py-3 rounded-lg text-sm sm:text-base hover:bg-[#AB274F] hover:text-white transition">
            View My Projects
          </Link>
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-[#ddd]">
          <p className={`text-sm ${tenor.className}`}>
            Currently learning German 🇩🇪 | Open to remote or on-site roles in DevOps or Cloud Engineering 🚀
          </p>
        </div>
      </div>
    </motion.div>
  );
}
