"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "/images/hero-1.jpg",
    alt: "Alumnos del CEIP La Paz en el pasillo del colegio",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Ninos haciendo manualidades y arte en clase",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Ninos jugando en el patio del colegio",
  },
  {
    src: "/images/hero-4.jpg",
    alt: "Profesora leyendo un cuento a los alumnos",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning],
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="group relative w-full lg:flex-1">
      {/* Open doors banner */}
      <div className="absolute -right-2 -top-2 z-20 rounded-2xl bg-secondary px-5 py-3 shadow-lg md:-right-4 md:-top-4">
        <p className="text-xs font-bold text-secondary-foreground">
          Jornadas Puertas Abiertas
        </p>
        <p className="text-xs text-secondary-foreground/80">
          14 Febrero y 5 Marzo
        </p>
      </div>

      {/* Slider container */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="relative aspect-[3/2] w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === current ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 512px"
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Diapositiva anterior"
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/30 text-background opacity-0 backdrop-blur-sm transition-opacity hover:bg-foreground/50 group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente diapositiva"
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/30 text-background opacity-0 backdrop-blur-sm transition-opacity hover:bg-foreground/50 group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.src}
            onClick={() => goTo(index)}
            aria-label={`Ir a diapositiva ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-7 bg-primary-foreground"
                : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
