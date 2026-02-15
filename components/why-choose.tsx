import { BookOpen, Heart, TreePine, Palette, Users, Clock } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Pedagogia Activa",
    description: "Pedagogia activa e integradora, donde cada alumno es protagonista de su aprendizaje y crece a su ritmo.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Trato Familiar",
    description: "Un ambiente cercano y familiar donde cada alumno se siente querido, escuchado y acompanado.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: TreePine,
    title: "Entorno Verde",
    description: "Amplias zonas verdes y espacios al aire libre donde los ninos pueden explorar y aprender en contacto con la naturaleza.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Palette,
    title: "Espacios Creativos",
    description: "Aulas tematicas y talleres equipados donde la creatividad y la expresion artistica son protagonistas.",
    color: "bg-amber-50 text-amber-500",
  },
  {
    icon: Users,
    title: "Atencion a la Diversidad",
    description: "Profesionales especializados que garantizan una educacion inclusiva adaptada a las necesidades de cada alumno.",
    color: "bg-sky-50 text-sky-500",
  },
  {
    icon: Clock,
    title: "Conciliacion Real",
    description: "Horarios flexibles, aula matinal y actividades extraescolares para facilitar la conciliacion familiar.",
    color: "bg-fuchsia-50 text-fuchsia-500",
  },
]

export function WhyChoose() {
  return (
    <section id="por-que" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"¿Por qué elegir el CEIP La Paz?"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Mas que un colegio, una comunidad diversa, creativa y llena de oportunidades.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
