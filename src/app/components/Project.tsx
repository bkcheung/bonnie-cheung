import { Html } from '@react-three/drei';
import Image from 'next/image';

import Button from './Button';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl: string;
  liveUrl: string;
}
export default function Project({
  title,
  description,
  image,
  tags,
  codeUrl,
  liveUrl,
}: ProjectProps) {
  const tagList = tags.map((tag, index) => {
    const bg = [
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
    ];
    let text = 'text-black';
    if (index > 2) text = 'text-white';
    return (
      <div
        key={index}
        className={`${bg[index]} ${text} p-8 mr-8 text-[4.5rem] rounded-[3rem] shadow-xl`}
      >
        {tag}
      </div>
    );
  });
  return (
    <section className="flex flex-col bg-white/50 p-40 rounded-[10rem] w-[32%] h-full shadow-xl justify-between">
      <section>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full "
        />
        <div className="flex my-20 ">{tagList}</div>
      </section>
      <section>
        <h1 className="text-[10rem] my-8">{title}</h1>
        <p className="text-[7.5rem]">{description}</p>
      </section>
      <section className="flex justify-between text-[7.5rem]">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window.open(codeUrl, '_blank')?.focus();
          }}
          className="bg-green-200 mt-8 mr-16 py-8 px-16 text-[7.5rem] rounded-[3rem] shadow-xl"
        >
          Code
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            window.open(liveUrl, '_blank')?.focus();
          }}
          className="bg-green-300 w-full mt-8 py-8 px-16 text-[7.5rem] rounded-[3rem] shadow-xl text-center"
        >
          Live View
        </button>
        {/* <button onClick={()=>console.log('button')}>Test</button> */}
      </section>
    </section>
  );
}
