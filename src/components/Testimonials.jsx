import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Valentina R.',
    age: '19 años',
    role: 'Estudiante universitaria',
    text: '¡Me encanta! Es súper natural y no siento que llevo maquillaje pesado. El color dura todo el día y mi piel se ve radiante. Es perfecto para la universidad.',
    rating: 5,
  },
  {
    name: 'Carolina M.',
    age: '34 años',
    role: 'Profesional de marketing',
    text: 'Llevo años buscando un rubor que no me irrite la piel y ¡por fin lo encontré! La textura es increíble, se difumina fácil y el acabado es luminoso y elegante.',
    rating: 5,
  },
  {
    name: 'Martha L.',
    age: '52 años',
    role: 'Empresaria',
    text: 'A mi edad busco productos que cuiden mi piel, no que la maltraten. Este rubor me da un color precioso y sé que los ingredientes son buenos para mi rostro. ¡100% recomendado!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="beneficios" className="section-padding bg-gradient-to-b from-blush-50 to-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-forest">Lo que dicen nuestras clientas</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
            Prueba <span className="text-beetroot">Social</span>
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            Mujeres de todas las edades confían en EKORA para su rutina de belleza
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 border border-blush-100 shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 relative">
                {/* Quote icon */}
                <div className="absolute -top-3 -right-2 w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-beetroot/40" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-charcoal/70 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-blush-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush-200 to-beetroot/20 flex items-center justify-center">
                    <span className="font-serif font-bold text-beetroot text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{testimonial.name}</p>
                    <p className="text-xs text-charcoal/50">{testimonial.age} · {testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
