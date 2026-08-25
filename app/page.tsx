import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Songhe Wang | Penn State University",
  description:
    "Academic homepage of Songhe Wang, a Computer Science Ph.D. candidate at Penn State University.",
};

const news = [
  {
    date: "June 2026",
    text: "Our paper “When 3D Gaussian Splatting Recovers Real Surfaces” was accepted to ECCV 2026.",
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
    venue: "AAAI",
    year: "2024",
    title: "Temporal-Distributed Backdoor Attack Against Video Based Action Recognition",
    authors: ["Xi Li", "Songhe Wang", "Ruiquan Huang", "Mahanth Gowda", "George Kesidis"],
    image: "/pub-aaai-figure1.png",
    imagePosition: "center",
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
    image: "/pub-fmfl.png",
    imagePosition: "center",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2311.00144" },
      { label: "Workshop", href: "https://neurips.cc/virtual/2023/79028" },
      { label: "Code", href: "https://github.com/lixi1994/backdoor_FM_FL" },
    ],
  },
  {
    venue: "ACM MM",
    year: "2021",
    title: "Armor: A Benchmark for Meta-evaluation of Artificial Music",
    authors: ["Songhe Wang", "Zheng Bao", "Jingtong E"],
    image: "/pub-armor.png",
    imagePosition: "center",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2108.12973" },
      { label: "ACM", href: "https://doi.org/10.1145/3474085.3475700" },
    ],
  },
  {
    venue: "CICTP",
    year: "2021",
    title: "A Spatial-Temporal Analysis of COVID-19's Impact on Human Mobility: The Case of the United States",
    authors: ["Songhe Wang", "Kangda Wei", "Lei Lin", "Weizi Li"],
    image: "/pub-mobility.png",
    imagePosition: "center",
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
    image: "/pub-semantic-retrieval.png",
    imagePosition: "center",
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
            My research interests lie in <strong>computer vision</strong> and <strong>MLLM</strong>. My recent work focuses on
            <strong> 3D vision</strong> and <strong>video generation</strong>.
          </p>
          <p>
            Previously, I worked on semantic retrieval and image captioning.
          </p>
        </section>

        <section>
          <h2>News</h2>
          <ul className="news-list">
            {news.map((item) => (
              <li key={item.date}>
                <strong>[{item.date}]</strong> {item.text}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Publications</h2>
          <p className="section-note">Selected publications. My name is shown in bold.</p>
          <div className="publication-list">
            {publications.map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="publication-visual">
                  <img
                    src={paper.image}
                    alt={`Figure from ${paper.title}`}
                    style={{ objectPosition: paper.imagePosition }}
                  />
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

        <footer>
          <p>Last updated August 2026 · © Songhe Wang</p>
        </footer>
      </main>
    </div>
  );
}
