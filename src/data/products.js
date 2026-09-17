export const products = [
  {
    id: 1,
    name: 'Rubor Natural de Remolacha',
    tagline: 'Color vibrante + cuidado botánico',
    price: 38000,
    description: 'Rubor en polvo compacto elaborado con pigmentos naturales de remolacha y cúrcuma. Aporta un color luminoso y saludable mientras nutre tu piel con antioxidantes y activos botánicos.',
    features: [
      'Pigmento 100% natural de remolacha',
      'Enriquecido con cúrcuma antiinflamatoria',
      'Acabado aterciopelado y luminoso',
      'No comedogénico',
      'Libre de parabenos y químicos nocivos',
      'Cruelty-free certificado',
    ],
    usage: 'Aplica con brocha o esponja sobre los pómulos con movimientos suaves y circulares. Difumina hacia las sienes para un acabado natural. Puedes aplicar en capas para mayor intensidad.',
    finish: 'Acabado luminoso y aterciopelado que se funde con la piel para un aspecto saludable y radiante. Larga duración sin resecar.',
    benefits: [
      'Rico en betalaínas antioxidantes',
      'Nutre e hidrata la piel',
      'Efecto antiinflamatorio de la cúrcuma',
      'Apto para pieles sensibles',
      'No obstruye los poros',
    ],
    weight: '12g',
  },
];

export const formatCOP = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('COP', '').trim() + ' COP';
};

export const WHATSAPP_NUMBER = '573008829608';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const generateWhatsAppMessage = (cartItems) => {
  let message = '¡Hola EKORA! 🌿 Me gustaría hacer el siguiente pedido:\n\n';
  let total = 0;
  cartItems.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `• ${item.name} x${item.quantity} - ${formatCOP(subtotal)}\n`;
  });
  message += `\n💰 Total: ${formatCOP(total)}\n\n`;
  message += '¡Gracias! 💚';
  return encodeURIComponent(message);
};
