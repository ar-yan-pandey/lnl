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
                Outbound, perfected: <span className="text-blue-600">seamlessly woven into your GTM</span> — never an afterthought.
              </h1>
              <p className="text-lg text-gray-700 mb-6">Most teams begin with the basics:</p>
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <ClipboardCheck className="h-12 w-12 text-blue-500 mb-2" />
                  <span className="text-sm">Purchase a contact list</span>
                </div>
                <div className="flex flex-col items-center">
                  <Loader2 className="h-12 w-12 text-green-500 mb-2" />
                  <span className="text-sm">Upload a generic sequence</span>
                </div>
                <div className="flex flex-col items-center">
                  <ClipboardCheck className="h-12 w-12 text-yellow-500 mb-2" />
                  <span className="text-sm">Send the same “Just checking in” message</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">The result?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <span>Activity that feels productive</span>
                </div>
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <span>Effort that looks impressive</span>
                </div>
                <div className="flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <span>But few actual meetings booked</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- Section: We reverse-engineer it --- */}
        <section className="section py-16 border-t">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Your ideal customer profile, decoded <span className="text-blue-600">using real data</span></h2>
            <p className="text-lg text-gray-700 mb-2">We begin by asking the questions that matter:</p>
            <p className="text-base text-gray-600 mb-8">Who are your top-converting customers, and what sparks their buying decisions?</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                <h4 className="font-bold mb-1">Who were they?</h4>
                <p className="text-gray-500 text-sm mb-1">industry, size, titles</p>
                <span className="text-xs text-gray-400 font-semibold">01</span>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-yellow-400 mb-2" />
                <h4 className="font-bold mb-1">What changed?</h4>
                <p className="text-gray-500 text-sm mb-1">new hire? funding? a switch in their stack?</p>
                <span className="text-xs text-gray-400 font-semibold">02</span>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-red-400 mb-2" />
                <h4 className="font-bold mb-1">What pain did they have?</h4>
                <p className="text-gray-500 text-sm mb-1">pain they talked about on that first call</p>
                <span className="text-xs text-gray-400 font-semibold">03</span>
              </div>
            </div>
            <div className="text-gray-600 text-base border-t pt-6">We build targeting logic from real customer journeys, not generic personas. That’s how we connect with the right people, at the right time.</div>
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
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">We source data like every lead could be your next big win <span className="text-blue-600">— quality over quantity.</span></h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Leverage top data sources <span className="font-normal">and proprietary scrapers</span></p>
                      <p className="text-gray-600 text-sm">We identify high-intent accounts using hiring signals, tech stack, funding, and even on-site activity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Cross-verified with our <span className="font-normal">Proprietary Master Account List</span></p>
                      <p className="text-gray-600 text-sm">A curated database of vetted, cleaned, and tagged companies across SaaS verticals.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Every contact is manually reviewed by our GTM experts before outreach.</p>
                    </div>
                  </li>
                </ul>
                <div className="text-gray-600 text-base border-t pt-6 mt-6">No more stale lists. You reach real people at the right companies, at the right moment.</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section: We personalize messages --- */}
        <section className="section py-16 border-t">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Personalized messaging <span className="text-blue-600">rooted in real buyer context</span></h2>
            <p className="text-lg text-gray-700 mb-10">Forget generic emails. Our campaigns are tailored with logic trees, not placeholders:</p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-2xl p-6 flex flex-col items-center">
                <Rocket className="h-14 w-14 text-yellow-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">If a company just raised a round</p>
                <h4 className="font-bold text-center">We focus on scale—not cost-cutting</h4>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-red-300 rounded-2xl p-6 flex flex-col items-center">
                <RefreshCcw className="h-14 w-14 text-red-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">If they hired their first RevOps</p>
                <h4 className="font-bold text-center">We address process complexity</h4>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-300 rounded-2xl p-6 flex flex-col items-center">
                <ShieldCheck className="h-14 w-14 text-purple-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">If they use a competitor you integrate with</p>
                <h4 className="font-bold text-center">We highlight your competitive edge</h4>
              </div>
            </div>
            <div className="text-gray-600 text-base border-t pt-6">We monitor company news, hiring, product launches, and website visits to time your outreach for maximum impact.</div>
            <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
              <div>
                <h3 className="text-xl font-bold mb-3">The result: Your prospects feel a genuine, relevant connection — <span className="text-blue-600">never a generic agency blast.</span></h3>
                
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
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Your outbound infrastructure, built and managed <span className="text-blue-600">the right way.</span></h2>
                <p className="text-lg text-gray-700 mb-6">Most outbound never even hits the inbox. We make sure yours does.</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">We set up <span className="font-normal">dedicated domains, subdomains, and IPs</span> for every campaign</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">We manage <span className="font-normal">warm-up, domain rotation, and inbox health</span></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Each client gets <span className="font-normal">dedicated infrastructure and risk profiles</span> per campaign</p>
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
                <div className="font-semibold">Who responded?</div>
                <span className="text-xs text-gray-400 font-semibold">01</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <CheckCircle className="h-8 w-8 text-yellow-400 mb-2" />
                <div className="font-semibold">What did they say?</div>
                <span className="text-xs text-gray-400 font-semibold">02</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                <div className="font-semibold">Did it book a meeting?</div>
                <span className="text-xs text-gray-400 font-semibold">03</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <CheckCircle className="h-8 w-8 text-red-400 mb-2" />
                <div className="font-semibold">Did it move to pipeline?</div>
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
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Smart automation <span className="text-blue-600">— human where it counts.</span></h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Pricing page visit? <span className="font-normal">We send a 1:1-style message 48 hours later.</span></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">New blog launch? <span className="font-normal">We trigger a tailored outbound sequence.</span></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Decision-maker changes jobs? <span className="font-normal">We run a win-back or referral play.</span></p>
                    </div>
                  </li>
                </ul>
                <div className="text-gray-600 text-base border-t pt-6 mt-6">We automate with Make.com, Smartlead, Airtable, and LinkedIn workflows. But messaging, data review, and handoffs? Always human.</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section: We book meetings --- */}
        <section className="section py-16 border-t bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">We book meetings that actually happen <span className="text-blue-600">— and your sales team wants.</span></h2>
            <p className="text-lg text-gray-700 mb-10 text-center">No endless emails. No lukewarm leads.</p>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-2xl p-6 flex flex-col items-center">
                <ClipboardCheck className="h-14 w-14 text-yellow-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">Every meeting is BANT-qualified or tightly matched to your ICP</p>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-red-300 rounded-2xl p-6 flex flex-col items-center">
                <CalendarCheck className="h-14 w-14 text-red-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">Our QA team reviews every calendar slot</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-300 rounded-2xl p-6 flex flex-col items-center">
                <Ban className="h-14 w-14 text-purple-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">No-shows or bad fits? We replace them — hassle-free.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-300 rounded-2xl p-6 flex flex-col items-center">
                <Info className="h-14 w-14 text-green-400 mb-3" />
                <p className="text-gray-700 text-center mb-2">Your sales team gets a full context pack before every call.</p>
              </div>
            </div>
            <div className="text-gray-600 text-base border-t pt-6 text-center">We don’t book meetings for vanity metrics — we build real pipeline.</div>
          </div>
        </section>

        {/* --- Section: Set and forget --- */}
        <section className="section py-16 border-t">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Weekly iteration — because outbound <span className="text-blue-600">is never set-and-forget.</span></h2>
                <p className="text-lg text-gray-700 mb-6">We meet weekly to review:</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">Response rates (positive, neutral, objections)</p>
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
                      <p className="font-semibold">What sequences work — and why</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-2"><i className="ri-arrow-right-up-line" /></span>
                    <div>
                      <p className="font-semibold">What’s on deck for testing</p>
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
                <h3 className="font-bold">Test: <span className="text-blue-600">What to Experiment With</span></h3>
                <p className="text-xs text-gray-500">Industry, company size, roles, regions, buying signals.</p>
                <span className="text-xs text-gray-400 font-semibold">01</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <Ship className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-bold">Ship: <span className="text-blue-600">When to Launch</span></h3>
                <p className="text-xs text-gray-500">Trigger events: new hires, funding, stack changes, expansions.</p>
                <span className="text-xs text-gray-400 font-semibold">02</span>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <RefreshCcw className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-bold">Iterate: <span className="text-blue-600">How to Improve</span></h3>
                <p className="text-xs text-gray-500">Messaging, objections, and pain points from sales calls.</p>
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
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What You Get</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>A bespoke outbound strategy designed for your ideal customer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Hand-verified, high-intent lead lists</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Tailored messaging and campaign flows</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Full setup and ongoing management of your outbound systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Weekly insights and continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center text-gray-400 text-sm pt-12">
          <p>Curious to see it in action? Reach out for a personalized walkthrough or request a demo.</p>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
