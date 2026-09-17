import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCOP, WHATSAPP_BASE_URL, generateWhatsAppMessage } from '../data/products';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const message = generateWhatsAppMessage(items);
    window.open(`${WHATSAPP_BASE_URL}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-blush-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-beetroot/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-beetroot" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">Tu Carrito</h3>
                  <p className="text-xs text-charcoal/50">{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-blush-50 transition-colors"
                aria-label="Cerrar carrito"
              >
                <X className="w-5 h-5 text-charcoal/60" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 rounded-full bg-blush-50 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-blush-300" />
                  </div>
                  <p className="font-serif text-xl font-semibold text-charcoal mb-2">Carrito vacío</p>
                  <p className="text-sm text-charcoal/50 mb-6">Añade el rubor natural para comenzar</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-sm"
                  >
                    Explorar Productos
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map(item => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="bg-blush-50/50 rounded-2xl p-4 border border-blush-100"
                      >
                        <div className="flex gap-4">
                          {/* Product image */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                          />

                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-charcoal text-sm truncate">{item.name}</h4>
                            <p className="text-beetroot font-bold mt-1">{formatCOP(item.price)}</p>

                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-2 bg-white rounded-full px-1 py-0.5 border border-blush-100">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-7 h-7 rounded-full hover:bg-blush-50 flex items-center justify-center transition-colors"
                                  aria-label="Reducir cantidad"
                                >
                                  <Minus className="w-3 h-3 text-charcoal" />
                                </button>
                                <span className="w-6 text-center text-sm font-semibold text-charcoal">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-7 h-7 rounded-full hover:bg-blush-50 flex items-center justify-center transition-colors"
                                  aria-label="Aumentar cantidad"
                                >
                                  <Plus className="w-3 h-3 text-charcoal" />
                                </button>
                              </div>

                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1.5 rounded-full hover:bg-red-50 text-charcoal/30 hover:text-red-500 transition-colors"
                                aria-label="Eliminar"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="mt-3 pt-3 border-t border-blush-100 flex justify-between text-sm">
                          <span className="text-charcoal/50">Subtotal</span>
                          <span className="font-semibold text-charcoal">{formatCOP(item.price * item.quantity)}</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-blush-100 p-6 space-y-4 bg-white">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal/60">Total</span>
                  <span className="font-serif text-2xl font-bold text-beetroot">{formatCOP(totalPrice)}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full btn-primary flex items-center justify-center gap-2 !bg-forest hover:!bg-forest-700 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Finalizar pedido por WhatsApp
                </motion.button>

                <button
                  onClick={clearCart}
                  className="w-full text-sm text-charcoal/40 hover:text-charcoal/60 transition-colors py-2"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}
