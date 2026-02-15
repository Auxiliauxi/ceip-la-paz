import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-ceip-la-paz.png"
                alt="Logo CEIP La Paz"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-background">CEIP La Paz</span>
                <span className="text-[11px] text-background/60">San Jose de la Rinconada</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Colegio de Educacion Infantil y Primaria. Un colegio publico comprometido con la excelencia educativa, la
              innovacion y la atencion personalizada.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-background">Enlaces</h4>
            <nav className="mt-4 flex flex-col gap-2">
              <Link href="#por-que" className="text-sm text-background/60 transition-colors hover:text-background">
                Por que elegirnos
              </Link>
              <Link href="#como-aprendemos" className="text-sm text-background/60 transition-colors hover:text-background">
                Como aprendemos
              </Link>
              <Link href="#proyectos" className="text-sm text-background/60 transition-colors hover:text-background">
                Proyectos
              </Link>
              <Link href="#faq" className="text-sm text-background/60 transition-colors hover:text-background">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-background">Contacto</h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-background/60">
                  Calle de la Paz, s/n, Sevilla
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-background/60">955 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-background/60">info@ceiplapaz.es</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/40">
            {"CEIP La Paz. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
