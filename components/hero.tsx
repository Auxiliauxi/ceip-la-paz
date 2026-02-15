import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSlider } from "@/components/hero-slider"
import { CalendarDays, GraduationCap, Heart, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 md:py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-20">
        {/* Left content - ~1/3 on desktop */}
        <div className="shrink-0 text-center lg:w-[33%] lg:text-left">
          <h1 className="text-balance text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-5xl">
            Bienvenidos a{" "}
            <span className="relative">
              CEIP La Paz.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(45, 100%, 60%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 lg:mx-0 lg:text-lg">
            Un colegio para crecer, crear y aprender. Donde cada alumno y alumna encuentra su
            lugar y aprende disfrutando. Pedagogia activa, proyectos reales y un ambiente
            familiar en lo que de verdad importa.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link href="#como-matricular">
                <CalendarDays className="mr-2 h-4 w-4" />
                Reserva tu visita
              </Link>
            </Button>
          </div>
        </div>

        {/* Right content - slider with open doors banner */}
        <HeroSlider />
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 26C672 32 768 40 864 42C960 44 1056 40 1152 34C1248 28 1344 20 1392 16L1440 12V60H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  )
}
