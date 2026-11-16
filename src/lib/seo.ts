import { profile } from "@/lib/profile";

// Public identity is defined once and reused by route metadata.
export const SITE_URL = profile.siteUrl;
export const OG_IMAGE = `${SITE_URL}/share-card.svg`;
export const NAME = profile.name;
export const ABOUT_SHORT = profile.description;
export const PROFILES = Object.values(profile.links);

export const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: NAME,
  alternateName: [profile.firstName],
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  jobTitle: "Software Engineer",
  description: ABOUT_SHORT,
  knowsAbout: ["Computer science", "Full-stack development", "AI"],
  sameAs: PROFILES,
};

// Turn a JSON-LD object into a <script> entry for a route's head.
export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify({ "@context": "https://schema.org", ...data }),
});

// The standard set of tags for a page: title, description, canonical address
// and the share card.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `the anatomy of a curious developer — ${NAME}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
