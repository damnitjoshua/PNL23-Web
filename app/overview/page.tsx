import React from "react";
import Image from "next/image";
import OverviewImg from "../../public/images/overview.png";

interface contentProps {
	title: string;
	paragraph: string;
}

const contents: contentProps[] = [{ title: "This is a tile", paragraph: "dede de jdidioiodhh hdeiuwhiduehw dededew dededf " }];

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
						<div className="flex flex-col items-end justify-end gap-4 pt-4 text-sm text-justify md:text-base">
							{contents.map((items: contentProps, key: number) => (
								<div className="w-full md:w-2/3" key={key}>
									<h2 className="text-lg">{items.title}</h2>
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
