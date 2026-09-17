import { motion } from 'framer-motion';
import { Heart, Recycle, MapPin, Eye, Leaf, Award } from 'lucide-react';

const seals = [
  { icon: Heart, label: 'Cruelty Free', description: 'No testamos en animales' },
  { icon: Recycle, label: 'Empaque Reciclable', description: 'Comprometidos con el planeta' },
  { icon: MapPin, label: 'Producción Local', description: 'Hecho en Ibagué, Colombia' },
  { icon: Leaf, label: 'Ingredientes Naturales', description: 'Origen botánico verificado' },
];

export default function Story() {
  return (
    <section id="historia" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-script text-2xl text-forest">Nuestra esencia</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-8">
              Nacimos en <span className="text-beetroot">Ibagué</span>
            </h2>

            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                EKORA nace en el corazón del Tolima, Colombia, con una convicción simple pero poderosa: la belleza no debería comprometer la salud de tu piel ni del planeta. Somos una marca de cosmética natural que transforma ingredientes botánicos en productos que realmente cuidan.
              </p>

              {/* Mission Quote */}
              <blockquote className="border-l-4 border-beetroot/30 pl-6 py-3 bg-blush-50/50 rounded-r-2xl">
                <p className="font-serif text-lg text-charcoal italic">
                  "Crear cosméticos naturales a base de remolacha y activos botánicos que resalten la belleza mientras cuidan la piel, promoviendo una cosmética consciente, natural y accesible."
                </p>
                <footer className="mt-2 text-sm font-medium text-beetroot">— Nuestra Misión</footer>
              </blockquote>

              {/* Vision */}
              <div className="flex items-start gap-4 bg-forest/5 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Eye className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Visión 2036</h4>
                  <p className="text-sm">
                    Ser la empresa líder en cosmética natural en Ibagué y referente nacional, reconocida por innovación, calidad y confianza.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seals Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {seals.map((seal, index) => (
                <motion.div
                  key={seal.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-blush-50 to-white rounded-3xl p-6 border border-blush-100 hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-sage-100 flex items-center justify-center mb-4">
                    <seal.icon className="w-7 h-7 text-forest" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-charcoal mb-1">{seal.label}</h4>
                  <p className="text-sm text-charcoal/50">{seal.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Award banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-4 bg-gradient-to-r from-forest to-forest-700 rounded-3xl p-6 flex items-center gap-4 text-white"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold">Cosmética Consciente</h4>
                <p className="text-sm text-white/80">Comprometidos con tu bienestar y el del planeta desde Ibagué</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
