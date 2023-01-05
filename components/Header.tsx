import Link from "next/link";
import React from "react";

interface navLinkPros {
	title: string;
	link: string;
}

const navLinks: navLinkPros[] = [
	{ title: "Overview", link: "Overview" },
	{ title: "FAQ", link: "Overview" },
	{ title: "Results", link: "Overview" },
	{ title: "Announcements", link: "Overview" },
	{ title: "Rules & Regulations", link: "Overview" },
];

export default function Header() {
  return (
		<div className="py-6 backdrop-blur-md bg-black/30 fixed w-full top-0 z-20">
			<nav className="flex flex-row items-center gap-x-6 justify-end container mx-auto">
				{navLinks.map((item: navLinkPros, index: number) => (
					<Link href={item.link} key={index} className="hover:underline hover:underline-offset-4">
						{item.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
