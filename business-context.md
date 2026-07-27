# Alvarez Painters — Business Context

> Single source of truth for the auto-update agent and the chatbot.
> Legal entity: Alvy Color Changes LLC (DBA Alvarez Painters — Virginia SCC Filing No. 26052610046534, effective 2026-05-26)

---

## 1. The company in one sentence

Alvarez Painters is a professional commercial and residential painting company based in Newport News, VA — a crew-based operation serving business owners who take pride in their space and homeowners ready for a full-scale repaint done right.

---

## 2. Who we serve

**Primary — Commercial:**
- Business owners renovating or refreshing commercial interiors
- Multi-location operators (franchise owners, restaurant groups, retail chains) who need a reliable painting vendor across all their sites
- Medical and dental office groups
- Restaurant and hospitality properties
- Retail locations and new business buildouts
- Professional office spaces
- Auto dealerships and showrooms
- Hotel and motel properties

**Secondary — Residential:**
- Homeowners in established neighborhoods ready for a full interior or exterior repaint
- Pre-listing sellers who need their home list-ready fast (we know what buyers notice and what listing photos need)
- High-end homes 3,000+ sq ft that need a real crew, not a side hustle

**We do NOT take small jobs.** No accent walls, no single rooms, no touch-ups, no handyman work. We are a full-project operation.

---

## 3. Services we offer

**Commercial (primary):**
- Commercial interior painting — offices, restaurants, retail, medical spaces
- Multi-location business painting programs
- New business buildout painting
- Paint stripping and surface preparation
- Spec-grade product selection for commercial environments (antimicrobial, high-durability, commercial-grade finishes)
- Drywall repair and wall preparation (included in full commercial projects)
- Commercial exterior painting

**Residential (secondary):**
- Full interior repaints (full home only — no single rooms)
- Full exterior repaints
- Pre-listing paint refreshes for Realtors and sellers
- Large homes 3,000+ sq ft
- Color consultations (bundled with full projects)

---

## 4. What makes us different

- **Spec-level product expertise** — Jose knows what product belongs where and why. Medical-grade antimicrobial (Sherwin-Williams Symmetry), commercial-grade door coatings (Forte), high-traffic surfaces, specialty substrates — we spec correctly before we ever pick up a brush. Competitors rely on others for this knowledge. We come with a full package.
- **Coordinated professional crew** — a coordinated crew scaled to each job, owner-supervised from scope to final walkthrough. Multiple painters on big jobs so timelines hold.
- **Owner-operated** — when you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. Jose answers personally.
- **Latino-owned** — Jose Melendez Alvarez, Newport News based.
- **Bilingual English + Spanish** — bilingual owner and crew.
- **LGBTQ+ friendly** — all clients treated with the same professionalism and respect.
- **3-year warranty** — no-peel, no-blister guarantee on every job.
- **On-time guarantee** — we finish when we said, or you get an account credit.
- **5.0 on Google, 25+ reviews.**
- **Licensed and insured** — licensed under Alvy Color Changes LLC in Virginia.

---

## 5. Service area

Primary (Peninsula): Newport News, Hampton, York County, Poquoson, VA.
Southside (added 2026-07-08): Norfolk, Virginia Beach, Chesapeake, Portsmouth, Suffolk. We serve all of Hampton Roads. Williamsburg is NOT a primary area.

Commercial corridors we target: Jefferson Ave (23602), Oyster Point Business District, Mercury Blvd (Hampton), Warwick Blvd, Coliseum Drive (Hampton).

Residential neighborhoods: Kiln Creek, Port Warwick, Hidenwood, Riverside, Merry Point Estates, Hilton Village, North End / Huntington Heights, Denbigh (Newport News); Fox Hill, Farmington, Olde Wythe, Wythe, Phoebus, Riverdale (Hampton).

---

## 6. Pricing posture

Never quote specific prices in chat. Always: "we give a free estimate after a quick walkthrough or site visit — usually within 24 hours."

For commercial: "we come to your space, understand the scope, and give you a real number with no guessing. We work around your business hours."

For small job requests (accent walls, single rooms, touch-ups): "That is not our focus — we do full projects. If you have a full commercial space or a full home repaint, we are the right fit."

Minimum job size is enforced — always redirect small job requests politely but firmly.

---

## 7. Brand voice

Professional, confident, direct. Not corporate — real. Like a contractor who knows their craft, respects your time, and does not need to sell you. The brand is **Alvarez Painters**. The legal entity is Alvy Color Changes LLC. Always say Alvarez Painters in all customer-facing communication.

Owner's name: Jose Melendez Alvarez. Goes by Jose.

No exclamation points. No emojis. No corporate filler. No "we pride ourselves on." Short sentences. Real words.

---

## 8. Rotating headline keywords (homepage "Ask me about ___")

- commercial painting in Newport News
- painting your office or retail space
- our professional painting crew
- a multi-location painting program
- how we work around your business hours
- spec-grade paint for medical offices
- a free commercial estimate this week
- a full interior repaint
- pre-listing paint for your home
- painting a 3,000+ sq ft house
- our 3-year warranty
- the on-time guarantee

---

## 9. Lead form behavior (replaces the old chatbot)

The website hero is a short lead-capture form, not a chatbot. The form has a Commercial/Residential toggle that swaps the fields shown.

**Common fields (both lanes):**
- Name
- Phone
- Email
- Timeline (ASAP / Within 2 weeks / This month / Next month / Just gathering info)

**Commercial lane adds:**
- Business name
- Space type (Office / Restaurant / Retail / Medical / Hotel / Auto dealership / Multi-location / Other)
- Project address

**Residential lane adds:**
- Project address
- Scope (Full interior / Full exterior / Both / Pre-listing refresh / 3,000+ sq ft home)

Submit button reads "Get my free estimate." After submit, the form replaces itself with a "Got it. Jose will reach out within 24 hours" confirmation and the office phone number.

## 10. Where leads go

Form submissions fan out in parallel to:

1. **Monday.com board 18414598724** — primary CRM record (item created + full lead details posted as an update).
2. **Instant notification webhook** (Zapier/Make) — Jose gets an email at jose@alvarezpainters.com and an SMS at (757) 719-6269 within seconds.
3. **Google Sheets** (optional) — append-only lead log, useful for analytics and as a backup.

Each integration is independent. If Monday is down, the notification still fires. If the webhook is down, Monday still gets the lead.

## 11. Form guardrails

- All fields marked required must be filled before submit enables.
- Email must match a basic email pattern.
- Phone must have at least 10 digits.
- Commercial lane requires business name.
- Submit button shows a "Sending…" state during the request and re-enables on error.
- On error, surface: "Couldn't send that. Try again, or call (757) 719-6269." Never silently fail.
- Never quote a specific price anywhere on the site or in form copy.
- Never promise specific start dates.
- Never claim BBB accreditation or EPA Lead-Safe certification — we do not have those.
- For small-job inquiries we still don't quote: the FAQ and "What we do" sections make clear we focus on full projects, $3,500 minimum.

## 12. What is on the public site

Landing page is chat-first — minimal hero with greeting + rotating subtitle + big chat input.

Below the hero (scroll-down content in this order):

- Trust strip: 5.0 Google · 3-yr warranty · 24h estimate · on-time guarantee · Professional crew
- "What we do" — service cards in this priority order:
  1. **Commercial Interior** (featured) — offices, restaurants, retail, medical, multi-location programs
  2. **Pre-Listing Paint Refresh** — we know what listings need and what buyers notice
  3. **Full Interior Repaints** — full homes only, coordinated crew
  4. **Full Exterior Repaints** — full homes only
  5. **Large Homes 3,000+ sq ft** — crew built for big jobs
- "Why us" — 6 pillars:
  1. Spec-level product expertise — we know what works and why
  2. Coordinated professional crew — owner-supervised on every job
  3. Owner-operated — Jose answers personally
  4. Latino-owned · Bilingual · LGBTQ+ friendly
  5. 3-year warranty on every job
  6. On-time guarantee or you get an account credit
- Reviews (3 real Google reviews — Juliet Bourque, Jessica Tenezaca, Sabrina Rauch)
- "Where we work" — all of Hampton Roads: Newport News, Hampton, York County, Poquoson + Southside (Norfolk, Virginia Beach, Chesapeake, Portsmouth, Suffolk) with neighborhood chips
- FAQ (commercial + residential, updated below)
- Footer: phone (757) 719-6269 · email jose@alvarezpainters.com · Licensed & Insured · 3-Year Warranty · On-Time Guarantee · 25+ Five-Star Reviews

---

## 13. FAQ content (updated)

**Q: What kind of projects do you take?**
Full commercial and residential paint projects. We focus on complete interiors, complete exteriors, and commercial spaces — not single rooms, accent walls, or patch jobs.

**Q: Do you paint commercial buildings?**
Yes — commercial interior and exterior is our primary focus. Offices, restaurants, retail spaces, medical offices, multi-location programs. We work around your business hours and coordinate a crew so the job finishes on schedule.

**Q: Do you work with multi-location businesses?**
Yes. If you own or manage more than one location, we can build a program around your sites. One relationship, one vendor, consistent results across all your locations.

**Q: What does spec-grade painting mean?**
It means we know which product belongs in which environment and why. A medical office gets antimicrobial paint. A high-traffic door gets a commercial-grade coating. We spec the right product before we quote, not after.

**Q: Should I stain or paint my cabinets and trim?**
Depends on the wood and the goal. Stain changes the color while keeping the grain — but it can only go darker. Going lighter means paint. We do both and tell you honestly which fits your project.

**Q: Can you handle a 3,000+ sq ft house?**
Yes — that is where we shine. We put multiple painters on a big job simultaneously so a 4,000 sq ft repaint does not drag on for a month. Detailed scope, daily progress, finished on the date we promised.

**Q: How fast can you get me an estimate?**
24 hours from the time you reach out — usually faster. For commercial projects we come to your space. For residential we do a quick walkthrough. Estimates are always free.

**Q: What is the pre-listing paint refresh?**
A complete interior or exterior repaint scoped specifically for homes going on the market. We have prepped listings across Hampton Roads — we know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.

**Q: What areas do you serve?**
All of Hampton Roads. Peninsula: Newport News, Hampton, York County, Poquoson — including Kiln Creek, Port Warwick, Hidenwood, Riverside, Hilton Village, Fox Hill, Farmington, Olde Wythe, and Phoebus. Southside: Norfolk, Virginia Beach, Chesapeake, Portsmouth, Suffolk. Commercial work throughout the Jefferson Ave, Oyster Point, and Mercury Blvd corridors.

**Q: Are you licensed and insured?**
Yes — fully licensed in Virginia under Alvy Color Changes LLC (DBA Alvarez Painters) and insured. Every job is backed by our 3-year no-peel, no-blister warranty and on-time guarantee.

**Q: Do you offer free estimates?**
Always. No obligation, no hard sell. Commercial or residential — free estimate within 24 hours.

**Q: ¿Hablan español?**
Sí. Jose y parte del equipo hablan español. Escríbenos en el chat — te respondemos en el idioma que prefieras.

---

## 14. Blog

The site has a blog at `/blog` (index at `app/blog/page.jsx`, posts defined in `lib/posts.js`, rendered by `app/blog/[slug]/page.jsx`). Purpose: local SEO and content that mirrors what Jose posts on Instagram and TikTok (@alvarezpainters). Do not remove the blog routes. New posts are added as entries in `lib/posts.js`.

Current posts:
- `light-paint-colors-make-small-rooms-feel-bigger` — how one lighter color makes a small home feel bigger, based on a real Norfolk kitchen repaint (matches the Instagram reel from July 2026).
- `staining-wood-color-change-without-losing-the-grain` — staining vs painting wood, gel stain color changes, the honey oak problem.

Blog voice follows section 7. English body with a short "En español" summary block at the end of each post. Every post ends with a free-estimate CTA. Never quote prices in posts. Posts must not invite small jobs (no accent-wall or single-room content).

---

## 15. Recent updates

- 2026-07-27 (2): Service area expanded sitewide to all Hampton Roads — Southside cities (Norfolk, Virginia Beach, Chesapeake, Portsmouth, Suffolk) added to schema, metadata, neighborhoods section, and FAQ. Williamsburg removed. Added 5 commercial service/location pages: /commercial-painting-newport-news, /office-painting-hampton, /medical-office-painting-newport-news, /commercial-painting-norfolk, /restaurant-painting-hampton-roads (defined in lib/servicePages.js, rendered by app/[slug]/page.jsx — do not remove). Homepage Offers/FAQ/WhyAlvy rebuilt commercial-first per this document. Removed "licensed VA Realtor" claim (license inactive June 2026 — never reintroduce), removed "professional female crew" and "crew of 8 / no subcontracting" claims (crew model changed July 2026 — use "coordinated professional crew, owner-supervised"). Added og-image.png social share image.
- 2026-07-27: Added blog at /blog with first two posts (light colors make small homes feel bigger; staining vs painting). Added sitemap.xml and robots.txt via Next.js app routes. Fixed footer NAP: brand now Alvarez Painters, email now jose@alvarezpainters.com. Added Blog to header nav and footer.

- 2026-05-26: Full rebrand to Alvarez Painters. Virginia SCC DBA registered — Filing No. 26052610046534. DPOR name change form A406-NAMECHG submitted with SCC certificate.
- 2026-05-26: Repositioned as commercial-first operation. Commercial interior now featured primary service. PCS/military and rental turnover removed as primary offers.
- 2026-05-26: Added professional female crew as primary brand differentiator. Added Latino-owned, bilingual, and LGBTQ+ friendly as brand attributes.
- 2026-05-26: Added spec-level product expertise as key differentiator (Sherwin-Williams Symmetry for medical spaces, Forte for commercial doors).
- 2026-05-26: Minimum job size enforced — no small jobs, accent walls, or single rooms. Full projects only.
- 2026-05-26: Google Business Profile updated with new categories, description, and services. Facebook page updated. LinkedIn updates in progress.
- 2026-05-26: Updated service area to Newport News, Hampton, York County, Poquoson. Removed Williamsburg as primary area.
- 2026-05-23: Site shipped. Lead capture flowing to Monday board 18414598724.
- 2026-05-23: Redesigned hero to app-style chat. Tightened chatbot to qualification flow.
- 2026-05-23: Added full SEO content stack below hero + JSON-LD schema.
- 2026-05-23: Removed BBB Accredited and EPA Lead-Safe claims — do not have either.
