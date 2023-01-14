"use client";
import Link from "next/link";
import React, { useState } from "react";
import LogoImg from "../public/images/logo.png";
import Image from "next/image";

interface navLinkPros {
	title: string;
	link: string;
}

const navLinks: navLinkPros[] = [
	{ title: "Overview", link: "overview" },
	{ title: "FAQ", link: "faq" },
	{ title: "Results", link: "results" },
	{ title: "Announcements", link: "announcement" },
	{ title: "Rules & Regulations", link: "rules" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed top-0 z-40 w-full p-4 md:px-20 sm:flex-row backdrop-blur-md bg-black/30">
			<div className="flex flex-row items-center justify-between gap-2 mx-auto">
				<div>
					<Link href="/">
						<Image src={LogoImg} alt={"PLN"} className="w-[2em]" />
					</Link>
				</div>

				<div>
					{/* desktop */}
					<nav className="hidden text-sm sm:flex gap-x-6">
						{navLinks.map((item: navLinkPros, index: number) => (
							<Link href={item.link} key={index} className="hover:underline hover:underline-offset-4">
								{item.title}
							</Link>
						))}
					</nav>

					<button type="button" onClick={() => setIsOpen(!isOpen)} className="self-center cursor-pointer sm:hidden">
						{isOpen ? (
							<svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path>
							</svg>
						) : (
							<svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
								<path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"></path>
							</svg>
						)}
					</button>
				</div>
			</div>

			<div
				className={`${
					isOpen ? "flex h-screen" : "hidden"
				} sm:hidden flex-col items-center justify-start gap-2 pt-4 container mx-auto`}>
				{navLinks.map((item: navLinkPros, index: number) => (
					<Link
						href={item.link}
						key={index}
						onClick={() => setIsOpen(false)}
						className="py-4 hover:underline hover:underline-offset-4">
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
}
