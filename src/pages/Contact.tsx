import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useCursor } from '../context/CursorContext';

const Contact = () => {
  const { setCursorType } = useCursor();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
              <p className="text-gray-600 text-lg">
                Have a project in mind or want to learn more about our services? We'd love to hear from you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div 
                    className="flex items-start cursor-none"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <div className="mr-4 bg-primary-100 p-3 rounded-full text-primary-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                      <p className="text-gray-600">123 Design Street</p>
                      <p className="text-gray-600">Creative City, CO 12345</p>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-start cursor-none"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <div className="mr-4 bg-primary-100 p-3 rounded-full text-primary-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                      <p className="text-gray-600">+91 98765-43210</p>
                      <p className="text-gray-600">Monday-Friday, 9am-6pm</p>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-start cursor-none"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <div className="mr-4 bg-primary-100 p-3 rounded-full text-primary-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                      <p className="text-gray-600">hello@creativestudio.com</p>
                      <p className="text-gray-600">info@creativestudio.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="bg-gray-100 hover:bg-primary-100 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-primary-600 cursor-none"
                        onMouseEnter={() => setCursorType('hover')}
                        onMouseLeave={() => setCursorType('default')}
                        aria-label={`Follow us on ${social}`}
                      >
                        {social.charAt(0)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 text-green-600">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out to us. We'll get back to you as soon as possible.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-3 bg-primary-600 text-white rounded-3xl hover:bg-primary-700 transition-colors duration-300 cursor-none"
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-3xl border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          onMouseEnter={() => setCursorType('hover')}
                          onMouseLeave={() => setCursorType('default')}
                        />
                        {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-3xl border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          onMouseEnter={() => setCursorType('hover')}
                          onMouseLeave={() => setCursorType('default')}
                        />
                        {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4  py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        onMouseEnter={() => setCursorType('hover')}
                        onMouseLeave={() => setCursorType('default')}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="project">Project Discussion</option>
                        <option value="quote">Request a Quote</option>
                        <option value="support">Support</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-3xl border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        onMouseEnter={() => setCursorType('hover')}
                        onMouseLeave={() => setCursorType('default')}
                      ></textarea>
                      {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-4 bg-primary-600 text-white rounded-full transition-colors duration-300 flex items-center justify-center cursor-none ${isSubmitting ? 'bg-primary-400' : 'hover:bg-primary-700'}`}
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-gray-600">We'd love to meet you in person at our design studio.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894616!2d-74.11976383967487!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1627408696082!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find answers to common questions about our services and process.</p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What types of projects do you work on?',
                answer: 'We specialize in web design, brand identity, UI/UX design, and web development. Our team has experience working with a wide range of industries, from startups to established enterprises.',
              },
              {
                question: 'How long does a typical project take to complete?',
                answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a comprehensive brand identity and website project could take 2-3 months. We\'ll provide a detailed timeline during the initial consultation.',
              },
              {
                question: 'What is your design process like?',
                answer: 'Our design process typically includes discovery, strategy, design, development, testing, and launch phases. We believe in collaboration and keep our clients involved throughout the process with regular check-ins and feedback sessions.',
              },
              {
                question: 'How much does a project cost?',
                answer: 'Each project is unique, and we provide custom quotes based on your specific requirements. We offer various packages to accommodate different budgets and needs. Contact us for a detailed quote.',
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className="mb-8 pb-8 border-b border-gray-200 last:border-0 cursor-none"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;