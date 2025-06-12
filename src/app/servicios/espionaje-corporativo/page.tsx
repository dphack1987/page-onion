// src/app/servicios/espionaje-corporativo/page.tsx
"use client"; // Se necesita para el Link de Next.js y otros elementos interactivos

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Asumiendo que usas Card de Shadcn UI

export default function EspionajeCorporativoPage() {
  const serviciosEspionaje = [
    {
      nombre: "Inteligencia Competitiva",
      precio: "0.05 BTC",
      caracteristicas: [
        "Análisis de mercado",
        "Estrategias de competidores",
        "Vulnerabilidades de negocio",
        "Reportes detallados"
      ]
    },
    {
      nombre: "Monitoreo de Empleados Clave",
      precio: "0.08 BTC",
      caracteristicas: [
        "Monitoreo de comunicaciones",
        "Análisis de comportamiento",
        "Identificación de fugas de información",
        "Alertas en tiempo real"
      ]
    },
    {
      nombre: "Recuperación de Datos Estratégicos",
      precio: "0.1 BTC",
      caracteristicas: [
        "Acceso a sistemas comprometidos",
        "Extracción de información sensible",
        "Borrado de huellas",
        "Garantía de confidencialidad"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <Link href="/">
            <Button variant="link" className="text-gray-400 hover:text-white">
              ← Volver a Inicio
            </Button>
          </Link>
        </nav>

        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Servicios de Espionaje Corporativo</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Obtén la información clave que necesitas para asegurar tu ventaja competitiva.
            Todos nuestros servicios se realizan con la máxima discreción.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {serviciosEspionaje.map((servicio, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
              <h3 className="text-xl font-bold mb-4">{servicio.nombre}</h3>
              <p className="text-blue-400 text-2xl font-bold mb-6">{servicio.precio}</p>
              <ul className="space-y-3 text-gray-400">
                {servicio.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </section>

        {/* Puedes añadir secciones adicionales como "Información del Servicio", "Preguntas Frecuentes" o "Medidas de Seguridad" aquí,
            siguiendo el patrón que usaste en carding/page.tsx si lo deseas. */}

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas inteligencia estratégica?</h2>
          <p className="text-gray-400 mb-8">Contacta ahora para discutir tus objetivos de espionaje.</p>
          <p className="text-blue-400 font-bold">dphack-services@proton.me</p>
        </div>
      </div>
    </main>
  );
}
