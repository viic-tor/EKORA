import { Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-charcoal text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-beetroot to-beetroot-800">
        <div className="container-main section-padding !py-12 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Comienza tu rutina de belleza natural
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Únete a las mujeres que ya cuidan su piel con EKORA
          </p>
          <a
            href="https://wa.me/573008829608?text=Hola%20EKORA%2C%20quiero%20pedir%20mi%20rubor%20natural"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-beetroot font-semibold px-8 py-3.5 rounded-full hover:bg-blush-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Pedir mi Rubor Ahora
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main section-padding !py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo-ekora.png"
                alt="EKORA"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="font-serif text-xl font-bold">EKORA</span>
                <span className="block text-[10px] tracking-[0.2em] text-sage -mt-1 uppercase">Cosmética Natural</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Cosméticos naturales a base de remolacha que resaltan tu belleza mientras cuidan tu piel. Desde Ibagué para toda Colombia.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/ekora_cosmetic" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-beetroot transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {['Inicio', 'El Rubor', 'Ingredientes', 'Nuestra Historia', 'Preguntas Frecuentes'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2.5">
              {['Política de Envíos', 'Política de Cambios', 'Términos y Condiciones', 'Aviso de Privacidad'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50">Ibagué, Tolima, Colombia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50">+57 300 882 9608</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50">hola@ekora.co</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2024 EKORA - Cosmética Natural. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-beetroot inline" /> en Ibagué, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
