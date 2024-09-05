"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY_SHORT_NAME } from "@/lib/constants";
import { SheetMenu } from "./sheet-menu";
import UserMenu from "./user-menu";
import { Infinity } from "lucide-react";

export const MenuItem = ({
  item,
  href,
}: {
  item: string;
  href: string;
}) => {
  return (
	<Link href={href}>
	  <p className="duration-200 font-semibold text-lg hover:text-primary/60 dark:hover:text-primary-light">
		{item}
	  </p>
	</Link>
  );
};

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
	const [scrolled, setScrolled] = useState(false);
	const [ isMobile, setIsMobile ] = React.useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY > 50) setScrolled(true);
			else setScrolled(false);
		};

		if (window.innerWidth < 768) setIsMobile(true);

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

  return (
	<motion.nav
	  transition={{ duration: 0.3 }}
	  className={`fixed z-[50] max-w-[1420px] w-11/12 left-1/2 -translate-x-1/2 translate-y-4 rounded-full border border-transparent shadow-input flex items-center justify-between px-8 py-6 ease-out duration-500 ${
		scrolled ? 'bg-gray-100 dark:bg-[#1C1C1C] border-transparent !max-w-[80dvw] px-3 py-[12px] shadow-md' : 'bg-transparent'
	  }`}
	>
	  {/* Brand logo or name */}
	  <div className="flex-shrink-0">
		<a href="/" className={`flex items-center text-lg font-bold`}>
	  		<Infinity size={24} className="mr-3"/>

			{COMPANY_SHORT_NAME}
		</a>
	  </div>

	  {/* Centered menu items */}
	  { isMobile ? (
		<></>
	  ) : (
		<div className="-ml-18 flex justify-center space-x-10 flex-shrink-0">
		  {children}
		</div>
	  )}

	  <div className="flex-shrink-0">
		{ isMobile ? (
			<SheetMenu>
				{children}
			</SheetMenu>
		) : (
			<UserMenu/>
		)}
	  </div>
	</motion.nav>
  );
};