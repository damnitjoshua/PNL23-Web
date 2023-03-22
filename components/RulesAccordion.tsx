import React from 'react'
import { MDXRemote } from "next-mdx-remote/rsc";
import { GraphQLClient } from 'graphql-request';

async function getRules() {
	const hygraph: any = new GraphQLClient("https://ap-northeast-1.cdn.hygraph.com/content/clffi6gru1r7f01te7njwb2fz/master");

	const { rules } = await hygraph.request(
		`
      {
        rules {
          id
          title
          updatedAt
          content {
            markdown
            html
          }
        }
      }
    `
	);

	return rules;
}

export default async function RulesAccordion() {
  const rules: any = await getRules();
  
  return (
		<div>
			{rules.map((item: any) => (
				<details
					key={item.id}
					className="w-full min-w-0 bg-white border rounded-t-lg border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800">
					<summary className="w-full mb-0">{item.title}</summary>
					{/* @ts-expect-error Server Component */}
					<MDXRemote source={item.content.markdown} />
				</details>
			))}
		</div>
	);
}
