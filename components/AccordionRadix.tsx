"use client"
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as Accordion from "@radix-ui/react-accordion";

interface PropTypes {
	title: string;
	content: any;
}

export default async function AccordionRadix(props: PropTypes) {
	const { title, content } = props;

	return (
		<div>
			<Accordion.Root
				className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
				type="single"
				defaultValue={title}
				collapsible>
				<Accordion.Item value={title}>
					<Accordion.Header>
						{title}
						<Accordion.Trigger />
					</Accordion.Header>
					<Accordion.Content>
						{/* @ts-expect-error Server Component */}
						<MDXRemote source={content} />
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	);
}
