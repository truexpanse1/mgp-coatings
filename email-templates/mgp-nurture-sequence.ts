/**
 * MGP Coatings — Google Ads Nurture Sequence
 *
 * 7 emails over 30 days, triggered when a lead downloads a guide from a /lp/ page.
 * Delivered through GHL after contact + tag creation.
 *
 * Token substitutions (GHL auto-fills {{contact.xxx}}):
 * - {{contact.first_name}}
 * - {{contact.email}}
 * - Manual tokens below are service-specific (replace at workflow setup time per lead magnet tag).
 */

export interface NurtureEmail {
  day: number;
  subject: string;
  preheader: string;
  body: string;
}

const WRAP_OPEN = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f1e8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#222;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
<div style="padding:24px 32px;background:#0f0f0f;text-align:center;">
<a href="https://mgpcoatings.solutions" style="color:#c8a96e;font-weight:700;text-decoration:none;font-size:18px;letter-spacing:0.05em;">MGP COATINGS</a>
<div style="color:#f5f1e8;opacity:0.7;font-size:11px;margin-top:4px;text-transform:uppercase;letter-spacing:0.12em;">San Luis Obispo County · 30+ Years</div>
</div>
<div style="padding:32px 32px 12px 32px;font-size:16px;line-height:1.7;">`;

const WRAP_CLOSE = `</div>
<div style="padding:24px 32px 32px 32px;border-top:1px solid #eee;font-size:13px;color:#666;line-height:1.6;">
<p style="margin:0 0 8px;"><strong>MGP Coatings</strong> · Matt Gifford, Owner<br>
<a href="tel:+18059525301" style="color:#0f0f0f;">(805) 952-5301</a> ·
<a href="https://mgpcoatings.solutions" style="color:#0f0f0f;">mgpcoatings.solutions</a><br>
Licensed #1061424 · San Luis Obispo County, CA</p>
<p style="margin:12px 0 0;font-size:11px;color:#999;">You received this because you downloaded a free guide at mgpcoatings.solutions.
<br><a href="{{unsubscribe_url}}" style="color:#999;">Unsubscribe</a></p>
</div>
</div>
</body></html>`;

const cta = (label: string, href: string) =>
  `<p style="text-align:center;margin:28px 0;"><a href="${href}" style="display:inline-block;background:#c8a96e;color:#0f0f0f;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:6px;text-transform:uppercase;letter-spacing:0.1em;font-size:13px;">${label}</a></p>`;

export const mgpNurtureSequence: NurtureEmail[] = [
  {
    day: 0,
    subject: "Your {{lead_magnet_title}} — here's your guide",
    preheader: "Plus 3 things to read before any contractor walks your property.",
    body: `${WRAP_OPEN}
<p>Hey {{contact.first_name}},</p>
<p>Thanks for grabbing the guide. Here it is — save it somewhere you'll actually find it when a contractor comes by:</p>
${cta("Open the Guide", "{{lead_magnet_url}}")}
<p>Three things worth knowing before you get on the phone with anyone:</p>
<ol>
<li><strong>85% of coating failures are prep problems, not product problems.</strong> Ask every contractor to walk you through their prep in detail. Vagueness is the biggest red flag.</li>
<li><strong>Polyaspartic ≠ epoxy.</strong> For Central Coast sun and heat, the top coat matters more than the primer. Cheap epoxy yellows and fails in 18-36 months here.</li>
<li><strong>"Lifetime warranty" without a written document is meaningless.</strong> Always ask to see the warranty on paper before signing.</li>
</ol>
<p>If you want to skip the research and just get a free on-site estimate, Matt does them himself — no sales reps, no pressure:</p>
${cta("Get My Free Estimate", "https://mgpcoatings.solutions/lp/{{lp_slug}}/#estimate")}
<p>Talk soon,<br>
<strong>Matt Gifford</strong><br>
Owner, MGP Coatings<br>
<em>30+ years of concrete coatings in SLO County</em></p>
${WRAP_CLOSE}`,
  },
  {
    day: 2,
    subject: "Quick intro — I'm Matt (and why I do this myself)",
    preheader: "30 years of coating concrete. Every job, still on my hands.",
    body: `${WRAP_OPEN}
<p>Hey {{contact.first_name}},</p>
<p>Quick note so you know who's on the other end of these emails.</p>
<p>My name is Matt Gifford. I've been coating concrete on the Central Coast for 30+ years. MGP is my company, and unlike most coating companies, <strong>I don't send a crew</strong>. Every job is done by me.</p>
<p>Here's why that matters for you:</p>
<ul>
<li>The person who bids the job also installs the job. No surprises, no "B team."</li>
<li>If something goes wrong, it's on me — no subcontractor to blame.</li>
<li>I only take on what I can personally deliver. That caps us at about 3 jobs per week, which keeps quality tight.</li>
</ul>
<p>It also means I say no to a fair number of jobs. If the concrete isn't worth coating or the timeline won't work, I'll tell you — even if I lose the sale.</p>
<p>That's how 94 five-star reviews happen.</p>
<p>If you've got questions about your specific project, just reply to this email. I read every one.</p>
<p>— Matt<br>
<em>(805) 952-5301</em></p>
${WRAP_CLOSE}`,
  },
  {
    day: 5,
    subject: "Why most DIY epoxy jobs fail within 18 months",
    preheader: "The three reasons, and why they apply to contractor work too.",
    body: `${WRAP_OPEN}
<p>Hey {{contact.first_name}},</p>
<p>If you're considering the Home Depot route, here's what's worth knowing:</p>
<p><strong>The DIY kit trap isn't about the kit. It's about the prep.</strong></p>
<p>Consumer kits come with acid-etch instructions. Acid etch opens the top 100 microns of concrete. That's it. Professional prep uses diamond grinding to open 3-5 mm of concrete — 30-50× more surface area for the coating to bond to.</p>
<p>Here's what happens when you skip proper prep (whether you're a homeowner or a cut-rate contractor):</p>
<p><strong>Month 1-6:</strong> Looks great. You're happy.</p>
<p><strong>Month 6-18:</strong> First hot tire pickup. Small chip by the garage door. UV yellowing starts in the sunny corner.</p>
<p><strong>Month 18-36:</strong> Peeling in patches. The product didn't fail — the adhesion did.</p>
<p><strong>Month 36+:</strong> Remove-and-redo. Removal alone runs $1,000-$2,500.</p>
<p>The same thing happens with underpriced contractor work. If the quote is dramatically below market, something's being skipped, and 9 times out of 10 it's prep.</p>
<p>The $300 DIY kit that turns into a $5,000 remove-and-redo? That's not rare. That's the median outcome.</p>
${cta("Get a Pro Quote That Covers Prep", "https://mgpcoatings.solutions/lp/{{lp_slug}}/#estimate")}
<p>— Matt</p>
${WRAP_CLOSE}`,
  },
  {
    day: 9,
    subject: "Real project: a Templeton garage from cracked to showroom",
    preheader: "What it cost, what took 2 days, and what the homeowner said.",
    body: `${WRAP_OPEN}
<p>Hey {{contact.first_name}},</p>
<p>Thought you'd like to see what a real job looks like start to finish.</p>
<p><strong>Templeton, 3-car garage, 750 sqft.</strong></p>
<p><em>What we started with:</em> Badly cracked concrete, oil staining in 4 spots, previous homeowner had tried a DIY kit that was peeling in sheets.</p>
<p><em>What we did:</em></p>
<ul>
<li>Day 1 (morning): Mechanical strip of the failed DIY coating. Full diamond grind. Moisture test.</li>
<li>Day 1 (afternoon): Structural epoxy crack repair. Full vacuum-down. Primer coat went down at 3pm.</li>
<li>Day 2 (morning): Broadcast chip blend (custom tan/gray/black mix the homeowner picked from samples).</li>
<li>Day 2 (afternoon): Polyaspartic topcoat. Satin finish. Walked them through aftercare.</li>
</ul>
<p><em>Cost:</em> $5,400 all in.</p>
<p><em>Timeline:</em> Drove on it 3 days after finish. Full cure at 7 days.</p>
<p><em>What the homeowner said 6 months later:</em></p>
<blockquote style="border-left:4px solid #c8a96e;padding:12px 20px;margin:20px 0;background:#faf6eb;font-style:italic;">
"Oil drips wipe off with a paper towel. We sold the house 5 months after Matt did the floor, and the garage was the #1 thing buyers mentioned. Worth every dollar."
</blockquote>
<p>This is the level of work that makes the 15-year warranty possible. Cheap coatings can't back a warranty like that.</p>
${cta("Get My Free Estimate", "https://mgpcoatings.solutions/lp/{{lp_slug}}/#estimate")}
<p>— Matt</p>
${WRAP_CLOSE}`,
  },
  {
    day: 14,
    subject: "The $1,319 bonus stack (ends this month)",
    preheader: "What you get when you book your free consultation by month end.",
    body: `${WRAP_OPEN}
<p>Hey {{contact.first_name}},</p>
<p>Wanted to make sure you saw what's on the table for folks who book this month.</p>
<p><strong>Book your free on-site consultation by the end of the month → get $1,319 in bonuses, free:</strong></p>
<table width="100%" style="border-collapse:collapse;margin:20px 0;">
<tr><td style="padding:10px 0;border-bottom:1px solid #eee;">✓ In-Home Color &amp; Finish Consultation</td><td align="right" style="padding:10px 0;border-bottom:1px solid #eee;color:#c8a96e;font-weight:600;">$497</td></tr>
<tr><td style="padding:10px 0;border-bottom:1px solid #eee;">✓ Mailed Sample Kit (3 colors, flake, metallic)</td><td align="right" style="padding:10px 0;border-bottom:1px solid #eee;color:#c8a96e;font-weight:600;">$47</td></tr>
<tr><td style="padding:10px 0;border-bottom:1px solid #eee;">✓ Diamond-Ground Professional Surface Prep</td><td align="right" style="padding:10px 0;border-bottom:1px solid #eee;color:#c8a96e;font-weight:600;">$200</td></tr>
<tr><td style="padding:10px 0;border-bottom:1px solid #eee;">✓ 15-Year Material + Workmanship Warranty</td><td align="right" style="padding:10px 0;border-bottom:1px solid #eee;color:#c8a96e;font-weight:600;">$500</td></tr>
<tr><td style="padding:10px 0;border-bottom:1px solid #eee;">✓ Aftercare Kit (stain remover + touch-up)</td><td align="right" style="padding:10px 0;border-bottom:1px solid #eee;color:#c8a96e;font-weight:600;">$75</td></tr>
<tr><td style="padding:14px 0;font-weight:700;">TOTAL VALUE</td><td align="right" style="padding:14px 0;font-weight:700;color:#c8a96e;font-size:20px;">$1,319</td></tr>
</table>
<p><strong>Plus the triple guarantee:</strong></p>
<ul>
<li><strong>15-year written warranty.</strong> If it peels, chips, or fails — we redo it. Free.</li>
<li><strong>Price-match + 10%.</strong> Any licensed contractor's written quote — we beat it by 10% or pay you $100.</li>
<li><strong>Done-in-2-days or day 3 is free.</strong> We don't miss the window.</li>
</ul>
<p>This offer runs monthly, so if you miss it, you'll catch the next one — but slots fill fast and I only take 3 garage / 2 pool deck / 2 driveway projects per week.</p>
${cta("Claim the $1,319 Stack", "https://mgpcoatings.solutions/lp/{{lp_slug}}/#estimate")}
<p>— Matt</p>
${WRAP_CLOSE}`,
  },
  {
    day: 21,
    subject: "Slots for this month — here's where we are",
    preheader: "Real numbers. Real scarcity. Not marketing.",
    body: `${WRAP_OPEN}
<p>Hey {{contact.first_name}},</p>
<p>Quick note because I know you've been thinking about this.</p>
<p>I install every job myself. That caps us at a firm number of slots per week:</p>
<ul>
<li><strong>3 garage floor projects</strong></li>
<li><strong>2 pool deck projects</strong></li>
<li><strong>2 driveway projects</strong></li>
</ul>
<p>This isn't scarcity marketing. It's physics — there's only one of me. I'd rather turn work away than rush a job.</p>
<p>For the remaining slots this month, I'm booking into the second half of next month. If you want to lock in current month pricing and the $1,319 bonus stack, now's the time.</p>
<p>Two options:</p>
<ol>
<li><strong>Book your free estimate online:</strong> takes 2 minutes, I call you to schedule a time that works.</li>
<li><strong>Call me directly:</strong> <a href="tel:+18059525301" style="color:#c8a96e;font-weight:600;">(805) 952-5301</a>. I'll answer if I'm not on a job.</li>
</ol>
${cta("Book My Free Estimate", "https://mgpcoatings.solutions/lp/{{lp_slug}}/#estimate")}
<p>If it's not the right time, no hard feelings — reply to this email and I'll pause these and drop you to my monthly newsletter so you stay in the loop.</p>
<p>— Matt</p>
${WRAP_CLOSE}`,
  },
  {
    day: 30,
    subject: "Last note from me (for now)",
    preheader: "No pressure. Here's what to do when you're ready.",
    body: `${WRAP_OPEN}
<p>Hey {{contact.first_name}},</p>
<p>This is the last email in this series from me. I'm not going to keep filling your inbox if you're not ready yet.</p>
<p>Three things to keep in mind for whenever that day comes:</p>
<ol>
<li><strong>Concrete degrades every month you wait.</strong> A $4,000 garage today is a $6,000 garage-plus-concrete-repair in three years.</li>
<li><strong>Written warranty is non-negotiable.</strong> Whoever you hire — us or anyone else — get it in writing. No verbal promises.</li>
<li><strong>The $1,319 bonus stack runs every month.</strong> You haven't missed it permanently. Just keep it in mind when you're ready to book.</li>
</ol>
<p>After this, I'll drop you to my monthly newsletter — seasonal tips, real project photos, things worth knowing about Central Coast concrete. You can unsubscribe any time.</p>
<p>Or if you want to skip the wait and book now:</p>
${cta("Get My Free Estimate", "https://mgpcoatings.solutions/lp/{{lp_slug}}/#estimate")}
<p>Either way — thanks for reading. I appreciate you taking the time.</p>
<p>— Matt Gifford<br>
Owner, MGP Coatings<br>
<a href="tel:+18059525301" style="color:#c8a96e;">(805) 952-5301</a></p>
${WRAP_CLOSE}`,
  },
];

export default mgpNurtureSequence;
