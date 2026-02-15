import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const methodologies = [
  {
    title: "ABP: Aprendizaje Basado en Proyectos",
    description:
      "Proyectos que les ensenan que aprender tiene significado, conexion y diversion. Experiencias de la clase de libro y cuaderno a algo vivo, creativo y colaborativo.",
    image: "/images/abp-projects.jpg",
    points: [
      "Proyectos reales y colaborativos",
      "Trabajo en equipo y liderazgo",
      "Pensamiento critico y resolucion de problemas",
    ],
    reverse: false,
  },
  {
    title: "ABN: Matematicas que se tocan",
    description:
      "Las mates no dan miedo sino interes. Con el metodo ABN los ninos trabajan los numeros con materiales manipulativos, resolviendo problemas reales y avanzando de forma natural.",
    image: "/images/abn-math.jpg",
    points: [
      "Calculo mental rapido y eficaz",
      "Resolucion de problemas reales",
      "Eliminamos la ansiedad matematica",
    ],
    reverse: true,
  },
  {
    title: "Sostenibilidad y Conciencia",
    description:
      "No es solo reciclar. Es cuidar nuestro entorno. Tenemos nuestro propio huerto escolar, proyectos de reciclaje y muchas actividades vinculadas a los Objetivos de Desarrollo Sostenible.",
    image: "/images/sustainability.jpg",
    points: [
      "Huerto escolar y educacion ambiental",
      "Proyectos vinculados a los ODS",
      "Habitos de vida sostenible",
    ],
    reverse: false,
  },
]

export function HowWeLearn() {
  return (
    <section id="como-aprendemos" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Como aprendemos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Metodologias que hacen que aprender sea significativo, colaborativo y divertido.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {methodologies.map((method) => (
            <div
              key={method.title}
              className={`flex flex-col items-center gap-8 lg:gap-12 ${
                method.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={method.image || "/placeholder.svg"}
                    alt={method.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                  {method.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {method.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {method.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
