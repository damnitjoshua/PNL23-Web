import React from "react";
import Image from "next/image";
import MainBg from "../../public/images/announcement.png";

export default function Announcements() {
    const announcements = [
        {
            id: 1,
            title: "No Announcements Yet",
            content: "",
        },
    ];
    return (
			<div className="font-aquire pt-[3em]">
				<header className="fixed z-30 flex h-screen w-fit flex-col items-end justify-center self-end pl-4 pt-[10em] ">
					<h1 className="relative left-[-4em] -rotate-90 lg:text-[50px] text-[20px]">Announcements</h1>
				</header>
				<section className="mx-[3em] mt-10 flex h-fit min-h-[100vh] flex-col lg:mx-[8em]">
					<div className="fixed left-0 w-full h-full top-10 -z-10 min-h-fit">
						<Image
							src={MainBg}
							alt={"background"}
							className="fixed w-full scale-120 md:scale-100 "
							fill
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
