"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

export default function ServiciosPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    presupuesto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Servicios */}
      <section className="py-20 px-6 lg:px-20 bg-black text-white">
        <motion.div className="max-w-7xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            Servicios
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
            En R40 diseñamos estrategias de Paid Media con visión integral. Estos servicios complementarios nos permiten
            escalar resultados, optimizar cada punto del funnel y acompañar el crecimiento de tu marca más allá de los
            clics. Todos estos servicios están pensados para potenciar nuestras campañas de Paid Media o complementar tu
            estrategia digital de forma 100% personalizada.
          </motion.p>
        </motion.div>
      </section>

      {/* Audiencias Section */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Audiencias
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
            Un targeting preciso es la base de todo
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            La segmentación lo es todo. Construimos audiencias dinámicas, listas personalizadas y estrategias de
            retargeting que aseguran que tus anuncios lleguen a quien realmente importa. Usamos datos, no suposiciones.
          </motion.p>
        </motion.div>
      </section>

      {/* SEO Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            SEO
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
            Visibilidad más allá de la pauta
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
            Complementamos tus campañas con estrategias de posicionamiento orgánico pensadas para atraer tráfico
            calificado a largo plazo. Optimizamos contenidos, estructuras técnicas y arquitectura de sitio para mejorar
            tu presencia en buscadores.
          </motion.p>

          <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
            Contenido estratégico con intención de búsqueda
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Redactamos artículos que no solo posicionan, sino que convierten. Cada entrada responde a búsquedas reales,
            pensada para captar demanda activa y fortalecer tu autoridad en tu industria.
          </motion.p>
        </motion.div>
      </section>

      {/* Estrategias de Contenido Section */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Estrategias de Contenido
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
            Organización, coherencia y foco en resultados
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Auditamos y reorganizamos tu contenido para que tenga un rol claro dentro de tu embudo. Diseñamos verticales
            editoriales, mensajes clave y calendarios que alinean tu presencia digital con tus objetivos de negocio.
            Ideal para equipos internos que necesitan dirección clara, o como complemento de campañas activas. Tu
            presencia orgánica no tiene que ser improvisada. Creamos estrategias editoriales que refuerzan el mensaje de
            tus campañas pagas, manteniendo coherencia, frecuencia y engagement real con tu comunidad.
          </motion.p>
        </motion.div>
      </section>

      {/* Email Marketing Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Email Marketing
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
            Automatizaciones que convierten, segmentaciones que retienen
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Diseñamos flujos de emails que educan, activan y retienen. Desde campañas promocionales hasta secuencias
            automatizadas, cada envío está alineado a tus objetivos de negocio y comportamiento del usuario.
          </motion.p>
        </motion.div>
      </section>

      {/* Desarrollos a Medida Section */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Desarrollos a Medida
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
            Soluciones técnicas que acompañan la estrategia
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            No todo se resuelve con una plantilla. Cuando hace falta, desarrollamos soluciones propias: landing pages
            optimizadas, integraciones con plataformas, tracking avanzado y otras herramientas que maximizan el
            rendimiento de tus campañas.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section - Servicios CTA */}
      <section className="py-32 px-6 lg:px-20 bg-black text-white">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Querés sumar estos servicios a tu estrategia?
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-8">Contanos en qué estás trabajando</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Completá el formulario y uno de nuestros especialistas te va a contactar para entender tus necesidades y
              explorar cómo podemos ayudarte.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm uppercase tracking-[0.1em] text-gray-400 mb-3">NOMBRE *</label>
                  <Input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-[0.1em] text-gray-400 mb-3">EMAIL *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-[0.1em] text-gray-400 mb-3">EMPRESA</label>
                  <Input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-[0.1em] text-gray-400 mb-3">
                    PRESUPUESTO MENSUAL
                  </label>
                  <select
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    className="w-full h-10 bg-gray-900 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-white focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="menos-3k">Menos de $3,000</option>
                    <option value="3k-10k">$3,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="mas-50k">Más de $50,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-[0.1em] text-gray-400 mb-3">
                    CONTANOS SOBRE TU PROYECTO *
                  </label>
                  <Textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white resize-none"
                    placeholder="Describí tu negocio, objetivos y qué te gustaría lograr..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-gray-200 transition-colors duration-300"
                >
                  ENVIAR FORMULARIO
                </Button>
              </form>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="flex flex-col justify-center h-full">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">¿Preferís hablar directamente?</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Agendá una llamada de 30 minutos para conocernos y evaluar si podemos ayudarte.
                </p>
                <Link
                  href="https://calendly.com/r40-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg text-sm uppercase tracking-[0.1em] hover:bg-gray-200 transition-colors duration-300"
                >
                  AGENDÁ UNA REUNIÓN
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
