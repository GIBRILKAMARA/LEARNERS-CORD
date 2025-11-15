import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Empowering Your Learning Journey
            </h1>
            <p className="hero-subtitle">
              Discover innovative educational solutions designed to help you achieve
              academic excellence and unlock your full potential.
            </p>
            <div className="hero-buttons">
              <a href="/services" className="btn btn-primary">
                Explore Services
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="var(--bg-light)" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Learners Cord?</h2>
          <p className="section-subtitle">
            We provide comprehensive educational support tailored to your learning needs
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Personalized Learning</h3>
              <p className="feature-description">
                Customized learning paths designed to match your unique learning style
                and academic goals.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3 className="feature-title">Expert Instructors</h3>
              <p className="feature-description">
                Learn from experienced educators and subject matter experts
                dedicated to your success.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Progress Tracking</h3>
              <p className="feature-description">
                Monitor your academic progress with detailed analytics and
                performance insights.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3 className="feature-title">Interactive Content</h3>
              <p className="feature-description">
                Engage with multimedia resources, interactive exercises, and
                real-world applications.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Flexible Schedule</h3>
              <p className="feature-description">
                Learn at your own pace with flexible scheduling options that fit
                your busy lifestyle.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Certification</h3>
              <p className="feature-description">
                Earn recognized certificates upon completion of courses and programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Active Learners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Courses Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
            <p className="cta-subtitle">
              Join thousands of learners who are achieving their academic goals with us.
            </p>
            <a href="/contact" className="btn btn-primary btn-large">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

