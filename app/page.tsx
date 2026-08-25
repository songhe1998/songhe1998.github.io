import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Songhe Wang | Penn State University",
  description:
    "Academic homepage of Songhe Wang, a Computer Science Ph.D. candidate at Penn State University.",
};

const news = [
  {
    date: "Aug. 2026",
    text: "Two papers on 3D Gaussian Splatting and deformable 3D object placement will appear at ECCV 2026 and NeurIPS 2026.",
  },
  {
    date: "Sept. 2024",
    text: "Joined BoostDraft as a Research Scientist, working on LLM-powered systems for legal documents.",
  },
  {
    date: "May 2024",
    text: "Joined Intuit as a Research Scientist Engineer intern to train and deploy LLMs and VLMs.",
  },
  {
    date: "Mar. 2024",
    text: "Our work on temporal-distributed backdoor attacks for video action recognition was published at AAAI 2024.",
  },
  {
    date: "Dec. 2023",
    text: "Our work on backdoor threats from compromised foundation models appeared at FL@FM, NeurIPS 2023.",
  },
  {
    date: "Aug. 2021",
    text: "Started my Ph.D. in Computer Science at Penn State University.",
  },
];

const publications = [
  {
    venue: "ECCV",
    year: "2026",
    title: "When 3D Gaussian Splatting Recovers Real Surfaces",
    authors: ["Songhe Wang", "David Jonathan Miller"],
    image: "/pub-3dgs.png",
    imagePosition: "center",
    links: [],
  },
  {
    venue: "NeurIPS",
    year: "2026",
    title: "Deformable Contact-Aware 3D Object Placement",
    authors: ["Songhe Wang", "David Jonathan Miller"],
    image: "/pub-dcap.png",
    imagePosition: "center",
    links: [],
  },
  {
    venue: "AAAI",
    year: "2024",
    title: "Temporal-Distributed Backdoor Attack Against Video Based Action Recognition",
    authors: ["Xi Li", "Songhe Wang", "Ruiquan Huang", "Mahanth Gowda", "George Kesidis"],
    links: [
      { label: "Paper", href: "https://ojs.aaai.org/index.php/AAAI/article/view/28104" },
      { label: "arXiv", href: "https://arxiv.org/abs/2308.11070" },
    ],
  },
  {
    venue: "NeurIPSW",
    year: "2023",
    title: "Backdoor Threats from Compromised Foundation Models to Federated Learning",
    authors: ["Xi Li", "Songhe Wang", "Chen Wu", "Hao Zhou", "Jiaqi Wang"],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2311.00144" },
      { label: "Workshop", href: "https://neurips.cc/virtual/2023/79028" },
      { label: "Code", href: "https://github.com/lixi1994/backdoor_FM_FL" },
    ],
  },
  {
    venue: "ACM MM",
    year: "2021",
    title: "E. Armor: A Benchmark for Meta-evaluation of Artificial Music",
    authors: ["Songhe Wang", "Zheng Bao", "Jintong E."],
    links: [],
  },
  {
    venue: "CICTP",
    year: "2021",
    title: "A Spatial-Temporal Analysis of COVID-19's Impact on Human Mobility: The Case of the United States",
    authors: ["Songhe Wang", "Kangda Wei", "Lei Lin", "Weizi Li"],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2010.03707" },
      { label: "Proceedings", href: "https://ascelibrary.org/doi/book/10.1061/9780784483565" },
    ],
  },
  {
    venue: "EMNLP",
    year: "2019",
    title: "Revealing the Importance of Semantic Retrieval for Machine Reading at Scale",
    authors: ["Yixin Nie", "Songhe Wang", "Mohit Bansal"],
    links: [
      { label: "Paper", href: "https://aclanthology.org/D19-1258/" },
      { label: "Code", href: "https://github.com/easonnie/semanticRetrievalMRS" },
    ],
  },
];

const experience = [
  {
    role: "Research Scientist",
    organization: "BoostDraft",
    date: "Sept. 2024 — Present",
    detail:
      "LLM-powered multi-agent orchestration, legal document alignment, clustering, and term retrieval.",
  },
  {
    role: "Research Scientist Engineer",
    organization: "Intuit",
    date: "May 2024 — Aug. 2024",
    detail:
      "Training and deployment of LLMs and vision-language models for structured financial documents.",
  },
  {
    role: "Research Assistant",
    organization: "Yale University",
    date: "May 2020 — Dec. 2020",
    detail: "Cross-domain adaptation for text-to-SQL semantic parsers.",
  },
];

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((author, index) => (
        <span key={author}>
          {author === "Songhe Wang" ? <strong>{author}</strong> : author}
          {index < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <aside className="profile-sidebar">
        <div className="avatar">
          <img src="/profile.jpg" alt="Songhe Wang" />
        </div>
        <h1>Songhe Wang</h1>
        <p className="role">Ph.D. Candidate in Computer Science</p>
        <a className="affiliation" href="https://www.psu.edu/" target="_blank" rel="noreferrer">
          The Pennsylvania State University
        </a>
        <a className="email" href="mailto:sxw5765@psu.edu">
          sxw5765 (at) psu.edu
        </a>
        <div className="social-links" aria-label="Academic and social profiles">
          <a href="https://scholar.google.com/citations?hl=en&user=KbJERYoAAAAJ" target="_blank" rel="noreferrer">Scholar</a>
          <a href="/Songhe_Wang_CV.pdf">CV</a>
          <a href="https://github.com/songhew" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/songhe-wang-a6b3b9159" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="location">University Park, PA</p>
      </aside>

      <main className="academic-content">
        <section>
          <h2>About Me</h2>
          <p>
            I am a Computer Science Ph.D. candidate at <a href="https://www.psu.edu/" target="_blank" rel="noreferrer">Penn State University</a>.
            My research interests lie in <strong>computer vision</strong>, <strong>adversarial machine learning</strong>,
            <strong> large language models</strong>, and <strong>multi-agent systems</strong>. My recent work focuses on
            physics-grounded 3D vision: understanding when 3D Gaussian Splatting represents real surfaces and enabling
            deformable, contact-aware object placement in real scenes.
          </p>
          <p>
            Previously, I received my B.S. in Computer Science and Mathematics from the
            <a href="https://www.unc.edu/" target="_blank" rel="noreferrer"> University of North Carolina at Chapel Hill</a>,
            where I worked on semantic retrieval for machine reading. I have also worked on video action recognition,
            sign language understanding, trustworthy federated learning, and evaluation of AI-generated music.
          </p>
          <p>
            Alongside academic research, I build applied LLM systems at <strong>BoostDraft</strong>. Outside the lab,
            I am a professional Go player and a Chinese National Second-Level Athlete.
          </p>
        </section>

        <section>
          <h2>News</h2>
          <ul className="news-list">
            {news.slice(0, 5).map((item) => (
              <li key={item.date}>
                <strong>[{item.date}]</strong> {item.text}
              </li>
            ))}
          </ul>
          <details className="more-news">
            <summary>More</summary>
            <ul className="news-list">
              {news.slice(5).map((item) => (
                <li key={item.date}>
                  <strong>[{item.date}]</strong> {item.text}
                </li>
              ))}
            </ul>
          </details>
        </section>

        <section>
          <h2>Publications</h2>
          <p className="section-note">Selected publications. My name is shown in bold.</p>
          <div className="publication-list">
            {publications.map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="publication-visual">
                  {paper.image ? (
                    <img
                      src={paper.image}
                      alt={`Thumbnail for ${paper.title}`}
                      style={{ objectPosition: paper.imagePosition }}
                    />
                  ) : (
                    <div className="venue-placeholder" aria-hidden="true">
                      <span>{paper.venue}</span>
                      <small>{paper.year}</small>
                    </div>
                  )}
                  <span className="venue-badge">{paper.venue}</span>
                </div>
                <div className="publication-details">
                  <h3>{paper.title}</h3>
                  <p className="authors"><AuthorList authors={paper.authors} /></p>
                  <p className="publication-venue"><em>{paper.venue}, {paper.year}.</em></p>
                  {paper.links.length > 0 ? (
                    <div className="paper-links">
                      {paper.links.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                      ))}
                    </div>
                  ) : (
                    <p className="paper-status">Details available in CV</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Research Experience</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={`${item.organization}-${item.date}`}>
                <div>
                  <h3>{item.role}, <span>{item.organization}</span></h3>
                  <p>{item.detail}</p>
                </div>
                <time>{item.date}</time>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Education &amp; Honors</h2>
          <ul>
            <li><strong>Ph.D. in Computer Science</strong>, Penn State University, 2021 — Present. Ranked 1st in the Spring 2023 Ph.D. Qualifying Exam.</li>
            <li><strong>B.S. in Computer Science &amp; Mathematics</strong>, UNC Chapel Hill, 2017 — 2021. Dean&apos;s List.</li>
            <li>Putnam Mathematics Competition — top 1% nationwide.</li>
            <li>Carolina Data Challenge — 1st place; Virginia Tech Math Competition — top 5% nationwide.</li>
          </ul>
        </section>

        <section>
          <h2>Teaching &amp; Service</h2>
          <ul>
            <li>Teaching Assistant, CSE 597: Vision and Language, Spring 2023.</li>
            <li>Teaching Assistant, CMPSC 497: Deep Learning for Computer Vision, Fall 2022.</li>
            <li>Reviewer: AAAI (2022 — 2023), EMNLP (2020), and the Workshop on Interactive and Executable Semantic Parsing.</li>
          </ul>
        </section>

        <footer>
          <p>Last updated August 2026 · © Songhe Wang</p>
        </footer>
      </main>
    </div>
  );
}
