import { ClipboardList, FileText, Send, CheckSquare } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Preinscripcion",
    description: "Del 1 al 20 de Marzo. Descarga y completa la solicitud en la web de la Junta de Andalucia.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FileText,
    title: "Lista Provisional",
    description: "Se publicara la lista provisional de admitidos. Puedes consultarla en el centro o en la web.",
    color: "bg-secondary/40 text-secondary-foreground",
  },
  {
    icon: Send,
    title: "Lista Definitiva",
    description: "Revisa la lista definitiva de admitidos y confirma tu plaza en el plazo establecido.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: CheckSquare,
    title: "Matricula",
    description: "Del 1 al 10 de Junio. Entrega la documentacion necesaria y formaliza la matricula.",
    color: "bg-sky-50 text-sky-600",
  },
]

export function Enrollment() {
  return (
    <section id="como-matricular" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Matriculacion abierta
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"?"}Como matricular a tu hijo/a?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            El proceso es sencillo. Te guiamos paso a paso.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl ${step.color}`}>
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-card-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
