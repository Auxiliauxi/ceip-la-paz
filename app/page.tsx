import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChoose } from "@/components/why-choose"
import { HowWeLearn } from "@/components/how-we-learn"
import { Projects } from "@/components/projects"
import { OpenDoors } from "@/components/open-doors"
import { Enrollment } from "@/components/enrollment"
import { FAQ } from "@/components/faq"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <HowWeLearn />
        <Projects />
        <OpenDoors />
        <Enrollment />
        <FAQ />
        <Services />
      </main>
      <Footer />
    </>
  )
}
