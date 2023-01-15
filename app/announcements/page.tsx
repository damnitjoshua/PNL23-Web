import React from "react";

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
        <div className="font-aquire">
            <header className="fixed z-30 flex h-screen w-fit flex-col items-end justify-center self-end pl-4 pt-[10em] ">
                <h1 className="relative left-[-4em] -rotate-90 lg:text-[50px]">
                    Announcements
                </h1>
            </header>
            <section className="mx-[8em] flex h-[100vh] min-h-fit flex-col items-end justify-center text-right">
                {announcements.map(item => (
                    <div key={item.id} className="mb-[4em]">
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
