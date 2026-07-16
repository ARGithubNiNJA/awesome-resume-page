import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Sphere, Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Cpu, Sparkles, Zap, Database, Code2, Layers } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Resume,
});

/* --------------------------- 3D SCENE --------------------------- */

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const positions = new Float32Array(1200 * 3);
  for (let i = 0; i < 1200; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.y += d * 0.03;
      ref.current.rotation.x += d * 0.01;
    }
  });
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#7dd3fc" size={0.025} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function AICore() {
  const knot = useRef<THREE.Mesh>(null!);
  useFrame((_, d) => {
    if (knot.current) {
      knot.current.rotation.x += d * 0.25;
      knot.current.rotation.y += d * 0.15;
    }
  });
  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[1.15, 0.32, 220, 32]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#8b5cf6"
            emissiveIntensity={0.55}
            metalness={0.9}
            roughness={0.15}
            wireframe
          />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.6}>
        <Icosahedron args={[0.55, 1]} position={[2.4, 1.1, -1]}>
          <meshStandardMaterial color="#a78bfa" emissive="#22d3ee" emissiveIntensity={0.4} wireframe />
        </Icosahedron>
      </Float>
      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.7}>
        <Sphere args={[0.35, 24, 24]} position={[-2.6, -0.9, -0.5]}>
          <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={0.9} wireframe />
        </Sphere>
      </Float>
      <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.5}>
        <TorusKnot args={[0.35, 0.1, 100, 16]} position={[-2, 1.6, 0.4]}>
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.7} wireframe />
        </TorusKnot>
      </Float>
    </group>
  );
}

function Hero3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 55 }} className="!absolute inset-0">
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-5, -3, 2]} intensity={1.5} color="#a78bfa" />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <StarField />
        <AICore />
      </Suspense>
    </Canvas>
  );
}

/* --------------------------- DATA --------------------------- */

const skills = {
  "Languages & Frameworks": ["C#", "ASP.NET Core", "ASP.NET MVC", "Web Forms", ".NET 4.x", "Angular", "JavaScript", "HTML5", "CSS3"],
  "APIs & Architecture": ["REST Web API", "JWT Auth", "MVC", "Clean Architecture", "SOLID", "OOP"],
  "Database & ORM": ["MS SQL Server", "Stored Procedures", "Triggers", "Views", "ADO.NET", "EF Core", "LINQ"],
  "Reporting & Tools": ["Crystal Reports", "iText PDF", "Swagger", "Postman", "IIS", "VS 2019/2022", "SVN"],
};

const skillIcons: Record<string, React.ReactNode> = {
  "Languages & Frameworks": <Code2 className="h-5 w-5" />,
  "APIs & Architecture": <Layers className="h-5 w-5" />,
  "Database & ORM": <Database className="h-5 w-5" />,
  "Reporting & Tools": <Cpu className="h-5 w-5" />,
};

const projects = [
  {
    n: "01",
    title: "IUMS · Kerala Veterinary & Animal Sciences University",
    stack: ["C#", "ASP.NET MVC", "SQL Server", "Crystal Reports"],
    period: "Nov 2023 — Present",
    bullets: [
      "Delivered 10+ core modules — Registration, Admissions, Examination, Results, Attendance — for 3,000+ students.",
      "Fixed 8 critical Stored Procedure defects causing incorrect result generation.",
      "Automated 6 report types via Crystal Reports, saving faculty 10+ hours weekly.",
    ],
  },
  {
    n: "02",
    title: "IUMS · Lala Lajpat Rai University of Vet & Animal Sciences",
    stack: ["C#", "ASP.NET MVC", "Web Forms", "SQL Server"],
    period: "Nov 2023 — Present",
    bullets: [
      "Extended ERP with 4 new feature modules and SQL index optimization strategies.",
      "Improved query performance ~35%, supporting 2,000+ concurrent users.",
      "Refactored 8,000+ lines of legacy code — reduced bug rate by 25%.",
    ],
  },
  {
    n: "03",
    title: "IUMS Student Portal · REST API Backend",
    stack: ["ASP.NET Core", "JWT", "Swagger", "SQL Server"],
    period: "Nov 2023 — Present",
    bullets: [
      "Designed a 15-endpoint RESTful Web API with JWT auth and role-based authorization.",
      "Documented every endpoint via Swagger/OpenAPI — cut frontend onboarding time by 40%.",
      "Enabled parallel QA testing from week one of integration.",
    ],
  },
];

const stats = [
  { k: "2.5+", v: "Years shipping .NET", icon: <Zap className="h-4 w-4" /> },
  { k: "5K+", v: "Active users served", icon: <Sparkles className="h-4 w-4" /> },
  { k: "30+", v: "Stored procs tuned", icon: <Database className="h-4 w-4" /> },
  { k: "40%", v: "Query time reduced", icon: <Cpu className="h-4 w-4" /> },
];

/* --------------------------- PAGE --------------------------- */

function Resume() {
  return (
    <main className="min-h-screen overflow-x-hidden text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100vh]">
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10">
          <Hero3D />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-b from-transparent to-background" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 font-mono text-[11px] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-2 text-cyan">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span>ai.dev / arsh_kumar</span>
          </div>
          <span className="hidden text-muted-foreground md:inline">v.2026.07 · noida.in</span>
          <span className="text-violet">available for hire</span>
        </nav>

        <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-36 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass holo-border inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan"
          >
            <Sparkles className="h-3 w-3" />
            .NET · Full Stack · AI-Curious Engineer
          </motion.div>

          <h1 className="mt-8 font-display font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(3rem,11vw,10rem)]">
            {["ARSH", "KUMAR"].map((word, wi) => (
              <span key={wi} className="block">
                {word.split("").map((c, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.15 + (wi * 5 + i) * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                    style={{
                      background: wi === 0
                        ? "linear-gradient(180deg, #f0f9ff 0%, #7dd3fc 100%)"
                        : "linear-gradient(180deg, #c4b5fd 0%, #7c3aed 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 8px 24px rgba(34,211,238,0.25))",
                    }}
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:col-span-7 md:text-xl"
            >
              I engineer <span className="text-foreground font-medium">enterprise ERPs</span> and{" "}
              <span className="text-cyan font-medium">RESTful APIs</span> that quietly power{" "}
              <span className="text-violet font-medium">5,000+ users</span>. Trained on SQL,
              wired for performance, tuned for the shape of real systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="glass rounded-2xl p-5 font-mono text-sm md:col-span-5"
            >
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>./contact --secure</span>
                <span className="text-neon">● online</span>
              </div>
              <a href="mailto:arshkumar930@gmail.com" className="group flex items-center gap-3 py-1.5 transition-colors hover:text-cyan">
                <Mail className="h-4 w-4 text-cyan" /> arshkumar930@gmail.com
                <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a href="tel:+919304725965" className="flex items-center gap-3 py-1.5 transition-colors hover:text-cyan">
                <Phone className="h-4 w-4 text-cyan" /> +91 93047 25965
              </a>
              <a href="https://linkedin.com/in/arsh-kumar-930ak" target="_blank" rel="noreferrer" className="group flex items-center gap-3 py-1.5 transition-colors hover:text-cyan">
                <Linkedin className="h-4 w-4 text-cyan" /> /in/arsh-kumar-930ak
                <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <div className="flex items-center gap-3 py-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-cyan" /> Noida, UP · 201301
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, rotateX: -4, rotateY: 4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass holo-border relative overflow-hidden rounded-2xl p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan">
                {s.icon}
                {s.v}
              </div>
              <div
                className="font-display text-5xl font-bold leading-none md:text-6xl"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.k}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead num="01" label="Neural log" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass holo-border mt-12 grid gap-8 rounded-3xl p-8 md:grid-cols-12 md:p-12"
        >
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-cyan">Nov 2023 — Present</div>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">Expedien eSolutions</h3>
            <div className="mt-2 text-muted-foreground">.NET Full Stack Developer</div>
            <div className="text-muted-foreground">Noida, India</div>
          </div>
          <ul className="space-y-4 md:col-span-8">
            {[
              "Engineered 2 large-scale university ERP platforms (IUMS) supporting 5,000+ students and 500+ administrators.",
              "Built RESTful Web APIs in ASP.NET Core with JWT auth and role-based access across 15+ endpoints.",
              "Optimized 30+ complex stored procedures — cut average execution time by ~40%.",
              "Delivered Angular UI components and AJAX flows — reduced page response time by ~30%.",
              "Automated Crystal Reports & iText PDF generation — 2 days of manual prep collapsed to under 10 minutes.",
            ].map((b, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 font-mono text-[11px] text-violet">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead num="02" label="Deployed models" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ y: -8, rotateX: -3, rotateY: 3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass holo-border group relative flex flex-col overflow-hidden rounded-2xl p-7"
            >
              <div className="absolute -right-4 -top-6 font-display text-[7rem] font-bold leading-none text-cyan/[0.08] pointer-events-none select-none">
                {p.n}
              </div>
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-widest text-cyan">{p.period}</div>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight">{p.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-border/60 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
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
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead num="03" label="Model weights" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="glass holo-border rounded-2xl p-7"
            >
              <div className="mb-5 flex items-center gap-3 text-cyan">
                {skillIcons[cat]}
                <span className="font-mono text-[11px] uppercase tracking-widest">{cat}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_-4px_var(--cyan)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION + CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass holo-border grid gap-10 rounded-3xl p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-6">
            <SectionHead num="04" label="Training data" small />
            <div className="mt-6">
              <h3 className="font-display text-2xl font-bold md:text-3xl">B.Tech · Computer Science & Engineering</h3>
              <div className="mt-2 text-muted-foreground">Gandhi Institute for Technological Advancement (GITA)</div>
              <div className="text-muted-foreground">Bhubaneswar, Odisha</div>
            </div>
          </div>
          <div className="md:col-span-6 md:pl-10 md:border-l border-border">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-cyan">// prompt</div>
            <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
              Backend & full-stack roles where{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#22d3ee,#a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                performance
              </span>{" "}
              and{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#a78bfa,#4ade80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                clean architecture
              </span>{" "}
              actually matter.
            </h3>
            <a
              href="mailto:arshkumar930@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-medium text-background transition-transform hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#22d3ee,#a78bfa)",
                boxShadow: "0 10px 40px -10px rgba(34,211,238,0.6)",
              }}
            >
              Initialize conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-border px-6 py-10 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} arsh.kumar · rendered in real-time</span>
        <span className="text-cyan">noida → everywhere</span>
      </footer>
    </main>
  );
}

function SectionHead({ num, label, small }: { num: string; label: string; small?: boolean }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">§ {num}</span>
        <h2 className={`font-display font-bold tracking-tight ${small ? "text-2xl md:text-3xl" : "text-4xl md:text-6xl"}`}>
          {label}
        </h2>
      </div>
      <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
        scroll ↓
      </span>
    </div>
  );
}
