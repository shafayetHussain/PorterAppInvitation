// --- Data (edit as needed) ---
const expMain = [
  {
    title: "Flagstar Bank — Application Developer",
    dates: "May 2023 – Jun 2025",
    stack: "Java 8→17 • Spring 4→6 • IBM FileNet • MuleSoft • AWS • OAuth • CyberArk",
    outcomes: [
      "Migrated legacy services to Java 17 & Spring 6 using OpenRewrite.",
      "Hardened auth with OAuth; secrets via CyberArk; removed clear-text creds.",
      "Automated transfers (FileNet → Nautilus), supported RHEL upgrades.",
      "Remediated PII in DBs/logs/Unix files; contributed to MuleSoft IDP."
    ],
    impact:
      "Directly supports Porter App’s compliance and security posture (HIPAA & GLBA), secure secrets, and scalable integrations."
  },
  {
    title: "Auto-Owners Insurance — PEGA Developer",
    dates: "Dec 2022 – Mar 2023",
    stack: "PEGA 7.1.9 • Bitbucket • JIRA",
    outcomes: [
      "Built quoting modules and UI/validation rules.",
      "Improved quoting flow; reduced manual effort by ~30%.",
      "Partnered with BAs for reqs, debugging and fixes."
    ],
    impact:
      "Process automation mindset to streamline Porter App workflows and reduce operational toil."
  },
  {
    title: "Infosys USA — Associate Java Full Stack Dev",
    dates: "Jan 2022 – Nov 2022",
    stack: "Spring Boot • Hibernate • J2EE • REST APIs",
    outcomes: [
      "Designed REST services; applied Factory/Singleton patterns.",
      "Enhanced enterprise features under tight deadlines."
    ],
    impact:
      "API-first delivery and scalable patterns align with Porter App’s backend services."
  }
];

const expProjects = [
  {
    title: "Muhit Mahmood Campaign Site",
    dates: "2025",
    stack: "React • Spring Boot • AWS • Streamlit",
    outcomes: [
      "Built site + voter analytics dashboard (real-time insights).",
      "Deployed on cloud; simple UX for non-tech users."
    ],
    impact:
      "End-to-end delivery, analytics, and cloud hosting—useful for Porter App reporting surfaces."
  },
  {
    title: "GTBM Dashboard (Capstone)",
    dates: "2021",
    stack: "React • Node.js • MySQL",
    outcomes: [
      "Data-driven dashboard for daily incidents; schema design & queries.",
      "Helped users visualize trends quickly."
    ],
    impact:
      "Data visualization & API wiring patterns for Porter App admin/ops dashboards."
  },
  {
    title: "Brothers Traders LLC Website",
    dates: "2020",
    stack: "HTML • CSS • JS",
    outcomes: [
      "Responsive inventory site; cross-browser optimization.",
      "Structured layout with accessible navigation."
    ],
    impact:
      "Fast, accessible front ends for Porter App’s public/partner pages."
  }
];

// --- Render helpers ---
const byId = (id) => document.getElementById(id);

function cardHTML(c){
  return `
    <article class="card">
      <h3>${c.title}</h3>
      <div class="stack">${c.dates} · ${c.stack}</div>
      <ul>${(c.outcomes||[]).map(o=>`<li>${o}</li>`).join("")}</ul>
      <div class="impact"><strong>How this helps Porter App:</strong> ${c.impact}</div>
    </article>
  `;
}

function render(){
  byId("expRowMain").innerHTML = expMain.map(cardHTML).join("");
  byId("expRowProjects").innerHTML = expProjects.map(cardHTML).join("");
  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", render);
