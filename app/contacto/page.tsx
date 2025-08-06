"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    sitioWeb: "",
    motivo: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // You would typically send this data to an API endpoint here
    alert("¡Formulario enviado! Te contactaremos pronto.")
    setFormData({
      nombre: "",
      email: "",
      sitioWeb: "",
      motivo: "",
      mensaje: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Contacto */}
      <section className="py-20 px-6 lg:px-20 bg-black text-white">
        <motion.div className="max-w-7xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            Hablemos sobre tu estrategia de Paid Media
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
            Queremos entender tus objetivos de negocio y ver si somos la agencia adecuada para ayudarte a escalar con
            campañas de Paid Media. Dejanos tus datos o agendá una reunión con nuestro equipo. Respondemos en menos de
            24 horas.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form & CTA */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Form */}
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="nombre" className="block text-sm uppercase tracking-[0.1em] text-gray-500 mb-3">
                    NOMBRE COMPLETO *
                  </label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg focus:border-black transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-[0.1em] text-gray-500 mb-3">
                    EMAIL DE CONTACTO *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg focus:border-black transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="sitioWeb" className="block text-sm uppercase tracking-[0.1em] text-gray-500 mb-3">
                    SITIO WEB O MARCA (OPCIONAL)
                  </label>
                  <Input
                    type="text"
                    id="sitioWeb"
                    name="sitioWeb"
                    value={formData.sitioWeb}
                    onChange={handleChange}
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg focus:border-black transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="motivo" className="block text-sm uppercase tracking-[0.1em] text-gray-500 mb-3">
                    ¿EN QUÉ PODEMOS AYUDARTE? *
                  </label>
                  <select
                    id="motivo"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg focus:border-black transition-colors duration-300 bg-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="escalar-campanas">Escalar campañas activas</option>
                    <option value="lanzar-estrategia">Lanzar una nueva estrategia</option>
                    <option value="consultoria-puntual">Consultoría puntual</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm uppercase tracking-[0.1em] text-gray-500 mb-3">
                    MENSAJE (CONTANOS BREVEMENTE TU SITUACIÓN ACTUAL)
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg focus:border-black transition-colors duration-300 resize-none"
                    placeholder="Ej: Necesito aumentar mis ventas online..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-black text-white px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-gray-800 transition-colors duration-300 group"
                >
                  QUIERO EMPEZAR
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Respondemos siempre. Y si creemos que no somos lo que buscás, también te lo vamos a decir.
                </p>
              </form>
            </motion.div>

            {/* Alternativa: agendá una llamada */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col justify-center h-full"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">¿Preferís hablar directamente?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Agendá una llamada de 30 minutos para conocernos y evaluar si podemos ayudarte.
                </p>
                <Link
                  href="https://calendly.com/r40-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg text-sm uppercase tracking-[0.1em] hover:bg-gray-800 transition-colors duration-300"
                >
                  PREFIERO AGENDAR UNA REUNIÓN DIRECTA
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
