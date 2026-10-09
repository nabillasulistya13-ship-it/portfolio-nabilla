'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { ArrowUpRight, Award, BarChart3, CalendarDays, Check, ContactRound, ExternalLink, Eye, FileText, Globe, GraduationCap, Laptop, Mail, MapPin, Menu, Monitor, MonitorCog, Palette, Phone, Sparkles, Star, Users, Video, Wrench, X } from 'lucide-react'
import { CertificatePdfPreview } from '@/components/certificate-pdf-preview'

const navigation = [
  { href: '#beranda', label: 'Home' },
  { href: '#tentang', label: 'About' },
  { href: '#pengalaman', label: 'Experience' },
  { href: '#organisasi', label: 'Organization' },
  { href: '#proyek', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
]

const skills = ['Data Analysis', 'Python', 'SQL', 'Power BI', 'Excel', 'AI Automation']

const projects = [
  {
    number: '01',
    category: 'EXPLORATORY DATA ANALYSIS · DASHBOARD',
    title: 'Indonesia Poverty Analysis',
    description: 'Explored poverty and socioeconomic indicators across 532 districts and cities in 34 provinces, then translated the findings into an interactive dashboard.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Indonesia%20Poverty%20Analysis%20Dashboard%20%281%29-70trnrfEuOmIaBlHOifNCDzN36MViV.png',
    imageAlt: 'Indonesia Poverty Analysis dashboard with maps, regional comparisons, and socioeconomic charts',
    metric: '532 districts · 34 provinces',
    tools: ['Python', 'Pandas', 'Looker Studio'],
    caseStudy: {
      question: 'Where are poverty levels highest, and how do they relate to human development, employment, and regional economic output?',
      approach: [
        'Compare poverty levels across provinces and identify the highest-rate districts and cities.',
        'Map regional patterns so differences across the Indonesian archipelago are easy to see.',
        'Explore relationships between poverty, the Human Development Index (IPM), unemployment (TPT), and regional GDP (PDRB).',
        'Summarize the analysis in an interactive dashboard with rankings, distributions, and correlation views.',
      ],
      findings: [
        'The dashboard covers 532 districts and cities across 34 provinces; the displayed average poverty rate is 10.14%.',
        'Poverty is negatively associated with IPM in this dataset (correlation −0.71) and positively associated with TPT (0.48).',
        'These correlations describe patterns in the analyzed data; they do not establish that one indicator causes another.',
      ],
      contribution: 'Structured the analysis around regional comparison, indicator relationships, and clear visual storytelling for exploratory decision support.',
    },
  },
  {
    number: '02',
    category: 'CUSTOMER BEHAVIOR · DASHBOARD',
    title: 'ForGoBike Trip Analysis',
    description: 'Analyzed bike-sharing activity across 27 stations to surface usage patterns, member demographics, popular routes, and trip-duration trends.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ForGoBike%20Dashboard%20Analytics-fAT9yUwxTR0kmY46fZEjCHhRlfJE9W.png',
    imageAlt: 'ForGoBike analytics dashboard with trip totals, station rankings, member demographics, and trip duration charts',
    metric: '159,429 trips · 27 stations',
    tools: ['Python', 'Pandas', 'Power BI'],
    caseStudy: {
      question: 'Which stations and rider groups account for the most activity, and what does a typical trip look like?',
      approach: [
        'Summarize trip volume and average ride duration as headline service metrics.',
        'Rank start and end stations to compare where journeys begin and finish.',
        'Compare membership and birth-year distributions to understand the rider mix.',
        'Review the full duration distribution alongside the average so long trips do not get hidden by one summary value.',
      ],
      findings: [
        'The dashboard reports 159,429 trips across 27 stations and an average duration of about 778.89 seconds.',
        'Market St at 10th St is the leading start station shown (3,478 trips); San Francisco Caltrain Station leads the end-station view (4,475 trips).',
        'Trip-duration and rider-demographic charts provide complementary views beyond the overall trip count.',
      ],
      contribution: 'Analyzed station rankings, rider composition, and ride-duration patterns, then organized the results into a dashboard for quick comparison.',
    },
  },
  {
    number: '03',
    category: 'MARKET ANALYSIS · DASHBOARD',
    title: 'Airbnb Listings Analysis',
    description: 'Explored New York City listings by room type, neighborhood, price, and host to make market patterns easier to compare.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Airbnb%20Dashboard%20Analytics%20Overview-dQkkfCfJ1sf1i4UFYyYLPfyRi4xBl5.png',
    imageAlt: 'Airbnb dashboard comparing room types, listing prices, neighborhood distribution, and hosts',
    metric: '20,770 listings · New York City',
    tools: ['Data analysis', 'Dashboard design', 'Storytelling'],
    caseStudy: {
      question: 'How are listings distributed across room types and neighborhoods, and what should be considered when comparing prices?',
      approach: [
        'Compare entire homes, private rooms, shared rooms, and other listing types.',
        'Review listing counts by neighborhood group and highlight the most represented areas.',
        'Inspect the listing-price distribution and compare it across the market rather than relying on a single average.',
        'Summarize leading neighborhoods and hosts in ranked dashboard tables.',
      ],
      findings: [
        'Entire homes/apartments make up 55.6% of listings in the dashboard; private rooms account for 42.4%.',
        'Manhattan and Brooklyn have the largest listing counts among the neighborhood groups shown.',
        'The displayed price distribution is strongly right-skewed, so a small number of high-priced listings can make the average less representative of a typical listing.',
      ],
      contribution: 'Organized listing, neighborhood, and pricing comparisons into a visual market overview that makes segments and outliers easier to inspect.',
    },
  },
  {
    number: '04',
    category: 'EDUCATION DATA ANALYSIS · DASHBOARD',
    title: 'Student Exam Performance',
    description: 'Analyzed exam results for 1,000 students to explore score distributions, subject relationships, and how performance varies with student background and test preparation.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Student%20Exam%20Performance%20Dashboard%285%29-T2Xz7Rlbjc7uqnyCLL5IIIuVJCjoTg.png',
    imageAlt: 'Student exam performance dashboard showing math, reading, and writing score distributions and comparisons by education, student group, and test preparation',
    metric: '1,000 student records · 3 subjects',
    tools: ['Python', 'NumPy', 'Looker Studio'],
    caseStudy: {
      question: 'How do students perform across the three subjects, and how do observed scores differ across background and test-preparation groups?',
      approach: [
        'Review and summarize math, reading, and writing scores across the student records.',
        'Compare each subject’s score distribution to understand the range and concentration of results.',
        'Group subject averages by parental education, student group, and test-preparation status.',
        'Present comparisons together so patterns across subjects can be explored without treating group differences as causes.',
      ],
      findings: [
        'Average scores in the dashboard are 66.09 in math, 69.17 in reading, and 68.05 in writing.',
        'Students shown as completing a test-preparation course have higher average scores in all three subjects than students shown with no course.',
        'The observed group differences describe this dataset; they do not establish that test preparation or background caused the score differences.',
      ],
      contribution: 'Analyzed score distributions and group-level comparisons, then organized the results into a dashboard that makes subject patterns and differences easier to explore.',
    },
  },
  {
    number: '05',
    category: 'THESIS · AI AUTOMATION · IT HELPDESK',
    title: 'AI-Powered IT Helpdesk Automation',
    description: 'Designed an AI-assisted helpdesk flow that structures WhatsApp support requests and connects intake, ticket handling, and follow-up steps.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-21%20035339-fQ7Lj29apXH5La9pPz7miZdDZhuBxu.png',
    imageAlt: 'Workflow automation diagram for an IT helpdesk thesis, showing connected request intake, processing, ticket, and notification steps',
    metric: 'WhatsApp intake · Multi-step support workflow',
    tools: ['n8n', 'WhatsApp', 'AI workflow'],
    caseStudy: {
      question: 'How can routine IT requests, such as printer ink replacement, be collected consistently over WhatsApp and passed to the support team with less manual back-and-forth?',
      approach: [
        'Start from a user’s helpdesk request and identify the information the support team needs to act on it.',
        'Use a conversational AI-assisted intake to collect details such as name, department, floor, active WhatsApp number, and preferred resolution channel.',
        'Check whether the request contains the required details and leave a path for clarification or manual follow-up when it does not.',
        'Map the request through connected workflow steps for ticket handling, routing, and status or notification follow-up.',
      ],
      findings: [
        'The WhatsApp example demonstrates a structured intake for a printer-related request and shows the details requested before handoff.',
        'The workflow diagram maps a multi-step process with branching, request processing, and follow-up across messaging and email paths.',
        'The supplied examples show the proposed interaction and workflow; no measured time savings or automation accuracy are claimed.',
      ],
      contribution: 'Developed the thesis workflow concept, helpdesk conversation, required-information checklist, and automation flow for request handling and follow-up.',
      supportingImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-22%20091310-vemcM8xx4ROoPKkv4CjTsaC8U1PoQG.png',
      supportingImageAlt: 'Example WhatsApp conversation with BRITA Region 8 IT Helpdesk collecting details for a printer ink request',
    },
  },
  {
    number: '06',
    category: 'INTERNAL TOOLS · DEVICE MANAGEMENT',
    title: 'IT Device Monitoring System',
    description: 'Built a web-based IT asset monitoring system for 253 work units, with a centralized dashboard and admin tools for device records.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-26%20144938-Tdj4gsMtWmvSvL4Ca4tKet915jhMQu.png',
    imageAlt: 'IT device monitoring dashboard with device and branch office summaries for the Region 8 Jakarta 3 team',
    metric: '253 work units · Asset monitoring',
    tools: ['Google Apps Script', 'HTML & CSS', 'Google Sheets'],
    caseStudy: {
      question: 'How can the IT team organize device records and monitor asset condition and maintenance across 253 work units?',
      approach: [
        'Build a browser-based dashboard with Google Apps Script and a custom HTML and CSS interface.',
        'Create device-management tools to search records, add assets, import asset data, and export CSV or XLSX files.',
        'Provide dashboard summaries for device totals, branch offices, condition, and asset types, with an admin profile for account details.',
      ],
      findings: [
        'The system is designed to support IT operations across 253 work units; the screenshots do not claim a particular number of devices currently recorded.',
        'The dashboard presents device and branch-office totals alongside spaces for condition and asset-type distributions.',
        'The device list organizes records by user code, branch office, work unit, and device name, with search and export controls.',
      ],
      contribution: 'Developed the device-monitoring application interface and dashboard flow with Google Apps Script, HTML, and CSS for centralized asset tracking.',
      screenshots: [
        {
          caption: 'WELCOME & SIGN-IN',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-26%20144621-faHIpyJYavxQg1WREiNrjfAEO4IlnB.png',
          alt: 'Welcome and sign-in screen for the BRITA Region 8 device monitoring system',
        },
        {
          caption: 'DEVICE MANAGEMENT',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-26%20145153-yd59VNRD1GVvIGUklFwn31OlLO1ANy.png',
          alt: 'Device list page with search, CSV and XLSX export, and add-device actions',
        },
        {
          caption: 'ADMIN PROFILE',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-26%20145633-wue3snEr5zEeuzTbWu6kh7RRoJE9gI.png',
          alt: 'Administrator profile page showing account and regional placement details',
        },
        {
          caption: 'MONITORING LANDING PAGE',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-26%20144510-RXuBed6FV68ygwSzCUwGNaYn4u28yv.png',
          alt: 'Blue landing page introducing the IT device monitoring system with a sign-in button',
        },
      ],
    },
  },
]

function SiteHeader({
  menuOpen,
  activeSection,
  isScrolled,
  setMenuOpen,
  setActiveSection,
}: {
  menuOpen: boolean
  activeSection: string
  isScrolled: boolean
  setMenuOpen: (open: boolean) => void
  setActiveSection: (section: string) => void
}) {
  const navigateTo = (href: string) => {
    setActiveSection(href.slice(1))
    setMenuOpen(false)
  }

  return (
    <header className={`portfolio-header${isScrolled ? ' portfolio-header--scrolled' : ''}`}>
      <a className="brand" href="#beranda" aria-label="nabilla.dev home" onClick={() => navigateTo('#beranda')}>
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
        <span>nabilla<span className="brand-dot">.</span>dev</span>
      </a>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav className={`portfolio-nav${menuOpen ? ' portfolio-nav--open' : ''}`} aria-label="Main navigation">
        {navigation.map(({ href, label }) => (
          <a className={`nav-link${activeSection === href.slice(1) ? ' nav-link--active' : ''}`} href={href} key={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} onClick={() => navigateTo(href)}>
            {label}
          </a>
        ))}
        <a className={`nav-contact${activeSection === 'kontak' ? ' nav-contact--active' : ''}`} href="#kontak" aria-current={activeSection === 'kontak' ? 'location' : undefined} onClick={() => navigateTo('#kontak')}>Contact</a>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="beranda" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="focus-pill"><Sparkles aria-hidden="true" /><span>Data Analytics | Business Intelligence | AI Automation</span></div>
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 id="hero-title">Nabilla<br /><span>Sulistyaningrum</span></h1>
        <p className="hero-lead">I turn complex data into <strong>clear, useful decisions.</strong></p>
        <p className="hero-description">Information Systems graduate focused on data analytics, business intelligence, and AI automation. I enjoy finding the story behind the numbers and building dashboards that make it easy to act on.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#proyek">Explore my work <ArrowUpRight aria-hidden="true" /></a>
          <a className="button-secondary" href="#kontak">Contact Me</a>
        </div>
        <ul className="skill-chips" aria-label="Key skills">
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
      <div className="hero-portrait-frame">
        <div className="hero-portrait">
          <div className="portrait-photo" role="img" aria-label="Nabilla Sulistyaningrum, Information Systems graduate" />
          <div className="portrait-caption">
            <strong>Nabilla Sulistyaningrum</strong>
            <span>Information Systems Graduate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, description, titleId }: { eyebrow: string; title: string; description?: string; titleId?: string }) {
  return (
    <div className="section-intro">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function ProjectsSection({ selectedProject, setSelectedProject, onCloseProject }: {
  selectedProject: string | null
  setSelectedProject: (project: string | null) => void
  onCloseProject: () => void
}) {
  const activeProject = projects.find((project) => project.number === selectedProject)

  return (
    <section className="content-section projects-section" id="proyek" aria-labelledby="projects-title">
      <SectionIntro eyebrow="SELECTED PROJECTS" title="From raw data to a clearer picture." titleId="projects-title" description="A few examples of how I analyze data, communicate findings, and design AI-assisted workflows for real support needs." />
      <div className="project-grid">
        {projects.map((project) => (
            <article className={`project-card${project.number === '05' ? ' project-card--automation' : ''}`} key={project.number}>
            <img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
            <div className="project-copy">
              <div className="project-heading-row"><p className="project-category">{project.category}</p><span>{project.number}</span></div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-metric">{project.metric}</p>
              <ul className="project-tools" aria-label={`${project.title} tools and skills`}>
                {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
              <button
                className="project-link"
                type="button"
                aria-haspopup="dialog"
                aria-expanded={selectedProject === project.number}
                onClick={() => setSelectedProject(project.number)}
              >
                Explore case study <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
      {activeProject && <ProjectCaseStudyDialog project={activeProject} onClose={onCloseProject} />}
    </section>
  )
}

function ProjectCaseStudyDialog({ project, onClose }: { project: (typeof projects)[number]; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return

    dialog.showModal()
    return () => {
      if (dialog.open) dialog.close()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className={`case-study-dialog${project.number === '05' ? ' case-study-dialog--automation' : ''}`}
      id="project-case-study-dialog"
      aria-labelledby="case-study-title"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <div className="case-study-layout">
        <div className="case-study-stage">
          <img src={project.image} alt={project.imageAlt} />
          <div className="case-study-stage-caption">
            <span>PROJECT {project.number}</span>
            <strong>{project.metric}</strong>
          </div>
        </div>
        <div className="case-study-details">
          <header className="case-study-heading">
            <div>
              <p className="project-category">{project.category}</p>
              <h2 id="case-study-title">{project.title}</h2>
            </div>
            <button className="case-study-close" type="button" aria-label="Close case study" onClick={onClose}><X aria-hidden="true" /></button>
          </header>
          <section className="case-study-section">
            <h3>Business question</h3>
            <ul><li>{project.caseStudy.question}</li></ul>
          </section>
          <section className="case-study-section">
            <h3>Analysis process</h3>
            <ul>{project.caseStudy.approach.map((step) => <li key={step}>{step}</li>)}</ul>
          </section>
          <section className="case-study-section">
            <h3>Key findings</h3>
            <ul>{project.caseStudy.findings.map((finding) => <li key={finding}>{finding}</li>)}</ul>
          </section>
          {'supportingImage' in project.caseStudy && (
            <figure className="case-study-proof">
              <figcaption>WHATSAPP HELPDESK INTAKE EXAMPLE</figcaption>
              <img src={project.caseStudy.supportingImage} alt={project.caseStudy.supportingImageAlt} loading="lazy" decoding="async" />
            </figure>
          )}
          {'screenshots' in project.caseStudy && (
            <div className="case-study-gallery" aria-label={`${project.title} screen examples`}>
              {project.caseStudy.screenshots?.map((screenshot) => (
                <figure className="case-study-proof" key={screenshot.src}>
                  <figcaption>{screenshot.caption}</figcaption>
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          )}
          <section className="case-study-section">
            <h3>Role &amp; contribution</h3>
            <ul><li>{project.caseStudy.contribution}</li></ul>
          </section>
          <div className="case-study-tools">
            <span>TOOLS &amp; SKILLS</span>
            <ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </div>
        </div>
      </div>
    </dialog>
  )
}

function SkillsSection() {
  const skillGroups = [
    {
      Icon: BarChart3,
      title: 'Data Analysis',
      skills: ['Data cleaning', 'Exploratory data analysis', 'Data validation', 'Correlation analysis', 'Clustering', 'Data visualization', 'Dashboard reporting'],
    },
    {
      Icon: Monitor,
      title: 'Programming & Data',
      skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      Icon: BarChart3,
      title: 'BI & Reporting',
      skills: ['Power BI', 'Looker Studio', 'Microsoft Excel', 'Google Sheets', 'Dashboard design', 'Business intelligence'],
    },
    {
      Icon: Sparkles,
      title: 'Automation',
      skills: ['n8n', 'Google Apps Script', 'HTML', 'CSS', 'Workflow automation', 'AI agents'],
    },
    {
      Icon: Laptop,
      title: 'Tools & Platforms',
      skills: ['Google Colab', 'RStudio', 'Visual Studio Code', 'Figma', 'Canva'],
    },
  ]

  return (
    <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionIntro eyebrow="CAPABILITIES" title="Tech Stack & Skills" titleId="skills-title" description="A focused toolkit for data analysis, business intelligence, automation, and supporting platforms." />
      <div className="skills-grid">
        {skillGroups.map(({ Icon, title, skills: groupSkills }) => (
          <article key={title} tabIndex={0}>
            <div className="skill-card-heading">
              <span className="skill-icon"><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
            </div>
            <ul className="skill-tags" aria-label={`${title} skills`}>
              {groupSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection() {
  const responsibilities = [
    { Icon: Laptop, title: 'Device monitoring system', detail: 'Developed a web-based IT device monitoring system for 253 work units using Google Apps Script, HTML, CSS, and Google Sheets.' },
    { Icon: Monitor, title: 'IT support', detail: 'Configured and maintained 50+ laptops and PCs, installed software, partitioned disks, configured BitLocker, and troubleshot hardware and software.' },
    { Icon: Palette, title: 'BRI Runners design', detail: 'Designed 3 BRI Runners jerseys and 1 flag using Canva and Adobe Illustrator for internal communication activities.' },
    { Icon: Video, title: 'Tutorial videos', detail: 'Edited 2 IT tutorial videos using CapCut for staff learning purposes.' },
    { Icon: Users, title: 'Daily operations', detail: 'Supported daily IT operations and internal communication within the department.' },
  ]
  const metrics = [
    { Icon: Users, value: '253', label: 'work units supported' },
    { Icon: Monitor, value: '50+', label: 'laptops & PCs configured' },
    { Icon: Palette, value: '3', label: 'BRI Runners design concepts' },
    { Icon: Video, value: '2', label: 'IT tutorial videos edited' },
  ]
  const workSamples = [
    {
      title: 'IT operations & event support',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-09%20at%2012.50.14-NtwJNzBbuos1mBPaqnvPVRglC4mSl1.jpeg', alt: 'IT workstation supporting event production at the BRI Region 8 office' },
      ],
    },
    {
      title: 'IT tutorial video editing',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20220136-lNLmA8oLilM8ANT4YdW4fHpzb7g6hm.png', alt: 'Editing timeline for a Microsoft Authenticator tutorial video', fit: 'contain' },
      ],
    },
    {
      title: 'Microsoft Authenticator staff guide',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20220031-DJ2UuwKYaSbotsdWgAd8fpSXl6F7ok.png', alt: 'Microsoft Authenticator learning guide and tutorial editing screenshots', fit: 'contain' },
      ],
    },
    {
      title: 'BRI internal application concepts',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20220216-ODlcm81umtYvuHlQQmhqflBNlP3J8j.png', alt: 'BRI internal application interfaces and dashboard concepts', fit: 'contain' },
      ],
    },
    {
      title: 'Digital banking interface concepts',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20220232-wUH8WYWWdh5z4AMgN2KxNxHywAWADV.png', alt: 'Blue BRI interface mockups for internal digital services', fit: 'contain' },
      ],
    },
    {
      title: 'Internal communication presentation',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20220114-uTwg1fQqWGZEgSsMVumzuJzwFCv6Hg.png', alt: 'BRI internal communication presentation and slide designs', fit: 'contain' },
      ],
    },
    {
      title: 'IT event video & teaser',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20215918-ahxrHdAPNXdnX4zwefErncwN6usiEc.png', alt: 'Event teaser video project and presentation slides', fit: 'contain' },
      ],
    },
    {
      title: 'BRI Runners jersey & flag designs',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20215954-G08ayOELJTlLA2VfhLvvbnj2hL84LA.png', alt: 'BRI Runners jersey, flag and event design concepts', fit: 'contain' },
      ],
    },
    {
      title: 'BRI Runners community identity',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20215853-8Vu5nraNAEDPL3m8O4CYacNMeeGC3r.png', alt: 'BRI Runners community jersey and event identity design', fit: 'contain' },
      ],
    },
    {
      title: 'Finisher jersey concepts',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20215657-bSHEJ1OFir4OkysQyzBD99VuwE9F3W.png', alt: 'Black BRI Runners jersey and finisher shirt concepts', fit: 'contain' },
      ],
    },
  ]

  return (
    <section className="experience-section" id="pengalaman" aria-labelledby="experience-title">
      <div className="experience-inner">
        <div className="experience-hero">
          <div className="experience-copy">
            <p className="experience-label section-eyebrow">Work Experience</p>
            <h2 id="experience-title">PT Bank Rakyat Indonesia <span>(Persero) Tbk</span></h2>
            <p className="experience-employer">Information Technology Department</p>
            <div className="experience-meta">
              <span><MapPin aria-hidden="true" /> Tangerang, Indonesia</span>
              <span><CalendarDays aria-hidden="true" /> Oct 2025 – Mar 2026</span>
            </div>
            <p className="experience-summary">Supported Regional Office 8&apos;s Information Technology Department through device monitoring, end-user support, and clear internal communication. Combined hands-on IT operations with practical digital tools and creative learning materials.</p>
          </div>
          <div className="experience-photo-grid">
            <img className="experience-photo experience-photo--collage" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UORKyYyqimKVAlQ4zkK41Mwka92Cuq.png" alt="Photo collage of the BRI Region 8 internship: office event, IT workstation, laptop support, and event production" />
          </div>
        </div>

        <div className="experience-dashboard">
          <article className="experience-card">
            <h3><Wrench aria-hidden="true" /> My Responsibilities</h3>
            <ul className="experience-responsibilities">
              {responsibilities.map(({ Icon, title, detail }) => <li key={title}><Icon aria-hidden="true" /><span><strong>{title}:</strong> {detail}</span></li>)}
            </ul>
          </article>

          <article className="experience-card experience-results">
            <h3><BarChart3 aria-hidden="true" /> Key Results</h3>
            <div className="experience-metrics">
              {metrics.map(({ Icon, value, label }) => <div className="experience-metric" key={label}><Icon aria-hidden="true" /><div><strong>{value}</strong><span>{label}</span></div></div>)}
            </div>
          </article>
        </div>

        <div className="experience-work">
          <div className="experience-work-heading">
            <div><p className="section-eyebrow">SELECTED WORK</p><h3>A closer look at the work</h3></div>
            <a className="experience-work-link" href="#proyek">Explore projects <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="experience-gallery">
            {workSamples.map(({ title, images }) => (
              <article className="experience-work-card" key={title}>
                <div className="experience-work-images">{images.map((image) => <img className={'fit' in image && image.fit === 'contain' ? 'experience-image-contain' : undefined} key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}</div>
                <div className="experience-work-caption"><strong>{title}</strong></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function OrganizationSection() {
  const organizationPhotos = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250309-WA0095-Ozb4UULTlGLiGYc0YfOrDAVN3lfq20.jpg',
      alt: 'Media creative teammates gathered together in their organization jackets',
      caption: 'A team built on collaboration',
      position: 'center 42%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-22%20at%2021.33.41%20%281%29-NXiNSkXSMZOj3I2N4pHuvKcELoqSE8.jpeg',
      alt: 'Organization member standing on a basketball court',
      caption: 'Team spirit beyond the desk',
      position: 'center 32%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-22%20at%2021.33.41-R4AvpflvLXNqe3LRc4bGYqNIgObn2C.jpeg',
      alt: 'Speaking to fellow organization members at a community gathering',
      caption: 'Sharing ideas with the community',
      position: 'center 15%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3924.JPG-KXAWdEx3VFqs7HMIENhUlkgnFmiVMB.jpeg',
      alt: 'Student organization members posing together on campus steps',
      caption: 'Growing together on campus',
      position: 'center 53%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-22%20at%2021.29.50-GtW1r7qc5KzvraBIgTzH92ntFBLWOh.jpeg',
      alt: 'Large student committee gathered after an event',
      caption: 'Making meaningful events happen',
      position: 'center 52%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1729086943713-TTdF1xaMySXJ5bZtv0Xwe5WeGVu2Y7.jpeg',
      alt: 'Organization members working together on event video production',
      caption: 'Behind the scenes of event coverage',
      position: 'center 48%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-22%20at%2021.33.42-aghaVelVI11XwdabGS383wbIMINgte.jpeg',
      alt: 'Nabilla photographing a campus event with her camera',
      caption: 'Capturing the moments that matter',
      position: '68% 54%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0176.JPG-h8g2UxadNuylILzM1cyuFsRDMZWDXa.jpeg',
      alt: 'Nabilla and fellow volunteers at a community event',
      caption: 'Showing up for the community',
      position: 'center 48%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9166.JPG-EUkcWguFSTvyK3TS4MdrrGrr3xdt0Q.jpeg',
      alt: 'Student committee members posing together after an event',
      caption: 'Building connections through service',
      position: 'center 40%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9700%20%281%29.JPG-AUwMNiJDpNIPhfeoWareWD3mSLLUyt.jpeg',
      alt: 'BEM FIKTI organization members celebrating together at a community event',
      caption: 'A community that grows together',
      position: 'center 43%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4025.JPG-jOf6sHg0bGE06bu2xD3bUwqrbrJOB1.jpeg',
      alt: 'Organization members gathered together in their dark green jackets',
      caption: 'Stronger together as a team',
      position: 'center 52%',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0505.JPG-rfEm4kIizubWys31TIsoPw5rc7ULOU.jpeg',
      alt: 'A large student community gathered in a covered basketball court',
      caption: 'Welcoming the next generation',
      position: 'center 68%',
    },
  ]
  const organizationDesigns = [
    {
      title: 'BEM FIKTI social media designs',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-08%20214806-OP8j6YC42PLeQijJYrOdtom7HoHVRP.png', alt: 'A collage of BEM FIKTI Instagram post and story designs made as Media Creative staff', fit: 'contain' },
      ],
    },
    {
      title: 'FIKTI SPACE 3.0 event campaign',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20061924-qd9E9E3pGPNdLHPj96X3nUMQTWiSNf.png', alt: 'FIKTI SPACE 3.0 sports championship campaign posters and social media stories', fit: 'contain' },
      ],
    },
    {
      title: 'Social campaign & awareness posts',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20061908-bSOcDISWKTAZdZ4exkAVLIaDbvCv9i.png', alt: 'BEM FIKTI social campaign and environmental awareness designs', fit: 'contain' },
      ],
    },
    {
      title: 'PEMIRA FIKTI campaign designs',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20061949-2cDhfadmG277rxpCm0kqSzW58yE11l.png', alt: 'PEMIRA FIKTI student election campaign poster and Instagram post designs', fit: 'contain' },
      ],
    },
    {
      title: 'FIKTI SPACE logo & mascot concepts',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20061958-wNaeHFVUR8l48meeerPWwAfQTxagKJ.png', alt: 'FIKTI SPACE logo and mascot design presentation board', fit: 'contain' },
      ],
    },
    {
      title: 'FIKTI SPACE event media',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20061918-bsVtiKBgtrM11RdhP649Ai66wgLk4q.png', alt: 'FIKTI SPACE event documentation and social media designs', fit: 'contain' },
      ],
    },
    {
      title: 'BEM FIKTI banners & campaign media',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20062015-FNICtpV4Hsot9aE3HSwdcFZoBL25UN.png', alt: 'BEM FIKTI banner, social media, and digital campaign design board', fit: 'contain' },
      ],
    },
    {
      title: 'FIKTI SPACE apparel & ID cards',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20062002-AxDptS2N3FPAPgFXYvZIyIjaVy2rnm.png', alt: 'FIKTI SPACE shirts, staff ID cards, and event lanyard design board', fit: 'contain' },
      ],
    },
    {
      title: 'Certificates, winner board & award plaque',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-09%20062011-igbkmrrdbMxn34NduHlsT1nkAyyWUx.png', alt: 'FIKTI SPACE certificates, winner board, and award plaque design presentation', fit: 'contain' },
      ],
    },
  ]
  const organizationRoles = [
    {
      organization: 'PKKMB FIKTI UG',
      role: 'Media Creative Coordinator',
      date: 'Sep 2025',
    },
    {
      organization: 'BEM FIKTI Gunadarma University',
      role: 'Deputy Head of Media Creative',
      date: 'Dec 2024 – Sep 2025',
    },
    {
      organization: 'PEMIRA FIKTI UG',
      role: 'Media Creative Coordinator',
      date: 'May – Sep 2024',
    },
    {
      organization: 'BEM FIKTI Gunadarma University',
      role: 'Staff of Media Creative',
      date: 'Dec 2023 – Sep 2024',
    },
  ]

  return (
    <section className="organization-section" id="organisasi" aria-labelledby="organization-title">
      <div className="organization-inner">
        <div className="organization-heading">
          <div>
            <p className="section-eyebrow">ORGANIZATION &amp; LEADERSHIP</p>
            <h2 id="organization-title">Creating with people.<br /><span>Growing through community.</span></h2>
          </div>
          
        </div>

        <div className="organization-gallery" aria-label="Moments from campus organizations">
          {organizationPhotos.map((photo) => (
            <figure className="organization-photo" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.position }} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="organization-roles-heading">
          <div><p className="section-eyebrow">ORGANIZATION</p><h3>Positions held</h3></div>
          <span className="organization-role-count">4 roles · 2023—2025</span>
        </div>
        <div className="organization-roles">
          {organizationRoles.map((item) => (
            <article className="organization-role" key={`${item.organization}-${item.role}-${item.date}`}>
              <div className="organization-role-topline">
                <h4>{item.organization}</h4>
                <span className="organization-role-date">{item.date}</span>
              </div>
              <ul><li>{item.role}</li></ul>
            </article>
          ))}
        </div>

        <div className="organization-designs">
          <div className="experience-work-heading">
            <div><p className="section-eyebrow">DESIGN EVIDENCE</p><h3>Creative work for campus organizations</h3></div>
          </div>
          <div className="experience-gallery">
            {organizationDesigns.map(({ title, images }) => (
              <article className="experience-work-card" key={title}>
                <div className="experience-work-images">{images.map((image) => <img className={'fit' in image && image.fit === 'contain' ? 'experience-image-contain' : undefined} key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}</div>
                <div className="experience-work-caption"><strong>{title}</strong></div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function ProfileSections() {
  return (
    <>
      <section className="content-section about-section" id="tentang" aria-labelledby="about-title">
        <div className="about-layout">
          <aside className="about-sidebar" aria-label="Profile and contact details">
            <div className="about-portrait">
              <img className="about-portrait-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professional%20Hijab%20Corporate%20Headshot-Yq1iJ80sONBJVBI0gblSC5Ji9B0oVD.png" alt="Nabilla Sulistyaningrum in a black hijab and business suit against a white background" />
              <a className="about-linkedin-badge" href="https://www.linkedin.com/in/nabilla-sulistyaningrum/" target="_blank" rel="noreferrer" aria-label="Nabilla on LinkedIn"><span aria-hidden="true">in</span></a>
            </div>
            <article className="about-contact-card">
              <h3><span className="about-card-icon about-card-icon--solid"><ContactRound aria-hidden="true" /></span>Contact Me<a href="#kontak" aria-label="Go to contact section"><ArrowUpRight aria-hidden="true" /></a></h3>
              <div className="about-contact-list">
                <a href="mailto:nabillasulistya13@gmail.com"><Mail aria-hidden="true" /><span>nabillasulistya13@gmail.com</span></a>
                <a href="tel:+628999064430"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" /></svg><span>+62 899 9064 430</span></a>
                <a href="https://www.linkedin.com/in/nabilla-sulistyaningrum/" target="_blank" rel="noreferrer"><span className="social-contact-icon social-contact-icon--linkedin" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.12 20.452H3.555V9h3.564v11.452z" /></svg></span><span>linkedin.com/in/nabilla-sulistyaningrum</span></a>
                <a href="https://www.instagram.com/nabillasuliss/" target="_blank" rel="noreferrer"><span className="social-contact-icon social-contact-icon--instagram" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.7" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></span><span>@nabillasuliss</span></a>
              </div>
            </article>
          </aside>

          <div className="about-main">
            <div className="about-intro">
              <p className="about-kicker"><span />ABOUT ME</p>
              <h2 id="about-title">Nabilla <span>Sulistyaningrum</span></h2>
<p>I&apos;m an Information Systems graduate from Gunadarma University with a strong focus on Data Analytics and Business Intelligence. Skilled in using Python, SQL, and BI tools to clean, analyze, and visualize data to generate insights that support decision-making.</p>
                <p>Experienced in data processing, Exploratory Data Analysis (EDA), and developing interactive dashboards to present information clearly and support data-driven decision-making.</p>
            </div>

            <div className="about-details-grid">
              <div className="about-details-column">
                <article className="about-info-card about-education-card">
                  <h3><span className="about-card-icon"><GraduationCap aria-hidden="true" /></span>Education</h3>
                  <div className="about-card-content">
                    <p className="about-date">2022 – 2026</p>
                    <strong>Gunadarma University</strong>
                    <p>Bachelor of Information Systems</p>
                    <span className="gpa-pill">GPA <strong>3.84</strong> / 4.00</span>
                  </div>
                </article>
                <article className="about-info-card about-languages-card">
                  <h3><span className="about-card-icon"><Globe aria-hidden="true" /></span>Languages</h3>
                  <div className="about-card-content about-language-list">
                    <p><strong>Bahasa Indonesia</strong><span>· Native</span></p>
                    <p><strong>English</strong><span>· Intermediate</span></p>
                  </div>
                </article>
              </div>

              <article className="about-info-card about-skills-card">
                <h3><span className="about-card-icon"><Star aria-hidden="true" /></span>Skills &amp; Interests</h3>
                <ul className="about-check-list">
                  {['Analytical Thinking', 'Problem Solving', 'Attention to Detail', 'Communication', 'Teamwork', 'Leadership', 'Time Management', 'Adaptability'].map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                </ul>
              </article>

              <article className="about-info-card about-tools-card">
                <h3><span className="about-card-icon"><Laptop aria-hidden="true" /></span>Tools &amp; Software</h3>
                <ul className="about-tools-list">
                  {[
                    ['Py', 'Python', 'python'], ['SQL', 'SQL', 'sql'], ['BI', 'Power BI', 'powerbi'],
                    ['L', 'Looker Studio', 'looker'], ['X', 'Excel', 'excel'], ['G', 'Google Sheets', 'sheets'],
                    ['n8n', 'n8n', 'n8n'], ['R', 'RStudio', 'rstudio'], ['*', 'Google Apps Script', 'apps-script'],
                  ].map(([, label, tone]) => <li key={label}><span className={`tool-mark tool-mark--${tone}`} aria-hidden="true"><ToolLogo tone={tone} /></span><span>{label}</span></li>)}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <OrganizationSection />
    </>
  )
}

function CertificatesSection() {
  const filters = ['All', 'Academic', 'Data Analyst', 'AI & Technology', 'Leadership'] as const
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const certificates = [
    {
      title: 'Student Research Dissemination',
      issuer: 'Universitas Gunadarma',
      date: '13 Mar 2026',
      category: 'Academic',
      description: 'Participant certificate for the Student Research Dissemination program in the Information Systems department.',
      file: 'https://blobs.vusercontent.net/blob/Sertifikat%20-%20PesertaNabilla%20Sulistyaningrum-OL5aSGWDV9LVnojZBQsMpccOwP5DQK.pdf',
    },
    {
      title: 'Thesis Proposal & Academic Writing Workshop',
      issuer: 'Universitas Gunadarma',
      date: '19 Feb 2026',
      category: 'Academic',
      description: 'Workshop on research proposal preparation, thesis writing, and the Information Systems thesis handbook.',
      file: 'https://blobs.vusercontent.net/blob/Peserta%20-%20Nabilla%20Sulistyaningrum%20%281%29-0egdhNe3dLR8usay0I7TxjdgdkJL8V.pdf',
    },
    {
      title: 'Information Systems Study Completion Certificate',
      issuer: 'Universitas Gunadarma',
      date: '27 Aug 2025',
      category: 'Academic',
      description: 'Certificate documenting completion of the Information Systems program at the associate-degree-equivalent level.',
      file: 'https://blobs.vusercontent.net/blob/Sertifikat%20Penulisan%20Ilmiah_Nabilla%20Sulistyaningrum-mzNubEc2PU5Yl9zcEO5pqulUueslzV.pdf',
    },
    {
      title: 'Data Analyst Seminar — TechnoFair 11.0',
      issuer: 'BEM FIKTI UG',
      date: '6 Jul 2024',
      category: 'Data Analyst',
      description: 'Seminar certificate for “Visualizing Insights: A Beginner’s Guide to Data Presentation.”',
      file: 'https://blobs.vusercontent.net/blob/PesertaDA_Nabilla%20Sulistyaningrum-os86u8Odg0lHYXkOupSet2qs4qMraM.pdf',
    },
    {
      title: 'FIKTI Comparative Study 2025',
      issuer: 'BEM FIKTI UG · Universitas Gunadarma',
      date: '22 Feb 2025',
      category: 'Leadership',
      description: 'Recognition for participating in the FIKTI Comparative Study with BEM FIKTI UG and BEM FTI Universitas Tarumanagara.',
      file: '/bem-fikti-comparative-study.jpg',
      image: '/bem-fikti-comparative-study.jpg',
    },
    {
      title: 'Staff Biro Media — BEM FIKTI UG',
      issuer: 'BEM FIKTI UG · Universitas Gunadarma',
      date: '12 Oct 2024',
      category: 'Leadership',
      description: 'Certificate of appreciation for service as a Media Bureau staff member during the 2023/2024 period.',
      file: 'https://blobs.vusercontent.net/blob/SERTIFIKAT%20BEM%20FIKTI%20UG_%20NABILLA%20SULISTYANINGRUM-jUt6EobI2StTffd3OHAoAznTAebfoX.pdf',
    },
    {
      title: 'FIKTI Award 2024 — Always On PIC',
      issuer: 'BEM FIKTI UG · Universitas Gunadarma',
      date: '2024',
      category: 'Leadership',
      description: 'Awarded as Outstanding Person in Charge — Always On Terbaik by BEM FIKTI UG for the 2023/2024 period.',
      file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-09%20at%2023.57.09-X1OgdtNPUHUXkVAPAMVEjK1Cak3ULh.jpeg',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-09%20at%2023.57.09-X1OgdtNPUHUXkVAPAMVEjK1Cak3ULh.jpeg',
    },
    {
      title: 'AI Training · Generation Girl',
      issuer: 'Generation Girl',
      date: '23 Sep 2025',
      category: 'AI & Technology',
      description: '15-hour program covering AI fundamentals, productivity, prompt engineering, responsible AI, and future-ready skills.',
      file: 'https://blobs.vusercontent.net/blob/E-Certificate%20AI%20Training%20Generation%20Girl%20Batch%206-jiGZLhdUAQJPwf2VdRqgKjRZ7V7IbO.pdf',
    },
    {
      title: 'Dasar-dasar Keamanan AI',
      issuer: 'Digital Talent Scholarship · Komdigi',
      date: '14 Feb 2025',
      category: 'AI & Technology',
      description: 'Micro Skill training in AI security, completed through the Digital Talent Scholarship 2025 program.',
      file: 'https://blobs.vusercontent.net/blob/Sertifikat_NABILLA%20SULISTYANINGRUM_Dasar-dasar%20Keamanan%20AI-EceSfnwl0CsdBJcGbbyxvydAOVRim4.pdf',
    },
    {
      title: 'Data Preparation for Business Processes',
      issuer: 'Universitas Gunadarma',
      date: '27 Sep 2025',
      category: 'Data Analyst',
      description: 'Training in data requirements, collection, analysis, and validation for business processes.',
      file: 'https://blobs.vusercontent.net/blob/signed_e16bc6f392322d3f9e032e54ebc18c6a.pdf%20%281%29-cpNU6cPlhEFhJQCqwjZUyxDjYrWEdD.pdf',
    },
    {
      title: 'SQL Server for Intermediate',
      issuer: 'Universitas Gunadarma',
      date: '24 Feb 2025',
      category: 'Data Analyst',
      description: 'Intermediate SQL Server training in complex queries, security, indexing, optimization, and recovery.',
      file: 'https://blobs.vusercontent.net/blob/signed_f4ff532090955a8d770a24a71e070671.pdf%20%281%29-gfj1SeAsyke3usHLNkpej7RJqV5BM6.pdf',
    },
    {
      title: 'SQL Server for Beginner',
      issuer: 'Universitas Gunadarma',
      date: '19 Feb 2024',
      category: 'Data Analyst',
      description: 'Foundational SQL Server training in database administration, tables, security, functions, and joins.',
      file: 'https://blobs.vusercontent.net/blob/signed_fe31201b39e15fe64191bc98a45fb5ba.pdf-9XCb6vr5Xzkj6WzAefjBNW1diKUQuJ.pdf',
    },
    {
      title: 'Fundamental Database Management Systems',
      issuer: 'Universitas Gunadarma',
      date: '20 Feb 2023',
      category: 'Data Analyst',
      description: 'DBMS training across relational database concepts and SQL Server, MySQL, and Oracle fundamentals.',
      file: 'https://blobs.vusercontent.net/blob/SERTIFIKAT%20DBMS-9xAkvDBgEzfAhQFLwvBUGFOpSPJzb1.pdf',
    },
  ]
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null)
  const [revealedCertificateTitle, setRevealedCertificateTitle] = useState<string | null>(null)
  const categoryOrder = filters.slice(1)
  const visibleCertificates = certificates
    .filter(({ category }) => activeFilter === 'All' || category === activeFilter)
    .sort((first, second) => categoryOrder.indexOf(first.category as (typeof categoryOrder)[number]) - categoryOrder.indexOf(second.category as (typeof categoryOrder)[number]))

  return (
    <section className="certificates-section" id="certificates" aria-labelledby="certificates-title">
      <div className="certificates-inner">
        <div className="certificates-heading">
          <p className="certificates-eyebrow"><Award aria-hidden="true" /> Credentials</p>
          <h2 id="certificates-title">Certificates</h2>
          <p>Selected certifications and training in data analysis, technology, databases, and campus leadership.</p>
        </div>
        <div className="certificate-filters" role="group" aria-label="Filter certificates">
          {filters.map((filter) => (
            <button className={activeFilter === filter ? 'certificate-filter certificate-filter--active' : 'certificate-filter'} key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
              {filter}
            </button>
          ))}
        </div>
        <p className="certificate-result-count" aria-live="polite">Showing {visibleCertificates.length} of {certificates.length} credentials</p>
        <div className="certificate-grid" aria-label="Certificate previews">
          {visibleCertificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <div className={`certificate-preview${revealedCertificateTitle === certificate.title ? ' certificate-preview--revealed' : ''}`}>
                <div className="certificate-preview-art" aria-hidden="true">
                  {certificate.image ? (
                    <img src={certificate.image} alt="" loading="lazy" />
                  ) : (
                    <CertificatePdfPreview file={certificate.file} title={certificate.title} />
                  )}
                </div>
                <button
                  className="certificate-preview-trigger"
                  type="button"
                  aria-label={`${revealedCertificateTitle === certificate.title ? 'Hide' : 'Show'} certificate actions: ${certificate.title}`}
                  aria-expanded={revealedCertificateTitle === certificate.title}
                  onClick={() => setRevealedCertificateTitle(revealedCertificateTitle === certificate.title ? null : certificate.title)}
                />
                <span className="certificate-category">{certificate.category}</span>
                {revealedCertificateTitle === certificate.title && (
                  <button className="certificate-preview-button" type="button" onClick={() => setSelectedCertificate(certificate)} aria-label={`View certificate: ${certificate.title}`}>
                    <Eye aria-hidden="true" /> View Certificate
                  </button>
                )}
              </div>
              <div className="certificate-copy">
                <div className="certificate-title-row"><h3>{certificate.title}</h3>{certificate.date && <time>{certificate.date.slice(-4)}</time>}</div>
                <p className="certificate-issuer">{certificate.issuer}</p>
                <p className="certificate-description">{certificate.description}</p>
                <div className="certificate-actions">
                  <button type="button" onClick={() => setSelectedCertificate(certificate)}><Eye aria-hidden="true" /> View Certificate</button>
                  <a href={certificate.file} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /> {certificate.image ? 'View Document' : 'View PDF'}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Dialog.Root open={selectedCertificate !== null} onOpenChange={(open) => { if (!open) setSelectedCertificate(null) }}>
          <Dialog.Portal>
            <Dialog.Backdrop className="certificate-dialog-backdrop" />
            <Dialog.Viewport className="certificate-dialog-viewport">
              <Dialog.Popup className="certificate-dialog-popup">
                {selectedCertificate && (
                  <>
                    <header className="certificate-dialog-header">
                      <div>
                        <Dialog.Title className="certificate-dialog-title">{selectedCertificate.title}</Dialog.Title>
                        <Dialog.Description className="certificate-dialog-description">{selectedCertificate.issuer}{selectedCertificate.date ? ` · ${selectedCertificate.date}` : ''}</Dialog.Description>
                      </div>
                      <Dialog.Close className="certificate-dialog-close" aria-label="Close certificate preview"><X aria-hidden="true" /></Dialog.Close>
                    </header>
                    <div className="certificate-dialog-document">
                      {selectedCertificate.image ? (
                        <img src={selectedCertificate.image} alt={`Certificate for ${selectedCertificate.title}`} />
                      ) : (
                        <CertificatePdfPreview file={selectedCertificate.file} title={selectedCertificate.title} eager dialog />
                      )}
                    </div>
                    <footer className="certificate-dialog-footer">
                      <Dialog.Close className="certificate-dialog-dismiss">Close</Dialog.Close>
                      <a className="certificate-dialog-open-file" href={selectedCertificate.file} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /> Open Document</a>
                    </footer>
                  </>
                )}
              </Dialog.Popup>
            </Dialog.Viewport>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="kontak" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="contact-eyebrow">CONTACT</p>
          <h2 id="contact-title">Let&apos;s work together.</h2>
          <p className="contact-note">Open to opportunities in data analytics, business intelligence, and AI automation. Feel free to reach out—I&apos;d love to hear from you.</p>
          <a className="contact-button" href="mailto:nabillasulistya13@gmail.com?subject=Let%27s%20work%20together">
            <Mail aria-hidden="true" /> Send an email
          </a>
        </div>
        <div className="contact-links" aria-label="Contact methods">
          <a className="contact-link" href="mailto:nabillasulistya13@gmail.com">
            <span className="contact-link-icon"><Mail aria-hidden="true" /></span>
            <span className="contact-link-copy"><span>Email</span><strong>nabillasulistya13@gmail.com</strong></span>
            <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </a>
          <a className="contact-link" href="https://wa.me/628999064430" target="_blank" rel="noreferrer">
            <span className="contact-link-icon"><Phone aria-hidden="true" /></span>
            <span className="contact-link-copy"><span>WhatsApp</span><strong>+62 899 9064 430</strong></span>
            <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/nabilla-sulistyaningrum/" target="_blank" rel="noreferrer">
            <span className="contact-link-icon contact-link-icon--linkedin" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.12 20.452H3.555V9h3.564v11.452z" /></svg></span>
            <span className="contact-link-copy"><span>LinkedIn</span><strong>linkedin.com/in/nabilla-sulistyaningrum</strong></span>
            <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </a>
          <a className="contact-link" href="https://www.instagram.com/nabillasuliss/" target="_blank" rel="noreferrer">
            <span className="contact-link-icon contact-link-icon--instagram" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.7" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></span>
            <span className="contact-link-copy"><span>Instagram</span><strong>@nabillasuliss</strong></span>
            <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
      <footer className="portfolio-footer">
        <span className="portfolio-footer-copyright">© {new Date().getFullYear()} Nabilla Sulistyaningrum</span>
        <span className="portfolio-footer-specialty">Data Analytics · Business Intelligence · AI Automation</span>
      </footer>
    </section>
  )
}

function ToolLogo({ tone }: { tone: string }) {
  const logos: Record<string, React.ReactNode> = {
    python: <svg viewBox="0 0 32 32"><path fill="#3776ab" d="M15.8 2.7c-6.4 0-6.1 2.8-6.1 2.8v4.1h6.2v1.3H7.3S2.8 10.4 2.8 16.8s3.9 6.2 3.9 6.2h2.3v-3.3s-.1-4 4-4h6.8s3.8.1 3.8-3.7V6.2s.6-3.5-7.8-3.5Zm-3.4 2.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/><path fill="#ffd343" d="M16.2 29.3c6.4 0 6.1-2.8 6.1-2.8v-4.1h-6.2v-1.3h8.6s4.5.5 4.5-5.9-3.9-6.2-3.9-6.2H23v3.3s.1 4-4 4h-6.8s-3.8-.1-3.8 3.7v5.8s-.6 3.5 7.8 3.5Zm3.4-2.1a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z"/></svg>,
    sql: <svg viewBox="0 0 32 36"><ellipse cx="16" cy="7" rx="12" ry="5" fill="#31c5f4"/><path fill="#087ab8" d="M4 7v21c0 2.8 5.4 5 12 5s12-2.2 12-5V7c0 2.8-5.4 5-12 5S4 9.8 4 7Z"/><path fill="#25a8df" d="M4 14c0 2.8 5.4 5 12 5s12-2.2 12-5v5c0 2.8-5.4 5-12 5S4 21.8 4 19Z"/><text x="16" y="21" fill="white" fontSize="8" fontWeight="700" textAnchor="middle">SQL</text></svg>,
    powerbi: <svg viewBox="0 0 32 32"><path fill="#f2c811" d="M18 4h8a2 2 0 0 1 2 2v22h-10z"/><path fill="#e6aa00" d="M10 11h8v17h-8z"/><path fill="#f8df72" d="M3 18h7v10H3z"/></svg>,
    looker: <svg viewBox="0 0 32 32" fill="none" stroke="#4285f4" strokeWidth="2.3" strokeLinecap="round"><path d="M15 7c-4 0-7 3-7 7 0 3 1.6 4.6 3.4 6.1A6 6 0 1 0 21 20c1.7-1.7 3-3.6 3-6.4 0-3.8-2.5-6.6-6-6.6"/><circle cx="17" cy="4" r="2" fill="#4285f4" stroke="none"/><path d="M11 25h10"/></svg>,
    excel: <svg viewBox="0 0 32 32"><path fill="#21a366" d="M17 3h10a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H17z"/><path fill="#107c41" d="M4 7h16v18H4z"/><path fill="#185c37" d="M4 7h6v18H4z"/><path fill="white" d="m7 11 2 3 2-3h2l-3 5 3 5h-2l-2-3-2 3H5l3-5-3-5z"/></svg>,
    sheets: <svg viewBox="0 0 32 32"><path fill="#0f9d58" d="M7 3h12l8 8v17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path fill="#87d3a5" d="M19 3v8h8z"/><path fill="none" stroke="white" strokeWidth="1.6" d="M10 15h13M10 19h13M10 23h13M14 14v11M19 14v11"/></svg>,
    n8n: <svg viewBox="0 0 36 24" fill="none" stroke="#f45b72" strokeWidth="1.5"><path d="M6 12h9l6-7h8M15 12l6 7h8"/><circle cx="5" cy="12" r="3" fill="white"/><circle cx="15" cy="12" r="3" fill="white"/><circle cx="30" cy="5" r="3" fill="white"/><circle cx="30" cy="19" r="3" fill="white"/></svg>,
    rstudio: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#75aadb"/><text x="16" y="23" fill="white" fontFamily="Georgia,serif" fontSize="22" textAnchor="middle">R</text></svg>,
    'apps-script': <svg viewBox="0 0 32 32"><path fill="#4285f4" d="M15 3h5l10 18-3 5h-5l-5-9-5 9H6l-3-5z"/><path fill="#a1c2fa" d="m15 3 5 0 10 18-3 5h-5l-5-9z"/><path fill="#669df6" d="m3 21 3 5h11l3-5z"/></svg>,
  }
  return logos[tone] ?? null
}

export function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('beranda')
  const [isScrolled, setIsScrolled] = useState(false)
  const closeProject = useCallback(() => setSelectedProject(null), [])

  useEffect(() => {
    const sectionIds = [...navigation.map(({ href }) => href.slice(1)), 'kontak']

    const updateScrollState = () => {
      const activePosition = window.scrollY + Math.min(window.innerHeight * 0.32, 240) + 72
      const sectionsByPosition = sectionIds
        .flatMap((sectionId) => {
          const section = document.getElementById(sectionId)
          return section ? [{ id: sectionId, top: section.getBoundingClientRect().top + window.scrollY }] : []
        })
        .sort((first, second) => first.top - second.top)
      let currentSection = 'beranda'

      for (const section of sectionsByPosition) {
        if (section.top <= activePosition) currentSection = section.id
      }

      setActiveSection(currentSection)
      setIsScrolled(window.scrollY > 12)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <main>
      <SiteHeader menuOpen={menuOpen} activeSection={activeSection} isScrolled={isScrolled} setMenuOpen={setMenuOpen} setActiveSection={setActiveSection} />
      <HeroSection />
      <ProfileSections />
      <ProjectsSection selectedProject={selectedProject} setSelectedProject={setSelectedProject} onCloseProject={closeProject} />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  )
}

export default PortfolioHome
