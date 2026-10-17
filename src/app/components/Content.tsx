import React from 'react';

import { aboutCaption, aboutPoints } from '../about';
import ContactForm from '../components/ContactForm';

// The landscape About frame: bio on a white wash over the left half of the
// painting, the painting itself showing on the right
const AboutLandscape = () => {
  return (
    <section
      className="flex h-full w-full bg-[url(/about-bg.jpg)] bg-cover bg-center"
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
      }}
    >
      <div className="flex h-full w-1/2 flex-col justify-center bg-white/75 p-[20rem]">
        <h1 className="mb-[8rem] font-serif text-[20rem]">Bonnie Cheung</h1>
        <h2 className="mb-[8rem] font-serif text-[12rem]">About me:</h2>
        <ul className="ml-[10rem] flex list-disc flex-col gap-[6rem] text-[8rem] leading-[1.35]">
          {aboutPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <h4 className="absolute bottom-[6rem] right-[8rem] text-[6.5rem] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
        {aboutCaption}
      </h4>
    </section>
  );
};
const AboutPreview = React.memo(AboutLandscape);
const AboutContent = React.memo(AboutLandscape);
const PortfolioPreview = React.memo(() => {
  return (
    <div className="flex absolute w-full h-full bg-[url(/portfolio.png)] bg-cover bg-center bg-no-repeat" />
  );
});
const PortfolioContent = React.memo(() => {
  return (
    <section
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
        <h1 className="font-serif text-[20rem] mb-40 text-gray-800">Contact</h1>
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
