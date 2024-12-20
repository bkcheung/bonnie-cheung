interface SkillbarProps {
  skill: string;
  percent: number;
}
const Skillbar = ({ skill, percent }: SkillbarProps) => {
  return (
    <div className="flex w-full text-[7.5rem] items-center justify-between">
      {' '}
      {skill}
      <div className="w-[50%] h-[5rem] bg-gray-200 rounded-full border-[1px] border-gray-600">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percent}%`, height: '100%' }}
        />
      </div>
    </div>
  );
};

export default Skillbar;
