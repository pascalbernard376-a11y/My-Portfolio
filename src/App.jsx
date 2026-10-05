import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RivalXI from './pages/RivalXI'
import BudgetBoss from './pages/BudgetBoss'
import KasaVoice from './pages/KasaVoice'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">

          <a href="/" className="brand">
            BN
          </a>

          <nav className="navigation">
            <a href="/#about">About</a>
            <a href="/#skills">Skills</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact</a>
          </nav>

        </div>
      </header>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/projects/rivalxi"
          element={<RivalXI />}
        />

        <Route
          path="/projects/budgetboss"
          element={<BudgetBoss />}
        />

        <Route
          path="/projects/kasavoice"
          element={<KasaVoice />}
        />

      </Routes>

      <footer>

        <div className="footer-brand">
          <strong>BN</strong>
          <span>Bernard Ntibe</span>
        </div>

        <p>
          Computer Engineering • Software • AI • IoT
        </p>

        <p>
          © 2026 Bernard Ntibe
        </p>

      </footer>
    </>
  )
}

export default App