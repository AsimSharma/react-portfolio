import React from 'react'

const Experience = () => {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <h1 className="text-3xl font-bold inline border-b-4 bg-600">Skills Summary</h1>
      <div className="w-3/4">
        <SkillBar skill="HTML" percentage={100} />
        <SkillBar skill="CSS" percentage={80} />
        <SkillBar skill="React" percentage={50} />
        <SkillBar skill="Tailwind CSS" percentage={50} />
        <SkillBar skill="Node.js" percentage={60} />
        <SkillBar skill="Javascript" percentage={80} />
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage }) => {
  return (
    <div  className="mb-4 ">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg">{skill}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="bg-gray-200 h-4 w-full rounded-xl">
        <div
          className="h-4 bg-gradient-to-r from-red-500 to-green-500 rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
    
  )
}

export default Experience