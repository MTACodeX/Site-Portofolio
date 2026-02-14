// src/utils/writeups.ts

export type EventMeta = {
  year: number;
  slug: string;
  name: string;
  start: string;
  end: string;
  location: string;
  format: string;
  url: string | null;
  team: boolean;
};

export type ChallengeMeta = {
  title: string;
  description: string;
  category: string;
  points: number;
  solves: number;
  slug: string;
  year: number;
  eventSlug: string;
  categorySlug: string;
  href: string;
  flag?: string | null;
};

const normalizeCategory = (raw: string) => {
  const k = (raw || "").toLowerCase();
  if (k.includes("forensic")) return "Forensics";
  if (k.includes("misc")) return "Miscellaneous";
  if (k.includes("mobile")) return "Mobile";
  if (k.includes("reverse")) return "Reverse Engineering";
  if (k.includes("web")) return "Web Exploitation";
  if (k.includes("crypto")) return "Crypto";
  if (k.includes("pwn") || k.includes("binary")) return "Pwn";
  if (k.includes("osint")) return "OSINT";
  if (k.includes("stego")) return "Steganography";
  if (k.includes("ppc") || k.includes("programming")) return "Programming";
  if (k.includes("hardware") || k.includes("iot")) return "Hardware";
  if (k.includes("cloud")) return "Cloud";
  if (k.includes("blockchain") || k.includes("web3")) return "Blockchain";
  return raw;
};

export async function loadAllEvents(): Promise<Array<{ meta: EventMeta; dirName: string }>> {
  const modules = import.meta.glob("../data/writeups/events/*/event.json", {
    import: "default",
  });

  const entries = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const meta = (await (loader as any)()) as EventMeta;
      const m = path.match(/events\/([^/]+)\/event\.json$/);
      const dirName = m?.[1] ?? "";
      return { meta, dirName };
    }),
  );

  return entries.sort((a, b) => {
    if (a.meta.year !== b.meta.year) return b.meta.year - a.meta.year;
    return new Date(b.meta.start).getTime() - new Date(a.meta.start).getTime();
  });
}

export async function loadChallengesForEvent(params: { eventDir: string; year: number; eventSlug: string }): Promise<
  Array<{
    frontmatter: any;
    Content: any;
    headings: any[];
    meta: ChallengeMeta;
  }>
> {
  const { eventDir, year, eventSlug } = params;

  const modules = import.meta.glob("../data/writeups/events/*/challenges/*/*.md");
  const wantedPrefix = `../data/writeups/events/${eventDir}/challenges/`;

  const items = await Promise.all(
    Object.entries(modules)
      .filter(([path]) => path.startsWith(wantedPrefix))
      .map(async ([path, loader]) => {
        const mod: any = await (loader as any)();

        const rel = path.replace(wantedPrefix, "");
        const m = rel.match(/^([^/]+)\/([^/]+)\.md$/);

        const categorySlug = m?.[1] ?? "misc";
        const fileSlug = m?.[2] ?? "challenge";

        const slug = mod.frontmatter?.slug ?? fileSlug;
        const rawCategory = mod.frontmatter?.category ?? categorySlug;
        const category = normalizeCategory(String(rawCategory));

        const href = `/writeups/${year}/${eventSlug}/${categorySlug}/${slug}`;

        const meta: ChallengeMeta = {
          title: mod.frontmatter?.title ?? slug,
          description: mod.frontmatter?.description ?? "",
          category,
          points: Number(mod.frontmatter?.points ?? 0),
          solves: Number(mod.frontmatter?.solves ?? 0),
          slug,
          year,
          eventSlug,
          categorySlug,
          href,
          flag: mod.frontmatter?.flag ?? "",
        };

        return {
          frontmatter: mod.frontmatter,
          Content: mod.default,
          headings: mod.headings ?? [],
          meta,
        };
      }),
  );

  items.sort((a, b) => b.meta.points - a.meta.points);
  return items;
}
