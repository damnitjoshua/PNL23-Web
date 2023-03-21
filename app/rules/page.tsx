import React from "react";
import Image from "next/image";
import MainBg from "../../public/images/rules.png";
import { rulesData } from "../../data/rules";
import { GraphQLClient } from "graphql-request";
import { MDXRemote } from "next-mdx-remote/rsc";

async function getRules() {
  const hygraph: any = new GraphQLClient(
    "https://ap-northeast-1.cdn.hygraph.com/content/clffi6gru1r7f01te7njwb2fz/master"
  );

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
    <div className="pt-[3em] font-aquire">
      <header className="fixed z-30 flex h-screen w-fit flex-col items-end justify-center self-end pl-4 pb-[5em] ">
        <h1 className="relative left-[-5.3em] hidden -rotate-90 text-[20px] md:block lg:text-[50px]">
          Rules & Regulations
        </h1>
      </header>
      <section className="mx-[3em] mt-10 flex h-fit min-h-[100vh] flex-col items-end justify-center lg:mx-[8em]">
        <div className="absolute left-0 top-10 -z-10 h-full min-h-fit w-full">
          <Image
            src={MainBg}
            alt={"background"}
            className="scale-120 fixed w-full md:scale-100 "
            fill
            style={{ objectFit: "cover" }}
          />
          {/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
        </div>
        <h1 className="m-auto mb-10 block text-center text-[30px] md:hidden">
          Rules & Regulations
        </h1>

        <div id="accordionExample" className="w-full" data-accordion="collapse">
          {rules.map((item: any) => (
            <div key={item.id} className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0" id={item.title}>
                <button
                  className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                  type="button"
                  data-te-collapse-init
                  data-te-collapse-collapsed={item.id !== "clffimkzr5t0c0bzwi2hestq9"}
                  data-te-target={"#" + item.id}
                  aria-expanded={item.id === "clffimkzr5t0c0bzwi2hestq9" ? "true" : "false"}
                  aria-controls={item.id}>
                  {item.title}
                  <span
                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id={item.id}
                className={"!visible font-rajdhani " + item.id === "clffimkzr5t0c0bzwi2hestq9" ? "" : "hidden"}
                data-te-collapse-item
                data-te-collapse-show={item.id === "clffimkzr5t0c0bzwi2hestq9"}
                aria-labelledby={item.title}
                data-te-parent="#accordionExample">
                {/* @ts-expect-error Server Component */}
                <MDXRemote source={item.content.markdown} />
              </div>
            </div>
          ))}
        </div>

      </section >
    </div >
  );
}
