interface SkillbarProps {
  skill: string;
  percent: number;
  className?: string;
}
const Skillbar = ({
  skill,
  percent,
  className = 'text-[7.5rem]',
}: SkillbarProps) => {
  return (
    <div className={`flex w-full items-center justify-between ${className}`}>
      {' '}
      {skill}
      <div className="w-[50%] h-[0.67em] bg-gray-200 rounded-full border-[1px] border-gray-600">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percent}%`, height: '100%' }}
        />
      </div>
    </div>
  );
};

export default Skillbar;
