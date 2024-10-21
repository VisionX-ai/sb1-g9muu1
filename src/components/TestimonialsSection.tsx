import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'AI Innovate has transformed our business processes. Their AI solutions have increased our efficiency by 200%.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Innovation, HealthTech',
    content: 'The AI-powered diagnostic tool developed by AI Innovate has revolutionized our patient care. It\'s truly groundbreaking.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Data Scientist, FinanceAI',
    content: 'Working with AI Innovate has been a game-changer. Their expertise in AI and machine learning is unparalleled.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative h-96">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-black p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-electric-blue"
                />
                <p className="text-lg mb-4">{testimonial.content}</p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-electric-blue">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentTestimonial ? 'bg-electric-blue' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;