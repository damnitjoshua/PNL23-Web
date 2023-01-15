import React from "react";
import Image from "next/image";
import MainBg from "../../public/images/rules.png";

export default function Announcements() {
    const announcements = [
        {
            id: 1,
            title: "Heading 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            title: "Heading 2",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magni non harum facilis voluptates eligendi voluptate eum necessitatibus amet corporis animi distinctio debitis dignissimos, quo, odit eveniet vitae earum expedita cumque error perspiciatis nostrum.Esse temporibus corporis laborum exercitationem dolor.",
        },
    ];
    return (
        <div className="font-aquire pt-[3em]">
            <header className="fixed z-30 flex h-screen w-fit flex-col items-end justify-center self-end pl-4 pb-[5em] ">
                <h1 className="relative left-[-5.3em] hidden md:block -rotate-90 lg:text-[50px] text-[20px]">
                    Rules & Regulations
                </h1>
            </header>
            <section className="lg:mx-[8em] mx-[3em] mt-10 flex min-h-[100vh] h-fit flex-col items-end justify-center">
                <div className="absolute left-0 top-10 w-full h-full min-h-fit -z-10">
                    <Image src={MainBg} alt={"background"} className="absolute scale-150 md:scale-100 w-full " fill style={{ objectFit: "cover" }} />
                    {/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
                </div>
                <h1 className="md:hidden block m-auto text-center text-[30px] mb-10">Rules & Regulations</h1>
                {announcements.map(item => (
                    <div key={item.id} className="mb-[4em] md:ml-[5vw] mr-10 md:mr-[5vw]">
                        <h1 className="lg:text-[35px]">{item.title}</h1>
                        <p className="font-rajdhani">
                            {item.content}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}
