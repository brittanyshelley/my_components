import "@/styles/globals.css";
import { Montserrat } from 'next/font/google';
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import { ThemeProvider } from '../context/ThemeContext';


// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={inter.className}>
        <Navbar2 />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}