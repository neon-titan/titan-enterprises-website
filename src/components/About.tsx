"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import Card from './Card';
import { FiUsers, FiTarget } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-deep-black/90 to-deep-black">
      <div className="section-container">
        <SectionTitle 
          title="About Titan Enterprises"
          subtitle="We help small to mid-size coaching and content creation businesses leverage AI to transform their workflows and boost their competitive edge."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8">
              <div className="flex flex-col h-full">
                <FiUsers className="text-hot-pink text-3xl mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
                <p className="text-gray-300 mb-4">
                  At Titan Enterprises, we specialize in helping coaches, consultants, and content creators harness the power of AI without losing their unique voice or personal touch.
                </p>
                <p className="text-gray-300 mb-4">
                  Our team combines deep expertise in AI technology with years of experience in the coaching and content creation industries, allowing us to provide solutions that are both technically sound and practically applicable.
                </p>
                <p className="text-gray-300">
                  We understand the unique challenges faced by small to mid-size businesses in these industries, and we&apos;re committed to providing solutions that deliver real ROI without requiring technical expertise or massive time investments.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8">
              <div className="flex flex-col h-full">
                <FiTarget className="text-neon-cyan text-3xl mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-4">
                  Our mission is to democratize AI technology for coaches and content creators, making powerful tools accessible, understandable, and immediately useful regardless of technical background.
                </p>
                <p className="text-gray-300 mb-4">
                  We believe that AI should enhance human creativity and connection, not replace it. That&apos;s why we focus on solutions that automate repetitive tasks and amplify your unique voice, allowing you to focus on what you do best: serving your clients and creating impactful content.
                </p>
                <p className="text-gray-300">
                  Through our AI Business Audits, curated tool recommendations, and implementation support, we help you navigate the complex AI landscape and build a tech stack that truly serves your business goals.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Testimonials & Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-deep-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
                <p className="italic text-gray-300 mb-4">
                  &ldquo;Working with Titan Enterprises transformed my coaching practice. Their AI recommendations helped me automate 80% of my administrative tasks, giving me back 15 hours per week to focus on my clients.&rdquo;
                </p>
                <p className="font-bold text-white">— Sarah J., Life Coach</p>
              </div>
              <div className="bg-deep-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
                <p className="italic text-gray-300 mb-4">
                  &ldquo;As a course creator with limited technical skills, I was skeptical about implementing AI tools. Titan made it simple and the results were immediate—I&apos;ve doubled my content output while maintaining my authentic voice.&rdquo;
                </p>
                <p className="font-bold text-white">— Mark T., Online Course Creator</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
