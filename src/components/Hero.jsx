import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Leaf, ShieldCheck } from 'lucide-react';

const floatingBadges = [
  { icon: Leaf, text: '100% Origen Natural', delay: 0.3 },
  { icon: Heart, text: 'Hecho en Colombia', delay: 0.5 },
  { icon: ShieldCheck, text: 'Sin Químicos Nocivos', delay: 0.7 },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-50 via-white to-blush-100" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blush-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-100/40 rounded-full blur-3xl" />

      <div className="container-main relative z-10 section-padding pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-beetroot/5 border border-beetroot/10 rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-beetroot" />
              <span className="text-sm font-medium text-beetroot">Cosmética consciente desde Ibagué</span>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold text-charcoal leading-tight mb-4">
              El poder de la{' '}
              <span className="text-beetroot">remolacha</span>{' '}
              en tu piel
            </h1>

            <p className="font-script text-2xl sm:text-3xl text-forest/80 mb-4">
              Color natural, cuidado real
            </p>

            <p className="text-base sm:text-lg text-charcoal/60 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Descubre Natural Blush, un rubor que combina maquillaje con skincare: pigmentación natural de remolacha que colorea y cuida tu piel. Para mujeres que eligen belleza consciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#producto"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base"
              >
                Pedir mi Rubor
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#ingredientes"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
              >
                Descubrir Ingredientes
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Product image */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush-200 via-blush-300 to-beetroot-200 shadow-warm-lg" />
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-warm-lg">
                <img
                  src="/images/natural-blush-1.jpg"
                  alt="Natural Blush EKORA - Rubor en polvo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating ring decoration */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-sage/30 animate-[spin_30s_linear_infinite]" />
            </div>

            {/* Floating badges */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: badge.delay, duration: 0.6 }}
                className={`absolute bg-white/90 backdrop-blur-sm rounded-2xl shadow-warm-md px-4 py-3 flex items-center gap-2.5 ${
                  index === 0 ? 'top-4 -left-4 sm:left-0' :
                  index === 1 ? 'bottom-16 -right-4 sm:right-0' :
                  'bottom-0 left-4 sm:left-8'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-4 h-4 text-forest" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-charcoal whitespace-nowrap">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
