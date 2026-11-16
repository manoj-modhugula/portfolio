import mathworks from "@/assets/experience-memory-mathworks.webp";
import georgiaState from "@/assets/experience-memory-gsu.webp";
import accolite from "@/assets/experience-memory-accolite.webp";

// Career history and results. Keep these separate
// from the presentation so the factual content is straightforward to update.
export const experience = [
  {
    id: "mathworks", category: "Industry", company: "MathWorks", role: "Software Engineer Intern",
    team: "MATLAB Extension for VS Code", location: "Natick, MA",
    dates: "May 2026 — Aug 2026", displayDates: "May–Aug 2026", start: "2026-05", end: "2026-08",
    photo: mathworks, photoWidth: 1448, photoHeight: 1086,
    photoAlt: "Illustration of the MathWorks campus entrance", photoPosition: "50% 50%",
    photoSource: "docs/experience-image-sources.md",
    headline: "Making the tools behind the code feel faster.",
    highlights: [
      { metric: "22 → 5 min", caption: "PR validation, running only tests affected by a change." },
      { metric: "65% shorter", caption: "Cold starts, by deferring non-critical initialization." },
      { metric: "half the wait.", caption: "Go‑to‑definition latency, with smarter symbol-cache invalidation." },
    ],
    context: "",
    achievements: [
      { result: "Cut pull-request validation from 22 to 5 minutes", detail: " by building test-impact analysis that runs only the tests reachable from changed files in the import graph; the team made it the default CI path." },
      { result: "Cut cold start by 65%", detail: " by profiling startup across the extension’s 720K+ installs and deferring non-critical initialization; shipped in the v1.3 release." },
      { result: "Halved go-to-definition latency", detail: " by rewriting symbol-cache invalidation so an edit recomputes only the symbols that depend on it; added regression tests that run in CI." },
    ],
  },
  {
    id: "georgia-state", category: "Research", company: "Georgia State University", role: "Graduate Research Assistant",
    team: "Data Systems Lab", location: "Atlanta, GA",
    dates: "Jan 2025 — Present", displayDates: "Jan 2025–present", start: "2025-01", end: null,
    photo: georgiaState, photoWidth: 1448, photoHeight: 1086,
    photoAlt: "Illustration of a Georgia State University overpass", photoPosition: "58% 50%",
    photoSource: "docs/experience-image-sources.md",
    headline: "Helping researchers find what went wrong, sooner.",
    highlights: [
      { metric: "3 h → 70 min", caption: "Time to diagnose training regressions, supporting 25 researchers." },
      { metric: "71% → 89%", caption: "Correct diagnoses, with an LLM agent that verifies its answers." },
      { metric: "leadership.", caption: "Mentoring 2 researchers. Bringing code review and CI to the lab." },
    ],
    context: "Experiment diagnostics · Python / FastAPI, TypeScript / Next.js, PostgreSQL",
    achievements: [
      { result: "Reduced diagnosis time from 3 hours to 70 minutes", detail: " by developing and maintaining the lab’s experiment-diagnostics platform, used weekly by 25 researchers." },
      { result: "Raised correct diagnoses from 71% to 89%", detail: " on 140 past regressions with an LLM agent that proposes root causes for failed experiments and verifies each against deterministic data and code checks before showing it." },
      { result: "Mentor 2 undergraduate researchers", detail: " and introduced code review and CI (GitHub Actions, pytest) across the lab’s repositories." },
    ],
  },
  {
    id: "accolite", category: "Industry", company: "Accolite", role: "Software Engineer",
    team: "Claims Platform · US Health Insurance", location: "Hyderabad, India",
    dates: "Jan 2023 — Dec 2024", displayDates: "Jan 2023–Dec 2024", start: "2023-01", end: "2024-12",
    photo: accolite, photoWidth: 1448, photoHeight: 1086,
    photoAlt: "Illustration of an Accolite office exterior", photoPosition: "50% 50%",
    photoSource: "docs/experience-image-sources.md",
    headline: "Keeping a million moving pieces moving.",
    highlights: [
      { metric: "3.1 s → 420 ms", caption: "Claim-status updates at p95, across 1.8M+ daily events." },
      { metric: "1.9 TB moved", caption: "Claim documents moved to Azure with zero downtime. Database CPU usage down 55%." },
      { metric: "40 → under 5", caption: "Weekly data-drift incidents, with field-level conflict detection." },
    ],
    context: "Claims platform for a US health insurer · 180K+ claims/day · 8-engineer team · Java, Spring Boot, SQL Server, Azure",
    achievements: [
      { result: "Brought claim-status updates from 3.1 s to 420 ms at p95", detail: " across 1.8M+ events/day by owning the Spring Boot event-processing service in the team’s move from polling to Azure Service Bus and Functions." },
      { result: "Led a zero-downtime migration of 1.9 TB of claim documents", detail: " from SQL Server to Azure Blob Storage, coordinating the cutover with two partner teams; database CPU fell 55%." },
      { result: "Reduced data-drift incidents from 40 a week to under 5", detail: " by tracing concurrent edits in two systems and adding field-level conflict detection to the Java reconciliation service, ending daily manual cleanup for the support team." },
      { result: "Joined the on-call rotation", detail: ", wrote the team’s runbooks for claim-pipeline alerts, and onboarded 2 new engineers." },
    ],
  },
] as const;
