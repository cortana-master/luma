import Link from 'next/link';
import { Globe, AtSign, Play } from 'lucide-react';

const productLinks = [
  { label: 'Características', href: '#' },
  { label: 'Agentes IA', href: '#' },
  { label: 'Precios', href: '#precios' },
  { label: 'Actualizaciones', href: '#' },
];

const companyLinks = [
  { label: 'Sobre nosotros', href: '#' },
  { label: 'Casos de éxito', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Carreras', href: '#' },
];

const legalLinks = [
  { label: 'Privacidad', href: '#' },
  { label: 'Términos', href: '#' },
  { label: 'Seguridad', href: '#' },
  { label: 'Cookies', href: '#' },
];

export function FooterSection() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <Link
            href="/"
            className="text-xl font-headline font-bold text-primary block mb-6"
          >
            <span className="w-6 h-6 bg-primary rounded-md inline-flex items-center justify-center text-white text-xs mr-2">
              L
            </span>
            Luma
          </Link>
          <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
            Potenciando el futuro de la educación a través de inteligencia artificial ética, segura y accesible para todos.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            >
              <AtSign className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            >
              <Play className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-headline font-bold text-on-surface mb-6">Producto</h5>
          <ul className="space-y-4">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-on-surface mb-6">Compañía</h5>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-on-surface mb-6">Legal</h5>
          <ul className="space-y-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm text-on-surface-variant">
          © 2024 Luma B2B Learning Platform. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-xs text-on-surface-variant hover:text-primary">
            Soporte
          </Link>
          <Link href="#" className="text-xs text-on-surface-variant hover:text-primary">
            Documentación
          </Link>
        </div>
      </div>
    </footer>
  );
}
