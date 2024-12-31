import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Layers,
  Cpu
} from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: 'React', icon: <Code2 size={40} /> },
      { name: 'TypeScript', icon: <Code2 size={40} /> },
      { name: 'Tailwind CSS', icon: <Globe size={40} /> }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: 'Node.js', icon: <Server size={40} /> },
      { name: 'Python', icon: <Cpu size={40} /> },
      { name: 'SQL', icon: <Database size={40} /> }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: 'Git', icon: <Layers size={40} /> },
      { name: 'Docker', icon: <Layers size={40} /> },
      { name: 'AWS', icon: <Server size={40} /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-6xl mx-auto">
          {skills.map((category) => (
            <div key={category.category} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-indigo-600 mb-3">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}