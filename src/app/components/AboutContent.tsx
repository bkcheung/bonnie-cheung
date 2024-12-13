import Skillbar from './Skillbar';

const AboutContent = () => {
  return (
    <div className="flex w-[500rem] h-[250rem] bg-[url('/wheat-field.jpg')] bg-cover bg-center">
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

export default AboutContent;
