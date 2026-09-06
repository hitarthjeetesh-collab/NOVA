"use client";

const sections = [
  {
    title: "1. Engineering Platform Overview",
    description:
      "NOVA is an intelligent engineering workspace designed to take an engineering idea from an initial concept through planning, design, calculation, simulation, optimization, and manufacturing.",
  },
  {
    title: "2. AI Engineering Capabilities",
    description:
      "NOVA is designed to provide AI assistance throughout the engineering workflow, helping with requirements, technical reasoning, calculations, design decisions, code, analysis, and engineering documentation.",
  },
  {
    title: "3. Architecture",
    description:
      "NOVA is built as a connected platform with modular applications, shared project data, AI services, engineering systems, databases, object storage, and external integrations working together as one ecosystem.",
  },
  {
    title: "4. Documentation",
    description:
      "Documentation will cover NOVA's platform architecture, engineering systems, APIs, development practices, supported workflows, and technical implementation details.",
  },
  {
    title: "5. Development Roadmap",
    description:
      "NOVA is being developed incrementally, beginning with the application interfaces and engineering workspace before expanding into backend services, AI systems, engineering engines, simulation, CAD, and production infrastructure.",
  },
  {
    title: "6. Engineering Tools & Calculators",
    description:
      "NOVA will provide engineering-focused tools and calculators for common calculations, unit conversions, formulas, constants, materials, and other technical workflows.",
  },
  {
    title: "7. Public Project Examples",
    description:
      "Public engineering projects will demonstrate how NOVA can be used to move from an engineering goal to a structured project containing requirements, designs, calculations, simulations, and other engineering outputs.",
  },
  {
    title: "8. Technical Articles",
    description:
      "Technical articles will explore engineering, artificial intelligence, software architecture, robotics, simulation, CAD, optimization, and the technologies behind NOVA.",
  },
];

export default function AboutNOVA() {
  return (
    <main className="min-h-screen bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <header className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--aevra-text)] text-sm font-bold text-[var(--aevra-background)]">
              N
            </div>

            <span className="text-sm font-medium text-[var(--aevra-text-secondary)]">
              NOVA
            </span>
          </div>

          <p className="text-sm font-medium uppercase tracking-widest text-[var(--aevra-accent)]">
            About NOVA
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            What NOVA Is
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--aevra-text-tertiary)]">
            NOVA is an intelligent workspace for building what's next. It is
            designed to connect artificial intelligence with the complete
            engineering development process, from an initial idea to a
            manufactured and tested product.
          </p>
        </header>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-7 transition hover:border-[var(--aevra-border-strong)] hover:bg-[var(--aevra-surface-light)]"
            >
              <h2 className="text-lg font-semibold tracking-tight">
                {section.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--aevra-text-tertiary)]">
                {section.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--aevra-accent)]">
            The Goal
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            One connected engineering workspace
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--aevra-text-tertiary)]">
            Instead of treating planning, design, calculations, simulation,
            optimization, manufacturing, and engineering knowledge as separate
            tools, NOVA aims to bring them together into a single connected
            environment where information can move between every stage of a
            project.
          </p>
        </section>

        <footer className="mt-12 border-t border-[var(--aevra-border)] pt-6">
          <p className="text-xs text-[var(--aevra-text-faint)]">
            NOVA — Build what's next.
          </p>
        </footer>
      </div>
    </main>
  );
}