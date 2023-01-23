import Image from "next/image";
import React from "react";

interface PropTypes {
	title: string;
	bgImage: string;
}

export default function BottomTitleLayout({ props, children }: { props: PropTypes; children: React.ReactNode }) {
	const { title, bgImage } = props;

	return (
		<div>
			<div>
				<section className="relative h-screen">
					<div className="fixed w-full h-full min-h-fit -z-10">
						<Image
							src={bgImage}
							alt={"background"}
							className="absolute -z-20"
							fill
							priority
							style={{ objectFit: "cover", objectPosition: "left" }}
						/>
					</div>
					<div className="fixed bottom-0 z-0 w-full p-4 text-2xl md:px-20 backdrop-blur-md bg-black/30">{title}</div>
					<div className="w-full h-screen pt-10 bg-black/30">
						<div className="p-4 md:px-20">
							<div className="p-4 md:px-20">{children}</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
