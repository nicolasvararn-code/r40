"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
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

export default function ProyectosPage() {
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

  const clients = [
    { name: "Ben Hyman Music", logo: "/placeholder.svg?height=80&width=160&text=Ben+Hyman+Music" },
    { name: "Westchester Home Music", logo: "/placeholder.svg?height=80&width=160&text=Westchester+Home+Music" },
    {
      name: "Englewood Cliffs Dentistry",
      logo: "/placeholder.svg?height=80&width=160&text=Englewood+Cliffs+Dentistry",
    },
    { name: "The Medicentral", logo: "/placeholder.svg?height=80&width=160&text=The+Medicentral" },
    { name: "MyCOCOS / MyHUEVOS", logo: "/placeholder.svg?height=80&width=160&text=MyCOCOS/MyHUEVOS" },
    { name: "MENNT", logo: "/placeholder.svg?height=80&width=160&text=MENNT" },
    { name: "Desde Asia", logo: "/placeholder.svg?height=80&width=160&text=Desde+Asia" },
    { name: "Línea Color", logo: "/placeholder.svg?height=80&width=160&text=Linea+Color" },
    { name: "RollerShow", logo: "/placeholder.svg?height=80&width=160&text=RollerShow" },
    { name: "Melissa Domit", logo: "/placeholder.svg?height=80&width=160&text=Melissa+Domit" },
  ]

  const caseStudies = [
    {
      title: "Ben Hyman Music",
      market: "Educación (EE.UU.)",
      objective: "Aumentar la cantidad de leads calificados para clases de música",
      result: "+150% de mensajes calificados en Meta Ads en menos de 90 días",
      services: "Meta Ads · Funnel de captación local · Creatividades por segmento",
    },
    {
      title: "Desde Asia",
      market: "E-commerce de decoración (Argentina)",
      objective: "Aumentar ventas con segmentación por línea de producto",
      result: "ROAS de 6x en campañas de búsqueda y Performance Max",
      services: "Google Ads (Search, PMAX, Shopping) · Setup en GA4 y GTM · Listas negativas avanzadas",
    },
    {
      title: "MENNT",
      market: "Retail premium de mochilas (Chile)",
      objective: "Impulsar campañas de temporada (Black Week)",
      result: "+40% en ventas y mejora del CAC gracias a audiencias personalizadas",
      services: "Meta Ads · Remarketing dinámico · Creatividades TOFU y BOFU",
    },
    {
      title: "MyCOCOS",
      market: "DTC / Grooming masculino (LatAm)",
      objective: "Lanzamiento regional y escalamiento en 3 países",
      result: "+80% de crecimiento mensual sostenido y ROI positivo desde la semana 3",
      services: "Meta Ads · Google Ads · Email Marketing · Funnels de WhatsApp",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Casos de Éxito */}
      <section className="py-20 px-6 lg:px-20 bg-black text-white">
        <motion.div className="max-w-7xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            Casos de Éxito en Paid Media
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
            Historias reales, resultados concretos. En R40 ayudamos a marcas en Estados Unidos, Chile y Argentina a
            escalar sus campañas publicitarias con estrategias de Paid Media diseñadas a medida. Cada proyecto tiene una
            lógica de negocio, una ejecución estratégica y un impacto medible. Te mostramos cómo trabajamos y qué
            logramos.
          </motion.p>
        </motion.div>
      </section>

      {/* Algunas marcas que confiaron en R40 */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight">
            Algunas marcas que confiaron en R40
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gray-50 rounded-lg p-6 flex items-center justify-center text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Casos destacados */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight">
            Casos destacados
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-black mb-4">{caseStudy.title}</h3>
                <div className="space-y-2 text-gray-700 text-lg">
                  <p>
                    <span className="font-semibold">Mercado:</span> {caseStudy.market}
                  </p>
                  <p>
                    <span className="font-semibold">Objetivo:</span> {caseStudy.objective}
                  </p>
                  <p>
                    <span className="font-semibold">Resultado:</span> {caseStudy.result}
                  </p>
                  <p>
                    <span className="font-semibold">Servicios:</span> {caseStudy.services}
                  </p>
                </div>
                <Link
                  href={`/proyectos/${index + 1}`} // Example link, adjust as needed
                  className="mt-6 inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                >
                  Ver más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Nuestro enfoque boutique */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Nuestro enfoque boutique
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            No somos una agencia masiva. En R40 trabajamos con un equipo reducido y estratégico, con alto
            involucramiento en cada cuenta. No delegamos. No tercerizamos. Diseñamos, ejecutamos y optimizamos campañas
            nosotros mismos.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section - Proyectos CTA */}
      <section className="py-32 px-6 lg:px-20 bg-black text-white">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Querés ser nuestro próximo caso de éxito?
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-8">Hablemos</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Completá el formulario o agendá una reunión estratégica con nuestro equipo. Vamos a entender tu negocio,
              tu contexto y ver si podemos ayudarte a escalar con Paid Media.
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

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col justify-center h-full space-y-6">
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
              <Link
                href="/servicios"
                className="group inline-flex items-center justify-center gap-3 bg-transparent border border-white text-white px-8 py-4 rounded-lg text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors duration-300"
              >
                VER NUESTROS SERVICIOS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
