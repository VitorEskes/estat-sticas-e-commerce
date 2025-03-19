import Head from 'next/head';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import MainCategories from '../components/MainCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfb]">
      <Head>
        <title>E-commerce Store</title>
        <meta name="description" content="Nossa loja online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Degradê aplicado na parte superior da página */}
      
      
      <Navbar />
      
      {/* Conteúdo com padding para compensar o navbar fixo */}
      <div className="relative z-1 pt-16">
      <div className="absolute top-0 left-0 right-0 h-200 bg-gradient-to-b from-[#2c4586] to-transparent z-0"></div>
        <Banner />
        <Benefits />
        <MainCategories />
        <FeaturedProducts />
        <Footer />
      </div>
    </div>
  );
}