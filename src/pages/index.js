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
import ContactForm from '../components/ContactForm';
import ImageContext from '../components/ImageContext';
import ButtonGradient from '../components/ButtonGradient';
import BioSection from '../components/BioSection';
import AboutMe from '../components/AboutMe';
import Blogs from '../components/Blogs';
import LogoClouds from '../components/LogoClouds';

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
        <ServicesSection />
        <ServicesSection2 />
        <ServicesSection3 />
        <ServicesSection4 />
        <ImageContext />
        <Blogs />
        {/* Mortgage Calculators Teaser */}
        {/* Testimonials */}
        <Testimonials />
        <Testimonials2 />
        {/* <Testimonials3 /> */}
        <ContactForm />

    </main>
  );
}