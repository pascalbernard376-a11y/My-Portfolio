import { Link } from 'react-router-dom'
import kasaVoiceImage from '../assets/projects/kasavoice.png'

function KasaVoice() {
  return (
    <main className="project-detail-page">

      <section className="project-detail-hero">
        <div className="project-detail-container">

          <p className="eyebrow">PROJECT 03</p>

          <h1>KasaVoice</h1>

          <p className="project-detail-intro">
            A voice controlled home automation application
            connecting users with smart devices.
          </p>

          <div className="project-detail-meta">
            <span>Flutter</span>
            <span>Firebase</span>
            <span>IoT</span>
            <span>Voice Interaction</span>
          </div>

        </div>
      </section>

      <section className="project-detail-content">
        <div className="project-detail-container">

          <div className="project-detail-image">
            <img
              src={kasaVoiceImage}
              alt="KasaVoice project interface"
              className="project-detail-screenshot"
            />
          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT IT DOES</p>

            <h2>
              Connecting voice interaction with smart devices.
            </h2>

            <p>
              KasaVoice explores the connection between mobile
              applications, voice interaction, and connected
              hardware.
            </p>

            <p>
              The application is designed around the idea of giving
              users a simpler way to interact with smart devices
              through voice commands.
            </p>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT I USED</p>

            <h2>Technology</h2>

            <div className="project-detail-list">

              <div>
                <strong>Flutter</strong>
                <span>
                  Mobile application development
                </span>
              </div>

              <div>
                <strong>Firebase</strong>
                <span>
                  Application backend services
                </span>
              </div>

              <div>
                <strong>IoT</strong>
                <span>
                  Connected device concepts and communication
                </span>
              </div>

              <div>
                <strong>Voice Interaction</strong>
                <span>
                  Voice based application control
                </span>
              </div>

            </div>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT WAS HARD</p>

            <h2>
              Connecting software with physical systems.
            </h2>

            <p>
              The interesting challenge was thinking beyond the
              mobile interface and considering how software could
              communicate with connected devices.
            </p>

            <p>
              The project required thinking about user commands,
              device states, communication, and how the application
              could provide a simple interface for controlling
              connected systems.
            </p>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">PROJECT STATUS</p>

            <h2>
              Exploring connected applications.
            </h2>

            <p>
              KasaVoice is an exploration of how mobile applications,
              voice interaction, and connected devices can work
              together to create practical smart home experiences.
            </p>

          </div>

          <div className="project-detail-actions">

            <Link
              to="/"
              className="secondary-button"
            >
              Back to Home
            </Link>

            <Link
              to="/projects/rivalxi"
              className="secondary-button"
            >
              First Project
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}

export default KasaVoice