import React from "react";
import Image from "next/image";
import OverviewImg from "../../public/images/overview.png";

interface contentProps {
	title: string;
	paragraph: string;
}

const contents: contentProps[] = [
	{
		title: "15 March 2023",
		paragraph: "Registration Opens",
	},
	{
		title: "1st April 2023 9:00 am till 12:00 pm",
		paragraph: "Competititve Programming Workshop 1",
	},
	{
		title: "22nd April 2023 9:00 am till 12:00 pm",
		paragraph: "Competitive Programming Workshop 2",
	},
	{
		title: "1 May 2023",
		paragraph: "Registration Closes",
	},
	{
		title: "13 May 2023 8:30 am till 12:30 pm",
		paragraph: "Premilinary Round",
	},
	{
		title: "20 May 2023 8:00 am till 5:00 pm",
		paragraph: "Final Round",
	},
];

export default function Overview() {
	return (
		<div>
			<section className="relative h-screen">
				<div className="fixed w-full h-full min-h-fit -z-10">
					<Image
						src={OverviewImg}
						alt={"background"}
						className="absolute -z-20"
            fill
            priority
						style={{ objectFit: "cover", objectPosition: "left" }}
					/>
				</div>
				<div className="fixed bottom-0 z-0 w-full p-4 text-2xl md:px-20 backdrop-blur-md bg-black/30">Overview</div>
				<div className="w-full h-screen pt-10 bg-black/30">
					<div className="p-4 md:px-20">
						<div className="flex flex-col items-start justify-end gap-6 pt-4 text-sm text-justify sm:items-end sm:gap-10 md:text-base">
							{contents.map((items: contentProps, key: number) => (
								<div className="w-2/3 pl-3 border-l-4 border-white md:w-2/3" key={key}>
									<h2 className="text-base sm:text-lg">{items.title}</h2>
									<p className="text-xs text-white/80">{items.paragraph}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
