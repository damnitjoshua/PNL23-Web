"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MainBg from "../../public/images/rules.png";
import { rulesData } from "../../data/rules";
import { GraphQLClient } from "graphql-request";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as Accordion from "@radix-ui/react-accordion";
import AccordionRadix from "../../components/AccordionRadix";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// async function getRules() {
// 	const hygraph: any = new GraphQLClient("https://ap-northeast-1.cdn.hygraph.com/content/clffi6gru1r7f01te7njwb2fz/master");

// 	const { rules } = await hygraph.request(
// 		`
//       {
//         rules {
//           id
//           title
//           updatedAt
//           content {
//             markdown
//             html
//           }
//         }
//       }
//     `
// 	);

// 	return rules;
// }

export default function Rules() {
	// const rules: any = await getRules();
	const [rules, setRules] = useState([]);

	useEffect(() => {
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
              text
            }
          }
        }
	    `
			);

			setRules(rules);
		}
		getRules();
	}, [rules]);

	return (
		<div className="pt-[3em] font-aquire">
			<header className="fixed z-30 flex h-screen w-fit flex-col tems-end justify-center self-end pl-4 pb-[5em] ">
				<h1 className="relative left-[-5.3em] hidden -rotate-90 text-[20px] md:block lg:text-[50px]">Rules & Regulations</h1>
			</header>
			<section className="mx-[3em] mt-10 flex h-fit min-h-[100vh] flex-col lg:mx-[8em]">
				<div className="absolute left-0 w-full h-full top-10 -z-10 min-h-fit">
					<Image
						src={MainBg}
						alt={"background"}
						className="fixed w-full scale-120 md:scale-100 "
						fill
						style={{ objectFit: "cover" }}
					/>
					{/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
				</div>
				<h1 className=" mb-10 block text-center text-[30px] md:hidden">Rules & Regulations</h1>

				<Accordion.Root className="w-full rounded-md shadow-[0_2px_10px] shadow-black/5 z-10" type="single" collapsible>
					{rules.map((item: any) => (
						<Accordion.Item
              value={item.id}
              key={item.id}
							className="w-full border">
							<Accordion.Trigger className="w-full p-3">
								{item.title}
							</Accordion.Trigger>
							<Accordion.Content className="w-full p-3">
								<ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content.markdown}</ReactMarkdown>
								{/* {item.content.text} */}

								{/* <MDXRemote source={item.content.text} /> */}
							</Accordion.Content>
						</Accordion.Item>
					))}
				</Accordion.Root>
			</section>
		</div>
	);
}
