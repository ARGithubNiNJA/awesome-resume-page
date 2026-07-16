import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Resume,
});

const skills = {
  "Languages & Frameworks": ["C#", "ASP.NET Core", "ASP.NET MVC", "Web Forms", ".NET 4.x", "Angular", "JavaScript", "HTML5", "CSS3"],
  "APIs & Architecture": ["REST Web API", "JWT Auth", "MVC", "Clean Architecture", "SOLID", "OOP"],
  "Database & ORM": ["MS SQL Server", "Stored Procedures", "Triggers", "Views", "ADO.NET", "EF Core", "LINQ"],
  "Reporting & Tools": ["Crystal Reports", "iText PDF", "Swagger", "Postman", "IIS", "VS 2019/2022", "SVN"],
};

const projects = [
  {
    n: "01",
    title: "IUMS — Kerala Veterinary & Animal Sciences University",
    stack: "C# · ASP.NET MVC · Web Forms · SQL Server · Crystal Reports",
    period: "Nov 2023 — Present",
    bullets: [
      "Delivered 10+ core modules — Registration, Admissions, Examination, Results, Attendance — for 3,000+ students.",
      "Fixed 8 critical Stored Procedure defects causing incorrect result generation.",
      "Automated 6 report types via Crystal Reports, saving faculty 10+ hours per week.",
    ],
  },
  {
    n: "02",
    title: "IUMS — Lala Lajpat Rai University of Veterinary & Animal Sciences",
    stack: "C# · ASP.NET MVC · Web Forms · SQL Server",
    period: "Nov 2023 — Present",
    bullets: [
      "Extended ERP with 4 new feature modules and SQL index optimization strategies.",
      "Improved query performance ~35%, supporting 2,000+ concurrent users without degradation.",
      "Refactored 8,000+ lines of legacy Web Forms code — reduced bug rate by 25%.",
    ],
  },
  {
    n: "03",
    title: "IUMS Student Portal — REST API Backend",
    stack: "C# · ASP.NET Core Web API · SQL Server · JWT · Swagger",
    period: "Nov 2023 — Present",
    bullets: [
      "Designed a 15-endpoint RESTful Web API with JWT auth and role-based authorization across 3 roles.",
      "Documented every endpoint via Swagger/OpenAPI — cut frontend onboarding time by 40%.",
      "Enabled parallel QA testing from week one of integration.",
    ],
  },
];

const stats = [
  { k: "2.5+", v: "Years shipping .NET" },
  { k: "5,000+", v: "Active users served" },
  { k: "30+", v: "Stored procedures tuned" },
  { k: "~40%", v: "Query time reduced" },
];

function Resume() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative grain">
        {/* backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, var(--ember), transparent 60%)" }} />
          <div className="absolute bottom-[-30%] right-[-10%] h-[70vh] w-[70vh] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }} />
          <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>
        </div>

        {/* top bar */}
        <div className="mx-auto max-w-7xl px-6 pt-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>Résumé · MMXXVI</span>
          <span className="hidden md:inline">Noida · UP · India</span>
          <span>Vol. 01 / 01</span>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-16 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ember mb-8"
          >
            <span className="inline-block h-px w-10 bg-ember" />
            <Sparkles className="h-3 w-3" />
            <span>.NET Full Stack Developer</span>
          </motion.div>

          <h1 className="font-display font-black leading-[0.82] tracking-[-0.03em] text-[clamp(3.5rem,14vw,13rem)]">
            {"ARSH".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <span className="text-outline">
              {"KUMAR".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="md:col-span-7 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl"
            >
              I build enterprise-grade web apps and <span className="text-foreground font-medium">RESTful Web APIs</span> for university ERPs serving <span className="text-ember font-medium">5,000+ users</span>. My love language is a well-indexed database and a stored procedure that runs 40% faster than yesterday.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="md:col-span-5 md:pl-10 md:border-l border-border flex flex-col gap-3 font-mono text-sm"
            >
              <a href="mailto:arshkumar930@gmail.com" className="group flex items-center gap-3 hover:text-ember transition-colors">
                <Mail className="h-4 w-4 text-ember" />
                <span>arshkumar930@gmail.com</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="tel:+919304725965" className="group flex items-center gap-3 hover:text-ember transition-colors">
                <Phone className="h-4 w-4 text-ember" />
                <span>+91 93047 25965</span>
              </a>
              <a href="https://linkedin.com/in/arsh-kumar-930ak" target="_blank" rel="noreferrer" className="group flex items-center gap-3 hover:text-ember transition-colors">
                <Linkedin className="h-4 w-4 text-ember" />
                <span>linkedin.com/in/arsh-kumar-930ak</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-ember" />
                <span>Noida, UP · 201301</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-border py-4 overflow-hidden bg-secondary/30">
          <motion.div
            className="flex gap-12 whitespace-nowrap font-display text-3xl md:text-5xl font-black tracking-tight"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {Array.from({ length: 2 }).map((_, r) => (
              <div key={r} className="flex gap-12 shrink-0">
                {["C#", "ASP.NET CORE", "SQL SERVER", "REST APIs", "JWT", "ENTITY FRAMEWORK", "ANGULAR", "STORED PROCEDURES", "CRYSTAL REPORTS"].map((w, i) => (
                  <span key={i} className={i % 2 === 0 ? "text-foreground" : "text-outline"}>{w} <span className="text-ember">✦</span></span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="font-display text-5xl md:text-6xl font-black text-ember leading-none">{s.k}</div>
              <div className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border">
        <SectionHead num="01" label="Where I've built" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 grid md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-ember">Nov 2023 — Present</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">Expedien eSolutions</h3>
            <div className="mt-2 text-muted-foreground">.NET Full Stack Developer · Noida, India</div>
          </div>
          <ul className="md:col-span-8 space-y-5 text-muted-foreground leading-relaxed">
            {[
              "Engineered 2 large-scale university ERP platforms (IUMS) supporting 5,000+ students and 500+ administrative users across 3 institutions.",
              "Built RESTful Web APIs in ASP.NET Core with JWT-based authentication and role-based authorization across 3 user roles — securing 15+ endpoints.",
              "Optimized 30+ complex stored procedures and MS SQL queries, cutting average execution time by ~40%.",
              "Delivered Angular UI components and AJAX-driven interactions, cutting average page response time by ~30% across 5 modules.",
              "Automated report generation with Crystal Reports and iText PDF — reduced manual prep from 2 days to under 10 minutes.",
            ].map((b, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-xs text-ember mt-2 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border">
        <SectionHead num="02" label="Selected projects" />
        <div className="mt-12 space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group relative border border-border rounded-xl p-6 md:p-10 bg-card/40 hover:bg-card transition-colors overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-display text-[10rem] md:text-[14rem] font-black leading-none text-ember/5 select-none pointer-events-none -translate-y-6 translate-x-6">
                {p.n}
              </div>
              <div className="relative grid md:grid-cols-12 gap-8">
                <div className="md:col-span-5">
                  <div className="font-mono text-xs uppercase tracking-widest text-ember">Project {p.n} · {p.period}</div>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold leading-tight">{p.title}</h3>
                  <div className="mt-4 font-mono text-xs text-muted-foreground">{p.stack}</div>
                </div>
                <ul className="md:col-span-7 space-y-4">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-foreground/85">
                      <span className="mt-2.5 h-px w-6 bg-ember shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border">
        <SectionHead num="03" label="The toolbox" />
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border border-border rounded-xl p-6 md:p-8 bg-secondary/30"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-ember mb-5">{cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full border border-border bg-background/60 text-sm hover:border-ember hover:text-ember transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION + CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-6">
            <SectionHead num="04" label="Education" />
            <div className="mt-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold">B.Tech · Computer Science & Engineering</h3>
              <div className="mt-2 text-muted-foreground">Gandhi Institute for Technological Advancement (GITA)</div>
              <div className="text-muted-foreground">Bhubaneswar, Odisha</div>
            </div>
          </div>
          <div className="md:col-span-6 md:pl-10 md:border-l border-border">
            <div className="font-mono text-xs uppercase tracking-widest text-ember mb-3">Currently open to</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Backend & full-stack roles where <span className="text-ember">performance</span> and <span className="text-ember">clean architecture</span> matter.
            </h3>
            <a
              href="mailto:arshkumar930@gmail.com"
              className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-ember text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>© {new Date().getFullYear()} Arsh Kumar · All rights reserved</span>
        <span>Designed & built with care · Noida ↗ Everywhere</span>
      </footer>
    </main>
  );
}

function SectionHead({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-4">
      <div className="flex items-baseline gap-5">
        <span className="font-mono text-xs uppercase tracking-widest text-ember">§ {num}</span>
        <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight">{label}</h2>
      </div>
      <span className="hidden md:block font-mono text-xs text-muted-foreground">— scroll ↓</span>
    </div>
  );
}
