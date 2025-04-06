"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-hot-pink rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-cyan rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-yellow rounded-full filter blur-[150px] opacity-10"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="heading-xl mb-6"
            variants={item}
          >
            The <span className="text-gradient">Ultimate AI Tech Stack</span> for Content Creators & Coaches
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={item}
          >
            Transform your workflow and boost your competitive edge with AI tools specifically designed for small to mid-size businesses in the content creation and coaching space.
          </motion.p>
          
          <motion.div variants={item}>
            <Button 
              size="lg" 
              className="mx-auto"
              onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your AI Business Audit <FiArrowRight className="ml-2" />
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            variants={item}
          >
            <p className="text-lg font-medium text-electric-yellow mb-4">Top-of-Mind AI Questions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <motion.div 
                className="bg-deep-black bg-opacity-50 border border-gray-800 rounded-lg p-4 hover:border-hot-pink transition-colors"
                whileHover={{ y: -5 }}
              >
                &ldquo;How can I use ChatGPT for my coaching business without sounding generic?&rdquo;
              </motion.div>
              <motion.div 
                className="bg-deep-black bg-opacity-50 border border-gray-800 rounded-lg p-4 hover:border-neon-cyan transition-colors"
                whileHover={{ y: -5 }}
              >
                &ldquo;How do I integrate multiple AI tools into a cohesive workflow?&rdquo;
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
