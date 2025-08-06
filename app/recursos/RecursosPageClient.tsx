"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function RecursosPageClient() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email subscribed:", email)
    setEmail("") // Clear input after submission
    // In a real app, you'd send this email to your mailing list service
  }

  const blogArticles = [
    {
      title: "Cómo elegir entre Search, Display y PMAX",
      preview: "Descubre las diferencias clave y cuándo usar cada tipo de campaña para maximizar tu inversión.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Qué hace diferente una agencia boutique",
      preview: "Explora las ventajas de trabajar con un equipo especializado y con alto involucramiento en tu cuenta.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Estrategia TOFU, MOFU y BOFU para e-commerce",
      preview: "Aprende a estructurar tu funnel de ventas con contenido y campañas para cada etapa del cliente.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cómo definir un buen CPA objetivo",
      preview: "Guía práctica para establecer un Costo por Adquisición (CPA) realista y rentable para tus campañas.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Qué métricas mirar (y cuáles ignorar) en Meta Ads",
      preview: "Un análisis profundo de las métricas esenciales para optimizar tus campañas en Facebook e Instagram.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const downloadableResources = [
    {
      title: "Checklist de lanzamiento para Google Ads",
      icon: "/placeholder.svg?height=60&width=60",
      link: "#", // Placeholder link
    },
    {
      title: "Guía rápida para auditar una cuenta de Meta Ads",
      icon: "/placeholder.svg?height=60&width=60",
      link: "#", // Placeholder link
    },
    {
      title: "Ejemplo de dashboard de performance",
      icon: "/placeholder.svg?height=60&width=60",
      link: "#", // Placeholder link
    },
    {
      title: "Diccionario express de métricas para no-marketers",
      icon: "/placeholder.svg?height=60&width=60",
      link: "#", // Placeholder link
    },
  ]

  const featuredPublications = [
    {
      quote:
        "La clave no es solo generar clics, sino convertirlos en ventas reales. Nuestro enfoque se basa en la rentabilidad.",
      author: "Equipo R40",
      platform: "LinkedIn",
      link: "#", // Placeholder link
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "El Paid Media es un arte y una ciencia. La data nos da la dirección, la creatividad nos da el impacto.",
      author: "Especialista R40",
      platform: "LinkedIn",
      link: "#", // Placeholder link
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Recursos */}
      <section className="py-20 px-6 lg:px-20 bg-black text-white">
        <motion.div className="max-w-7xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            Recursos y Contenido Estratégico
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
            Insights, ideas y aprendizajes sobre Paid Media y marketing digital. Compartimos contenido útil para
            ayudarte a tomar mejores decisiones, escalar campañas y entender qué hay detrás de un buen rendimiento. Todo
            lo que publicamos está basado en lo que vivimos día a día con nuestros clientes reales.
          </motion.p>
        </motion.div>
      </section>

      {/* Artículos del Blog */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            Artículos del Blog
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
            Notas breves y accionables sobre estrategia, audiencias, presupuesto, performance, plataformas y más.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{article.preview}</p>
                  <Link
                    href="#" // Placeholder link
                    className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    Leer más{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Informes y descargables */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            Informes y descargables
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
            Recursos más profundos, prácticos y gratuitos. Ideales para founders, CMOs y equipos que buscan entender
            mejor la lógica de performance marketing.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={resource.icon || "/placeholder.svg"}
                  alt={resource.title}
                  width={60}
                  height={60}
                  className="mx-auto mb-4 h-16 w-16 object-contain"
                />
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {resource.title}
                </h3>
                <Link
                  href={resource.link}
                  className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                >
                  Descargar PDF{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Publicaciones destacadas */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            Publicaciones destacadas
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
            Selección de posteos o hilos virales de nuestro equipo en LinkedIn u otros medios. Lo que generó
            conversación, resonó en otros marketers o aportó una mirada distinta.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPublications.map((pub, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gray-50 rounded-xl p-6 flex items-start gap-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={pub.image || "/placeholder.svg"}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <blockquote className="text-lg font-medium text-black mb-3 leading-relaxed">
                    &ldquo;{pub.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">{pub.author}</span> en {pub.platform}
                  </p>
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    Ver post{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Suscripción */}
      <section className="py-32 px-6 lg:px-20 bg-black text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Querés recibir contenido de valor?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Sumate a nuestra lista para recibir artículos, plantillas y recursos directamente en tu inbox. Sin spam.
            Solo marketing útil y accionable.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="flex-grow flex gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white"
              />
              <Button
                type="submit"
                className="bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-gray-200 transition-colors duration-300"
              >
                Quiero recibirlo
              </Button>
            </form>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-8">
            <Link
              href="https://www.linkedin.com/company/r40-agency/" // Placeholder LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-transparent border border-white text-white px-8 py-4 rounded-lg text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors duration-300"
            >
              Seguinos en LinkedIn
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
