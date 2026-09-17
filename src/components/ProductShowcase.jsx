import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Minus, Plus, Sparkles, Droplets, ShieldCheck, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products, formatCOP, WHATSAPP_BASE_URL, generateWhatsAppMessage } from '../data/products';

const tabs = [
  {
    id: 'uso',
    label: 'Modo de Uso',
    icon: Sparkles,
    content: products[0].usage,
  },
  {
    id: 'acabado',
    label: 'Acabado',
    icon: Droplets,
    content: products[0].finish,
  },
  {
    id: 'beneficios',
    label: 'Beneficios',
    icon: ShieldCheck,
    content: null,
    list: products[0].benefits,
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('uso');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const product = products[0];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setQuantity(1);
  };

  const handleBuyWhatsApp = () => {
    const items = [{ ...product, quantity }];
    const message = generateWhatsAppMessage(items);
    window.open(`${WHATSAPP_BASE_URL}?text=${message}`, '_blank');
  };

  return (
    <section id="producto" className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-script text-2xl text-forest">Nuestro producto estrella</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2">
            El Rubor de <span className="text-beetroot">Remolacha</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blush-50 to-blush-200 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <img
                src="/images/rubor-rosado.jpg"
                alt="Rubor Natural EKORA - Vista de producto con brochas"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {product.features.slice(0, 4).map((feature) => (
                <span
                  key={feature}
                  className="text-xs font-medium bg-sage-50 text-forest-700 px-3 py-1.5 rounded-full border border-sage-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">
              {product.name}
            </h3>
            <p className="text-forest font-medium mb-4">{product.tagline}</p>
            <p className="text-charcoal/60 leading-relaxed mb-6">{product.description}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-beetroot">
                {formatCOP(product.price)}
              </span>
              <span className="text-sm text-charcoal/40">· Envío a toda Colombia</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-sm font-medium text-charcoal/70">Cantidad:</span>
              <div className="flex items-center gap-3 bg-blush-50 rounded-full px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white shadow-warm-sm flex items-center justify-center hover:bg-blush-100 transition-colors"
                  aria-label="Reducir cantidad"
                >
                  <Minus className="w-4 h-4 text-charcoal" />
                </button>
                <span className="w-8 text-center font-semibold text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white shadow-warm-sm flex items-center justify-center hover:bg-blush-100 transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="w-4 h-4 text-charcoal" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="btn-primary flex items-center justify-center gap-2 flex-1"
              >
                <ShoppingCart className="w-5 h-5" />
                Añadir al Carrito
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBuyWhatsApp}
                className="btn-secondary flex items-center justify-center gap-2 flex-1 !border-forest !text-forest"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar por WhatsApp
              </motion.button>
            </div>

            {/* Tabs */}
            <div className="border-t border-blush-200 pt-6">
              <div className="flex gap-1 mb-6 bg-blush-50 rounded-2xl p-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-beetroot shadow-warm-sm'
                        : 'text-charcoal/50 hover:text-charcoal/80'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {tabs.map(tab => (
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-charcoal/70 leading-relaxed"
                  >
                    {tab.content && <p>{tab.content}</p>}
                    {tab.list && (
                      <ul className="space-y-2">
                        {tab.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
