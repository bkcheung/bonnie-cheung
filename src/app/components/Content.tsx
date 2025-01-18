import React from 'react';
// import Image from 'next/image';
// import Skillbar from '../components/Skillbar';

import ContactForm from '../components/ContactForm';

const AboutPreview = React.memo(() => {
  return (
    <div className="flex absolute w-full h-full bg-[url(/about.png)] bg-cover bg-center bg-no-repeat" />
  );
});
const AboutContent = React.memo(() => {
  return (
    <section
      className="flex absolute w-full h-full bg-[url(/about.png)] bg-cover bg-center bg-no-repeat"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
    />
    // Uncomment this section to update About section
    // <div className="flex w-full h-full">
    //   <Image
    //     src="/wheat-field.jpg"
    //     alt="wheat field with cypresses by van gogh"
    //     width={500}
    //     height={300}
    //     className="absolute w-full h-full -z-10"
    //   />
    //   <div
    //     aria-label="about-left"
    //     className="flex flex-col w-1/2 h-full  bg-white/75 p-[20rem]"
    //   >
    //     <h1 className="text-[20rem] font-serif my-20">Bonnie Cheung</h1>
    //     <h2 className="text-[12rem] font-serif mb-20"> About me:
    //     </h2>
    //       <ul className="list-disc ml-[10rem] text-[7.5rem]">
    //         <li className='mb-20'>
    //           Since an early age, I have loved building (& unbuilding) things;
    //           sorry mom!
    //         </li>
    //         <li className='mb-20'>
    //           I did FIRST Robotics in high school and studied Mechatronics
    //           Engineering at the University of Waterloo
    //         </li>
    //         <li className='mb-20'>
    //           For the past 4+ years, I've been a Mechanical Product and System
    //           Design Engineer at Apple
    //         </li>
    //         <li className='mb-20'>
    //           After years as a mechanical engineer, I discovered a passion for
    //           creating interactive digital experiences, leading me to leave my
    //           job and pursue my dream of becoming a full-time software engineer!
    //         </li>
    //       </ul>
    //   </div>
    //   <div
    //     aria-label="about-right"
    //     className="flex flex-col w-1/2 text-[10rem] justify-end items-end p-[20rem] pb-0"
    //   >
    //     <div
    //       aria-label="skills"
    //       className="bg-white/75 p-[10rem] rounded-[10rem] w-[65%]"
    //     >
    //       <Skillbar skill="HTML & CSS" percent={95} />
    //       <Skillbar skill="Javascript" percent={85} />
    //       <Skillbar skill="Typescript" percent={75} />
    //       <Skillbar skill="React" percent={77} />
    //     </div>
    //     <h4 className="text-[6.5rem] text-right my-[5rem] text-white">
    //       Wheat Field with Cypresses - Vincent Van Gogh
    //     </h4>
    //   </div>
    // </div>
  );
});
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
