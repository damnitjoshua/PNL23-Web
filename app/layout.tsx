import "./globals.css";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Social from "../components/Social";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

const aquire = localFont({
	src: [
		{
			path: "./fonts/aquire/AquireLight-YzE0o.otf",
			weight: "300",
			style: "light",
		},
		{
			path: "./fonts/aquire/Aquire-BW0ox.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/aquire/AquireBold-8Ma60.otf",
			weight: "700",
			style: "bold",
		},
	],
	// default, can also use "swap" to ensure custom font always shows
	display: "optional",
	variable: "--font-aquire",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={aquire.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`scroll-smooth bg-black text-white`}>
				<Header />
				<main className="flex flex-col">
					<Social />
					{children}
				</main>
			</body>
		</html>
	);
}
