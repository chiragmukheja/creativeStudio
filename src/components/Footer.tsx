import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { setCursorType } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: <Github size={18} />, label: 'GitHub', url: 'https://github.com' },
    { icon: <Twitter size={18} />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <Instagram size={18} />, label: 'Instagram', url: 'https://instagram.com' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tighter">
              <span className="text-primary-400">CREATIVE</span>
              <span className="text-white">.STUDIO</span>
            </h3>
            <p className="text-gray-400 mb-4">Creating exceptional digital experiences with innovative design and cutting-edge technology.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-none"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Design Street</li>
              <li>Creative City, CO 12345</li>
              <li>hello@creativestudio.com</li>
              <li>+91 98765-43210</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest projects and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-3xl transition-colors duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Creative Studio. All rights reserved.</p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
            whileHover={{ y: -3 }}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;