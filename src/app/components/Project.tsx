import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}
export default function Project({
  title,
  description,
  image,
  tags,
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
        className={`${bg[index]} ${text} p-8 mr-8 text-[5rem] rounded-[3rem] shadow-xl`}
      >
        {tag}
      </div>
    );
  });
  return (
    <section className="flex flex-col bg-white/50 p-40 rounded-[10rem] w-1/3 shadow-xl">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-full"
      />
      <div className="flex my-20">{tagList}</div>
      <h1 className="text-[10rem] my-8">{title}</h1>
      <p className="text-[7.5rem]">{description}</p>
      <div className="flex justify-between text-[7.5rem]">
        <a
          href="https://github.com/bkcheung/bean-and-brew"
          className="bg-green-200 mt-8 mr-16 py-8 px-16 text-[7.5rem] rounded-[3rem] shadow-xl"
        >
          Code
        </a>
        <a
          href="https://bean-and-brew-pi.vercel.app/"
          className="bg-green-300 w-full mt-8 py-8 px-16 text-[7.5rem] rounded-[3rem] shadow-xl text-center"
        >
          Live View
        </a>
      </div>
    </section>
  );
}
