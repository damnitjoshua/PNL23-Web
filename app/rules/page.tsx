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

export default function Rules() {
	const [rules, setRules] = useState([]);

	useEffect(() => {
		async function getRules() {
			const hygraph: any = new GraphQLClient("https://ap-northeast-1.cdn.hygraph.com/content/clffi6gru1r7f01te7njwb2fz/master");

			const { rules } = await hygraph.request(
				`
        {
          rules(first: 50) {
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
	}, []);

	return (
		<div className="py-[3em] font-aquire">
			<header className="fixed z-30 flex h-screen w-fit flex-col items-end justify-center self-end pl-4 pb-[5em] ">
				<h1 className="relative left-[-5.3em] hidden -rotate-90 text-[20px] md:block lg:text-[50px]">Rules & Regulations</h1>
			</header>
			<section className="mx-[1.3em] mt-10 flex h-fit min-h-[100vh] flex-col lg:mx-[8em]">
				<div className="fixed top-0 left-0 w-full h-full -z-10 min-h-fit">
					<Image
						src={MainBg}
						alt={"background"}
						className="fixed w-full scale-120 md:scale-100 "
						fill
						style={{ objectFit: "cover" }}
					/>
					{/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
				</div>
				<h1 className="block mb-10 text-2xl text-center md:hidden">Rules & Regulations</h1>

				<Accordion.Root className="z-10 flex flex-col w-full gap-2" type="multiple">
					{rules.map((item: any) => (
						<Accordion.Item
							value={item.id}
							key={item.id}
							className="w-full border rounded-md overflow-clip backdrop-blur-md bg-black/30">
							<Accordion.Trigger className="w-full p-3 tex-sm">{item.title}</Accordion.Trigger>
							<Accordion.Content className="w-full p-3 bg-black">
								<ReactMarkdown
									remarkPlugins={[remarkGfm]}
									className="[&>ul]:list-disc [&>ol]:list-decimal [&>ul]:list-inside [&>ol]:list-inside [&>p]:pt-2 flex flex-col text-xs leading-loose">
									{item.content.markdown}
								</ReactMarkdown>
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
