import React from "react";
import crypto from "crypto";
import Image from "next/image";
import ResultsBg from "../../../../../public/images/results-bg.svg";
import { resultData, resultsDataProps } from "../../../../../data/results";

interface CodeForcesApiResponse {
	status: string;
	result: {
		contest: {
			id: number;
			name: string;
			description?: string;
			preparedBy?: string;
			type: string;
			phase: string;
			frozen: boolean;
			durationSeconds: number;
			relativeTimeSeconds?: number;
			startTimeSeconds?: number;
		};
		problems: {
			contestId?: number;
			problemsetName?: string;
			index: string;
			name: string;
			type: string;
			points?: number;
			rating?: number;
			tags: string[];
		}[];
		rows: {
			party: {
				contestId: number;
				ghost: boolean;
				members: { handle: string; name?: string }[];
				participantType: string;
				startTimeSeconds?: number;
				teamId?: number;
				teamName?: string;
			};
			penalty: number;
			points: number;
			problemResults: {
				points: number;
				rejectedAttemptCount: number;
				type: string;
				bestSubmissionTimeSeconds?: number;
			}[];
			rank: number;
			successfulHackCount: number;
			unsuccessfulHackCount: number;
		}[];
	};
}

export const revalidate = 60;

async function getData(contestId: string): Promise<CodeForcesApiResponse> {
	const currentTime = Math.floor(Date.now() / 1000);
	const apiKey = process.env.APIKEY;
	const secret = process.env.SECRET;
	const randomSixDigit = Math.floor(100000 + Math.random() * 900000);
	const lexQuery = `contest.standings?apiKey=${apiKey}&contestId=${contestId}&count=10&from=1&time=${currentTime}`;
	const apiSig = crypto.createHash("sha512").update(`${randomSixDigit}/${lexQuery}#${secret}`).digest("hex");
	const res = await fetch(`https://codeforces.com/api/${lexQuery}&apiSig=${randomSixDigit}${apiSig}`);
	return res.json();
}

// export async function generateStaticParams() {
// 	const ids: string[] = ["370936", "369819", "374767"];

// 	return ids.map((id) => ({
// 		roundId: id,
// 	}));
// }

export function generateStaticParams() {
	let years: string[] = [];
	let params: any[] = [];

	resultData.map((result) => {
		years.push(result.year.toString());
	});

	years.map((year) => {
		let res = resultData.find((result) => result.year.toString().match(year));

		res?.category.map((category) => {
			category.rounds.map((round) => {
				params.push({
					roundId: round.id.toString(),
					categoryId: category.title.replace(" ", "%20"),
					yearId: year,
				});
			});
		});
  });

	return params;

	// return resultData.map((result) => ({
	// 	yearId: result.year.toString(),
	// 	categoryId: resultData.find((result) => result.year.toString().match(result.year.toString()))?.category,
	// 	roundId: "s",
	// }));
}

async function Page({ params }: { params: { categoryId: string; yearId: string; roundId: string } }) {
	const { categoryId, yearId, roundId } = params;
	const data = await getData(roundId);
	const problems = data.result.problems;
	const contestants = data.result.rows;

	return (
		<div className="w-full h-screen p-3 bg-black sm:p-24">
			<Image src={ResultsBg} alt={"Results Earth Image"} className="z-10" fill style={{ objectFit: "cover" }} />
			<div className="relative z-20">
				<h1 className="mb-8 text-3xl font-rajdhani">&gt;&gt; {data.result.contest.name}</h1>
				<table className="w-full overflow-x-scroll table-fixed">
					<thead className="h-12 bg-white bg-opacity-25">
						<tr>
							<th className="rounded-l-lg">#</th>
							<th className="text-left sm:w-4/12">TEAM</th>
							<th>=</th>
							<th>PENALTY</th>
							{problems.map(({ index }, idx) => {
								return (
									<th key={index} className={idx == problems.length - 1 ? "rounded-r-lg" : ""}>
										{index}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody className="">
						<tr className="h-5">
							<td className=""></td>
						</tr>
						{contestants.map((contestant, index) => {
							let roundedProperties = "";
							if (index === 0) {
								roundedProperties = "first:rounded-tl-lg last:rounded-tr-lg";
							} else if (index === contestants.length - 1) {
								roundedProperties = "first:rounded-bl-lg last:rounded-br-lg";
							}
							return (
								<tr key={contestant.party.members[0].handle} className="h-12 bg-white bg-opacity-25">
									<td className={`text-center ${roundedProperties}`}>{contestant.rank}</td>
									<td className="break-words">
										{contestant.party.teamName ? contestant.party.teamName : contestant.party.members[0].handle}
									</td>
									<td className={`text-center ${roundedProperties}`}>
										{contestant.problemResults.filter((problem) => problem.bestSubmissionTimeSeconds !== undefined).length}
									</td>
									<td className={`text-center ${roundedProperties}`}>{contestant.penalty}</td>
									{contestant.problemResults.map((problemResult, index) => {
										return (
											<td key={index} className={`text-center ${roundedProperties}`}>
												{problemResult.points}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Page;
