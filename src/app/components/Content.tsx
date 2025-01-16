import Image from 'next/image';
import React from 'react';

import ContactForm from '../components/ContactForm';

// import Project from '../components/Project';

const AboutPreview = React.memo(() => {
  return (
    <div className="flex absolute w-full h-full bg-[url(/about-prev.png)] bg-cover bg-center bg-no-repeat" />
  );
});
const AboutContent = React.memo(() => {
  return (
    <section
      className="flex absolute w-full h-full"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
    >
      <Image
        src="/about.png"
        alt="About section"
        sizes="50vw"
        placeholder="blur"
        blurDataURL="/wheat-field-blur.jpg"
        priority
        fill
      />
    </section>
  );
});
const PortfolioPreview = React.memo(() => {
  return (
    <div className="flex absolute w-full h-full bg-[url(/portfolio-prev.png)] bg-cover bg-center bg-no-repeat" />
  );
});
const PortfolioContent = React.memo(() => {
  return (
    <section
      // className="flex flex-col w-full h-full py-40 px-60 bg-beige"
      className="flex w-full items-end h-full py-40 px-60 gap-40 bg-[url(/portfolio.png)] bg-cover bg-center bg-no-repeat"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
    >
      <section className="flex w-[32%] h-[15rem] px-40 mb-80 gap-20">
        <button
          title="https://github.com/bkcheung/bean-and-brew"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window
              .open('https://github.com/bkcheung/bean-and-brew', '_blank')
              ?.focus();
          }}
          className="w-1/4"
        />
        <button
          title="https://bean-and-brew-pi.vercel.app"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window
              .open('https://bean-and-brew-pi.vercel.app', '_blank')
              ?.focus();
          }}
          className="w-full"
        />
      </section>
      <section className="flex w-[32%] h-[15rem] px-40 mb-80 gap-20">
        <button
          title="https://github.com/bkcheung/Memory-Card-Game"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window
              .open('https://github.com/bkcheung/Memory-Card-Game', '_blank')
              ?.focus();
          }}
          className="w-1/4"
        />
        <button
          title="https://ac-memo-game.vercel.app"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window.open('https://ac-memo-game.vercel.app', '_blank')?.focus();
          }}
          className="w-full"
        />
      </section>
      <section className="flex w-[32%] h-[15rem] px-40 mb-80 gap-20">
        <button
          title="https://github.com/bkcheung/CV-Builder"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window
              .open('https://github.com/bkcheung/CV-Builder', '_blank')
              ?.focus();
          }}
          className="w-1/4"
        />
        <button
          title="https://bkcheung.github.io/CV-Builder"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window
              .open('https://bkcheung.github.io/CV-Builder', '_blank')
              ?.focus();
          }}
          className="w-full"
        />
      </section>
      {/* <h1 className="text-[20rem]">Portfolio</h1>
      <div className="flex justify-between items-center h-[85%] w-full my-40">
        <Project
          title="Bean & Brew"
          description="A dynamic store with responsive design, server-side rendering, & parallax effects"
          image="/bean-brew.png"
          tags={[
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'API',
            'Jest',
          ]}
          codeUrl="https://github.com/bkcheung/bean-and-brew"
          liveUrl="https://bean-and-brew-pi.vercel.app"
        />
        <Project
          title="Memory Card Game"
          description="An interactive game featuring dynamic card generation using an external API"
          image="/memory-card.png"
          tags={['React', 'TypeScript', 'Tailwind CSS', 'API', 'Vitest']}
          codeUrl="https://github.com/bkcheung/Memory-Card-Game"
          liveUrl="https://ac-memo-game.vercel.app"
        />
        <Project
          title="CV Builder"
          description="Features real-time updates with user-input and PDF export capability"
          image="/cv-builder.png"
          tags={['React', 'TypeScript', 'Tailwind CSS']}
          codeUrl="https://github.com/bkcheung/CV-Builder"
          liveUrl="https://bkcheung.github.io/CV-Builder"
        />
      </div> */}
    </section>
  );
});

const ContactPreview = React.memo(() => {
  return <div className="bg-black w-full h-full" />;
});

const ContactContent = React.memo(() => {
  return (
    <section
      className="flex w-full h-full"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col w-[55%] justify-evenly p-80 bg-[#e9e9e9]">
        <h1 className="text-[20rem] mb-40 text-gray-800">Contact</h1>
        <ContactForm />
      </div>
      <h4 className="text-[8rem] text-white ml-auto mr-20 mt-auto mb-20">
        Cliff Walk at Pourville - Claude Monet
      </h4>
    </section>
  );
});

AboutContent.displayName = 'AboutContent';
AboutPreview.displayName = 'AboutPreview';
PortfolioContent.displayName = 'PortfolioContent';
PortfolioPreview.displayName = 'PortfolioPreview';
ContactContent.displayName = 'ContactContent';
ContactPreview.displayName = 'ContactPreview';

export {
  AboutContent,
  AboutPreview,
  PortfolioContent,
  PortfolioPreview,
  ContactContent,
  ContactPreview,
};
