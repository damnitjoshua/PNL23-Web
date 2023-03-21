import React from "react";
import Image from "next/image";
import MainBg from "../../public/images/rules.png";
import { rulesData } from "../../data/rules";
import { GraphQLClient } from "graphql-request";
import { MDXRemote } from "next-mdx-remote/rsc";

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

export default async function Rules() {
	const rules: any = await getRules();

	return (
		<div className="font-aquire pt-[3em]">
			<header className="fixed z-30 flex h-screen w-fit flex-col items-end justify-center self-end pl-4 pb-[5em] ">
				<h1 className="relative left-[-5.3em] hidden md:block -rotate-90 lg:text-[50px] text-[20px]">Rules & Regulations</h1>
			</header>
			<section className="lg:mx-[8em] mx-[3em] mt-10 flex min-h-[100vh] h-fit flex-col items-end justify-center">
				<div className="absolute left-0 w-full h-full top-10 min-h-fit -z-10">
					<Image
						src={MainBg}
						alt={"background"}
						className="fixed w-full scale-120 md:scale-100 "
						fill
						style={{ objectFit: "cover" }}
					/>
					{/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
				</div>
				<h1 className="md:hidden block m-auto text-center text-[30px] mb-10">Rules & Regulations</h1>
				{rules.map((item: any) => (
					<div key={item.id} className="mb-[4em] md:ml-[5vw] mr-10 md:mr-[5vw] [&>ol]:list-decimal [&>ol]:pb-5">
						<h1 className="lg:text-[35px]">{item.title}</h1>
						{/* @ts-expect-error Server Component */}
						<MDXRemote source={item.content.markdown} />
					</div>
				))}
			</section>
		</div>
	);
}
