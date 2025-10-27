import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showCV, setShowCV] = useState(false);

  // Portfolio Data - Update this with your actual CV information
  const portfolioData = {
    name: "Ramesa Alvi Matrika",
    title: "Full Stack Developer | Web Developer",
    email: "matri214.akmcc@gmail.com",
    phone: "01793039016",
    location: "Dhaka, Bangladesh",
    linkedin: "https://www.linkedin.com/in/ramesa-alvi-matrika-438661306/",
    github: "https://github.com/matrika21428",
    summary:
      "Passionate and dedicated developer with experience in creating modern web applications. Skilled in both frontend and backend technologies with a strong focus on clean code and user experience.",

    skills: {
      frontend: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
      ],
      backend: ["Node.js", "Express", "Python", "Django", "REST APIs"],
      database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      tools: ["Git", "Docker", "VS Code", "Figma", "Postman"],
    },

    experience: [
      {
        title: "Senior Developer",
        company: "Tech Company",
        period: "2022 - Present",
        description: [
          "Led development of multiple client projects",
          "Mentored junior developers",
          "Implemented modern development practices",
        ],
      },
      {
        title: "Web Developer",
        company: "Digital Agency",
        period: "2020 - 2022",
        description: [
          "Built responsive web applications",
          "Collaborated with design team",
          "Optimized application performance",
        ],
      },
    ],

    education: [
      {
        degree: "B.Sc in Computer Science and Engineering",
        school: "Mawlana Bhashani Science and Technology University",
        period: "2023 - 2027",
        details: "GPA: 3.50 / 4.0",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        school: "Group: Science",
        period: "2021",
        details: "GPA: 5.00",
      },
    ],

    projects: [
      {
        name: "To Do List",
        description:
          "A productivity app to manage daily tasks with add, edit, and delete features. Responsive and user-friendly interface.",
        technologies: ["React", "CSS3", "LocalStorage"],
        link: "#",
      },
      {
        name: "Chat Application (Socket Programming)",
        description:
          "Real-time chat app using socket programming. Supports multiple users, instant messaging, and online status.",
        technologies: ["Node.js", "Socket.io", "React"],
        link: "#",
      },
      {
        name: "Mental Health Tracker",
        description:
          "Track daily mood, habits, and mental health progress. Includes analytics dashboard and motivational reminders.",
        technologies: ["React", "Chart.js", "Firebase"],
        link: "#",
      },
    ],
    languages: [
      { name: "Bangla", level: "Fluent" },
      { name: "English", level: "Fluent" },
    ],
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">{portfolioData.name}</div>
          <ul className="nav-menu">
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#uiux" onClick={() => scrollToSection("uiux")}>
                UI/UX Analysis
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>
          <button className="cv-button" onClick={() => setShowCV(!showCV)}>
            View CV
          </button>
        </div>
      </nav>

      {/* CV Modal */}
      {showCV && (
        <div className="cv-modal" onClick={() => setShowCV(false)}>
          <div
            className="cv-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setShowCV(false)}>
              ×
            </button>
            <iframe
              src="/Professional CV Resume.pdf"
              className="cv-image"
              style={{ width: "100%", height: "70vh", border: "none" }}
              title="CV Preview"
            />
            <div className="cv-actions">
              <a
                href="/Professional CV Resume.pdf"
                download
                className="download-btn"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-image-container">
            <img src="/matrika.jpg" alt="Profile" className="hero-image" />
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{portfolioData.name}</span>
          </h1>
          <p className="hero-subtitle">{portfolioData.title}</p>
          <p className="hero-description">{portfolioData.summary}</p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-primary"
            >
              Get in Touch
            </button>
            <button
              onClick={() => setShowCV(true)}
              className="btn btn-secondary"
            >
              View Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image-wrapper">
              <img src="/matrika.jpg" alt="Profile" className="about-image" />
            </div>
            <div className="about-text">
              <p>{portfolioData.summary}</p>
              <div className="contact-info">
                <div className="info-item">
                  <span className="info-label">📧 Email:</span>
                  <span className="info-value">{portfolioData.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📱 Phone:</span>
                  <span className="info-value">{portfolioData.phone}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📍 Location:</span>
                  <span className="info-value">{portfolioData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {portfolioData.skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                {portfolioData.skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-tags">
                {portfolioData.skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                {portfolioData.skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p className="period">{edu.period}</p>
                <p>{edu.details}</p>
              </div>
            ))}
          </div>
          {/* Languages Card */}
          <div
            className="languages-card"
            style={{
              maxWidth: "400px",
              margin: "2rem auto 0",
              background: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px rgba(99,102,241,0.08)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#6366f1", marginBottom: "1rem" }}>
              🌐 Languages
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {portfolioData.languages.map((lang, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "0.75rem",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  {lang.name}{" "}
                  <span style={{ color: "#6b7280", fontWeight: 400 }}>
                    ({lang.level})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Analysis Section */}
      <section id="uiux" className="section uiux-analysis">
        <div className="container">
          <h2 className="section-title">UI/UX Experience & Analysis</h2>
          <p className="section-subtitle">
            Analyzing digital experiences to understand design excellence and
            areas for improvement
          </p>

          {/* Best Experience Card */}
          <div className="uiux-card best-experience">
            <div className="uiux-header">
              <span className="uiux-badge best">⚡ Best UI/UX Experience</span>
              <h3>Vite Website</h3>
              <div className="rating">
                <span>★★★★★</span>
                <span className="rating-text">(5/5)</span>
              </div>
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
              >
                Visit Website →
              </a>
            </div>

            <div className="uiux-content">
              <h4>Overview</h4>
              <p>
                Vite's website represents exceptional modern web design with
                perfect balance of aesthetics and functionality.
              </p>

              <h4>✅ Key Strengths</h4>
              <ul className="strengths-list">
                <li>⚡ Lightning-fast performance with instant loading</li>
                <li>🎨 Clean, minimalist design with excellent typography</li>
                <li>
                  🧭 Intuitive navigation with clear information hierarchy
                </li>
                <li>♿ Perfect color contrast and accessibility compliance</li>
                <li>
                  📱 Responsive design that works flawlessly across devices
                </li>
                <li>🔄 Interactive elements that provide immediate feedback</li>
                <li>📚 Comprehensive documentation with clear examples</li>
                <li>🌈 Modern gradient usage that enhances visual appeal</li>
              </ul>

              <h4>🎨 Design Principles</h4>
              <div className="principles-grid">
                <div className="principle-item">
                  <strong>Simplicity</strong>
                  <p>Clean, uncluttered interface</p>
                </div>
                <div className="principle-item">
                  <strong>Consistency</strong>
                  <p>Uniform design patterns throughout</p>
                </div>
                <div className="principle-item">
                  <strong>Accessibility</strong>
                  <p>High contrast ratios and screen reader support</p>
                </div>
                <div className="principle-item">
                  <strong>Performance</strong>
                  <p>Optimized for speed and efficiency</p>
                </div>
              </div>

              <h4>💡 Technical Highlights</h4>
              <ul className="tech-highlights">
                <li>Fast page transitions and smooth animations</li>
                <li>Excellent mobile responsiveness</li>
                <li>Clear visual hierarchy with proper spacing</li>
                <li>Effective use of white space for readability</li>
                <li>Interactive code examples and live demos</li>
              </ul>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="design-philosophy">
            <h3
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                fontSize: "2rem",
              }}
            >
              My Design Philosophy
            </h3>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <div className="philosophy-icon">🎯</div>
                <h4>User-Centered</h4>
                <p>
                  Every design decision should prioritize user needs, goals, and
                  experiences above all else.
                </p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">⚡</div>
                <h4>Performance First</h4>
                <p>
                  Beautiful interfaces mean nothing if they don't load fast and
                  respond smoothly.
                </p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">♿</div>
                <h4>Inclusive Design</h4>
                <p>
                  Great design is accessible design that works for everyone,
                  regardless of abilities.
                </p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">🔄</div>
                <h4>Iterative Improvement</h4>
                <p>
                  Continuous testing, feedback, and refinement lead to
                  exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact-layout">
            {/* Left side - Big Message with Decorative Background */}
            <div className="contact-message-side">
              <div className="message-decoration">💬</div>
              <h3 className="message-title">Let's talk about everything!</h3>
              <p className="message-text">
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you have a project in mind, want to
                discuss opportunities, or just want to say hello, I'd love to
                hear from you!
              </p>

              {/* Social Links in Left Panel */}
              <div className="contact-social-links">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="social-link"
                  title="Email"
                >
                  <span className="social-icon">📧</span>
                  <span>Email</span>
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="GitHub"
                >
                  <span className="social-icon">
                    <GithubIcon size={20} />
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <span className="social-icon">
                    <LinkedinIcon size={20} />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="message-accent"></div>
            </div>

            {/* Right side - Form */}
            <div className="contact-form-side">
              <form className="contact-form">
                <h3>Send me a message</h3>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  📤 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
