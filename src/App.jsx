import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Expertise from './pages/Expertise.jsx'
import Framework from './pages/Framework.jsx'
import Speaking from './pages/Speaking.jsx'
import Journey from './pages/Journey.jsx'
import Recognition from './pages/Recognition.jsx'
import Insights from './pages/Insights.jsx'
import Connect from './pages/Connect.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  )
}