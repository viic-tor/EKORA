import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Rubor', href: '#producto' },
  { label: 'Ingredientes', href: '#ingredientes' },
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-warm-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-main flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <img
            src="/images/logo-ekora.png"
            alt="EKORA - Cosmética Natural"
            className="h-10 w-10 rounded-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-charcoal tracking-wide">EKORA</span>
            <span className="text-[10px] tracking-[0.2em] text-forest font-medium -mt-1 uppercase">Cosmética Natural</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-charcoal/70 hover:text-beetroot transition-colors rounded-lg hover:bg-beetroot/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573008829608?text=Hola%20EKORA%20quiero%20info"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-6"
          >
            Comprar Ahora
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-beetroot/5 transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="w-5 h-5 text-charcoal" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-beetroot text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-beetroot/5 transition-colors"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md border-t border-blush-200 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-charcoal/80 hover:text-beetroot hover:bg-beetroot/5 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573008829608?text=Hola%20EKORA%20quiero%20info"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center btn-primary mt-3 text-sm"
          >
            Comprar Ahora
          </a>
        </nav>
      </div>
    </header>
  );
}
