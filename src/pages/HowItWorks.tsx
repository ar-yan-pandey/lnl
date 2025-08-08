import React from "react";
import { ArrowUpRight, CheckCircle, XCircle, Loader2, Users, ClipboardCheck, RefreshCcw, MailCheck, MessageCircle, UserCheck, ShieldCheck, Repeat, Rocket, Star, CalendarCheck, Ban, Info, ListChecks, TestTube2, Ship, RefreshCw } from 'lucide-react';

// NOTE: Replace image src paths with your actual /images/... or public URLs
// and adjust Tailwind/JSX as needed for your design system.
const sections = [
  {
    title: "We build outbound like it’s part of your GTM - not a side project.",
    subtitle: "Most outbound starts with what’s easy:",
    list: [
      { img: "/images/buy-sequence.png", text: "Buy a list" },
      { img: "/images/load.png", text: "Load a sequence" },
      { img: "/images/copy-paste.png", text: "Copy-paste “Just circling back.”" },
    ],
    problem: {
      title: "Problem with most of the outbounds:",
      items: [
        { img: "/images/red-cros.png", text: "Feels productive" },
        { img: "/images/red-cros.png", text: "Looks busy" },
        { img: "/images/red-cros.png", text: "Books nothing" },
      ],
    },
  },
  // ... Add other sections here, following the same pattern, for brevity
];

const HowItWorks: React.FC = () => {
  // You can break this into smaller components if needed
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
                We build outbound like it’s part of <span className="text-blue-600">your GTM</span> – not a side project.
              </h1>
              <p className="text-lg text-gray-700 mb-6">Most outbound starts with what’s easy:</p>
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <ClipboardCheck className="h-12 w-12 text-blue-500 mb-2" />
                  <span className="text-sm">Buy a list</span>
                </div>
                <div className="flex flex-col items-center">
                  <Loader2 className="h-12 w-12 text-green-500 mb-2" />
                  <span className="text-sm">Load a sequence</span>
                </div>
                <div className="flex flex-col items-center">
                  <ClipboardCheck className="h-12 w-12 text-yellow-500 mb-2" />
                  <span className="text-sm">Copy-paste “Just circling back.”</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Problem with most of the outbounds:</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <span>Feels productive</span>
                </div>
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <span>Looks busy</span>
                </div>
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <span>Books nothing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- Section: We reverse-engineer it --- */}
        <section className="section py-16 border-t">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">We don’t guess your ICP – <span className="text-blue-600">We reverse-engineer it.</span></h2>
            <p className="text-lg text-gray-700 mb-2">Before anything goes live, we sit down and ask:</p>
            <p className="text-base text-gray-600 mb-8">“What do your best customers look like right before they buy?”</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                <h4 className="font-bold mb-1">Who They were?</h4>
                <p className="text-gray-500 text-sm mb-1">industry, size, titles</p>
                <span className="text-xs text-gray-400 font-semibold">01</span>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-yellow-400 mb-2" />
                <h4 className="font-bold mb-1">What Changed?</h4>
                <p className="text-gray-500 text-sm mb-1">new hire? funding? a switch in their stack?</p>
                <span className="text-xs text-gray-400 font-semibold">02</span>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-red-400 mb-2" />
                <h4 className="font-bold mb-1">What Pain?</h4>
                <p className="text-gray-500 text-sm mb-1">pain they talked about on that first call</p>
                <span className="text-xs text-gray-400 font-semibold">03</span>
              </div>
            </div>
            <div className="text-gray-600 text-base border-t pt-6">Then we build your targeting logic from that — not from a static persona deck. It’s how we know we’re talking to the right people at the right time.</div>
          </div>
        </section>

        {/* --- Section: We source data --- */}
        <section className="section py-16 border-t bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Users className="h-32 w-32 text-blue-400 mx-auto" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">We source data like we’re building your next <span className="text-blue-600">50 closed-wons.</span></h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Using relevant directories <span className="font-normal">and our internal scrapers</span></p>
                      <p className="text-gray-600 text-sm">we pull high-intent accounts based on hiring signals, tech stack, funding, and even recent activity on your site.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Then we cross-check everything against our <span className="font-normal">Proprietary Master Account List</span></p>
                      <p className="text-gray-600 text-sm">a curated set of companies we’ve manually vetted, cleaned, and tagged across key SaaS verticals (HRTech, FinTech, MarTech, etc.)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">And yes <span className="font-normal">— every contact is manually reviewed by our GTM team before anything is sent.</span></p>
                    </div>
                  </li>
                </ul>
                <div className="text-gray-600 text-base border-t pt-6 mt-6">You’re not blasting some stale Apollo list. You’re reaching real people at the right companies, when it matters.</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section: We personalize messages --- */}
        <section className="section py-16 border-t">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">We personalize messages <span className="text-blue-600">with real context</span></h2>
            <p className="text-lg text-gray-700 mb-10">If your email could go to anyone, it won’t work. We write campaigns based on logic trees, not placeholders:</p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-2xl p-6 flex flex-col items-center">
                <Rocket className="h-14 w-14 text-yellow-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">If a prospect’s company just raised</p>
                <h4 className="font-bold text-center">We talk scale, not savings</h4>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-red-300 rounded-2xl p-6 flex flex-col items-center">
                <RefreshCcw className="h-14 w-14 text-red-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">If they just hired their first RevOps</p>
                <h4 className="font-bold text-center">We hook into process complexity</h4>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-300 rounded-2xl p-6 flex flex-col items-center">
                <ShieldCheck className="h-14 w-14 text-purple-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">If they’re using a competitor you integrate with</p>
                <h4 className="font-bold text-center">We position your edge</h4>
              </div>
            </div>
            <div className="text-gray-600 text-base border-t pt-6">We also track RSS feeds (like store expansion, hiring updates, and product launches), layer in website visit data, and use that to time your outreach around moments that show buyer intent.</div>
            <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
              <div>
                <h3 className="text-xl font-bold mb-3">The result? Messages that feel like a peer reaching out – <span className="text-blue-600">not another agency shot in the dark.</span></h3>
                
              </div>
              <div>
                <MailCheck className="h-32 w-32 text-blue-400 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Section: Maintain your outbound --- */}
        <section className="section py-16 border-t bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">We build and maintain your outbound infrastructure <span className="text-blue-600">– properly.</span></h2>
                <p className="text-lg text-gray-700 mb-6">Most outbound dies before it reaches the inbox. We fix that.</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">We spin up <span className="font-normal">dedicated domains, subdomains, and IPs</span> for each campaign</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">We handle <span className="font-normal">warm-up, domain rotation, and inbox health monitoring</span></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">We use <span className="font-normal">dedicated infrastructure for each client, with separate risk profiles</span> per campaign</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <RefreshCw className="h-32 w-32 text-blue-400 mx-auto" />
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                <div className="font-semibold">Who Replied?</div>
                <span className="text-xs text-gray-400 font-semibold">01</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <CheckCircle className="h-8 w-8 text-yellow-400 mb-2" />
                <div className="font-semibold">What They Said?</div>
                <span className="text-xs text-gray-400 font-semibold">02</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                <div className="font-semibold">Whether It Booked?</div>
                <span className="text-xs text-gray-400 font-semibold">03</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <CheckCircle className="h-8 w-8 text-red-400 mb-2" />
                <div className="font-semibold">If it Moved to Pipeline?</div>
                <span className="text-xs text-gray-400 font-semibold">04</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section: Automate where it makes sense --- */}
        <section className="section py-16 border-t">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Repeat className="h-32 w-32 text-blue-400 mx-auto" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">We automate where it makes sense. <span className="text-blue-600">We keep it human where it doesn’t.</span></h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Someone visited your pricing page <span className="font-normal">they get a 1:1-style message 48 hours later</span></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Your blog RSS feed updates with a new launch <span className="font-normal">we trigger an outbound sequence tailored to that theme</span></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">A decision-maker changes jobs <span className="font-normal">we run a win-back or referral play</span></p>
                    </div>
                  </li>
                </ul>
                <div className="text-gray-600 text-base border-t pt-6 mt-6">All of this is powered by Make.com, Smartlead, Airtable automations, LinkedIn workflows, and clean webhook logic. But when it comes to writing messages, qualifying data, and handoffs? That stays human. Every time.</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section: We book meetings --- */}
        <section className="section py-16 border-t bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">We book meetings that show up and <span className="text-blue-600">that sales is happy to take.</span></h2>
            <p className="text-lg text-gray-700 mb-10 text-center">No shady back-and-forths. No “kind of interested” replies.</p>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-2xl p-6 flex flex-col items-center">
                <ClipboardCheck className="h-14 w-14 text-yellow-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">Every meeting is BANT-qualified or tightly ICP matched</p>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-red-300 rounded-2xl p-6 flex flex-col items-center">
                <CalendarCheck className="h-14 w-14 text-red-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">Our QA team manually checks each calendar slot</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-300 rounded-2xl p-6 flex flex-col items-center">
                <Ban className="h-14 w-14 text-purple-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">If it’s a no-show or the fit is wrong, we replace it — no hassle</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-300 rounded-2xl p-6 flex flex-col items-center">
                <Info className="h-14 w-14 text-green-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">And we send your sales team a full context pack before each call</p>
              </div>
            </div>
            <div className="text-gray-600 text-base border-t pt-6 text-center">We’re not here to book meetings for the sake of numbers — we’re here to build your pipeline.</div>
          </div>
        </section>

        {/* --- Section: Set and forget --- */}
        <section className="section py-16 border-t">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">We iterate weekly, because outbound <span className="text-blue-600">isn’t set-and-forget.</span></h2>
                <p className="text-lg text-gray-700 mb-6">We meet with you (or your GTM lead) every week and go over:</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Response rates (positive vs. neutral vs. objection)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Meetings booked vs. messaging angles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">What sequences are working and why</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">What we’re testing next</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <RefreshCcw className="h-32 w-32 text-blue-400 mx-auto" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <TestTube2 className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-bold">Test: <span className="text-blue-600">What to test</span></h3>
                <p className="text-xs text-gray-500">Industry, company size, roles/titles, regions, and buying signals.</p>
                <span className="text-xs text-gray-400 font-semibold">01</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <Ship className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-bold">Ship: <span className="text-blue-600">When to ship</span></h3>
                <p className="text-xs text-gray-500">Trigger events like new hires, funding, tech stack changes, or office expansions.</p>
                <span className="text-xs text-gray-400 font-semibold">02</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <RefreshCcw className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-bold">Iterate: <span className="text-blue-600">What to improve</span></h3>
                <p className="text-xs text-gray-500">Messaging angles, objections heard, and pain points shared in sales calls.</p>
                <span className="text-xs text-gray-400 font-semibold">03</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section: What you get --- */}
        <section className="section py-16 border-t bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Star className="h-32 w-32 text-yellow-400 mx-auto" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What You’ll Get</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Custom outbound plan tailored to your ICP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Verified, intent-based lead lists</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Personalized campaign copy and logic trees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Full infrastructure setup and ongoing management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Weekly reporting and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center text-gray-400 text-sm pt-12">
          <p>For a full walkthrough, contact us or request a demo.</p>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
