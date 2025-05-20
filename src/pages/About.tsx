import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useCursor } from '../context/CursorContext';
import { MessageSquare, Clock, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const { setCursorType } = useCursor();

  const team = [
    {
      name: 'Alex Morgan',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Development Lead',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Emma Thompson',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-600" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities to create unique solutions.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary-600" />,
      title: 'Communication',
      description: 'Clear, open communication is at the core of our process and relationships.',
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Studio</h1>
                <p className="text-gray-600 text-lg mb-8">
                  We are a team of passionate designers and developers dedicated to creating exceptional digital experiences that elevate brands and engage users.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 flex items-center group cursor-none"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                  </button>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <ScrollReveal delay={0.3}>
                <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Creative team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Studio in early days"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} direction="right">
              <h3 className="text-2xl font-bold mb-4">Founded with Passion</h3>
              <p className="text-gray-600 mb-6">
                Creative Studio was founded in 2015 by a group of designers and developers who shared a vision for creating meaningful digital experiences. What started as a small team working out of a tiny office has grown into a vibrant studio with clients around the world.
              </p>
              <p className="text-gray-600">
                Our journey has been defined by a relentless pursuit of excellence and innovation. We've continuously evolved our approach and expanded our capabilities to meet the changing needs of our clients and the digital landscape.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mt-20">
            <ScrollReveal delay={0.2} direction="left" className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-6">
                We believe that great design is about more than aesthetics—it's about solving problems and creating meaningful connections between brands and their audiences.
              </p>
              <p className="text-gray-600">
                Our collaborative process involves deep research, strategic thinking, and iterative design. We work closely with our clients at every stage, ensuring that the final product not only looks beautiful but also achieves their business objectives.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} direction="right" className="order-1 md:order-2">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-gray-600">
                These core principles guide our work and define our culture.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div 
                  className="bg-white p-8 rounded-3xl shadow-md h-full flex flex-col cursor-none"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 flex-grow">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-gray-600">
                The talented individuals behind our creative work.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div 
                  className="group cursor-none"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="relative overflow-hidden rounded-3xl mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '75+', label: 'Clients Worldwide' },
              { number: '200+', label: 'Projects Completed' },
              { number: '8', label: 'Years of Experience' },
              { number: '15', label: 'Design Awards' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className="text-center cursor-none"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 text-primary-400">{stat.number}</h3>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to Work With Us?</h2>
              <p className="text-primary-100 mb-8 text-lg">We're always looking for new challenges and exciting projects. Let's create something amazing together.</p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-full transition-colors duration-300 inline-flex items-center cursor-none"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Get in Touch
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;