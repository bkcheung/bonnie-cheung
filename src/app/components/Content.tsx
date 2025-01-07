import Image from 'next/image';

import ContactForm from '../components/ContactForm';
import Project from '../components/Project';
import Skillbar from '../components/Skillbar';

const AboutContent = () => {
  return (
    <div className="flex w-full h-full">
      <Image
        src="/wheat-field.jpg"
        alt="wheat field with cypresses by van gogh"
        width={500}
        height={300}
        className="absolute w-full h-full -z-10"
      />
      <div
        aria-label="about-left"
        className="flex flex-col w-1/2 justify-center bg-white/65 p-[20rem]"
      >
        <h1 className="text-[20rem]">Bonnie Cheung</h1>
        <h2 className="text-[10rem]">
          About:
          <ul className="list-disc ml-[10rem] text-[7.5rem]">
            <li>
              Since an early age, I have loved building (& unbuilding) things;
              sorry mom!
            </li>
            <li>
              I did FIRST Robotics in high school and studied Mechatronics
              Engineering at the University of Waterloo
            </li>
            <li>
              For the past 4+ years, I've been a Mechanical Product and System
              Design Engineer at Apple
            </li>
            <li>
              After years as a mechanical engineer, I discovered a passion for
              creating interactive digital experiences, leading me to leave my
              job and pursue my dream of becoming a full-time software engineer!
            </li>
          </ul>
        </h2>
      </div>
      <div
        aria-label="about-right"
        className="flex flex-col w-1/2 text-[10rem] justify-end items-end p-[20rem] pb-0"
      >
        <div
          aria-label="skills"
          className="bg-white/75 p-[10rem] rounded-[10rem] w-[65%]"
        >
          <Skillbar skill="HTML & CSS" percent={90} />
          <Skillbar skill="Javascript" percent={80} />
          <Skillbar skill="Typescript" percent={75} />
          <Skillbar skill="React" percent={70} />
        </div>
        <h4 className="text-[5rem] text-right my-[5rem]">
          Wheat Field with Cypresses - Vincent Van Gogh
        </h4>
      </div>
    </div>
  );
};

const PortfolioContent = () => {
  return (
    <div className="flex flex-col w-[500rem] h-[250rem] py-40 px-60 bg-beige">
      <h1 className="text-[20rem]">Portfolio</h1>
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
      </div>
    </div>
  );
};

const ContactContent = () => {
  return (
    <div className="flex w-[500rem] h-[250rem]">
      <Image
        src="/cliff-walk.jpg"
        alt="Cliff Walk at Pourville by Claude Monet"
        width={500}
        height={250}
        className="absolute w-full h-full -z-10"
      />
      <div className="flex flex-col w-1/2 justify-evenly p-40">
        <h1 className="text-[20rem]">Contact</h1>
        <ContactForm />
      </div>
      <h4 className="text-[5rem] text-white ml-auto mr-20 mt-auto mb-20">
        Cliff Walk at Pourville - Claude Monet
      </h4>
    </div>
  );
};

export { AboutContent, PortfolioContent, ContactContent };
