import React from "react";


export default function GlowButton() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto width-full px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="wrapper flex flex-wrap justify-center gap-4">
          <a href="#" className="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home Purchases
          </a>
          <a href="#" className="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Refinancing
          </a>
          <a href="#" className="button">
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

