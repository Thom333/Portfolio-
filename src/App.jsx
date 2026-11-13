import { useState } from 'react'

const skills = [
  'IT Support & Troubleshooting', 'Network Administration', 'Systems Administration',
  'HTML & CSS', 'JavaScript', 'PHP', 'Cybersecurity Fundamentals', 'Data Analysis',
  'Video Editing', 'Cinematography', 'Technical Training', 'Backup & Recovery',
]

const services = [
  { number: '01', title: 'Web Development', text: 'Responsive websites and practical digital experiences built around real business needs.', icon: '⌘' },
  { number: '02', title: 'IT Infrastructure', text: 'Computer systems, network administration, maintenance, security and technical support.', icon: '⌁' },
  { number: '03', title: 'Creative Production', text: 'Video editing, visual storytelling and cinematography for engaging content.', icon: '▶' },
  { number: '04', title: 'Data & Technology', text: 'Data analysis, digital tools and technology solutions that support better decisions.', icon: '▥' },
]

const experience = [
  { role: 'IT Supervisor', company: 'Juneberries Schools', period: '2023 — Present', points: ['Maintain school computer systems, software and network infrastructure.', 'Provide technical support, troubleshooting and user training.', 'Support network security, data backups and recovery processes.', 'Develop and improve IT procedures for reliable school operations.'] },
  { role: 'IT Officer', company: 'Iambest Networks', period: '2021 — 2023', points: ['Managed IT infrastructure and maintained system performance.', 'Implemented technology upgrades and resolved hardware and software issues.', 'Worked with vendors and partners on IT projects.', 'Supported staff and helped manage IT resources.'] },
  { role: 'IT Manager', company: 'IKON Nigeria Limited', period: '2019 — 2021', points: ['Managed computer systems, networks and technology infrastructure.', 'Installed, configured and troubleshot hardware and software.', 'Supported network security, backups and data recovery.', 'Provided technical assistance and employee training.'] },
]

const education = [
  { school: 'NTA Television College, Jos, Plateau State', qualification: 'National Diploma (ND), Telecom Engineering', year: '2018' },
  { school: 'Government Day Secondary School, Madalla, Niger State', qualification: 'Senior Secondary School Certificate (WAEC)', year: '2015' },
  { school: 'Our Lady of Fatima Primary School, Nasarawa State', qualification: 'First School Leaving Certificate (FSLC)', year: '2008' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const currentPage = window.location.pathname.split('/').filter(Boolean)[0] || 'home'
  const pageLinks = [
    ['About', '/about'], ['Expertise', '/expertise'], ['Experience', '/experience'],
    ['Education', '/education'], ['Contact', '/contact'],
  ]

  const hero = (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</div>
        <p className="hero-kicker">IT PROFESSIONAL · WEB DEVELOPER · TECHNOLOGY ENTHUSIAST</p>
        <h1>Technology that<br /><span>works for people.</span></h1>
        <p className="hero-intro">I’m Thomas Godiya, an IT professional focused on reliable systems, practical digital solutions and creative technology.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/contact">Let’s connect <span>↗</span></a>
          <a className="button button-quiet" href="/Thomas-Godiya-CV.pdf" target="_blank" rel="noreferrer">View my CV ↗</a>
        </div>
        <div className="hero-meta"><span>IT OPERATIONS</span><span className="meta-line" /><span>WEB DEVELOPMENT</span><span className="meta-line" /><span>CREATIVE TECHNOLOGY</span></div>
      </div>
      <div className="hero-art profile-art">
        <div className="profile-orbit profile-orbit-one" /><div className="profile-orbit profile-orbit-two" />
        <div className="profile-photo-frame"><img src="/thomas-godiya-profile.jpg" alt="Portrait of Thomas Godiya" /></div>
        <span className="art-tag tag-top">TECHNOLOGY · SYSTEMS · PEOPLE</span>
        <span className="art-tag tag-bottom">BUILDING WHAT MATTERS</span>
        <i className="art-dot dot-one" /><i className="art-dot dot-two" /><i className="art-dot dot-three" />
      </div>
      <div className="scroll-cue">EXPLORE MY PORTFOLIO <span /></div>
    </section>
  )

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="/"><span className="brand-mark">TG</span><span>THOMAS<span className="brand-light"> GODIYA</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Expertise', 'Experience', 'Education', 'Contact'].map(item => <a key={item} href={`/${item.toLowerCase()}`}>{item}</a>)}
          <a className="nav-cta" href="/contact">Let's talk <span>↗</span></a>
        </nav>
      </header>

      <main>
        {currentPage === 'home' && <>{hero}
          <section className="intro-strip"><div className="section-wrap strip-inner"><span>MY APPROACH</span><p>Practical thinking. Reliable systems. Human-centred technology.</p></div></section>
          <section className="content-section section-wrap page-directory">
          <div className="section-heading"><span className="section-index">EXPLORE</span><h2>Discover my <em>work and experience.</em></h2><p className="heading-note">Choose a page to learn more about my background, capabilities and work.</p></div>
          <div className="page-directory-links">{pageLinks.map(([label, href], index) => <a className="service-card" href={href} key={href}><span className="section-index">0{index+1}</span><h3>{label}</h3><span className="card-arrow">↗</span></a>)}</div>
        </section>
        </>}
        {currentPage === 'about' && <section className="content-section section-wrap" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curious by nature.<br /><em>Driven by solutions.</em></h2></div>
          <div className="about-grid"><div className="about-lead"><p>I am a dedicated IT professional with hands-on experience in IT management, systems administration, network infrastructure and technical support.</p><p>I enjoy connecting technology with everyday needs — from keeping systems secure and reliable to developing websites, supporting teams and exploring creative digital work.</p></div><div className="about-facts"><div><span>01</span><p>Technology operations & support</p></div><div><span>02</span><p>Web development & digital solutions</p></div><div><span>03</span><p>Creative media & data analysis</p></div></div></div>
        </section>}
        {currentPage === 'expertise' && <section className="content-section expertise-section" id="expertise">
          <div className="section-wrap"><div className="section-heading"><span className="section-index">02 / EXPERTISE</span><h2>What I <em>bring to the table.</em></h2><p className="heading-note">A versatile mix of technical, creative and problem-solving capabilities.</p></div>
            <div className="service-grid">{services.map(item => <article className="service-card" key={item.number}><div className="service-top"><span>{item.number}</span><b>{item.icon}</b></div><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow">↗</span></article>)}</div>
            <div className="skills-block"><span className="section-index">CORE SKILLS</span><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
          </div>
        </section>}
        {currentPage === 'experience' && <section className="content-section section-wrap" id="experience">
          <div className="section-heading"><span className="section-index">03 / EXPERIENCE</span><h2>Experience built<br /><em>through doing.</em></h2></div>
          <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="job-heading"><div><h3>{job.role}</h3><p>{job.company}</p></div><span>{job.period}</span></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        </section>}
        {currentPage === 'education' && <section className="content-section education-section" id="education">
          <div className="section-wrap"><div className="section-heading"><span className="section-index">04 / EDUCATION</span><h2>Learning is a<br /><em>continuous journey.</em></h2></div><div className="education-list">{education.map((item, i) => <article key={item.school}><span className="education-number">0{i + 1}</span><div><h3>{item.school}</h3><p>{item.qualification}</p></div><span className="education-year">{item.year}</span></article>)}</div></div>
        </section>}
        {currentPage === 'contact' && <section className="contact-section section-wrap" id="contact">
          <span className="section-index">05 / CONTACT</span><p className="contact-overline">HAVE A PROJECT OR AN OPPORTUNITY?</p><h2>Let's make<br /><em>something work.</em></h2><p className="contact-copy">Have a technology challenge, a project in mind or an opportunity to discuss? I'd be glad to hear from you.</p><a className="button button-primary contact-button" href="mailto:amekuspaul@gmail.com?subject=Portfolio%20Enquiry">amekuspaul@gmail.com <span>↗</span></a>
          <div className="contact-phones" aria-label="Phone numbers">
            <a href="tel:+2348162168555">08162168555</a>
            <a href="tel:+23480879617854">80879617854</a>
          </div>
          <div className="social-links"><a href="https://www.linkedin.com/in/g-dia-tech-940951241" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Thom333" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.facebook.com/profile.php?id=100091271246866" target="_blank" rel="noreferrer">Facebook ↗</a></div>
        </section>}
        {!['home','about','expertise','experience','education','contact'].includes(currentPage) && <section className="content-section section-wrap"><span className="section-index">PAGE NOT FOUND</span><h2>This page isn't here.</h2><a className="button button-primary" href="/">Return home ↗</a></section>}
      </main>
      <footer className="footer"><a className="brand" href="/"><span className="brand-mark">TG</span><span>THOMAS<span className="brand-light"> GODIYA</span></span></a><span>© {new Date().getFullYear()} Thomas Godiya. All rights reserved.</span><a href="/">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
