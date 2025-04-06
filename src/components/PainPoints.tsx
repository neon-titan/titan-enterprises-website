"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { painPoints } from '../data/aiTools';
import { FiAlertCircle, FiClock, FiCode, FiLink, FiMessageSquare, FiShield } from 'react-icons/fi';

const PainPoints: React.FC = () => {
  const icons = [
    <FiAlertCircle key="alert" size={24} className="text-hot-pink mb-4" />,
    <FiClock key="clock" size={24} className="text-hot-pink mb-4" />,
    <FiCode key="code" size={24} className="text-hot-pink mb-4" />,
    <FiLink key="link" size={24} className="text-hot-pink mb-4" />,
    <FiMessageSquare key="message" size={24} className="text-hot-pink mb-4" />,
    <FiShield key="shield" size={24} className="text-hot-pink mb-4" />
  ];

  return (
    <section id="pain-points" className="py-20 bg-gradient-to-b from-deep-black/90 to-deep-black">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            Addressing <span className="text-gradient">Pain Points & Fears</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We understand the challenges small to mid-size businesses face when adopting AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col items-center text-center">
                  {icons[index]}
                  <h3 className="text-xl font-bold mb-3 text-white">{point.title}</h3>
                  <p className="text-gray-300">&ldquo;{point.description}&rdquo;</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
