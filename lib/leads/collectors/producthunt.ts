import type { RawLead } from "../types";

const PH_FEED_URL = "https://www.producthunt.com/feed";

export async function collectProductHunt(): Promise<RawLead[]> {
  const res = await fetch(PH_FEED_URL, {
    headers: { "user-agent": "mcfearless-leads/0.1" },
  });
  if (!res.ok) {
    throw new Error(`ProductHunt feed fetch failed: ${res.status}`);
  }
  const xml = await res.text();
  return parseAtom(xml);
}

function parseAtom(xml: string): RawLead[] {
  const items: RawLead[] = [];
  const entryRegex = /<entry\b[\s\S]*?<\/entry>/g;
  const matches = xml.match(entryRegex) ?? [];
  const collected_at = new Date().toISOString();

  for (const block of matches) {
    const title = decodeXml(extractTag(block, "title"));
    const url = extractLinkHref(block);
    const id = decodeXml(extractTag(block, "id")) || url;
    const content = decodeXml(extractTag(block, "content"));
    const description = cleanDescription(content);

    if (!title || !url) continue;

    items.push({
      source: "producthunt",
      source_id: id,
      url,
      title,
      description,
      collected_at,
    });
  }
  return items;
}

function extractTag(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  if (!m) return "";
  const inner = m[1].trim();
  const cdata = inner.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return cdata ? cdata[1].trim() : inner;
}

function extractLinkHref(xml: string): string {
  const alt = xml.match(/<link\b[^>]*rel="alternate"[^>]*href="([^"]+)"/);
  if (alt) return decodeXml(alt[1]);
  const any = xml.match(/<link\b[^>]*href="([^"]+)"/);
  return any ? decodeXml(any[1]) : "";
}

function cleanDescription(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\b(Discussion|Link)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeXml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}
