import Image from "next/image";
import { Montserrat } from "next/font/google";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Testimonials from '../components/Testimonials'; // Ensure you have this component
import Testimonials2 from '../components/Testimonials2';
import Testimonials3 from '../components/Testimonials3';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ServicesSection2 from '../components/ServicesSection2';
import ServicesSection3 from '../components/ServicesSection3';
import ServicesSection4 from '../components/ServicesSection4';
import ContactForm1 from '../components/ContactForm1';
import ContactForm from '../components/ContactForm';
import ImageContext from '../components/ImageContext';
import ButtonGradient from '../components/ButtonGradient';
import BioSection from '../components/BioSection';
import AboutMe from '../components/AboutMe';
import Blogs from '../components/Blogs';
import LogoClouds from '../components/LogoClouds';
import ServicesSectionGradient from "../components/ServicesSectionGradient";
import GlowingCard from "../components/GlowingCard";
import GlowButton from "../components/GlowButton";
import GlowButton2 from "@/components/GlowButton2";
import ServicesSection5 from "@/components/ServicesSection5";
import ServicesSection6 from "@/components/ServicesSection6";
import MortgageAffordabilityCalculator from "@/components/MortgageAffordabilityCalculator";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageCalculator1 from "@/components/MortgageCalculator1";
import MortgageApplicationForm from "@/components/MortgageApplicationForm";




const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-base-200">
      <Head>
        <title>Welcome to Dominion Lending Centers</title>
        <meta name="description" content="Find the best mortgage rates and services" />
      </Head>

      <HeroSection />
      <AboutMe />

      <LogoClouds />
      {/* <ServicesSection />
      <ServicesSectionGradient />
      <ServicesSection2 />
      <ServicesSection3 />
      <ServicesSection4 /> */}
      <ServicesSection5 />
      {/* <ServicesSection6 /> */}
      <MortgageAffordabilityCalculator />
      <MortgageCalculator />
      <MortgageCalculator1 />
      <MortgageApplicationForm />
      {/* <MortgageApplicationForm2 /> */}
      <GlowingCard />
      <GlowButton />
      <GlowButton2 />
      <ImageContext />
      <Blogs />
      {/* Mortgage Calculators Teaser */}
      {/* Testimonials */}
      <Testimonials />
      <Testimonials2 />
      {/* <Testimonials3 /> */}
      {/* <ContactForm1 /> */}
      <ContactForm />

    </main>
  );
}

// pages/index.js
