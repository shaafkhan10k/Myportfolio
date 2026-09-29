// Post-build step: writes one static HTML file per route into dist/ so crawlers that
// don't run JavaScript still get a real <title>, meta tags, canonical, H1, headings,
// text and internal links. React replaces the static block when the app mounts.
//
//   /        -> dist/index.html
//   /about   -> dist/about.html   (served at /about via Vercel cleanUrls)
//   ...
//   404.html -> served by Vercel with a real 404 status for unknown URLs
import { readFileSync, writeFileSync } from 'node:fs';

const config = JSON.parse(readFileSync('seo.config.json', 'utf8'));
const template = readFileSync('dist/index.html', 'utf8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const NAV = `<nav aria-label="Main"><a href="/">Home</a> <a href="/about">About</a> <a href="/skills">Skills</a> <a href="/contact">Contact</a></nav>`;

const FOOTER = `<footer><p>Find me on <a href="https://linkedin.com/in/shaafkhan" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/shaafkhan10k" rel="noopener noreferrer">GitHub</a> and <a href="https://www.fiverr.com/shaafkhan" rel="noopener noreferrer">Fiverr</a>, or <a href="/resume.pdf">download my résumé</a>.</p><p>&copy; ${new Date().getFullYear()} Shaaf Khan. AI engineer and automation developer based in Pakistan.</p></footer>`;

// All copy below is taken from the visible site content (Hero, Services, Projects, About, Skills, Contact).
const BODY = {
  '/': `
<h1>Hi, I'm Shaaf Khan</h1>
<p>An AI engineer specializing in automation, agents, and computer vision. I'm a final-year Artificial Intelligence student and developer based in Pakistan, open to AI and automation roles in Islamabad and Rawalpindi as well as remote freelance projects.</p>
<p><a href="/resume.pdf">Download résumé</a> &middot; <a href="/contact">Contact me</a> &middot; <a href="/about">More about me</a></p>
<h2>A little about my work</h2>
<p>I work across AI, automation, computer vision, and web development. I start by understanding the problem, then build a small version that can be tested, and refine the parts that matter to the person using it. For AI projects, I also make the current limits clear.</p>
<h2>Areas I work in</h2>
<h3>AI &amp; RAG applications</h3>
<p>Plan and build retrieval and language-model features around a clear source of information and a defined user need, using tools such as LangChain, ChromaDB, and Hugging Face.</p>
<h3>Workflow automation</h3>
<p>Connect forms, review steps, and email actions with n8n, keeping people involved where a decision needs human judgment.</p>
<h3>Computer vision</h3>
<p>Build image-detection and analysis projects using YOLOv5 and OpenCV. Each project should explain its data source and limits.</p>
<h3>Web development</h3>
<p>Create web experiences with React or WordPress based on the project needs, including the Shakir Bridal Couture WordPress website.</p>
<h3>Game AI</h3>
<p>AI and reinforcement-learning systems in Unity, currently applied in my final-year project The Rise of Machines.</p>
<h2>Projects</h2>
<h3>Kidney Stone Detection</h3>
<p>A YOLOv5 computer-vision project including front-end and back-end work. <a href="https://github.com/anas-rajpout07/Kidney-Stone-Detection" rel="noopener noreferrer">View on GitHub</a>.</p>
<h3>The Rise of Machines (in progress)</h3>
<p>An AI-driven 3D survival game featuring AI/ML and reinforcement-learning enemy behavior.</p>
<h3>Shakir Bridal Couture</h3>
<p>A WordPress website build for a client. <a href="https://shakirbridalcouture.com/" rel="noopener noreferrer">Visit the website</a>.</p>
<h3>Cartoon Emotion Detection</h3>
<p>An emotion detection system built as a computer-vision project. <a href="https://github.com/shaafkhan10k/Cartoon_Emotion_Detection" rel="noopener noreferrer">View on GitHub</a>.</p>
<h3>HR Recruitment Automation</h3>
<p>An n8n workflow with Google Form input, shortlisting, email, and a human-in-the-loop voice agent. <a href="https://github.com/shaafkhan10k/N8N_Workflows/tree/main/HR%20Recruitment%20Workflow" rel="noopener noreferrer">View on GitHub</a>.</p>`,

  '/about': `
<h1>About Shaaf Khan</h1>
<p>I'm Shaaf, a final-year Artificial Intelligence student at NUML, expected to graduate in 2027. I work across AI, automation, computer vision, and web development. I'm based in Pakistan and open to roles in Islamabad and Rawalpindi, as well as remote freelance projects with international clients.</p>
<h2>What I focus on</h2>
<ul><li>RAG and agent workflows</li><li>n8n automation pipelines</li><li>Computer vision (YOLOv5, OpenCV)</li><li>Web development (React, WordPress)</li><li>AI/ML (PyTorch, scikit-learn)</li></ul>
<h2>How I work</h2>
<p>I start by understanding the problem, then build a small version that can be tested. From there I refine the parts that matter to the person using it. For AI projects, I also make the current limits clear.</p>
<h2>Experience</h2>
<ul><li><strong>Freelance AI &amp; Web Developer</strong> (2023&ndash;Present): developed custom AI models, RAG pipelines, and automated workflows.</li><li><strong>ML Engineer Intern</strong> (May&ndash;June 2026): built computer vision and machine learning solutions.</li><li><strong>Front-End Development Instructor</strong> (2021&ndash;2023): taught modern web development fundamentals.</li></ul>
<h2>Education</h2>
<p>B.S. Artificial Intelligence, NUML, expected 2027.</p>
<h2>What I'm open to</h2>
<p>AI and automation roles in Islamabad and Rawalpindi, and remote freelance projects with international clients. My <a href="/resume.pdf">résumé (PDF)</a> lists verified experience, education, and project work. You can also <a href="/contact">contact me</a> directly.</p>`,

  '/skills': `
<h1>AI &amp; Automation</h1>
<p>My work spans AI, automation, computer vision, and web development. Project links on the <a href="/">home page</a> show where each skill has been applied. Coursework areas are labeled separately.</p>
<h2>AI, machine learning &amp; RAG</h2>
<ul><li>Machine learning and deep learning (Python, PyTorch, TensorFlow, scikit-learn)</li><li>Retrieval-Augmented Generation (RAG) pipelines</li><li>NLP and Hugging Face Transformers</li><li>Agent workflows (CrewAI, LangChain)</li></ul>
<h2>Computer vision</h2>
<ul><li>Object detection and image processing (YOLOv5, OpenCV)</li><li>Image analysis pipelines from preprocessing to evaluation</li><li>Segmentation and DSP (coursework)</li></ul>
<h2>Workflow automation</h2>
<ul><li>n8n workflows for form intake, task routing, and email updates</li><li>Human-in-the-loop review steps</li><li>API integrations and agent orchestration</li></ul>
<h2>Web development</h2>
<ul><li>Frontend development (React, TypeScript, HTML/CSS/JS)</li><li>Backend services (FastAPI, Flask)</li><li>WordPress websites</li></ul>
<h2>Tools &amp; methods</h2>
<ul><li>Vector databases (ChromaDB, FAISS)</li><li>Model serving and containerisation (FastAPI, Docker)</li><li>Cloud and version control (AWS, Git/GitHub)</li></ul>`,

  '/contact': `
<h1>Contact Shaaf Khan</h1>
<p>Have an AI, automation, computer-vision, or web project in mind? Send a short note about the problem, your goal, and any deadline or technical limits. I'm also open to AI and automation roles in Islamabad and Rawalpindi.</p>
<p>Prefer to browse first? See my <a href="/">projects</a>, read <a href="/about">about me</a>, or check my <a href="/skills">skills</a>.</p>`,
};

const STATIC_STYLE = `<style>#seo-static{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}</style><noscript><style>#seo-static{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;color:#D7E2EA;font-family:Kanit,sans-serif;padding:1.5rem;max-width:60rem;margin:0 auto}#seo-static a{color:#D7E2EA}</style></noscript>`;

function seoHead(path) {
  const { title, description } = config.routes[path];
  const url = config.siteUrl + path;
  const img = config.siteUrl + config.ogImage;
  const t = (tag) => tag.replace('<', '<').replace(/^<(\w+)/, '<$1 data-rh="true"');
  return [
    `<title>${esc(title)}</title>`,
    t(`<meta name="description" content="${esc(description)}" />`),
    t(`<link rel="canonical" href="${url}" />`),
    t(`<meta property="og:type" content="website" />`),
    t(`<meta property="og:site_name" content="${esc(config.siteName)}" />`),
    t(`<meta property="og:title" content="${esc(title)}" />`),
    t(`<meta property="og:description" content="${esc(description)}" />`),
    t(`<meta property="og:url" content="${url}" />`),
    t(`<meta property="og:image" content="${img}" />`),
    t(`<meta name="twitter:card" content="summary_large_image" />`),
    t(`<meta name="twitter:title" content="${esc(title)}" />`),
    t(`<meta name="twitter:description" content="${esc(description)}" />`),
    t(`<meta name="twitter:image" content="${img}" />`),
  ].join('\n    ');
}

function render(path) {
  const staticHtml = `<div id="seo-static">${NAV}<main>${BODY[path]}</main>${FOOTER}</div>`;
  return template
    .replace(/<!--SEO_START-->[\s\S]*?<!--SEO_END-->/, seoHead(path) + '\n    ' + STATIC_STYLE)
    .replace('<div id="root"></div>', `<div id="root">${staticHtml}</div>`);
}

const files = { '/': 'index.html', '/about': 'about.html', '/skills': 'skills.html', '/contact': 'contact.html' };
for (const [path, file] of Object.entries(files)) {
  writeFileSync(`dist/${file}`, render(path));
  console.log(`prerendered ${path} -> dist/${file}`);
}

// 404.html: same app shell (so the React NotFound page renders), but no canonical and noindex.
const notFound = template
  .replace(/<!--SEO_START-->[\s\S]*?<!--SEO_END-->/, `<title>Page not found | Shaaf Khan</title>\n    <meta name="robots" content="noindex" />`);
writeFileSync('dist/404.html', notFound);
console.log('prerendered 404 -> dist/404.html');
