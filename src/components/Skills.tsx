import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML', 'Angular']
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Flask', 'Python', 'REST APIs', 'OAuth']
  },
  {
    category: 'Testing & Automation',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['Selenium', 'Pytest', 'Unit Testing', 'Manual Device Testing']
  },
  {
    category: 'DevOps',
    icon: <Terminal className="w-6 h-6" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Jenkins']
  },
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6" />,
    items: ['JavaScript', 'Python', 'Java', 'Typescript', 'SQL', 'Bash']
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['MySQL', 'MongoDB', 'DynamoDB', 'Supabase']
  }
];

export function Skills() {
  return (
    <div className="bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500 rounded-lg text-white">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}