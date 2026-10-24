/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Share2,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin,
  Zap,
  X,
  ArrowUpRight,
  Code,
  Microscope,
  Send,
  Building2,
  Award,
  Globe2,
  FileText,
  CheckCircle2,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  workType: string;
  summary: string;
  highlights: string[];
  skills: string[];
  collaborators?: string;
  badgeColor: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  highlight: string;
  details: string[];
  honors: string[];
}

interface SpotlightPost {
  id: string;
  title: string;
  theme: string;
  date: string;
  excerpt: string;
  metrics: { impressions: string; reactions: string };
  tags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: 'jnj',
    role: 'Research And Development Engineer',
    company: 'Johnson & Johnson',
    period: 'Aug 2026 — Present',
    duration: 'Current Role',
    location: 'Groningen, Netherlands',
    workType: 'On-site · Full-time',
    summary: 'Driving innovative R&D in intraocular lenses (IOL) for cataract patients, combining biomedical design control with modern engineering precision.',
    highlights: [
      'Spearheading R&D engineering workflows for next-generation IOL lenses',
      'Implementing strict Medical Device Design Control standards and regulatory frameworks',
      'Leveraging AI engineering & computational analysis to enhance patient visual outcomes'
    ],
    skills: ['Medical Devices', 'Design Control', 'R&D Engineering', 'Precision Optics', 'Biomedical Innovation'],
    badgeColor: 'bg-rose-50 border-rose-200 text-rose-700'
  },
  {
    id: 'envalior',
    role: 'AI Engineer',
    company: 'Envalior (DSM & Lanxess Joint Venture)',
    period: 'Jul 2025 — Aug 2026',
    duration: '1 yr 2 mos',
    location: 'Emmen, Drenthe, Netherlands',
    workType: 'On-site · Full-time',
    summary: 'Started as a student project worker and advanced to become the company’s first full-time AI Engineer, delivering AI and digitalization solutions for high-performance materials manufacturing.',
    highlights: [
      'Collaborated closely with consultants from McKinsey & Company, Microsoft, and Boston Consulting Group (BCG) to review RFPs and evaluate high-impact business cases',
      'Built functional POCs and digital process improvements applying lean manufacturing principles and root cause analysis',
      'Partnered cross-functionally across logistics, operations, and multi-site manufacturing stakeholders to drive measurable cost savings',
      'Championed organizational change: proving that technical excellence thrives when cross-departmental teams are unified'
    ],
    skills: ['Machine Learning', 'Process Digitalization', 'Lean Manufacturing', 'Root Cause Analysis', 'Microsoft Power BI', 'Python', 'Consulting Collaboration'],
    collaborators: 'Mentored by Dennis Lubbers; collaborated with Sander Oosterveld, Kay Boonstra, and Tom Grouwe',
    badgeColor: 'bg-indigo-50 border-indigo-200 text-indigo-700'
  },
  {
    id: 'aistation',
    role: 'AI Software Engineer (Internship)',
    company: 'Ai Station (hulpstation.nl)',
    period: 'Feb 2025 — Jul 2025',
    duration: '6 mos',
    location: 'Rotterdam, South Holland, Netherlands',
    workType: 'Remote · Internship',
    summary: 'Engineered AI product automations and backend pipelines for AI-focused software products.',
    highlights: [
      'Architected API integrations and end-to-end automated workflows using Python and n8n',
      'Optimized backend AI processing pipelines, reducing latency and operational friction',
      'Collaborated with development leads to implement scalable workflow management systems'
    ],
    skills: ['Python', 'n8n Workflow Automation', 'API Development', 'Workflow Management', 'Backend Optimization'],
    badgeColor: 'bg-amber-50 border-amber-200 text-amber-700'
  }
];

const EDUCATIONS: Education[] = [
  {
    id: 'rug',
    degree: 'BSc in Artificial Intelligence',
    institution: 'University of Groningen',
    location: 'Groningen, Netherlands',
    highlight: 'Comprehensive multidisciplinary AI degree combining computer science, mathematics, psychology, robotics, linguistics, and neuroscience.',
    details: [
      'Specialized in machine learning algorithms, artificial neural networks, object-oriented programming (OOP), and robot operating systems (ROS)',
      'Participated in hackathons, academic research projects, and university student leadership'
    ],
    honors: [
      'Awarded NL Scholarship from DUO & University of Groningen for academic excellence',
      'Selected as University ECHO Representative advocating diversity, inclusion, and equality'
    ]
  },
  {
    id: 'birmingham',
    degree: 'Computer Science & Software Engineering (Exchange)',
    institution: 'University of Birmingham',
    location: 'Birmingham, United Kingdom',
    highlight: 'International exchange program focusing on software engineering alongside advanced biomedical science coursework.',
    details: [
      'Completed specialized research under Prof. Ruth Roberts and Prof. Mike Tomlinson on Siglec-10 modulation as a therapeutic target for Multiple Sclerosis (MS)',
      'Explored application of AI-powered tools for molecular modeling, virtual screening, and accelerating drug discovery'
    ],
    honors: [
      'Selected for Drug Discovery & Deployment Workshop'
    ]
  },
  {
    id: 'fontys',
    degree: 'Foundations in Information Technology & AI',
    institution: 'Fontys ICT',
    location: 'Eindhoven, Netherlands',
    highlight: 'Where the passion for AI took root. Built core foundations in IT, programming logic, and computational theory.',
    details: [
      'Hands-on software development projects in Eindhoven (“Eindhoven de gekste!”)'
    ],
    honors: ['Foundation Excellence']
  }
];

const SPOTLIGHT_POSTS: SpotlightPost[] = [
  {
    id: 'p1',
    title: 'Reflecting on my AI Engineering journey at Envalior',
    theme: 'Manufacturing AI & Lean Operations',
    date: '2 months ago',
    excerpt: 'What started as a summer student project became my first full-time AI engineering role. Working alongside McKinsey, BCG, and Microsoft taught me that technical excellence only matters when you can align people and drive real organizational change.',
    metrics: { impressions: '4,636', reactions: '86' },
    tags: ['AI in Industry', 'Lean Manufacturing', 'Consulting', 'Career Milestone']
  },
  {
    id: 'p2',
    title: 'Officially graduated: BSc in Artificial Intelligence from University of Groningen!',
    theme: 'Academic Achievement',
    date: '1 year ago',
    excerpt: 'From Fontys Eindhoven to the University of Groningen and study abroad in the UK—learning AI algorithms, robotics, linguistics, and neuroscience with an NL Scholarship and serving as ECHO Diversity Representative.',
    metrics: { impressions: '4,083', reactions: '96' },
    tags: ['University of Groningen', 'AI Graduate', 'NL Scholarship', 'ECHO Diversity']
  },
  {
    id: 'p3',
    title: 'Siglec-10 Modulation & AI Drug Discovery for Multiple Sclerosis (MS)',
    theme: 'Biomedical AI Research',
    date: '1 year ago',
    excerpt: 'Research project at University of Birmingham exploring Siglec-10 agonist antibodies to suppress neuroinflammation in MS. Demonstrating how AI tools for virtual screening can accelerate complex therapeutic development.',
    metrics: { impressions: '2,921', reactions: '15' },
    tags: ['AI in Medicine', 'Drug Discovery', 'Biomedical Science', 'University of Birmingham']
  },
  {
    id: 'p4',
    title: 'Top 30 Finalist at Jantina Tammes AI & Digital Society Speed Date',
    theme: 'AI Innovation Challenge',
    date: '1 year ago',
    excerpt: 'Selected in the top 30 out of 100+ participants in the UG Impact Challenge, discussing AI innovation with industry leaders from Johnson & Johnson, Innokite, and Kisuma Chemicals.',
    metrics: { impressions: '1,886', reactions: '18' },
    tags: ['Multidisciplinary Collaboration', 'Digital Society', 'J&J Speed Date']
  }
];

export default function App() {
  const [expandedExp, setExpandedExp] = useState<string | null>('jnj');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<'all' | 'ai' | 'engineering' | 'biomedical'>('all');
  const [contactMessage, setContactMessage] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactSent, setContactSent] = useState(false);
  const [customAvatarUrl, setCustomAvatarUrl] = useState<string>('');
  const [isAvatarEditorOpen, setIsAvatarEditorOpen] = useState(false);

  // Default avatar generated for Ash
  const defaultAvatar = '/src/assets/images/ash_profile_avatar_1792879359813.jpg';
  const currentAvatar = customAvatarUrl.trim() || defaultAvatar;

  const publicUrl = 'https://ais-pre-d3smyxcrfnp5z6ap2uqxpj-705837886529.europe-west1.run.app';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactMessage('');
      setContactEmail('');
      setContactName('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans antialiased selection:bg-amber-200 selection:text-slate-900 flex flex-col">
      {/* ========================================================
          TOP NAVIGATION BAR (Figma-inspired, crisp & playful)
          ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Zone 1: Wordmark / Identity */}
          <a href="#about" className="flex items-center gap-3 font-bold text-base tracking-tight text-slate-900 whitespace-nowrap shrink-0 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-stone-300 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src={currentAvatar}
                alt="Ash Huang"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm leading-tight flex items-center gap-1.5">
                <span>Ash Huang</span>
                <span className="text-xs font-normal text-stone-500 hidden sm:inline">(He/Him)</span>
              </span>
              <span className="text-[11px] text-amber-700 font-medium">R&amp;D Engineer @ JnJ</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-stone-600 uppercase tracking-wider">
            <a href="#about" className="hover:text-stone-950 transition-colors whitespace-nowrap">About</a>
            <a href="#experience" className="hover:text-stone-950 transition-colors whitespace-nowrap">Experience</a>
            <a href="#education" className="hover:text-stone-950 transition-colors whitespace-nowrap">Education</a>
            <a href="#skills" className="hover:text-stone-950 transition-colors whitespace-nowrap">Skills &amp; AI</a>
            <a href="#stories" className="hover:text-stone-950 transition-colors whitespace-nowrap">Stories &amp; Posts</a>
            <a href="#contact" className="hover:text-stone-950 transition-colors whitespace-nowrap">Connect</a>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://www.linkedin.com/in/ash-huang/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
              title="Share Public URL"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share Profile</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ========================================================
            HERO SECTION: CREATIVE CV / LINKEDIN SPOTLIGHT
            ======================================================== */}
        <section id="about" className="py-14 sm:py-20 px-6 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            {/* Top Cultural Journey & Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>R&amp;D Engineer @ Johnson &amp; Johnson</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium">
                <span>🇺🇸 Born in US</span>
                <span className="text-stone-300">·</span>
                <span>🇹🇼 Raised in Taiwan</span>
                <span className="text-stone-300">·</span>
                <span>🇳🇱 In the Netherlands</span>
              </div>
            </div>

            {/* Profile Intro Layout with Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-8">
              {/* Profile Avatar Card */}
              <div className="relative group shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-stone-300 shadow-md bg-stone-100">
                  <img
                    src={currentAvatar}
                    alt="Ash Huang"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button
                  onClick={() => setIsAvatarEditorOpen(true)}
                  className="absolute -bottom-2 -right-2 bg-white text-stone-800 border border-stone-300 rounded-full p-1.5 shadow-sm hover:bg-stone-50 text-[11px] font-medium flex items-center gap-1"
                  title="Update or change profile picture"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline pr-1">Change Pic</span>
                </button>
              </div>

              {/* Title & Headline */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm mb-1.5">
                  <span>Hello! I&apos;m Ash Huang</span>
                  <span className="animate-wave inline-block text-base">👋</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-[1.12] mb-3">
                  R&amp;D Engineer @ JnJ
                </h1>
                <p className="text-base sm:text-lg font-medium text-stone-600 mb-2">
                  AI Engineering background · University of Groningen BSc Artificial Intelligence
                </p>
                <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-2">
                  <span>📍 Greater Groningen Area, Netherlands</span>
                  <span>·</span>
                  <span className="text-amber-700 font-semibold">500+ Connections on LinkedIn</span>
                </p>
              </div>
            </div>

            {/* Personal Manifesto & Story */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3.5 text-sm sm:text-base text-stone-700 leading-relaxed mb-8">
              <p>
                Born in the <strong>U.S. 🇺🇸</strong>, raised in the vibrant streets of <strong>Taiwan 🇹🇼</strong>, and now shaping my career in the <strong>Netherlands 🇳🇱</strong>, my journey has always lived at the convergence of diverse cultures, creative thinking, and technical innovation.
              </p>
              <p>
                From an early age, I was fascinated by how computational intelligence can transform real-world industries. AI isn&apos;t just code to me—it is the catalyst to solve complex problems, make healthcare and manufacturing smarter, and build tools that genuinely improve lives.
              </p>
              <p className="text-stone-900 font-medium">
                &ldquo;I thrive where creativity meets logic: whether designing precision medical devices (IOL cataract lenses), optimizing manufacturing pipelines with McKinsey &amp; BCG, or researching AI for novel therapeutics.&rdquo;
              </p>
            </div>

            {/* KPI Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs font-medium mb-8">
              <div className="p-2">
                <div className="text-xs text-stone-500 mb-0.5">Current Focus</div>
                <div className="text-sm font-bold text-stone-900">IOL Cataract Optics</div>
                <div className="text-[11px] text-rose-700 font-semibold mt-0.5">Johnson &amp; Johnson</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-stone-500 mb-0.5">Previous Industry</div>
                <div className="text-sm font-bold text-stone-900">AI Manufacturing</div>
                <div className="text-[11px] text-indigo-700 font-semibold mt-0.5">Envalior (DSM/Lanxess)</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-stone-500 mb-0.5">Academic Degree</div>
                <div className="text-sm font-bold text-stone-900">BSc in AI</div>
                <div className="text-[11px] text-amber-700 font-semibold mt-0.5">Uni of Groningen (NL Scholar)</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-stone-500 mb-0.5">Collaborations</div>
                <div className="text-sm font-bold text-stone-900">McKinsey, BCG, MSFT</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">Lean Manufacturing &amp; RFPs</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Explore Career Journey</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ash-huang/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>Open LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 text-stone-600 hover:text-stone-950 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Coffee className="w-4 h-4 text-amber-600" />
                <span>Coffee Chat / Connect</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================
            CAREER JOURNEY (The Real LinkedIn Roles in Interactive Form)
            ======================================================== */}
        <section id="experience" className="py-20 px-6 border-b border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Work History &amp; Roles</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
                  Career Experience
                </h2>
              </div>
              <div className="text-xs text-stone-500 font-medium">
                Click any position to reveal project details &amp; impact
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => {
                const isExpanded = expandedExp === exp.id;
                return (
                  <div
                    key={exp.id}
                    onClick={() => setExpandedExp(isExpanded ? null : exp.id)}
                    className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
                      isExpanded
                        ? 'bg-[#FDFCFB] border-stone-400 shadow-sm'
                        : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-stone-950">{exp.role}</h3>
                        <span className="text-stone-300">·</span>
                        <span className="font-extrabold text-stone-900">{exp.company}</span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-stone-500 shrink-0">
                        {exp.period} ({exp.duration})
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-3">
                      <span>📍 {exp.location}</span>
                      <span>·</span>
                      <span className={`px-2 py-0.5 rounded border text-[11px] font-semibold ${exp.badgeColor}`}>
                        {exp.workType}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-stone-700 mb-4 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Expandable achievements & collaborators */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-stone-200/80 space-y-4">
                        <div>
                          <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                            Key Responsibilities &amp; Achievements:
                          </div>
                          <ul className="space-y-2 text-xs text-stone-700">
                            {exp.highlights.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {exp.collaborators && (
                          <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-900">
                            <strong>Collaborators &amp; Team:</strong> {exp.collaborators}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.skills.map((s) => (
                            <span key={s} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-800">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-1 text-xs font-semibold text-stone-500 mt-3 pt-2">
                      <span>{isExpanded ? 'Collapse highlights' : 'View achievements & details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-stone-500" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            EDUCATION & GLOBAL EXCHANGES
            ======================================================== */}
        <section id="education" className="py-20 px-6 border-b border-stone-200 bg-[#FDFCFB]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 mb-3">
                Education &amp; International Research
              </h2>
              <p className="text-sm text-stone-600">
                Spanning the Netherlands and the UK, blending computer science, biomedical engineering, and leadership.
              </p>
            </div>

            <div className="space-y-6">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-stone-950">{edu.degree}</h3>
                    <span className="text-xs font-bold text-amber-800 font-mono">{edu.location}</span>
                  </div>
                  <div className="text-xs font-extrabold text-stone-700 mb-3">{edu.institution}</div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {edu.highlight}
                  </p>

                  <div className="space-y-2 mb-4">
                    {edu.details.map((d, i) => (
                      <div key={i} className="text-xs text-stone-700 flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  {edu.honors.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-stone-100">
                      {edu.honors.map((h, i) => (
                        <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                          <Award className="w-3.5 h-3.5 text-amber-700" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SKILLS & AI ENGINEERING TOOLBOX
            ======================================================== */}
        <section id="skills" className="py-20 px-6 border-b border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Technical Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 mb-3">
                Skills &amp; Engineering Disciplines
              </h2>
              <p className="text-sm text-stone-600">
                Practical expertise bridging artificial intelligence, software automation, and medical device design.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: 'all', label: 'All Capabilities' },
                { id: 'ai', label: 'AI & Neural Networks' },
                { id: 'engineering', label: 'Software & Automation' },
                { id: 'biomedical', label: 'Medical Devices & Optics' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeSkillCategory === tab.id
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'bg-[#FDFCFB] text-stone-600 hover:text-stone-950 border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Skill categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {(activeSkillCategory === 'all' || activeSkillCategory === 'ai') && (
                <div className="p-6 rounded-2xl bg-[#FDFCFB] border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                      <Code className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-stone-950 text-base mb-2">AI &amp; Machine Learning</h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      Building, training, and deploying intelligent models from research into production environments.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200">
                    {['Machine Learning', 'Artificial Neural Networks', 'Robot Operating System (ROS)', 'Python Modeling', 'Deep Learning', 'Computer Vision'].map((s) => (
                      <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(activeSkillCategory === 'all' || activeSkillCategory === 'engineering') && (
                <div className="p-6 rounded-2xl bg-[#FDFCFB] border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-stone-950 text-base mb-2">Software &amp; Digitalization</h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      Engineering automated workflows, backend APIs, and industrial process analytics.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200">
                    {['Object-Oriented Programming (OOP)', 'API Development', 'n8n Automation', 'Microsoft Power BI', 'Lean Manufacturing', 'Root Cause Analysis'].map((s) => (
                      <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(activeSkillCategory === 'all' || activeSkillCategory === 'biomedical') && (
                <div className="p-6 rounded-2xl bg-[#FDFCFB] border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-stone-950 text-base mb-2">Medical Devices &amp; Biotech</h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      Rigorous design control, precision optics for cataract patients, and AI drug discovery research.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200">
                    {['Medical Device R&D', 'Design Control', 'IOL Cataract Lenses', 'Drug Discovery AI', 'Molecular Modeling (Siglec-10)'].map((s) => (
                      <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================
            SPOTLIGHT STORIES & LINKEDIN POSTS
            ======================================================== */}
        <section id="stories" className="py-20 px-6 border-b border-stone-200 bg-[#FDFCFB]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Real Milestones</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
                  Reflections &amp; Achievements
                </h2>
              </div>
              <a
                href="https://www.linkedin.com/in/ash-huang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
              >
                <span>Follow on LinkedIn (950+ followers)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SPOTLIGHT_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                      <span className="text-amber-800 font-semibold">{post.theme}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-stone-950 mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-mono">
                      <span>{post.metrics.impressions} impressions</span>
                      <span>{post.metrics.reactions} reactions</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            CONTACT & COFFEE CHAT
            ======================================================== */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 mb-3">
              Let&apos;s Connect &amp; Brainstorm
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-8">
              Based in the Greater Groningen Area. Open to discussing AI in engineering, medical device innovation, or exploring new collaborations!
            </p>

            {contactSent ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Message received! Ash will connect with you soon.</span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3 text-left">
                <input
                  type="text"
                  placeholder="Your Name & Organization"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FDFCFB] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FDFCFB] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900"
                />
                <textarea
                  rows={4}
                  placeholder="Let's connect, discuss, brainstorm, or explore opportunities..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FDFCFB] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Send Message to Ash</span>
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-stone-200 text-xs font-semibold text-stone-600">
              <a
                href="https://www.linkedin.com/in/ash-huang/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-stone-950 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>linkedin.com/in/ash-huang</span>
              </a>
              <button
                onClick={() => setIsShareModalOpen(true)}
                className="flex items-center gap-1.5 hover:text-stone-950 transition-colors"
              >
                <Share2 className="w-4 h-4 text-stone-500" />
                <span>Share Public URL</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          FOOTER
          ======================================================== */}
      <footer className="py-8 px-6 border-t border-stone-200 bg-[#FDFCFB] text-xs text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>Ash Huang · R&amp;D Engineer @ JnJ | AI Engineering Background</div>
          <div className="flex items-center gap-4">
            <span>Greater Groningen Area, Netherlands</span>
            <span>·</span>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="text-amber-800 hover:underline font-semibold"
            >
              Share Live URL
            </button>
          </div>
        </div>
      </footer>

      {/* ========================================================
          MODAL: PROFILE PICTURE CHANGER
          ======================================================== */}
      {isAvatarEditorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
              <h3 className="text-sm font-bold text-stone-900">Custom Profile Picture</h3>
              <button
                onClick={() => setIsAvatarEditorOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              You can paste the direct image URL from your LinkedIn profile picture or any photo you host online to replace the avatar immediately:
            </p>

            <div className="space-y-3 mb-5">
              <input
                type="url"
                placeholder="https://example.com/my-linkedin-photo.jpg"
                value={customAvatarUrl}
                onChange={(e) => setCustomAvatarUrl(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-900"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCustomAvatarUrl('')}
                  className="text-[11px] text-stone-500 hover:text-stone-800 underline"
                >
                  Reset to Studio Portrait
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAvatarEditorOpen(false)}
                className="flex-1 py-2 bg-stone-900 text-white text-xs font-semibold rounded-xl hover:bg-stone-800 transition-colors"
              >
                Save Photo Preference
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: PUBLIC SHARING URL
          ======================================================== */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-stone-900">Your Live Public Portfolio URL</h3>
              </div>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-stone-600">
              {/* Note about 404 & activating the AI Studio URL */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 space-y-1.5">
                <div className="font-bold text-xs flex items-center gap-1.5 text-amber-900">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>How to activate your public AI Studio link:</span>
                </div>
                <p className="leading-relaxed text-[11px] text-amber-800">
                  If the link currently gives a <em>&quot;Page not found&quot;</em> error, look at the top right of the Google AI Studio screen and click the <strong>&quot;Share&quot;</strong> or <strong>&quot;Publish&quot;</strong> button. That publishes your app to the public web so anyone can open it!
                </p>
              </div>

              <div>
                <label className="block font-bold text-stone-800 mb-1">Your AI Studio Hosted URL:</label>
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-stone-800 truncate select-all">{publicUrl}</span>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold shrink-0 transition-colors"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Want a link with 'ash' in it? */}
              <div className="p-3.5 bg-indigo-50/70 border border-indigo-200/80 rounded-xl text-indigo-950 space-y-2">
                <div className="font-bold text-xs flex items-center gap-1.5 text-indigo-900">
                  <Globe2 className="w-4 h-4 text-indigo-600" />
                  <span>Want a custom URL with your name? (100% Free)</span>
                </div>
                <p className="text-[11px] text-indigo-900 leading-relaxed">
                  You can host this exact website with a custom link like:
                </p>
                <div className="space-y-1 font-mono text-[11px] text-indigo-800 bg-white/70 p-2 rounded border border-indigo-100">
                  <div>• https://ash-huang.vercel.app (Free on Vercel)</div>
                  <div>• https://ash-huang.github.io (Free on GitHub Pages)</div>
                  <div>• https://ashhuang.com (Custom personal domain)</div>
                </div>
                <p className="text-[11px] text-indigo-900">
                  To deploy to your own custom URL: push this repository to GitHub and connect it to Vercel or GitHub Pages in 60 seconds!
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsShareModalOpen(false)}
              className="mt-5 w-full py-2 bg-stone-900 text-white text-xs font-semibold rounded-xl hover:bg-stone-800 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
