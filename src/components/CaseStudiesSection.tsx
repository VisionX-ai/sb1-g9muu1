import React from 'react';

const caseStudies = [
  {
    title: 'Revolutionizing Healthcare',
    description: 'How we implemented AI to improve patient diagnosis accuracy by 40%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Smart City Transformation',
    description: 'Optimizing traffic flow and reducing congestion by 30% using AI.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'AI in Finance',
    description: 'Enhancing fraud detection and reducing false positives by 50%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-neon hover:scale-105"
            >
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-400">{study.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-electric-blue hover:text-electric-blue-light transition-colors duration-300"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;