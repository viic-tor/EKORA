import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductShowcase from './components/ProductShowcase';
import Ingredients from './components/Ingredients';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50 font-sans selection:bg-beetroot/20 selection:text-beetroot">
        <Navbar />
        <CartDrawer />
        
        <main>
          <Hero />
          <Catalog />
          <ProductShowcase />
          <Ingredients />
          <Story />
          <Testimonials />
          <FAQ />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
