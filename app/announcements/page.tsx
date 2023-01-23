import React from "react";
import Image from "next/image";
import MainBg from "../../public/images/announcement.png";

export default function Announcements() {
    const announcements = [
        {
            id: 1,
            title: "Announcement Title",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magni non harum facilis voluptates eligendi voluptate eum necessitatibus amet corporis animi distinctio debitis dignissimos, quo, odit eveniet vitae earum expedita cumque error perspiciatis nostrum.Esse temporibus corporis laborum exercitationem dolor.",
        },
        {
            id: 2,
            title: "Announcement Title",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magni non harum facilis voluptates eligendi voluptate eum necessitatibus amet corporis animi distinctio debitis dignissimos, quo, odit eveniet vitae earum expedita cumque error perspiciatis nostrum.Esse temporibus corporis laborum exercitationem dolor.",
        },
        {
            id: 3,
            title: "Announcement Title",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magni non harum facilis voluptates eligendi voluptate eum necessitatibus amet corporis animi distinctio debitis dignissimos, quo, odit eveniet vitae earum expedita cumque error perspiciatis nostrum.Esse temporibus corporis laborum exercitationem dolor.",
        }
    ];
    return (
			<div className="font-aquire pt-[3em]">
				<header className="fixed z-30 flex h-screen w-fit flex-col items-end justify-center self-end pl-4 pt-[10em] ">
					<h1 className="relative left-[-4em] -rotate-90 lg:text-[50px] text-[20px]">Announcements</h1>
				</header>
				<section className="lg:mx-[8em] mx-[3em] mt-10 flex min-h-[100vh] h-fit flex-col items-end justify-center text-right">
					<div className="absolute left-0 w-full h-full top-10 min-h-fit -z-10">
						<Image
							src={MainBg}
							alt={"background"}
							className="absolute w-full scale-150 md:scale-100 "
							fill
							priority
							style={{ objectFit: "cover" }}
						/>
						{/* <Image src={EarthImg} alt={"Earth image"} className="" fill style={{ objectFit: "cover" }} /> */}
					</div>
					{announcements.map((item) => (
						<div key={item.id} className="mb-[4em]">
							<h1 className="lg:text-[35px]">{item.title}</h1>
							<p className="font-rajdhani">{item.content}</p>
						</div>
					))}
				</section>
			</div>
		);
}
