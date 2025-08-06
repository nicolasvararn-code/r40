"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
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

export default function PaidMediaPage() {
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

const platforms = [
  { name: "Google Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Meta Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "TikTok Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "LinkedIn Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Pinterest Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Reddit Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Bing Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Programmatic Display", logo: "/placeholder.svg?height=60&width=120" },
]

const pipelineSteps = [
  "Diagnóstico y objetivos",
  "Investigación de mercado y competencia",
  "Configuración técnica y creativa",
  "Lanzamiento y testing inicial",
  "Escalamiento de campañas",
  "Reportes y optimización continua",
]

const optimizationMetrics = [
  "ROAS (Return on Ad Spend)",
  "CPA (Costo por Adquisición)",
  "CTR, CPC y frecuencia",
  "Creatividades y copys",
  "Pacing presupuestario",
  "Segmentación por funnel y canal",
]

return (
  <div className="min-h-screen bg-white pt-20">
    {/* Hero Section - Paid Media */}
    <section className="py-20 px-6 lg:px-20 bg-black text-white">
      <motion.div
        className="max-w-7xl mx-auto relative"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
          Paid Media
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-4">
          Somos una agencia boutique especializada en Paid Media y performance marketing. Creamos campañas multicanal,
          personalizadas y orientadas a resultados reales: leads, ventas y retorno. Gestionamos inversión publicitaria
          en plataformas como Google Ads, Meta Ads, TikTok, LinkedIn, Programmatic y más.
        </motion.p>
        <motion.p variants={fadeInUp} className="text-sm text-gray-500 leading-relaxed">
          No hacemos anuncios. Escalamos negocios.
        </motion.p>

        {/* Right Animation - Similar to clay.global image */}
        <motion.div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Large White Curved Shape */}
          <motion.div
            className="absolute inset-0 bg-white rounded-[50%_50%_0_0/100%_100%_0_0] shadow-xl"
            style={{
              transformOrigin: "bottom center",
              transform: "rotateX(45deg) rotateY(15deg) scale(1.2)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            animate={{
              rotateX: [45, 40, 45],
              rotateY: [15, 20, 15],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Purple Sphere */}
          <motion.div
            className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg"
            style={{ top: "10%", left: "70%" }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Orange Sphere */}
          <motion.div
            className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg"
            style={{ bottom: "20%", left: "20%" }}
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </section>

    {/* Estrategia de Paid Media */}
    <section className="py-32 px-6 lg:px-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
          Estrategia de Paid Media
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          En R40 diseñamos estrategias de paid advertising que conectan negocio, creatividad y datos. Cada campaña
          tiene un objetivo claro y se ejecuta con lógica de testing, iteración y optimización continua para maximizar
          el ROAS y reducir el CPA.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={fadeInUp}
            className="group p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Objetivos por canal y audiencia</h3>
            <p className="text-gray-600 text-sm">Definimos metas claras para cada plataforma y segmento.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="group p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Setup técnico (GTM, GA4, eventos, conversiones)</h3>
            <p className="text-gray-600 text-sm">Implementación y configuración de herramientas de medición.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="group p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Creatividades orientadas a conversión</h3>
            <p className="text-gray-600 text-sm">Diseño de anuncios que impulsan la acción del usuario.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="group p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Plan de escalamiento y pacing presupuestario</h3>
            <p className="text-gray-600 text-sm">Estrategias para crecer la inversión de forma rentable.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Audiencias y Segmentación */}
    <section className="py-32 px-6 lg:px-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
          Audiencias y Segmentación
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          Una buena campaña empieza con una buena audiencia. Segmentamos de forma personalizada según el funnel,
          comportamiento e intención del usuario. Usamos first party data, señales contextuales y herramientas
          avanzadas de remarketing.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={fadeInUp}
            className="group bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-black mb-3">Intereses e intenciones de búsqueda</h3>
            <p className="text-gray-600">Identificamos a usuarios por sus intereses y lo que buscan activamente.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="group bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-black mb-3">Audiencias similares y personalizadas</h3>
            <p className="text-gray-600">Creamos segmentos basados en tus clientes existentes o listas de datos.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="group bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-black mb-3">Retargeting de leads inactivos y clientes actuales</h3>
            <p className="text-gray-600">Volvemos a impactar a usuarios que ya mostraron interés o son clientes.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Plataformas que gestionamos */}
    <section className="py-32 px-6 lg:px-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-4">
          Plataformas que gestionamos
        </motion.h2>
        <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
          Donde está tu audiencia, ahí estamos
        </motion.h3>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          Activamos tus campañas en los canales que mejor se adaptan a tu negocio. Optimizamos mensaje, creatividades
          y targeting para cada plataforma.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors duration-300"
            >
              <Image
                src={platform.logo || "/placeholder.svg"}
                alt={platform.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-lg font-semibold text-black">{platform.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Display, Programmatic y Video Ads */}
    <section className="py-32 px-6 lg:px-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-4">
          Display, Programmatic y Video Ads
        </motion.h2>
        <motion.h3 variants={fadeInUp} className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
          Más allá de los clics: awareness inteligente
        </motion.h3>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          Cuando el objetivo es ganar visibilidad, autoridad o alcance, activamos campañas de alto impacto en medios
          premium y plataformas de vídeo.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={fadeInUp}
            className="group bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-black mb-3">Programmatic Display (DV360, DSPs)</h3>
            <p className="text-gray-600">Publicidad automatizada y segmentada en una vasta red de sitios.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="group bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-black mb-3">CTV / OTT (TV Conectada y Video On Demand)</h3>
            <p className="text-gray-600">Anuncios en plataformas de streaming y televisores inteligentes.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="group bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-black mb-3">Apps, medios y sitios de alto tráfico</h3>
            <p className="text-gray-600">Presencia en los lugares donde tu audiencia pasa más tiempo.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Nuestro pipeline de trabajo */}
    <section className="py-32 px-6 lg:px-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
          Nuestro pipeline de trabajo
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          No improvisamos. Cada campaña sigue un proceso probado que adapta la estrategia a tu negocio.
        </motion.p>

        <div className="space-y-8">
          {pipelineSteps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-xl text-black font-semibold pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Qué optimizamos en cada campaña */}
    <section className="py-32 px-6 lg:px-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
          Qué optimizamos en cada campaña
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          Cada decisión se toma con base en datos. Medimos, analizamos y ajustamos constantemente para mejorar el
          rendimiento.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {optimizationMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black">{metric}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Contact Section - Paid Media CTA */}
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
            ¿Querés escalar tu negocio con Paid Media?
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-8">Hablemos</h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Completá el formulario o agendá una reunión. Uno de nuestros especialistas te va a contactar para entender
            tus objetivos y mostrarte cómo podemos ayudarte.
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
