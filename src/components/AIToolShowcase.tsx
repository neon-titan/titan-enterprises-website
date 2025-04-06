"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import SectionTitle from './SectionTitle';
import { aiTools, categories } from '../data/aiTools';
import { FiStar } from 'react-icons/fi';

interface AIToolCardProps {
  tool: typeof aiTools[0];
}

const AIToolCard: React.FC<AIToolCardProps> = ({ tool }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`inline-block ${i < count ? 'text-electric-yellow fill-electric-yellow' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <Card 
      className="h-full flex flex-col cursor-pointer"
      hoverEffect={!isExpanded}
    >
      <div 
        className="flex flex-col h-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold mb-2 text-white">{tool.name}</h3>
        <div className="mb-2 text-sm text-gray-400">
          {renderStars(tool.beginnerFriendly)} <span className="ml-1">Beginner-Friendly</span>
        </div>
        <p className="text-gray-300 mb-3">{tool.useCase}</p>
        <p className="text-hot-pink font-medium mt-auto">{tool.pricing}</p>
        
        {isExpanded && (
          <motion.div 
            className="mt-4 pt-4 border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-medium text-neon-cyan mb-2">Implementation:</h4>
            <p className="text-gray-300 text-sm">{tool.implementation}</p>
          </motion.div>
        )}
      </div>
    </Card>
  );
};

const AIToolShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTools = activeCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory);

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-deep-black to-deep-black/90">
      <div className="section-container">
        <SectionTitle 
          title="AI Tool Showcase"
          subtitle="Discover the top 50 AI-native tools specifically selected for coaches, consultants, and content creators."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all' 
                ? 'bg-hot-pink text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Tools
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-hot-pink text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <AIToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolShowcase;
