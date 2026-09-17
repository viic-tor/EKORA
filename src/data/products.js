export const products = [
  {
    id: 1,
    name: 'Natural Blush - Rosa Clásico',
    tagline: 'Acabado mate aterciopelado',
    price: 38000,
    image: '/images/natural-blush-1.jpg',
    description: 'Nuestro rubor insignia elaborado a base de remolacha. Aporta un tono rosa suave y saludable a la piel, ideal para el uso diario. Fórmula con aceite de coco, vitamina E y almidón de maíz.',
    features: ['Pigmentación natural', 'Acabado mate', 'Libre de químicos'],
    usage: 'Aplica con brocha o esponja sobre los pómulos con movimientos suaves y circulares. Difumina hacia las sienes para un acabado natural.',
    finish: 'Textura agradable y aplicación uniforme para realzar la belleza de manera sencilla.',
    benefits: ['Aporta un tono suave', 'Nutre e hidrata', 'No comedogénico'],
    weight: '12g',
  },
  {
    id: 2,
    name: 'Natural Blush - Cereza',
    tagline: 'Color intenso mate',
    price: 38000,
    image: '/images/natural-blush-3.jpg',
    description: 'Una mayor concentración de remolacha para un tono rojizo profundo, ideal para looks más marcados o pieles morenas, manteniendo la textura delicada y uniforme.',
    features: ['Alta pigmentación', 'Acabado mate', 'Libre de químicos'],
    usage: 'Aplica con brocha o esponja sobre los pómulos con movimientos suaves y circulares. Difumina hacia las sienes para un acabado natural.',
    finish: 'Textura agradable y aplicación uniforme para realzar la belleza de manera sencilla.',
    benefits: ['Aporta un tono profundo', 'Nutre e hidrata', 'No comedogénico'],
    weight: '12g',
  },
  {
    id: 3,
    name: 'Glow Blush - Rosa Iluminador',
    tagline: 'Con sutiles brillos',
    price: 45000,
    image: '/images/natural-blush-4.jpg',
    description: 'Nuestro tono rosa clásico complementado con destellos minerales para un efecto radiante. Funciona como rubor e iluminador al mismo tiempo, aportando luz a tus pómulos.',
    features: ['Con destellos luminosos', 'Efecto 2 en 1', 'Libre de químicos'],
    usage: 'Aplica en los puntos altos de los pómulos. Puede usarse solo o sobre tu base favorita para un look radiante y fresco.',
    finish: 'Acabado brillante y radiante gracias a sus sutiles destellos reflectantes.',
    benefits: ['Rubor e iluminador', 'Nutre e hidrata', 'No comedogénico'],
    weight: '12g',
  },
  {
    id: 4,
    name: 'Glow Blush - Cereza Radiante',
    tagline: 'Profundidad con destellos',
    price: 45000,
    image: '/images/natural-blush-5.jpg',
    description: 'La elegancia del tono cereza combinada con destellos luminosos para un maquillaje de impacto y nocturno, sin perder las propiedades de nuestra fórmula natural.',
    features: ['Con destellos luminosos', 'Alta pigmentación', 'Libre de químicos'],
    usage: 'Aplica en los pómulos difuminando hacia las sienes. Ideal para resaltar el rostro en maquillajes de tarde o noche.',
    finish: 'Acabado brillante y radiante gracias a sus sutiles destellos reflectantes.',
    benefits: ['Tono intenso y luminoso', 'Nutre e hidrata', 'No comedogénico'],
    weight: '12g',
  }
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
  let message = '¡Hola EKORA! 🌸 Me gustaría hacer el siguiente pedido:\n\n';
  let total = 0;
  cartItems.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `• ${item.name} x${item.quantity} - ${formatCOP(subtotal)}\n`;
  });
  message += `\n💰 Total: ${formatCOP(total)}\n\n`;
  message += '¡Gracias! 💕';
  return encodeURIComponent(message);
};
