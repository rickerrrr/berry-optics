import Navbar from '@components/layout/Navbar';
import Hero from '@components/sections/Hero';
import AboutSection from '@components/sections/AboutSection';
import Capabilities from '@components/sections/Capabilities';
import ProductsPreview from '@components/sections/ProductsPreview';
import News from '@components/sections/News';
import Footer from '@components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Capabilities />
        <ProductsPreview />
        <News />
      </main>
      <Footer />
    </>
  );
}
