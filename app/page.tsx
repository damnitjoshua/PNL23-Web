/* eslint-disable react/no-unescaped-entities */
import { Inter } from "@next/font/google";
import Image from "next/image";
import HeaderLogo from "../public/images/pln-header.png";
import MoneyLionLogo from "../public/images/MoneyLion.png";
import MainBg from "../public/images/about.png";
import HeroImg from "../public/images/hero.png";
import TCImage from "../public/images/TECHCLUB.png";
import PEKOMImage from "../public/images/PEKOM.png";
import MUMTECImage from "../public/images/MUMTEC.png";
import APACImage from "../public/images/APAC.png";
import CSSTARImage from "../public/images/CSSTAR.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const sponsors = [{ img: MoneyLionLogo, alt: "Money Lion" }];

export default function Home() {
	let rows: any = [];

	function Triangle() {
		let currentValue = 2;
		for (let i = 1; i <= 3; i++) {
			const images = [];
			for (let j = 1; j <= currentValue; j++) {
				let width = 500 / currentValue;
				images.push(<Image src={MoneyLionLogo} alt="image" width={width} className={`aspect-square`} />);
			}
			rows.push(
				<div key={i} className="flex flex-row items-center gap-10 overflow-scroll">
					{images}
				</div>
			);
			currentValue *= 2;
		}
		return rows;
	}

	return (
		<div className="pb-[5em]">
			{/* hero section  */}
			<header className="relative h-[30em] sm:h-[40em] min-h-fit flex flex-row items-center justify-center md:justify-end">
				<div className="absolute w-full h-full min-h-fit -z-10">
					<Image src={HeroImg} alt={"background"} className="absolute" fill priority style={{ objectFit: "cover" }} />
				</div>
				<div className="w-full md:w-[26em] mx-4 sm:mx-20">
					<div className="flex flex-col items-start">
						<Image src={HeaderLogo} alt={"Earth image"} />
						<span className="flex flex-row items-center gap-1 pt-4 mb-10 text-sm md:text-lg font-rajdhani">
							<svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6Z"></path>
							</svg>
							Start Your Journey Now!
						</span>
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLSc3EfRWnE90hugRqv_h9D9p7FsGqCm7-XH5Vltdx8KlO1e46w/viewform?usp=sharing"
							target={"_blank"}
							className="px-4 py-2 text-sm rounded backdrop-blur-md bg-white/30 md:text-lg hover:bg-white hover:text-black">
							Register Now!
						</Link>
					</div>
				</div>
			</header>
			{/* about us  */}
			<section className="relative h-fit">
				<div className="absolute w-full h-full min-h-fit -z-10">
					<Image src={MainBg} alt={"background"} className="absolute w-full" fill style={{ objectFit: "cover" }} />
					{/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
				</div>
				{/* divider */}
				<svg width="2em" height="2em" viewBox="0 0 24 24" className="mx-auto ">
					<path
						fill="currentColor"
						d="m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13Zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7Z"></path>
				</svg>
				<div className="flex flex-row items-center w-full h-full bg-black/30 py-[5em] sm:py-[10em]">
					<div className="container p-4 mx-auto md:px-20">
						<h1 className="text-2xl text-center md:text-3xl">ABOUT US</h1>
						<p className="text-sm text-justify md:text-lg pt-7 text-white/80 font-rajdhani">
							The Programming League is an annual nationwide competitive programming competition held by the Computer Society of
							Universiti Malaya (PEKOM) starting from 2014 where teams of 3 will compete to solve algorithmic problems in the
							given time.
							<br />
							<br />
							This event invites all undergraduate students across Malaysia to tackle real-world problems and challenge other
							teams in becoming the best among the field!
							<br />
							<br />
							As the committee members of Programming League National 2023, we aim to expose university students to competitive
							programming and discover potential problem solvers to support the industry's growth as well as building a
							substantial technology ecosystem.
						</p>
					</div>
				</div>
			</section>
			{/* sponsors  */}

			{/* media collab  */}
			<section className="px-2">
				<h1 className="pb-10 text-2xl text-center md:text-3xl">MEDIA COLLABORATORS</h1>
				<div className="flex flex-row flex-wrap items-center justify-center gap-10">
					<Image src={TCImage} alt={"XTECH"} className="w-[5em]" />
					<Image src={CSSTARImage} alt={"CSS TAR"} className="w-[10em]" />
					<Image src={MUMTECImage} alt={"MUMTEC"} className="w-[10em] bg-white p-2" />
					<Image src={APACImage} alt={"APAC"} className="w-[10em]" />
				</div>
			</section>
		</div>
	);
}
