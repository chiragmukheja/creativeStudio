import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useCursor } from '../context/CursorContext';

const Projects = () => {
  const navigate = useNavigate();
  const { setCursorType } = useCursor();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'ui', name: 'UI/UX' },
    { id: 'motion', name: 'Motion' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Harmony UI Design System',
      category: 'ui',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2024',
      client: 'TechCorp',
    },
    {
      id: 2,
      title: 'Lumina Brand Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2024',
      client: 'Lumina Inc.',
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2023',
      client: 'Evergreen',
    },
    {
      id: 4,
      title: 'Pulse Animation Series',
      category: 'motion',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2023',
      client: 'Pulse Media',
    },
    {
      id: 5,
      title: 'Nova Mobile App',
      category: 'ui',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2023',
      client: 'Nova Tech',
    },
    {
      id: 6,
      title: 'Atlas Travel Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2022',
      client: 'Atlas Travel',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our portfolio of work spanning various industries and disciplines.
                Each project represents our commitment to excellence and innovation.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 cursor-none ${
                    filter === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-200'
                  }`}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1} direction="up">
                <motion.div 
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-none"
                  layout
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-medium px-4 py-2 border border-white rounded-xl">View Project</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-2">Client: {project.client}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">How we approach every project to ensure exceptional results</p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We begin by understanding your business, goals, and target audience through in-depth research and discovery sessions.',
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'Based on our findings, we develop a comprehensive strategy that aligns with your objectives and addresses user needs.',
              },
              {
                number: '03',
                title: 'Design',
                description: 'Our designers create beautiful, functional interfaces that bring your brand to life and engage your audience.',
              },
              {
                number: '04',
                title: 'Development',
                description: 'Our development team builds robust, scalable solutions using the latest technologies and best practices.',
              },
              {
                number: '05',
                title: 'Testing & Launch',
                description: 'We rigorously test all aspects of your project before launching it to ensure everything works flawlessly.',
              },
              {
                number: '06',
                title: 'Support & Growth',
                description: 'We provide ongoing support and strategic guidance to help your digital presence evolve and grow.',
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="left">
                <div 
                  className="flex items-start md:items-center py-8 border-b border-gray-200 last:border-0"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="mr-6 md:mr-8">
                    <span className="text-3xl md:text-4xl font-bold text-primary-200">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
              <p className="text-primary-100 mb-8 text-lg">Let's discuss how we can help bring your vision to life. Our team is ready to create an exceptional digital experience for your brand.</p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-full transition-colors duration-300 inline-flex items-center cursor-none"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Start a Project
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Projects;