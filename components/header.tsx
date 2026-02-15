"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { label: "Por que elegirnos", href: "#por-que" },
  { label: "Como aprendemos", href: "#como-aprendemos" },
  { label: "Proyectos innovadores", href: "#proyectos" },
  { label: "Extraescolares", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-ceip-la-paz.png"
            alt="Logo CEIP La Paz"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">CEIP LA PAZ</span>
            <span className="text-[11px] text-muted-foreground">San Jose de la Rinconada</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            <Link href="#contacto">Contacto</Link>
          </Button>

          {mounted ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background text-foreground">
                <SheetTitle className="sr-only">Menu de navegacion</SheetTitle>
                <nav className="mt-8 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 border-t border-border pt-4">
                    <Button asChild className="w-full rounded-full bg-primary text-primary-foreground">
                      <Link href="#contacto" onClick={() => setOpen(false)}>
                        Contacto
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
