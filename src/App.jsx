
import './App.css'

function App() {

  return (
    <>
      <main className="portfolio">
        <section className="hero-section">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I am <span>Bernard Ntibe</span>
          </h1>

          <p className="intro">
            Computer Engineering student and aspiring software
            developer building innovative digital experiences
            with React, Flutter, and modern technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Building ideas into reality</h2>

          <p>
            I am Bernard Ntibe, a Computer Engineering student
            passionate about software development, artificial
            intelligence, and connected technologies.
          </p>
        </section>

        <section className="projects-section" id="projects">
          <p className="eyebrow">MY WORK</p>
          <h2>Featured Projects</h2>

          <div className="projects-grid">
            <article className="project-card">
              <h3>RivalXI</h3>
              <p>
                A football social platform where fans continue
                the match after the final whistle.
              </p>
              <span>Flutter and Firebase</span>
            </article>

            <article className="project-card">
              <h3>BudgetBoss</h3>
              <p>
                A student finance application designed to help
                users manage expenses and savings.
              </p>
              <span>Flutter and Firebase</span>
            </article>

            <article className="project-card">
              <h3>Web Development</h3>
              <p>
                Modern websites and digital experiences built
                with React and other web technologies.
              </p>
              <span>React and Vite</span>

            </article>
            <article className="project-card">
              <h3>KasaVoice</h3>
              <p>
                A voice-controlled home automation app that allows
                users to manage their smart devices with simple voice commands.
              </p>
              <span>Flutter and Firebase</span>
              
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let us build something great.</h2>

          <p>
            Interested in collaborating or learning more about
            my work? I would love to hear from you.
          </p>

          <a
            href="mailto:pascalbernard376@gmail.com"
            className="primary-button"
          >
            Send Me an Email
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Bernard Ntibe. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App