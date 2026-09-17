import { motion } from 'framer-motion';
import { Droplets, Flower2 } from 'lucide-react';

const ingredients = [
  {
    icon: Droplets,
    name: 'Remolacha',
    color: 'beetroot',
    subtitle: 'Pigmento Vibrante',
    description: 'Rica en betalaínas, ofrece un pigmento intenso y vibrante de origen 100% natural. Sus antioxidantes protegen la piel del daño ambiental y promueven un aspecto saludable y radiante.',
    benefits: ['Pigmento natural vibrante', 'Rico en antioxidantes', 'Protección ambiental'],
    gradient: 'from-beetroot/10 to-blush-200',
    iconBg: 'bg-beetroot/10',
    iconColor: 'text-beetroot',
  },
  {
    icon: Droplets,
    name: 'Aceite de Coco & Vitamina E',
    color: 'forest',
    subtitle: 'Hidratación y Textura',
    description: 'El aceite de coco y la vitamina E se unen para brindar una hidratación profunda y una textura agradable. Estos ingredientes seleccionados aseguran que el rubor se funda suavemente en la piel.',
    benefits: ['Textura agradable', 'Aplicación uniforme', 'Hidratación suave'],
    gradient: 'from-sage-50 to-sage-200',
    iconBg: 'bg-sage-100',
    iconColor: 'text-forest',
  },
  {
    icon: Flower2,
    name: 'Almidón de Maíz',
    color: 'amber',
    subtitle: 'Acabado Perfecto',
    description: 'El almidón de maíz es el secreto para lograr una aplicación uniforme y un acabado delicado. Ayuda a controlar los brillos naturales mientras mantiene la piel con un aspecto saludable y fresco.',
    benefits: ['Aplicación uniforme', 'Control de brillos', 'Acabado delicado'],
    gradient: 'from-amber-50 to-amber-100',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
];

export default function Ingredients() {
  return (
    <section id="ingredientes" className="section-padding bg-gradient-to-b from-white to-blush-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-forest">Directamente de la naturaleza</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
            El Poder de la <span className="text-forest">Naturaleza</span>
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            Cada ingrediente ha sido seleccionado por sus propiedades únicas para tu piel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className={`h-full bg-gradient-to-br ${item.gradient} rounded-3xl p-8 border border-white/60 hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1`}>
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">
                  {item.name}
                </h3>
                <p className="text-sm font-medium text-forest/70 mb-4">{item.subtitle}</p>

                <p className="text-charcoal/60 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.benefits.map(benefit => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                      <span className="text-sm text-charcoal/70 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
