import Hero from './components/Hero'
import Latest from './components/Latest'
import Services from './components/Services'
import Overview from './components/Overview'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Overview/>
      <Services/>
      <Latest/> 
    </main>
  )
}

