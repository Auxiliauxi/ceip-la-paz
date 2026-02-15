import { Sun, UtensilsCrossed, Dumbbell } from "lucide-react"

const services = [
  {
    icon: Sun,
    title: "Aula Matinal",
    description: "Servicio de acogida temprana desde las 7:30 para facilitar la conciliacion familiar.",
    color: "bg-amber-400",
  },
  {
    icon: UtensilsCrossed,
    title: "Comedor Escolar",
    description: "Menus equilibrados y supervisados por nutricionistas, con opciones para alergias.",
    color: "bg-primary",
  },
  {
    icon: Dumbbell,
    title: "Extraescolares",
    description: "Amplia oferta de actividades deportivas, artisticas, idiomas y tecnologia.",
    color: "bg-emerald-500",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Servicios para familias
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sabemos que la conciliacion importa. Te lo ponemos facil.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}>
                <service.icon className="h-8 w-8 text-background" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
