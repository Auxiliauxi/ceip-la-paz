import Image from "next/image"

const projects = [
  {
    title: "BLA BLA PAZ",
    image: "/images/project-theater.jpg",
    tag: "Radio",
    description: "Nuestra emisora escolar donde los alumnos desarrollan habilidades comunicativas y creativas.",
  },
  {
    title: "Imaginoteca",
    image: "/images/project-imagiquimica.jpg",
    tag: "Aula abierta",
    description: "Un espacio de aprendizaje libre donde la creatividad y la imaginacion no tienen limites.",
  },
  {
    title: "El Vergel",
    image: "/images/project-garden.jpg",
    tag: "Huerto",
    description: "Nuestro huerto escolar donde aprendemos sobre sostenibilidad y el cuidado del medio ambiente.",
  },
  {
    title: "Biblioteca",
    image: "/images/project-library.jpg",
    tag: "Cultura",
    description: "Un rincon de lectura vivo que fomenta el amor por los libros y el conocimiento.",
  },
]

function ProjectCard({
  project,
  className,
}: {
  project: (typeof projects)[number]
  className?: string
}) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl ${className ?? ""}`}
    >
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Default gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
      {/* Hover darkened overlay */}
      <div className="absolute inset-0 bg-foreground/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="transition-transform duration-300 group-hover:-translate-y-6">
          <span className="mb-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {project.tag}
          </span>
          <h3 className="text-xl font-bold text-background md:text-2xl">
            {project.title}
          </h3>
        </div>
        <p className="mt-1 max-h-0 overflow-hidden text-sm leading-relaxed text-background/90 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Proyectos innovadores
          </h2>
          <div className="mx-auto mt-2 flex items-center justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="12" height="8" viewBox="0 0 12 8" className="text-accent">
                <path d="M0 4 Q3 0 6 4 Q9 8 12 4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-12 flex flex-col gap-4 md:hidden">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              className="aspect-[4/3]"
            />
          ))}
        </div>

        {/* Desktop: bento grid - 3 columns, 2 rows */}
        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-3 md:grid-rows-2" style={{ gridTemplateRows: "1fr 1fr" }}>
          {/* Left tall card - spans both rows */}
          <ProjectCard
            project={projects[0]}
            className="md:row-span-2 md:min-h-[500px] lg:min-h-[560px]"
          />
          {/* Top right wide card - spans 2 columns */}
          <ProjectCard
            project={projects[1]}
            className="md:col-span-2 md:min-h-[240px] lg:min-h-[270px]"
          />
          {/* Bottom middle */}
          <ProjectCard
            project={projects[2]}
            className="md:min-h-[240px] lg:min-h-[270px]"
          />
          {/* Bottom right */}
          <ProjectCard
            project={projects[3]}
            className="md:min-h-[240px] lg:min-h-[270px]"
          />
        </div>
      </div>
    </section>
  )
}
