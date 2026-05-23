# Alvy Color Changes — Business Context

> This file is the **single source of truth** for the auto-update agent and the
> chatbot. Edit it freely. The agent re-reads it every run and proposes site
> updates (copy, services, FAQ, rotating headlines) to keep the public site in
> sync with whatever you write here.
>
> Plain English is fine. Bullet points are fine. The agent understands prose.

## 1. The company in one sentence
Alvy Color Changes is a painting and color-transformation company that turns
tired homes and businesses into spaces people are excited to walk into.

## 2. Who we serve
- Homeowners refreshing interiors or curb appeal before selling, renting, or
  just enjoying a new chapter.
- Property managers who need a reliable, on-time, on-budget painter for unit
  turns and common-area refreshes.
- Small business owners (cafés, salons, boutiques) who want a space that feels
  on-brand without hiring a designer.
- Anyone stuck on color choice and willing to pay for help making the room
  *feel* the way they imagined.

## 3. Services we offer
- **Interior painting** — walls, trim, ceilings, accent walls, cabinets.
- **Exterior painting** — siding, doors, fences, stucco refresh.
- **Cabinet refinishing** — kitchen + bath, sprayed for a factory finish.
- **Color consultations** — 45-minute session, samples on the wall, written
  palette recommendations. ($150, credited back if we get the job.)
- **Commercial / property-manager unit turns** — fast, repeatable, paint+patch.
- **Wallpaper removal & drywall repair** as add-ons.

## 4. What makes us different (the wedge)
- We treat color choice as the actual product. Most painters hand you a fan
  deck and shrug. We walk the rooms with you, talk light direction, samples
  go up overnight, and you decide with confidence.
- We show up when we say we will. Estimates within 24 hours, start dates
  honored, jobs finished on the day promised.
- Clean job sites — drop cloths, daily clean-up, no paint on the lawn.
- Real photos of past work, not stock images.

## 5. Service area
> EDIT ME: list the cities/zip codes you actually cover.
- Primary: [your city + 25-mile radius]
- Secondary (with travel fee): [neighboring towns]

## 6. Pricing posture (for the chatbot — don't quote exact numbers)
- We give a free estimate after a short Q&A or a site visit.
- Color consultation is $150, credited to the job if booked.
- We're not the cheapest in town and we don't pretend to be — we're the
  one you call when you want it done right the first time.

## 7. Brand voice
- Warm, confident, a little playful. We talk like a friend who happens to
  paint for a living.
- No corporate filler. No "synergize." No exclamation-point spam.
- Specific over generic — "a 12-hour cabinet refinish" beats "premium service."
- We make color feel fun, not intimidating.

## 8. Rotating headline keywords
The hero on the landing page reads: "The right place to find a ____."
Cycle through this list (and add seasonal ones — Christmas accent walls,
spring exterior touch-ups, etc.). The agent will refresh this list each run.

- painter
- contractor you'll actually call back
- color consultant who knows your lighting
- cabinet refinisher
- crew that shows up on Monday
- "what color should I paint this?" person
- finish that doesn't peel in two years
- second opinion before you commit
- favorite painter you've ever had

## 9. Chatbot guardrails
The chatbot is a lead-qualifying assistant, not a quote generator.

It SHOULD:
- Answer painting and contracting questions in plain English.
- Be specific about prep, paint types, dry times, finishes.
- Ask for the person's name, phone/email, address, and what they're trying
  to do once the conversation has any depth.
- Confirm we'll follow up within 1 business day.
- Offer the color consultation as a low-friction next step when someone
  seems stuck on color choice.

It SHOULD NOT:
- Quote an exact price for a job.
- Promise specific start dates.
- Diagnose structural problems sight-unseen.
- Pretend to be human if asked directly.

## 10. FAQ (the chatbot uses these as anchor answers)
- **How much does it cost to paint a room?** Most interior rooms fall in a
  reasonable range based on size, prep needed, ceiling height, and color
  changes. We give a free estimate after a quick walkthrough — usually
  within 24 hours.
- **How long does it take?** A single room is usually 1–2 days. A full
  interior repaint of a 3-bed house is typically 4–6 days. Cabinets are
  3–5 days including dry time between coats.
- **Do you move furniture?** Yes, we move it to the center of the room and
  cover it. We ask you to take down wall art and valuables.
- **What paint do you use?** Mid- to high-grade Benjamin Moore and Sherwin
  Williams by default. We can match whatever spec you bring us.
- **Will you help me pick colors?** Yes — that's literally the name of the
  company. Book a color consultation and we'll bring samples to your space.
- **Do you do exteriors in winter?** Only when temps allow. We schedule
  exterior work warm-season and use the off-season for interior + cabinets.

## 11. Lead-qualification rubric
A conversation becomes a "lead" worth notifying you about when the chatbot
has collected at least:
1. A name
2. A phone OR email
3. A rough description of the project (room, scope, timeline)

When all three exist, the chatbot calls the lead endpoint and you get a
ping in Monday + the Sheet.

## 12. What's on the public site
The agent maintains these sections on the landing page:
- Hero with rotating-keyword headline + chatbot CTA
- "What we do" services grid (drawn from §3)
- "Why us" three-column wedge (drawn from §4)
- Recent projects (links to /projects, future work)
- FAQ (drawn from §10)
- Contact / book a free estimate

## 13. Recent updates / notes for the agent
> Add lines here whenever something changes. The agent reads them and
> uses them to update the site or the rotating-headline list.
- 2026-05: Launching the auto-updating site + chatbot funnel.
