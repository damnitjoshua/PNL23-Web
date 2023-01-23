import React from "react";
import Image from "next/image";
import ResultsBg from "../../public/images/results-bg.svg";
import Link from "next/link";
import BottomTitleLayout from "../../layouts/BottomTitleLayout";

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
			<BottomTitleLayout props={{ title: `Results`, bgImage: ResultsBg }}>
				<div className="flex flex-col items-center gap-6">
					{resultData.map((item: resultsDataProps, index: number) => (
						<Link href={`/results/${item.year}`} className="text-sm md:text-4xl hover:underline" key={index}>
							{">> "}
							{item.year}
							{" <<"}
						</Link>
					))}
				</div>
			</BottomTitleLayout>
		</div>
	);
}
