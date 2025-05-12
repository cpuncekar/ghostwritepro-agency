import React from 'react';
import Header from './components/Header';
import CopyGenerator from './components/CopyGenerator';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <CopyGenerator />
        </div>
        <Features />
        <Pricing />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;