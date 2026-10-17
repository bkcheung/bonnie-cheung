import Image from 'next/image';
import React, { useState } from 'react';

import projects from '../projects';
import ContactForm from './ContactForm';
import Skillbar from './Skillbar';

// Portrait frame content is laid out on a 250rem x 400rem canvas

const stop = (e: React.MouseEvent) => e.stopPropagation();

const openLink = (e: React.MouseEvent, url: string) => {
  e.stopPropagation();
  window.open(url, '_blank')?.focus();
};

const AboutPortrait = React.memo(() => {
  return (
    <section
      className="relative flex h-full w-full flex-col gap-[8rem] bg-[url(/about-art.png)] bg-cover bg-[70%_center] p-[10rem]"
      onClick={stop}
    >
      <div className="flex flex-col rounded-[14rem] bg-white/80 p-[10rem]">
        <h1 className="font-serif text-[22rem]">Bonnie Cheung</h1>
        <h2 className="mb-[4rem] font-serif text-[14rem]">About me:</h2>
        <ul className="ml-[12rem] flex list-disc flex-col gap-[4rem] text-[10rem] leading-[1.3]">
          <li>
            Since an early age, I have loved building (& unbuilding) things;
            sorry mom!
          </li>
          <li>
            I did FIRST Robotics in high school and studied Mechatronics
            Engineering at the University of Waterloo
          </li>
          <li>
            For the past 4+ years, I&apos;ve been a Mechanical Product and
            System Design Engineer at Apple
          </li>
          <li>
            After years as a mechanical engineer, I discovered a passion for
            creating interactive digital experiences, leading me to leave my job
            and pursue my dream of becoming a full-time software engineer!
          </li>
        </ul>
      </div>
      <div className="mt-auto flex flex-col gap-[3rem] rounded-[14rem] bg-white/80 p-[8rem]">
        <Skillbar skill="HTML & CSS" percent={95} className="text-[9.5rem]" />
        <Skillbar skill="Javascript" percent={85} className="text-[9.5rem]" />
        <Skillbar skill="Typescript" percent={75} className="text-[9.5rem]" />
        <Skillbar skill="React" percent={77} className="text-[9.5rem]" />
      </div>
      <h4 className="text-right text-[6.5rem] text-white">
        Wheat Field with Cypresses - Vincent Van Gogh
      </h4>
    </section>
  );
});

const PortfolioPortrait = React.memo(() => {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const step = (e: React.MouseEvent, change: number) => {
    e.stopPropagation();
    setIndex((index + change + projects.length) % projects.length);
  };

  return (
    <section
      className="flex h-full w-full flex-col gap-[8rem] bg-beige p-[10rem]"
      onClick={stop}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-[22rem]">Portfolio</h1>
        <div className="flex items-center gap-[8rem]">
          <button
            aria-label="Previous project"
            className="h-[30rem] w-[40rem] rounded-[10rem] bg-white/60 text-[16rem] shadow-md"
            onClick={(e) => step(e, -1)}
          >
            ‹
          </button>
          <span className="text-[11rem] text-gray-700">
            {index + 1} / {projects.length}
          </span>
          <button
            aria-label="Next project"
            className="h-[30rem] w-[40rem] rounded-[10rem] bg-white/60 text-[16rem] shadow-md"
            onClick={(e) => step(e, 1)}
          >
            ›
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-[6rem] rounded-[14rem] bg-[#f1f1f1] p-[10rem] shadow-xl">
        {/* all screenshots stay mounted and eagerly loaded: swapping a lazy
            image's src inside this 3D-transformed layer can fail to load */}
        <div className="grid">
          {projects.map((p, i) => (
            <Image
              key={p.image}
              src={p.image}
              alt={p.title}
              width={361}
              height={194}
              priority
              className={`col-start-1 row-start-1 h-auto w-full ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-[4rem]">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-[8rem] px-[5rem] py-[2rem] text-[8.5rem] shadow-md ${
                [
                  'bg-green-100',
                  'bg-green-200',
                  'bg-green-300',
                  'bg-green-400',
                ][Math.min(i, 3)]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-[17rem] leading-none">{project.title}</h2>
        <p className="text-[11rem] leading-[1.3]">{project.description}</p>
        <div className="flex gap-[8rem] text-[12rem]">
          <button
            className="h-[34rem] rounded-[10rem] bg-green-200 px-[14rem] shadow-xl"
            onClick={(e) => openLink(e, project.codeUrl)}
          >
            Code
          </button>
          <button
            className="h-[34rem] flex-1 rounded-[10rem] bg-green-300 shadow-xl"
            onClick={(e) => openLink(e, project.liveUrl)}
          >
            Live View
          </button>
        </div>
      </div>
    </section>
  );
});

const ContactPortrait = React.memo(() => {
  return (
    <section
      className="relative flex h-full w-full items-center justify-center p-[12rem]"
      onClick={stop}
    >
      {/* inset card so the painting behind the frame shows on every side */}
      <div className="flex w-full flex-col rounded-[16rem] bg-[#e9e9e9] p-[10rem] shadow-xl">
        <h1 className="mb-[6rem] font-serif text-[22rem] text-gray-800">
          Contact
        </h1>
        <ContactForm portrait />
      </div>
      <h4 className="absolute bottom-[5rem] right-[10rem] text-[6.5rem] text-white">
        Cliff Walk at Pourville - Claude Monet
      </h4>
    </section>
  );
});

AboutPortrait.displayName = 'AboutPortrait';
PortfolioPortrait.displayName = 'PortfolioPortrait';
ContactPortrait.displayName = 'ContactPortrait';

export { AboutPortrait, ContactPortrait, PortfolioPortrait };
