"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import Card from './Card';
import Button from './Button';
import { FiDownload, FiBookOpen, FiVideo, FiFileText } from 'react-icons/fi';

const ResourceHub: React.FC = () => {
  const resources = [
    {
      title: 'AI Implementation Guide',
      description: 'Step-by-step guide for integrating AI into your coaching or content creation business.',
      icon: <FiBookOpen className="text-neon-cyan text-2xl mb-4" />,
      buttonText: 'Download Guide',
      buttonIcon: <FiDownload className="ml-2" />
    },
    {
      title: 'AI Tool Integration Workflows',
      description: 'Ready-to-use workflows that combine multiple AI tools for maximum efficiency.',
      icon: <FiFileText className="text-electric-yellow text-2xl mb-4" />,
      buttonText: 'Get Workflows',
      buttonIcon: <FiDownload className="ml-2" />
    },
    {
      title: 'Video Tutorials',
      description: 'Watch our detailed tutorials on setting up and using the most popular AI tools.',
      icon: <FiVideo className="text-hot-pink text-2xl mb-4" />,
      buttonText: 'Watch Tutorials',
      buttonIcon: <FiVideo className="ml-2" />
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-deep-black to-deep-black/90">
      <div className="section-container">
        <SectionTitle 
          title="Free Resources & Course Material"
          subtitle="Access our library of free resources designed to help you implement AI in your business effectively."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-8">
                {resource.icon}
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                <Button variant="secondary" className="mt-auto">
                  {resource.buttonText} {resource.buttonIcon}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Want personalized guidance on implementing these resources in your business?
          </p>
          <Button 
            onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your AI Business Audit
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceHub;
