import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useCursor } from '../context/CursorContext';
import GradientBackground from '../components/GradientBackground';

const Home = () => {
  const navigate = useNavigate();
  const { setCursorType } = useCursor();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <GradientBackground />
        
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex items-center mb-8 space-x-2" 
              variants={itemVariants}
            >
              <div className="h-0.5 w-16 bg-primary-600"></div>
              <h3 className="uppercase tracking-widest text-sm font-medium text-primary-600 flex items-center">
                Creative Studio <Sparkles size={16} className="ml-2" />
              </h3>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              We Create <br className="hidden md:block" />
              <span className="text-primary-600">Digital</span> Experiences
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl"
              variants={itemVariants}
            >
              A creative design studio focused on building modern and engaging digital experiences that transform brands.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <button
                onClick={handleViewProjects}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 flex items-center group cursor-none"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                View Projects
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </button>
              
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 rounded-full transition-colors duration-300 cursor-none"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <button
              onClick={scrollToNextSection}
              className="text-gray-700 flex flex-col items-center space-y-2 cursor-none"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
              aria-label="Scroll down"
            >
              <span className="text-sm">Scroll</span>
              <ArrowDown className="animate-bounce" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We combine strategy, design, and technology to create exceptional digital experiences.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Design',
                description: 'Beautiful, responsive websites that engage users and meet business goals.',
                delay: 0.1,
              },
              {
                title: 'Brand Identity',
                description: 'Distinctive brand identities that communicate your values and connect with your audience.',
                delay: 0.2,
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design that delivers intuitive, seamless, and delightful experiences.',
                delay: 0.3,
              },
              {
                title: 'Web Development',
                description: 'Custom web applications and websites built with modern technologies.',
                delay: 0.4,
              },
              {
                title: 'Motion Design',
                description: 'Engaging animations and motion graphics that bring your brand to life.',
                delay: 0.5,
              },
              {
                title: 'Digital Marketing',
                description: 'Strategic digital marketing to grow your brand and reach new audiences.',
                delay: 0.6,
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={service.delay} className="h-full">
                <div 
                  className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 h-full"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Check out some of our recent projects</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Harmony UI',
                category: 'Web Design & Development',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                title: 'Lumina Brand',
                category: 'Brand Identity',
                image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <div 
                  className="group relative rounded-3xl overflow-hidden cursor-none"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                  onClick={() => navigate('/projects')}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Project</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.6} className="text-center mt-12">
            <button
              onClick={handleViewProjects}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 flex items-center mx-auto group cursor-none"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              View All Projects
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Testimonials from clients who trust us with their brands</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Creative Studio transformed our brand. Their attention to detail and innovative approach exceeded our expectations.",
                author: "Sarah Johnson",
                role: "Marketing Director, TechCorp",
                delay: 0.1,
              },
              {
                quote: "The team delivered a website that perfectly captures our brand essence while providing an exceptional user experience.",
                author: "Michael Chen",
                role: "CEO, Innovate Inc.",
                delay: 0.2,
              },
              {
                quote: "Their ability to translate our vision into a cohesive digital strategy has been instrumental in our growth.",
                author: "Emily Rodriguez",
                role: "Founder, Elemental",
                delay: 0.3,
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={testimonial.delay} className="h-full">
                <div 
                  className="bg-gray-50 p-8 rounded-3xl h-full flex flex-col"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <blockquote className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-30 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-8 text-lg">Let's create something amazing together. Contact us today to discuss your ideas and goals.</p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 inline-flex items-center group cursor-none"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Get in Touch
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;