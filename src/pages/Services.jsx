import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '📖',
      title: 'Online Courses',
      description: 'Comprehensive online courses covering a wide range of subjects from mathematics to literature. Learn at your own pace with interactive content and expert guidance.',
      features: ['Self-paced learning', 'Interactive quizzes', 'Video lectures', 'Certificate of completion']
    },
    {
      icon: '👨‍🏫',
      title: 'One-on-One Tutoring',
      description: 'Personalized tutoring sessions with experienced educators. Get individual attention and customized lesson plans tailored to your learning needs.',
      features: ['Personalized attention', 'Flexible scheduling', 'Custom lesson plans', 'Progress tracking']
    },
    {
      icon: '📝',
      title: 'Test Preparation',
      description: 'Expert preparation for standardized tests, entrance exams, and certification programs. Practice with mock tests and receive detailed feedback.',
      features: ['Mock tests', 'Study materials', 'Performance analysis', 'Test strategies']
    },
    {
      icon: '📚',
      title: 'Study Resources',
      description: 'Access a vast library of study materials, notes, practice problems, and reference materials to support your learning journey.',
      features: ['Digital library', 'Practice problems', 'Study guides', 'Reference materials']
    },
    {
      icon: '💻',
      title: 'Online Workshops',
      description: 'Participate in live workshops and webinars on various topics. Learn from industry experts and interact with fellow learners.',
      features: ['Live sessions', 'Expert speakers', 'Q&A sessions', 'Recorded replays']
    },
    {
      icon: '🎓',
      title: 'Academic Counseling',
      description: 'Get guidance on course selection, career planning, and academic strategies from experienced counselors.',
      features: ['Career guidance', 'Course selection', 'Academic planning', 'Goal setting']
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive educational solutions designed to support your academic success
          </p>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn-primary service-btn">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started with Learners Cord is simple and straightforward
          </p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Choose Your Service</h3>
              <p className="step-description">
                Browse our range of educational services and select what best fits your needs.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Get in Touch</h3>
              <p className="step-description">
                Contact us through our form or reach out directly to discuss your requirements.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Start Learning</h3>
              <p className="step-description">
                Begin your educational journey with personalized support and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

