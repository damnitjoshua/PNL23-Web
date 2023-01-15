import { Inter } from "@next/font/google";
import Image from "next/image";
import HeaderLogo from "../public/images/pln-header.png";
import MoneyLionLogo from "../public/images/MoneyLion.png";
import MainBg from "../public/images/about.png";
import HeroImg from "../public/images/hero.png";

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
		<main>
			{/* hero section  */}
			<header className="relative h-[30em] sm:h-[40em] min-h-fit flex flex-row items-center justify-center md:justify-end">
				<div className="absolute w-full h-full min-h-fit -z-10">
					<Image src={HeroImg} alt={"background"} className="absolute" fill priority style={{ objectFit: "cover" }} />
				</div>
				<div className="w-full md:w-[26em] mx-4 sm:mx-20">
					<div>
						<Image src={HeaderLogo} alt={"Earth image"} />
						<span className="flex flex-row items-center gap-1 pt-4 text-sm">
							<svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6Z"></path>
							</svg>
							Start Your Journey Now!
						</span>
					</div>
				</div>
			</header>
			{/* divider */}
			<svg width="2em" height="2em" viewBox="0 0 24 24" className="mx-auto ">
				<path
					fill="currentColor"
					d="m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13Zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7Z"></path>
			</svg>
			{/* about us  */}
			<section className="relative h-fit">
				<div className="absolute w-full h-full min-h-fit -z-10">
					<Image src={MainBg} alt={"background"} className="absolute w-full" fill style={{ objectFit: "cover" }} />
					{/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
				</div>
				<div className="flex flex-row items-center w-full h-full bg-black/30 py-[5em] sm:py-[10em]">
					<div className="container p-4 mx-auto md:px-20">
						<h1 className="text-2xl text-center md:text-3xl">ABOUT US</h1>
						<p className="text-xs text-justify md:text-base pt-7 text-white/80">
							The Programming League is an annual nationwide competitive programming competition held by the Computer Society of
							Universiti Malaya (PEKOM) starting from 2014 where teams of 3 will compete to solve algorithmic problems in the
							given time.
							<br />
							<br />
							This event invites all undergraduate students across Malaysia to tackle real-world problems and challenge other
							teams in becoming the best among the field!
							<br />
							<br />
							As the committee members of Programming League National 2022, we aim to expose university students to competitive
							programming and discover potential problem solvers to support the industry's growth as well as building a
							substantial technology ecosystem.
						</p>
					</div>
				</div>
			</section>
			{/* sponsors  */}
			<section>
				<h1 className="text-2xl text-center md:text-3xl">SPONSORS</h1>
				<div className="flex flex-col items-center gap-10 pt-10">{/* <Triangle /> */}</div>
			</section>
		</main>
	);
}
