import "./globals.css";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Social from "../components/Social";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`${inter.className} scroll-smooth bg-black text-white`}>
				<Header />
				<main className="flex flex-col pt-[3.6em]">
					<Social />
					{children}
				</main>
			</body>
		</html>
	);
}
