import React from "react";
import Image from "next/image";
import ResultsBg from "../../public/images/results-bg.svg";
import Link from "next/link";

interface resultsDataProps {
	year: number;
	category: {
		title: string;
		rounds: {
			title: string;
			id: number;
		}[];
	}[];
}

const resultData: resultsDataProps[] = [
	{
		year: 2022,
		category: [
			{
				title: "Open Category",
				rounds: [
					{ title: "Preliminary Round", id: 369819 },
					{ title: "Finale Round", id: 374766 },
				],
			},
			{
				title: "Closed Category",
				rounds: [
					{ title: "Preliminary Round", id: 370936 },
					{ title: "Finale Round", id: 374767 },
				],
			},
		],
	},
];

export default function Results() {
	return (
		<div>
			<section className="relative h-screen">
				<div className="fixed w-full h-full min-h-fit -z-10">
					<Image
						src={ResultsBg}
						alt={"background"}
						className="absolute -z-20"
						fill
						priority
						style={{ objectFit: "cover", objectPosition: "left" }}
					/>
				</div>
				<div className="fixed bottom-0 z-0 w-full p-4 text-2xl md:px-20 backdrop-blur-md bg-black/30">Results</div>
				<div className="w-full h-screen pt-10 bg-black/30">
					<div className="p-4 md:px-20">
						<div className="grid gap-4 pt-4 sm:grid-cols-2">
							<details className="cursor-pointer">
								<summary className="p-2 backdrop-blur-md bg-white/30 hover:bg-indigo-300/30">2022</summary>
								<details className="cursor-pointer">
									<summary className="p-2 pl-6 backdrop-blur-md bg-white/30 hover:bg-indigo-300/30">Open Category</summary>
									<details className="cursor-pointer">
										<summary className="p-2 pl-10 backdrop-blur-md bg-white/30 hover:bg-indigo-300/30">Rounds</summary>
										<div className="p-2 pl-14 backdrop-blur-md bg-white/30 hover:bg-indigo-300/30">
											<Link href={`/results/${369819}`}>Preliminary Round</Link>
										</div>
									</details>
								</details>
							</details>

							{/* {resultData.map((item: resultsDataProps, index: number) => (
								<Link href="" className="text-sm md:text-4xl hover:underline" key={index}>
									{">> "}
									{item.year}
									{" <<"}
								</Link>
							))} */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
