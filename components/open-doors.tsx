import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

const dates = [
  { date: "Lunes, 23 de Febrero", time: "17:00h" },
  { date: "Jueves, 5 de Marzo", time: "10:00h" },
]

export function OpenDoors() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Left */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
              Jornadas de Puertas Abiertas
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80">
              La mejor forma de conocer el cole es verlo en accion. Ven a nuestras
              Jornadas de Puertas Abiertas, conoce al equipo directivo, visita las instalaciones y
              resuelve todas tus dudas en persona.
            </p>
          </div>

          {/* Right - dates card */}
          <div className="w-full lg:w-2/3 rounded-2xl bg-background p-6 shadow-xl md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Proximas fechas:</h3>
            </div>

            <div className="flex flex-col divide-y divide-primary/15">
              {dates.map((item) => (
                <div
                  key={item.date}
                  className="flex items-center justify-between px-2 py-5"
                >
                  <p className="text-lg font-semibold text-foreground md:text-xl">{item.date}</p>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-base"
                    asChild
                  >
                    <Link href="#contacto">
                      {item.time}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
