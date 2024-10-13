import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from 'next/image';
import Menu from '@/components/Menu';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">

      {/* LEFT PANEL */}
      <div className='w-[15%] md:w-[8%]  lg:w-[16%] xl:w-[14%] p-4'>
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School App</span>
        </Link>
        <Menu/>
      </div>
      
      {/* RIGHT PANEL */}
      <div className='w-[85%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-slate-50'></div>
    </div>;
    
}
