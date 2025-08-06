"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
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

export default function HomePage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    presupuesto: "",
    mensaje: "",
  })

  const services = [
    {
      name: "Paid Media",
      description:
        "Google, Meta, TikTok, LinkedIn Ads. Campañas publicitarias optimizadas para maximizar el retorno de inversión y escalar tu negocio de manera rentable.",
    },
    {
      name: "Ecommerce",
      description:
        "Funnels, retargeting y crecimiento escalable. Estrategias completas para tiendas online que convierten visitantes en compradores recurrentes.",
    },
    {
      name: "SEO",
      description:
        "Visibilidad orgánica con intención de compra. Posicionamiento estratégico que atrae tráfico cualificado y genera leads de alta calidad.",
    },
    {
      name: "Email Marketing",
      description:
        "Automatizaciones que activan y retienen. Secuencias personalizadas que nutren leads y convierten suscriptores en clientes fieles.",
    },
    {
      name: "Lead Generation",
      description:
        "Campañas full-funnel para captar clientes. Sistemas integrados que identifican, atraen y convierten tu audiencia ideal.",
    },
    {
      name: "Branding",
      description:
        "Creatividad orientada a performance. Identidades visuales que no solo se ven bien, sino que generan resultados medibles.",
    },
    {
      name: "Digitalización",
      description:
        "Implementaciones técnicas que permiten escalar. Automatizaciones y sistemas que optimizan procesos y mejoran la eficiencia operativa.",
    },
  ]

  const faqs = [
    {
      question: "¿Tienen experiencia en mi industria?",
      answer:
        "Hemos trabajado con empresas de diversos sectores: e-commerce, fintech, salud, educación, tecnología y servicios profesionales. Nuestro enfoque se basa en entender profundamente tu negocio y audiencia, independientemente de la industria.",
    },
    {
      question: "¿Qué presupuesto necesito para empezar?",
      answer:
        "El presupuesto mínimo recomendado para campañas de Paid Media es de $3,000 USD mensuales para publicidad + fee de gestión. Esto nos permite hacer pruebas significativas y optimizaciones efectivas. Para proyectos más pequeños, evaluamos cada caso individualmente.",
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados?",
      answer:
        "Los primeros resultados suelen verse entre 2-4 semanas, pero la optimización real comienza después del primer mes. Para resultados consistentes y escalables, recomendamos un mínimo de 3 meses de trabajo conjunto.",
    },
    {
      question: "¿Qué incluye el servicio de Paid Media?",
      answer:
        "Incluye estrategia completa, configuración de campañas, creación de audiencias, optimización continua, reportes semanales, y reuniones mensuales de revisión. También proporcionamos recomendaciones para landing pages y creatividades.",
    },
    {
      question: "¿Cómo es el proceso de trabajo?",
      answer:
        "Comenzamos con un diagnóstico profundo de tu negocio, definimos objetivos y KPIs, creamos la estrategia, implementamos las campañas y optimizamos basándonos en datos. Mantienes acceso completo a todas las cuentas publicitarias.",
    },
    {
      question: "¿Puedo contratar solo una parte del servicio?",
      answer:
        "Sí, ofrecemos servicios modulares. Puedes contratar solo Paid Media, SEO, Email Marketing o cualquier combinación. Sin embargo, los mejores resultados se obtienen con un enfoque integral que conecte todos los canales.",
    },
  ]

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-2 text-sm uppercase tracking-[0.2em] text-gray-500 bg-gray-100 rounded-full mb-8">
                  AGENCIA BOUTIQUE
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-[0.9]"
              >
                TRANSFORMAMOS
                <br />
                <span className="text-gray-400">CLICS EN VENTAS</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                Somos R40, una agencia boutique especializada en Paid Media. Diseñamos estrategias publicitarias
                personalizadas que conectan con tu audiencia y escalan tu negocio.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-4 space-y-4">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 text-lg uppercase tracking-[0.15em] text-black hover:text-gray-600 transition-colors duration-300"
                >
                  AGENDÁ UNA REUNIÓN
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Clientes en EE.UU., Chile y Argentina · Más de 100 campañas activas
                </p>
              </motion.div>
            </motion.div>

            {/* Right Animation */}
            <motion.div
              className="relative h-[600px] hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Floating Elements */}
              <motion.div
                className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full"
                animate={{
                  y: [0, 30, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              <motion.div
                className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full"
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <motion.div
                className="absolute top-60 right-60 w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 9,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <motion.div
                className="absolute bottom-20 right-32 w-14 h-14 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  x: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 lg:px-20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="lg:sticky lg:top-32">
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6 block">NUESTROS SERVICIOS</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                Lo que hacemos, lo hacemos bien.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Ayudamos a empresas a crecer con estrategias digitales que combinan creatividad, performance y data.
                Nuestros servicios están diseñados para resolver problemas reales de negocio, no para sumar vanity
                metrics.
              </p>
            </motion.div>

            {/* Right Services List */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors duration-300 px-4 -mx-4 rounded-lg"
                  >
                    <span className="text-2xl lg:text-3xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                      {service.name}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedService === index ? "auto" : 0,
                      opacity: expandedService === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 px-4 -mx-4">
                      <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Success Stories Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6 block">MINI HISTORIAS DE ÉXITO</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">Resultados que hablan por sí solos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más leads, más ventas, mejor retorno. Estas marcas confiaron en nosotros y lo notaron.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                client: "Desde Asia",
                result: "ROAS 6x",
                description: "en campañas Google",
                color: "from-blue-500 to-purple-600",
              },
              {
                client: "Ben Hyman Music",
                result: "+150%",
                description: "leads calificados",
                color: "from-green-500 to-teal-600",
              },
              {
                client: "MENT",
                result: "+40%",
                description: "en ventas durante Black Week",
                color: "from-orange-500 to-red-600",
              },
              {
                client: "MyHuevos",
                result: "+80%",
                description: "de crecimiento mensual",
                color: "from-pink-500 to-rose-600",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${story.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                />

                <h3 className="font-bold text-black mb-2 text-lg">{story.client}</h3>

                <div className="mb-3">
                  <span className="text-3xl font-bold text-black">{story.result}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <Link
              href="/casos-de-exito"
              className="group inline-flex items-center gap-3 text-lg uppercase tracking-[0.15em] text-black hover:text-gray-600 transition-colors duration-300"
            >
              VER MÁS CASOS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* R40 Differential Section */}
      <section className="py-32 px-6 lg:px-20 bg-black text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <span className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 block">DIFERENCIAL R40</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">No somos una agencia más</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              En R40 no tercerizamos. No te damos a un equipo junior. Trabajás directamente con quienes piensan,
              ejecutan y optimizan tu estrategia.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
              <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed">
                Somos un equipo <span className="font-bold text-white">senior</span> con base en{" "}
                <span className="font-bold text-white">LATAM</span> y clientes{" "}
                <span className="font-bold text-white">globales</span>
              </blockquote>

              <motion.div
                className="mt-8 inline-flex items-center gap-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm uppercase tracking-[0.2em] text-gray-300 border border-white/20">
                  AGENCIA BOUTIQUE
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6 block">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">Preguntas frecuentes</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors duration-300 rounded-lg"
                >
                  <span className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? "auto" : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 lg:px-20 bg-black text-white">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">¿Querés trabajar con nosotros?</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Completá el formulario o agendá una llamada directa. Nos gustaría entender tu negocio y ayudarte a
              escalar.
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
