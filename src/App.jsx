import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand">
            BN
          </a>

          <nav className="navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="portfolio">

        <section className="hero-section">
          <div className="hero-content">

            <div className="engineering-label">
              <span className="status-dot"></span>
              COMPUTER ENGINEERING
            </div>

            <p className="eyebrow">
              SOFTWARE • HARDWARE • INTELLIGENCE
            </p>

            <h1>
              Bernard
              <span>Ntibe</span>
            </h1>

            <p className="intro">
              Computer Engineering student building software,
              intelligent systems, and connected technologies
              at the intersection of hardware and software.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-number">01</span>
                <span className="meta-label">Software</span>
              </div>

              <div>
                <span className="meta-number">02</span>
                <span className="meta-label">Embedded Systems</span>
              </div>

              <div>
                <span className="meta-number">03</span>
                <span className="meta-label">AI and IoT</span>
              </div>
            </div>

          </div>

          <div className="hero-profile">
            <div className="profile-frame">

              <img
                src="/profile.jpg"
                alt="Bernard Ntibe"
                className="profile-image"
              />

              <div className="profile-status">
                <span></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

            </div>
          </div>
        </section>

        <section className="about-section" id="about">

          <div className="section-heading">
            <span>01</span>
            <p className="eyebrow">ABOUT ME</p>
          </div>

          <div className="about-grid">

            <div>
              <h2>
                Engineering ideas into
                <span> real systems.</span>
              </h2>
            </div>

            <div>
              <p>
                I am Bernard Ntibe, a Computer Engineering student
                interested in building practical systems that combine
                software, hardware, artificial intelligence, and
                connected devices.
              </p>

              <p>
                My work spans mobile applications, web development,
                embedded systems, IoT, and intelligent software.
                I enjoy turning technical problems into useful
                products.
              </p>
            </div>

          </div>

        </section>

        <section className="skills-section" id="skills">

          <div className="section-heading">
            <span>02</span>
            <p className="eyebrow">ENGINEERING STACK</p>
          </div>

          <div className="skills-grid">

            <article className="skill-card software-card">

              <span className="skill-number">01</span>

              <div className="skill-icon">
                &lt;/&gt;
              </div>

              <h3>Software Engineering</h3>

              <p>
                Building scalable applications and clean software
                systems across web and mobile platforms.
              </p>

              <div className="skill-tags">
                <span>React</span>
                <span>Flutter</span>
                <span>Python</span>
                <span>Firebase</span>
              </div>

            </article>

            <article className="skill-card embedded-card">

              <span className="skill-number">02</span>

              <div className="skill-icon">
                MCU
              </div>

              <h3>Embedded Systems</h3>

              <p>
                Working with microcontrollers, sensors, digital
                systems, and hardware interfaces.
              </p>

              <div className="skill-tags">
                <span>Arduino</span>
                <span>Raspberry Pi</span>
                <span>C</span>
                <span>C++</span>
              </div>

            </article>

            <article className="skill-card intelligence-card">

              <span className="skill-number">03</span>

              <div className="skill-icon">
                AI
              </div>

              <h3>AI and IoT</h3>

              <p>
                Exploring intelligent applications and connected
                systems that bring data, devices, and software together.
              </p>

              <div className="skill-tags">
                <span>Python</span>
                <span>AI</span>
                <span>IoT</span>
                <span>APIs</span>
              </div>

            </article>

          </div>

        </section>

        <section className="projects-section" id="projects">

          <div className="section-heading">
            <span>03</span>
            <p className="eyebrow">SELECTED PROJECTS</p>
          </div>

          <div className="projects-grid">

            <article className="project-card rivalxi-card">

              <div className="project-top">
                <span className="project-index">01</span>
                <span className="project-status">ACTIVE</span>
              </div>

              <div className="project-icon">
                XI
              </div>

              <h3>RivalXI</h3>

              <p>
                A football social platform designed to keep fan
                conversations alive after the final whistle.
              </p>

              <div className="project-tech">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Riverpod</span>
              </div>

              <div className="project-link">
                View Project
                <span>→</span>
              </div>

            </article>

            <article className="project-card budgetboss-card">

              <div className="project-top">
                <span className="project-index">02</span>
                <span className="project-status">COMPLETED</span>
              </div>

              <div className="project-icon">
                ₵
              </div>

              <h3>BudgetBoss</h3>

              <p>
                A student finance application for tracking expenses,
                financial goals, and personal spending.
              </p>

              <div className="project-tech">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Hive</span>
              </div>

              <div className="project-link">
                View Project
                <span>→</span>
              </div>

            </article>

            <article className="project-card kasavoice-card">

              <div className="project-top">
                <span className="project-index">03</span>
                <span className="project-status">PROJECT</span>
              </div>

              <div className="project-icon">
                VO
              </div>

              <h3>KasaVoice</h3>

              <p>
                A voice controlled home automation application for
                interacting with connected smart devices.
              </p>

              <div className="project-tech">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>IoT</span>
              </div>

              <div className="project-link">
                View Project
                <span>→</span>
              </div>

            </article>

            <article className="project-card engineering-card">

              <div className="project-top">
                <span className="project-index">04</span>
                <span className="project-status">EXPLORING</span>
              </div>

              <div className="project-icon">
                HW
              </div>

              <h3>Engineering Lab</h3>

              <p>
                A collection of experiments involving digital logic,
                embedded systems, sensors, programming, and automation.
              </p>

              <div className="project-tech">
                <span>Arduino</span>
                <span>C++</span>
                <span>Python</span>
              </div>

              <div className="project-link">
                View Experiments
                <span>→</span>
              </div>

            </article>

          </div>

        </section>

        <section className="contact-section" id="contact">

          <div className="section-heading">
            <span>04</span>
            <p className="eyebrow">CONTACT</p>
          </div>

          <div className="contact-content">

            <h2>
              Have an idea?
              <span> Let us build it.</span>
            </h2>

            <p>
              Interested in collaborating, discussing a project,
              or connecting with a developer and engineer?
            </p>

            <a
              href="mailto:pascalbernard376@gmail.com"
              className="primary-button"
            >
              Send Me an Email
            </a>

          </div>

        </section>

      </main>

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