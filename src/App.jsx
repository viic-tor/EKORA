import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Ingredients from './components/Ingredients';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <ProductShowcase />
          <Ingredients />
          <Story />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
