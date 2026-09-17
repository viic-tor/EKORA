import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿El rubor mancha la ropa?',
    answer: 'No. Nuestro rubor se adhiere a la piel de forma natural gracias a sus ceras botánicas. Al aplicarse correctamente y dejar secar unos segundos, no transfiere a la ropa ni a las sábanas.',
  },
  {
    question: '¿Cuánto dura el rubor puesto?',
    answer: 'El rubor tiene una duración de 6 a 8 horas en condiciones normales. Para mayor fijación, recomendamos aplicar sobre una base hidratante y sellar con polvo traslúcido si lo deseas.',
  },
  {
    question: '¿Sirve para piel grasa o seca?',
    answer: '¡Sí! Nuestra fórmula es no comedogénica y se adapta a todos los tipos de piel. En piel grasa, los aceites botánicos regulan sin obstruir poros. En piel seca, aportan hidratación natural sin resecar.',
  },
  {
    question: '¿Es seguro para pieles sensibles?',
    answer: 'Absolutamente. Al estar libre de parabenos, fragancia sintética y químicos agresivos, nuestro rubor es apto para pieles sensibles. Los ingredientes botánicos naturales tienen propiedades calmantes y protectoras.',
  },
  {
    question: '¿Hacen envíos a toda Colombia?',
    answer: '¡Sí! Enviamos a todas las ciudades y municipios de Colombia. Los envíos a Ibagué y ciudades principales tienen tiempos de entrega de 1 a 3 días hábiles. Para municipios pequeños, el tiempo puede ser de 3 a 7 días hábiles.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias (Nequi, Daviplata, Bancolombia), pagos en efectivo contra entrega en Ibagué y envíos con pago en destino a través de nuestra transportadora aliada.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-blush-100 rounded-2xl overflow-hidden hover:border-blush-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-blush-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-beetroot/60" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-charcoal/60 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-forest/5 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle className="w-4 h-4 text-forest" />
            <span className="text-sm font-medium text-forest">Resolvemos tus dudas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
