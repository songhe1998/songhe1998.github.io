import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Songhe Wang — Computer Vision Researcher",
  description:
    "Songhe Wang is a Ph.D. researcher at Penn State working on physics-grounded 3D vision, adversarial machine learning, and multi-agent systems.",
};

const focusAreas = [
  "Physics-grounded 3D vision",
  "Adversarial machine learning",
  "Large language models",
  "Multi-agent systems",
];

const researchTracks = [
  {
    index: "01",
    period: "2024 — Present",
    title: "Physical 3D scene understanding",
    description:
      "Connecting 3D representations to the surfaces, materials, contact, and deformation they are meant to model — from Gaussian splats to physically plausible object placement.",
    tags: ["3D Gaussian Splatting", "Physics simulation", "Geometry"],
  },
  {
    index: "02",
    period: "2023 — 2024",
    title: "Robust and secure learning",
    description:
      "Studying backdoor risks beyond static images, including temporally distributed attacks on video recognition and threats inherited from compromised foundation models.",
    tags: ["Adversarial ML", "Video", "Federated learning"],
  },
  {
    index: "03",
    period: "2021 — 2023",
    title: "Vision, language, and action",
    description:
      "Building systems for sign language recognition and translation across video, skeleton, and language modalities, with a focus on representation and reliability.",
    tags: ["Sign language", "Vision-language", "Action recognition"],
  },
  {
    index: "04",
    period: "2018 — 2019",
    title: "Semantic retrieval at scale",
    description:
      "Designing hierarchical retrieval pipelines that improved machine reading on FEVER and HotpotQA while clarifying how retrieval shapes downstream comprehension.",
    tags: ["Information retrieval", "NLP", "Machine reading"],
  },
];

const publications = [
  {
    year: "2026",
    venue: "ECCV",
    title: "When 3D Gaussian Splatting Recovers Real Surfaces",
    authors: "Songhe Wang, David Jonathan Miller",
    topic: "3D Vision",
  },
  {
    year: "2026",
    venue: "NeurIPS",
    title: "Deformable Contact-Aware 3D Object Placement",
    authors: "Songhe Wang, David Jonathan Miller",
    topic: "Physical AI",
  },
  {
    year: "2024",
    venue: "AAAI",
    title: "Temporal-Distributed Backdoor Attack Against Video Based Action Recognition",
    authors: "Xi Li, Songhe Wang, Ruiquan Huang, Mahanth Gowda, George Kesidis",
    topic: "AI Security",
    href: "https://doi.org/10.1609/aaai.v38i4.28104",
  },
  {
    year: "2023",
    venue: "FL@FM · NeurIPS",
    title: "Backdoor Threats from Compromised Foundation Models to Federated Learning",
    authors: "Xi Li, Songhe Wang, Chen Wu, Hao Zhou, Jiaqi Wang",
    topic: "Federated Learning",
    href: "https://arxiv.org/abs/2311.00144",
  },
  {
    year: "2021",
    venue: "ACM MM",
    title: "E. Armor: A Benchmark for Meta-evaluation of Artificial Music",
    authors: "Songhe Wang, Zheng Bao, Jintong E.",
    topic: "Generative AI",
  },
  {
    year: "2021",
    venue: "CICTP",
    title: "A Spatial-Temporal Analysis of COVID-19's Impact on Human Mobility",
    authors: "Songhe Wang, Kangda Wei, Lei Lin, Weizi Li",
    topic: "Data Science",
    href: "https://ascelibrary.org/doi/book/10.1061/9780784483565",
  },
  {
    year: "2019",
    venue: "EMNLP-IJCNLP",
    title: "Revealing the Importance of Semantic Retrieval for Machine Reading at Scale",
    authors: "Yixin Nie, Songhe Wang, Mohit Bansal",
    topic: "NLP",
    href: "https://aclanthology.org/D19-1258/",
  },
];

const experience = [
  {
    period: "Sep 2024 — Present",
    role: "Research Scientist",
    company: "BoostDraft",
    location: "Remote",
    detail:
      "Building LLM-powered multi-agent systems for legal data extraction, schema inference, document alignment, clustering, and retrieval.",
  },
  {
    period: "May — Aug 2024",
    role: "Research Scientist Engineer",
    company: "Intuit",
    location: "California",
    detail:
      "Fine-tuned and deployed LLMs and vision-language models for structured understanding of financial documents.",
  },
  {
    period: "May — Dec 2020",
    role: "Research Assistant",
    company: "Yale University",
    location: "Remote",
    detail:
      "Investigated cross-domain adaptation for text-to-SQL semantic parsers and systematically diagnosed barriers to generalization.",
  },
];

const recognitions = [
  "Professional Go player and Chinese National Second-Level Athlete",
  "Putnam Mathematics Competition — top 1% nationwide",
  "Carolina Data Challenge — 1st place",
  "Virginia Tech Math Competition — top 5% nationwide",
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Songhe Wang, home">
          SW<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a className="nav-cv" href="/Songhe_Wang_CV.pdf">
            CV <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Ph.D. researcher · Penn State</p>
          <h1>
            Songhe Wang
            <span>builds vision systems that understand the physical world.</span>
          </h1>
          <p className="hero-intro">
            I work across computer vision and machine learning, with a current
            focus on physically grounded 3D representations and intelligent
            systems that are robust, useful, and real.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:sxw5765@psu.edu">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="/Songhe_Wang_CV.pdf">
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="micro-stats" aria-label="Profile highlights">
            <div>
              <strong>7</strong>
              <span>Selected publications</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Research directions</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Top-tier papers in 2026</span>
            </div>
          </div>
        </div>

        <aside className="research-board" aria-label="Research focus">
          <div className="board-topline">
            <span>Current coordinates</span>
            <span>40.7934° N · 77.8600° W</span>
          </div>
          <div className="board-graphic" aria-hidden="true">
            <span className="axis axis-x">x</span>
            <span className="axis axis-y">y</span>
            <span className="axis axis-z">z</span>
            <span className="wire-cube" />
            <span className="orbital orbital-one" />
            <span className="orbital orbital-two" />
          </div>
          <p className="board-index">01—04</p>
          <div className="focus-list">
            {focusAreas.map((area, index) => (
              <div className="focus-row" key={area}>
                <span>0{index + 1}</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
          <div className="board-footer">
            <span className="signal" aria-hidden="true" />
            Exploring where geometry meets intelligence
          </div>
        </aside>
      </section>

      <section className="section research-section shell" id="research">
        <div className="section-heading sticky-heading">
          <p className="section-number">01 / Research</p>
          <h2>Questions with a sense of gravity.</h2>
          <p>
            Theory-driven ideas, tested against the complexity of the real
            world.
          </p>
        </div>
        <div className="research-list">
          {researchTracks.map((track) => (
            <article className="research-item" key={track.index}>
              <div className="research-meta">
                <span>{track.index}</span>
                <span>{track.period}</span>
              </div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <div className="tag-row">
                {track.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publications-section" id="publications">
        <div className="shell">
          <div className="section-heading publications-heading">
            <p className="section-number">02 / Publications</p>
            <h2>Selected publications</h2>
            <p>
              Work spanning 3D vision, trustworthy machine learning, retrieval,
              and evaluation.
            </p>
          </div>
          <div className="publication-list">
            {publications.map((paper, index) => (
              <article className="publication-row" key={paper.title}>
                <div className="pub-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="pub-main">
                  <div className="pub-labels">
                    <span className="venue">{paper.venue} · {paper.year}</span>
                    <span>{paper.topic}</span>
                  </div>
                  <h3>{paper.title}</h3>
                  <p>{paper.authors}</p>
                </div>
                <div className="pub-action">
                  {paper.href ? (
                    <a href={paper.href} target="_blank" rel="noreferrer" aria-label={`Open ${paper.title}`}>
                      Paper <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span>In CV</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section shell" id="experience">
        <div className="section-heading sticky-heading">
          <p className="section-number">03 / Experience</p>
          <h2>Research, shipped.</h2>
          <p>
            Applying foundational models to difficult documents and real
            production constraints.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <p className="timeline-date">{item.period}</p>
              <div>
                <p className="timeline-kicker">{item.location}</p>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <div className="shell profile-grid">
          <div className="profile-intro">
            <p className="section-number">04 / Beyond the lab</p>
            <h2>Computer scientist. Mathematician. Go player.</h2>
          </div>
          <div className="profile-columns">
            <div className="profile-block">
              <p className="profile-label">Education</p>
              <div className="education-item">
                <span>2021 — Present</span>
                <h3>The Pennsylvania State University</h3>
                <p>Ph.D. in Computer Science</p>
                <small>Ranked 1st in the Spring 2023 Ph.D. Qualifying Exam</small>
              </div>
              <div className="education-item">
                <span>2017 — 2021</span>
                <h3>University of North Carolina at Chapel Hill</h3>
                <p>B.S. in Computer Science & Mathematics</p>
                <small>Dean&apos;s List</small>
              </div>
            </div>
            <div className="profile-block">
              <p className="profile-label">Recognition</p>
              <ul className="recognition-list">
                {recognitions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="profile-bottom">
            <div>
              <p className="profile-label">Teaching</p>
              <p>TA · Vision and Language · Spring 2023</p>
              <p>TA · Deep Learning for Computer Vision · Fall 2022</p>
            </div>
            <div>
              <p className="profile-label">Service</p>
              <p>Reviewer · AAAI · 2022—2023</p>
              <p>Reviewer · EMNLP · 2020</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <p className="footer-kicker">Open to ambitious research conversations.</p>
          <h2>Let&apos;s make the physical world computable.</h2>
          <div className="footer-links">
            <a href="mailto:sxw5765@psu.edu">sxw5765@psu.edu ↗</a>
            <a href="https://github.com/songhe1998" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="/Songhe_Wang_CV.pdf">Curriculum vitae ↓</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Songhe Wang</span>
          <span>University Park, Pennsylvania</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
