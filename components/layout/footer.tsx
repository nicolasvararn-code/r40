import Link from "next/link"
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-start mb-6">
              <Image src="/logo-r40.png" alt="R40" width={120} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Creamos productos digitales extraordinarios que conectan, inspiran y generan resultados medibles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">NAVEGACIÓN</h3>
            <nav className="space-y-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Proyectos", href: "/proyectos" },
                { name: "Servicios", href: "/servicios" },
                { name: "Nosotros", href: "/nosotros" },
                { name: "Blog", href: "/blog" },
                { name: "Contacto", href: "/contacto" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">CONTACTO</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Barcelona, España
                <br />
                Madrid, España
              </p>
              <a
                href="mailto:hola@studio.com"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                hola@studio.com
              </a>
              <a
                href="tel:+34123456789"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                +34 123 456 789
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col lg:flex-row gap-6 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Studio. Todos los derechos reservados.</span>
            <div className="flex gap-6">
              <Link href="/privacidad" className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition-colors duration-300">
                Términos de Uso
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "mailto:hola@studio.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
