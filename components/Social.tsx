import Link from "next/link";
import React from "react";

const size: number[] = [1.8, 1.8];

export default function Social() {
	return (
		<div className="fixed z-30 flex flex-col items-end self-end justify-center h-screen gap-2 pr-4 w-fit">
			<Link href="https://www.instagram.com/programmingleague/" className="p-1 text-black bg-white rounded-full">
				<svg width={size[0] + "em"} height={size[1] + "em"} viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path>
				</svg>
			</Link>
			<Link href="https://www.facebook.com/programmingleague" className="p-1 text-black bg-white rounded-full">
				<svg width={size[0] + "em"} height={size[1] + "em"} viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"></path>
				</svg>
			</Link>
		</div>
	);
}
