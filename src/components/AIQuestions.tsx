"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { aiQuestions } from '../data/aiTools';
import Carousel from './Carousel';

const AIQuestions: React.FC = () => {
  const questionCards = aiQuestions.map((question, index) => (
    <Card key={index} className="h-full flex items-center">
      <p className="text-lg text-center">{question}</p>
    </Card>
  ));

  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-deep-black/90">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">Top-of-Mind AI Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Based on extensive research, these are the questions your audience is actually asking about AI implementation.
          </p>
        </motion.div>

        <Carousel 
          items={questionCards} 
          slidesToShow={3}
          className="py-8"
        />
      </div>
    </section>
  );
};

export default AIQuestions;
