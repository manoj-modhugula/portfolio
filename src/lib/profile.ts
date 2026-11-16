// Shared identity and story content for the desktop and mobile portfolios.
export const profile = {
  name: "Manoj Reddy Modhugula",
  firstName: "Manoj",
  displayName: "Manoj Modhugula",
  email: "manoj.modhugula@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/manoj-modhugula/",
    github: "https://github.com/manoj-modhugula",
    x: "https://x.com/heymeits",
  },
  siteUrl: "https://manoj-modhugula.vercel.app",
  description: "Manoj Reddy Modhugula is a software engineer and computer science graduate student at Georgia State University, exploring web development and AI.",
} as const;

export const firstInterest = {
  title: "web2 came first.",
  body: "got curious about how something that connects pages ended up connecting people.",
} as const;

// Stable IDs keep identity independent of wording; dates are intentionally omitted.
export const storyMilestones = [
  { id: "school", title: "went to school.", line: "computer science at Georgia State University." },
  { id: "web", title: "found web2.", line: "the tech was weird. naturally, i stayed." },
  { id: "shipping", title: "started shipping.", line: "internships, research, smart contracts, hackathons, open-source experiments." },
  { id: "people", title: "brought people along.", line: "workshops, mentoring, and a few ambassador badges." },
  { id: "ai", title: "then, AI happened.", line: "now keeping AI agents reliable in production." },
] as const;
