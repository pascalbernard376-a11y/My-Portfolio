import { Link } from 'react-router-dom'
import rivalxiImage from '../assets/projects/rivalxi.png'

function RivalXI() {
  return (
    <main className="project-detail-page">

      <section className="project-detail-hero">
        <div className="project-detail-container">

          <p className="eyebrow">PROJECT 01</p>

          <h1>RivalXI</h1>

          <p className="project-detail-intro">
            A football social platform designed to keep fan
            conversations alive after the final whistle.
          </p>

          <div className="project-detail-meta">
            <span>Flutter</span>
            <span>Firebase</span>
            <span>Riverpod</span>
            <span>Cloudinary</span>
          </div>

        </div>
      </section>

      <section className="project-detail-content">
        <div className="project-detail-container">

          <div className="project-detail-image">
            <img
              src={rivalxiImage}
              alt="RivalXI project interface"
              className="project-detail-screenshot"
            />
          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT IT DOES</p>

            <h2>
              Football continues after the final whistle.
            </h2>

            <p>
              RivalXI is a football social platform built around
              fan conversations, football rivalries, banter, and
              community interaction.
            </p>

            <p>
              The goal is to give football fans a dedicated space
              where they can continue discussing matches, supporting
              their clubs, competing with rival fans, and sharing
              their opinions after the match ends.
            </p>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT I USED</p>

            <h2>Technology</h2>

            <div className="project-detail-list">

              <div>
                <strong>Flutter</strong>
                <span>
                  Cross platform mobile application development
                </span>
              </div>

              <div>
                <strong>Firebase</strong>
                <span>
                  Authentication, database, notifications, and
                  backend services
                </span>
              </div>

              <div>
                <strong>Riverpod</strong>
                <span>
                  Application state management
                </span>
              </div>

              <div>
                <strong>Cloudinary</strong>
                <span>
                  Media storage and delivery
                </span>
              </div>

            </div>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT WAS HARD</p>

            <h2>
              Building a social experience.
            </h2>

            <p>
              One of the challenging parts was designing a system
              that could handle different types of football
              interactions while keeping the experience simple for
              users.
            </p>

            <p>
              The project also required working with authentication,
              cloud data, media uploads, application state, user
              profiles, posts, communities, and other connected
              features.
            </p>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">PROJECT STATUS</p>

            <h2>
              Currently in development.
            </h2>

            <p>
              RivalXI is being developed as a cross platform football
              social application with the goal of creating a dedicated
              space for football fans and rival communities.
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
              to="/projects/budgetboss"
              className="secondary-button"
            >
              Next Project
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}

export default RivalXI