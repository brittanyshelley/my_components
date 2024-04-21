import React from 'react';

export default function GlowButton2() {
  return (
    <section className="py-10 bg-base">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <a href="#" className="button glow-effect">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Purchases
          </a>
          <a href="#" className="button glow-effect">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Refinancing
          </a>
          <a href="#" className="button glow-effect">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Transfers
          </a>
        </div>
      </div>
    </section>
  );
}
