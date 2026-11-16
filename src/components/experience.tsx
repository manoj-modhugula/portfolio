import { experience } from "@/lib/experience";
import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const experienceFilters = ["All", "Industry", "Research"] as const;
type ExperienceFilter = (typeof experienceFilters)[number];

// Like Projects, this is ordinary document flow: every role is available
// without a gesture gate, animation state, or JavaScript scroll controller.
export function Experience() {
  const [filter, setFilter] = useState<ExperienceFilter>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const previousFilter = useRef(filter);

  // Removing cards can trigger browser scroll anchoring. Start a newly
  // selected category at its introduction instead of partway down a card.
  // Skip the initial render so loading the page never steals its scroll.
  useLayoutEffect(() => {
    if (previousFilter.current === filter) return;
    previousFilter.current = filter;
    sectionRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [filter]);
  const filtered = filter === "All" ? experience : experience.filter((job) => job.category === filter);

  return (
    <section ref={sectionRef} id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-layout">
        <aside className="experience-sidebar">
          <p className="text-sm text-muted-foreground">work, so far / 2023—now</p>
          <h2 id="experience-heading" className="mt-4 font-serif">
            somewhere along the way,<br /><em>people started hiring me.</em>
          </h2>
          <p className="mt-8 max-w-sm text-muted-foreground">software engineering and AI research.</p>
          <p className="mb-3 mt-10 text-sm">show me</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter experience">
            {experienceFilters.map((item) => (
              <Button key={item} variant="filter" data-active={filter === item} aria-pressed={filter === item} aria-controls="experience-cards" onClick={() => setFilter(item)} data-cursor={`filter: ${item.toLowerCase()}`}>
                {item}
              </Button>
            ))}
          </div>
        </aside>
        <div id="experience-cards" className="experience-cards">
          {filtered.map((job) => (
            <article key={job.id} id={`experience-${job.id}`} className="experience-card" aria-labelledby={`company-${job.id}`}>
              <h3 id={`company-${job.id}`} className="sr-only">{job.company}</h3>
              <div className="experience-image" data-cursor="apparently, people pay for this.">
                <img src={job.photo} alt={job.photoAlt} width={job.photoWidth} height={job.photoHeight} loading="lazy" decoding="async" style={{ objectPosition: job.photoPosition }} />
                <div className="experience-photo-meta">
                  <div className="experience-position">
                    <p className="experience-role">{job.role}</p>
                  </div>
                  <p className="experience-dates">{job.location} · {job.displayDates}</p>
                </div>
              </div>
              <div className="experience-info">
                <p className="experience-headline font-serif">{job.headline}</p>
                <dl className="experience-results">
                  {job.highlights.map((highlight) => (
                    <div key={highlight.metric}>
                      <dt className="font-serif">{highlight.metric}</dt>
                      <dd>{highlight.caption}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
