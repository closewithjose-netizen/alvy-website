import fs from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const revalidate = 3600; // re-read every hour

/**
 * GET /api/headlines
 *
 * Returns the rotating-headline word list. Extracted from business-context.md
 * (§8 "Rotating headline keywords"). The auto-update agent edits that section
 * and a new deploy automatically refreshes the list here.
 */
export async function GET() {
  try {
    const p = path.join(process.cwd(), 'business-context.md');
    const md = await fs.readFile(p, 'utf8');
    const section = md.match(
      /##\s*8\.\s*Rotating headline keywords[\s\S]*?(?=\n## |\n#\s|$)/i
    );
    if (!section) return Response.json({ words: defaultWords() });

    const lines = section[0]
      .split('\n')
      .filter((l) => /^\s*-\s+/.test(l))
      .map((l) => l.replace(/^\s*-\s+/, '').trim())
      .filter(Boolean);

    return Response.json({ words: lines.length ? lines : defaultWords() });
  } catch {
    return Response.json({ words: defaultWords() });
  }
}

function defaultWords() {
  return [
    'painter',
    'contractor',
    'color consultant',
    'cabinet refinisher'
  ];
}
