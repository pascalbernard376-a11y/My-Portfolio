import { Link } from 'react-router-dom'
import budgetbossImage from '../assets/projects/budgetboss.png'

function BudgetBoss() {
  return (
    <main className="project-detail-page">

      <section className="project-detail-hero">
        <div className="project-detail-container">

          <p className="eyebrow">PROJECT 02</p>

          <h1>BudgetBoss</h1>

          <p className="project-detail-intro">
            A student finance application designed to make
            personal spending easier to understand and manage.
          </p>

          <div className="project-detail-meta">
            <span>Flutter</span>
            <span>Firebase</span>
            <span>Hive</span>
            <span>fl_chart</span>
          </div>

        </div>
      </section>

      <section className="project-detail-content">
        <div className="project-detail-container">

          <div className="project-detail-image">
            <img
              src={budgetbossImage}
              alt="BudgetBoss project interface"
              className="project-detail-screenshot"
            />
          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT IT DOES</p>

            <h2>
              Making student finances easier to manage.
            </h2>

            <p>
              BudgetBoss is a personal finance application focused
              on helping students understand where their money goes.
            </p>

            <p>
              The application provides a simple way to record
              expenses, monitor spending, manage financial goals,
              and build better financial habits.
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
                  Authentication and cloud services
                </span>
              </div>

              <div>
                <strong>Hive</strong>
                <span>
                  Local application data storage
                </span>
              </div>

              <div>
                <strong>fl_chart</strong>
                <span>
                  Financial data visualization
                </span>
              </div>

            </div>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">WHAT WAS HARD</p>

            <h2>
              Turning spending into useful information.
            </h2>

            <p>
              One of the challenging parts was designing a simple
              system for recording financial activity while still
              giving users useful information about their spending.
            </p>

            <p>
              The project also required thinking about local data,
              financial categories, goals, and how information could
              be presented clearly on a small mobile screen.
            </p>

          </div>

          <div className="project-detail-section">

            <p className="eyebrow">PROJECT STATUS</p>

            <h2>
              Currently in development.
            </h2>

            <p>
              BudgetBoss is being developed as a finance application
              focused on helping students track their spending,
              understand their financial activity, and work toward
              better financial habits.
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
              to="/projects/kasavoice"
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

export default BudgetBoss