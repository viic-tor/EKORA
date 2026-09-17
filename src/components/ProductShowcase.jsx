import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Droplets, Sparkles, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';

// We use the first product's base data for the general formula benefits
const formulaDetails = {
  usage: products[0].usage,
  finish: products[0].finish,
  benefits: products[0].benefits,
  features: products[0].features,
};

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('benefits');

  const tabs = [
    { id: 'benefits', label: 'Beneficios', icon: Sparkles },
    { id: 'usage', label: 'Modo de Uso', icon: Info },
    { id: 'finish', label: 'Acabado', icon: Droplets },
  ];

  return (
    <section className="py-24 bg-blush-50/30 relative" id="formula">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-forest">Nuestra fórmula estrella</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2">
            El secreto de <span className="text-beetroot">EKORA</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blush-50 to-blush-200 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <img
                src="/images/natural-blush-2.jpg"
                alt="Natural Blush EKORA con brochas"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            {/* Trust badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-warm-lg flex items-center gap-3">
              <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-forest" />
              </div>
              <div>
                <p className="text-xs text-charcoal/50 uppercase tracking-widest font-semibold">Garantía</p>
                <p className="font-serif font-bold text-charcoal">100% Natural</p>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Nuestros rubores están creados con una base botánica que respeta y nutre tu piel. 
                Cada ingrediente ha sido seleccionado cuidadosamente para ofrecer pigmentación, 
                textura y beneficios excepcionales.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {formulaDetails.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-forest" />
                  </div>
                  <span className="text-sm text-charcoal/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="border-b border-charcoal/10 mb-6">
              <div className="flex gap-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 text-sm font-medium transition-colors relative flex items-center gap-2 ${
                        activeTab === tab.id
                          ? 'text-beetroot'
                          : 'text-charcoal/50 hover:text-charcoal'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-beetroot"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[120px] bg-white p-6 rounded-2xl shadow-warm-sm border border-charcoal/5">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'benefits' && (
                  <ul className="space-y-3">
                    {formulaDetails.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-charcoal/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-beetroot/40" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'usage' && (
                  <p className="text-charcoal/70 leading-relaxed">
                    {formulaDetails.usage}
                  </p>
                )}
                {activeTab === 'finish' && (
                  <p className="text-charcoal/70 leading-relaxed">
                    {formulaDetails.finish}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
