import Image from 'next/image'
import Hero from './components/Hero'
import Latest from './components/Latest'
import Services from './components/Services'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Latest/>
      <Services/>
    </main>
  )
}
