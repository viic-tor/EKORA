import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { products, formatCOP } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Catalog() {
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = (product) => {
    addItem(product, 1);
    setIsOpen(true);
  };

  return (
    <section id="catalogo" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blush-50 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-forest">Nuestros Tonos</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mt-2">
            Elige tu <span className="text-beetroot">Natural Blush</span>
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-2xl mx-auto">
            Descubre nuestra colección de rubores botánicos. Desde acabados mate aterciopelados hasta opciones con destellos luminosos para resaltar tu belleza natural.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden bg-blush-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {product.price > 40000 && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider text-charcoal shadow-sm">
                    CON BRILLOS
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 flex-grow">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-charcoal/50 uppercase tracking-widest font-medium mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-charcoal/70 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-charcoal/5">
                  <span className="font-serif text-xl font-bold text-beetroot">
                    {formatCOP(product.price)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest/90 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    aria-label={`Añadir ${product.name} al carrito`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
