import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AIQuestions from '../components/AIQuestions';
import PainPoints from '../components/PainPoints';
import AIToolShowcase from '../components/AIToolShowcase';
import ResourceHub from '../components/ResourceHub';
import BookingForm from '../components/BookingForm';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black text-white">
      <Navbar transparent={true} />
      <Hero />
      <AIQuestions />
      <PainPoints />
      <AIToolShowcase />
      <ResourceHub />
      <BookingForm />
      <About />
      <Footer />
    </main>
  );
}
