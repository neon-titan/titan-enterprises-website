"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <motion.div
      className={`bg-deep-black bg-opacity-50 border border-gray-800 rounded-xl p-6 ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 255, 247, 0.1)' } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
