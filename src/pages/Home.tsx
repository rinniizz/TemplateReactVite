import Hero from '@components/sections/Hero'
import Features from '@components/sections/Features'
import CTA from '@components/sections/CTA'

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}

export default Home
