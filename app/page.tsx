import { About } from '@/components/about'
import { ContactSection, SiteFooter } from '@/components/contact'
import { Experience, Organization } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteHeader } from '@/components/site-header'
import { Certificates, Skills } from '@/components/skills'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Organization />
        <Projects />
        <Skills />
        <Certificates />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
