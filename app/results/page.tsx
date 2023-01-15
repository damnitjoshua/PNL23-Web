import React from "react";

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

async function ResultsPage() {
  const data = await getData();
  const problems = data.result.problems;
  const contestants = data.result.rows;
  console.log(problems);

  return (
    <div className="w-screen h-screen bg-black p-3 sm:p-24">
      <h1 className="font-rajdhani text-3xl">
        &gt;&gt; PLN Closed Category Preliminary Round
      </h1>
      <table className="table-fixed w-full">
        <thead className="bg-white bg-opacity-25 h-12">
          <tr>
            <th className="rounded-l-lg">#</th>
            <th className="text-left sm:w-3/12">TEAM</th>
            <th>=</th>
            <th>PENALTY</th>
            {problems.map(({ index }) => {
              return <th key={index}>{index}</th>;
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
              <tr
                key={contestant.party.members[0].handle}
                className="bg-white bg-opacity-25 h-12"
              >
                <td className={`text-center ${roundedProperties}`}>
                  {contestant.rank}
                </td>
                <td>
                  {contestant.party.teamName
                    ? contestant.party.teamName
                    : contestant.party.members[0].handle}
                </td>
                <td className={`text-center ${roundedProperties}`}>
                  {
                    contestant.problemResults.filter(
                      (problem) =>
                        problem.bestSubmissionTimeSeconds !== undefined
                    ).length
                  }
                </td>
                <td className={`text-center ${roundedProperties}`}>
                  {contestant.penalty}
                </td>
                {contestant.problemResults.map((problemResult, index) => {
                  return (
                    <td
                      key={index}
                      className={`text-center ${roundedProperties}`}
                    >
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
  );
}

async function getData(): Promise<CodeForcesApiResponse> {
  const res = await fetch(
    "https://codeforces.com/api/contest.standings?contestId=566&from=1&count=10&showUnofficial=true"
  );
  return res.json();
}

export default ResultsPage;
