import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import Home from '@pages/home'
import About from '@pages/about'
import Contact from '@pages/contact'
import NotFound from '@pages/NotFound'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
