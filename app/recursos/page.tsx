import type { Metadata } from "next"
import RecursosPageClient from "./RecursosPageClient"

export const metadata: Metadata = {
  title: "Recursos de Paid Media y Marketing Digital | R40",
  description:
    "Descargá guías, leé artículos y accedé a contenido útil sobre Paid Media, performance y estrategia. Todo basado en campañas reales.",
}

export default function RecursosPage() {
  return <RecursosPageClient />
}
