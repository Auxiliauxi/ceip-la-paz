"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Es el colegio publico?",
    answer: "Si, el CEIP La Paz es un centro publico dependiente de la Consejeria de Educacion de la Junta de Andalucia. Toda la educacion es gratuita.",
  },
  {
    question: "Cual es la remuneracion con las familias?",
    answer: "Mantenemos una comunicacion constante con las familias a traves de tutorias, reuniones trimestrales, la plataforma digital del centro y comunicaciones regulares por correo electronico.",
  },
  {
    question: "Cual es el horario escolar?",
    answer: "El horario lectivo es de 9:00 a 14:00 horas. Contamos con aula matinal desde las 7:30 y actividades extraescolares hasta las 18:00.",
  },
  {
    question: "Como funciona el comedor escolar?",
    answer: "El comedor escolar funciona con un servicio de catering con menus equilibrados supervisados por nutricionistas. Se adaptan menus para alergias e intolerancias.",
  },
  {
    question: "A que edades va dirigido el centro?",
    answer: "El CEIP La Paz atiende a alumnado desde los 3 hasta los 12 anos, cubriendo las etapas de Educacion Infantil (3-5 anos) y Educacion Primaria (6-12 anos).",
  },
  {
    question: "Que actividades extraescolares ofrecen?",
    answer: "Ofrecemos una amplia variedad de actividades: deportes (futbol, baloncesto, atletismo), artes (musica, teatro, pintura), idiomas (ingles reforzado) y robotica, entre otras.",
  },
  {
    question: "El centro ofrece modelos de apoyo educativo?",
    answer: "Si, contamos con especialistas en Pedagogia Terapeutica, Audicion y Lenguaje, y un equipo de orientacion que garantiza la atencion individualizada.",
  },
  {
    question: "Puedo visitar el centro antes de matricular?",
    answer: "Por supuesto. Ademas de las Jornadas de Puertas Abiertas, puedes solicitar una visita personalizada contactando con la secretaria del centro.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Resolvemos tus dudas mas habituales.
          </p>
        </div>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
