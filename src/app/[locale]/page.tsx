import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductBanner from '@/components/ProductSlider';
import CustomerSatisfaction from '@/components/CustomerSatisfaction';
import Certifications from '@/components/Certifications';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CustomerSatisfaction />
        <ProductBanner />
        <Certifications />
        <CustomerReviews />
      </main>
      <Footer />
    </>
  );
}