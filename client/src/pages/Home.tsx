import { Link } from "wouter";
import { ArrowRight, BadgeCheck, Bath, ChevronDown, Clock3, Droplets, Flame, House, MapPin, Phone, ShieldCheck, Sparkles, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, Seo, JsonLd } from "../App";

const services = [
  {title:"Emergency Plumbing", text:"A calm, rapid response for active leaks, burst pipes, and urgent plumbing issues.", icon:Zap, href:"/emergency-plumber"},
  {title:"Drain Cleaning", text:"Professional help for slow sinks, backed-up showers, recurring clogs, and sewer line issues.", icon:Droplets, href:"/drain-cleaning"},
  {title:"Leak Detection & Repair", text:"Accurate non-invasive detection and repair for hidden water leaks in walls and slabs.", icon:ShieldCheck, href:"/leak-detection-repair"},
  {title:"Water Heater Repair", text:"Restore hot water and address tank leaks, pilot issues, and inconsistent temperatures.", icon:Flame, href:"/water-heater-repair"},
  {title:"Water Heater Installation", text:"Expert installation of standard gas/electric tanks and high-efficiency tankless units.", icon:Sparkles, href:"/water-heater-installation"},
  {title:"Sewer Line Repair", text:"Solutions for tree root intrusion, line blockages, and main sewer backups.", icon:Wrench, href:"/sewer-line-repair"},
  {title:"Repiping Services", text:"Whole-home and partial pipe replacements with modern PEX or copper supply lines.", icon:House, href:"/repiping"},
  {title:"Toilet Repair", text:"Fix running, rocking, clogging, leaking, and disruptive toilet problems.", icon:Bath, href:"/toilet-repair"},
  {title:"Faucet Repair", text:"Quiet drips, replace cartridges, fix under-sink leaks, and upgrade kitchen/bath fixtures.", icon:Clock3, href:"/faucet-repair"},
  {title:"Garbage Disposal Repair", text:"Troubleshoot humming, jammed, leaking, or non-starting kitchen disposals.", icon:MapPin, href:"/garbage-disposal-repair"},
  {title:"Residential Plumbing", text:"Whole-home plumbing support for repairs, fixtures, leaks, and everyday maintenance.", icon:House, href:"/residential-plumbing"},
  {title:"Plumbing Repair", text:"Practical repair support for noisy, slow, leaking, or unreliable plumbing systems.", icon:Wrench, href:"/plumbing-repair"},
];

const faqs = [
  ["What areas does A2Z Plumbing serve?", "A2Z Plumbing is based in Fairfield, CA, and serves Fairfield, Suisun City, Vacaville, Vallejo, Benicia, Dixon, Rio Vista, American Canyon, Napa, and Martinez."],
  ["What should I do if water is actively leaking?", "If it is safe to do so, locate and shut off the nearest fixture valve or the main water shut-off valve, clear the area of valuables, and call us directly."],
  ["Do you handle both small repairs and major installations?", "Yes. We assist homeowners and businesses with everything from simple faucet drip repairs to full water heater installations, drain clearing, and whole-home repiping."],
  ["How quickly can you respond to an emergency in Fairfield?", "Because Fairfield is our home base, we prioritize urgent local calls and often arrive on the same day. Call +1 510-544-1054 for real-time dispatch availability."],
];

export default function Home(){
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "A2Z Plumbing LLC",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://www.a2zplumbingllc.com",
    "url": "https://www.a2zplumbingllc.com",
    "telephone": "+1-510-544-1054",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4970 Paramount Ct",
      "addressLocality": "Fairfield",
      "addressRegion": "CA",
      "postalCode": "94534",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.2144,
      "longitude": -122.1467
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://maps.app.goo.gl/9HrL1aAYbxrksA7t7"
    ],
    "areaServed": [
      { "@type": "City", "name": "Fairfield" },
      { "@type": "City", "name": "Suisun City" },
      { "@type": "City", "name": "Vacaville" },
      { "@type": "City", "name": "Vallejo" },
      { "@type": "City", "name": "Benicia" },
      { "@type": "City", "name": "Dixon" },
      { "@type": "City", "name": "Rio Vista" },
      { "@type": "City", "name": "American Canyon" },
      { "@type": "City", "name": "Napa" },
      { "@type": "City", "name": "Martinez" }
    ]
  };

  return (
    <>
      <Seo 
        title="A2Z Plumbing LLC | Plumber in Fairfield, CA" 
        description="A2Z Plumbing LLC provides reliable plumbing repairs, drain cleaning, water heater service, and emergency plumbing in Fairfield, CA. Call (510) 544-1054." 
      />
      <JsonLd data={localBusinessSchema} />
      
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-watermark">A2Z</div>
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow"><span className="eyebrow-dot"/> YOUR LOCAL PLUMBING SPECIALIST IN FAIRFIELD</div>
              <h1>Reliable Plumbing Services in Fairfield, CA</h1>
              <p className="hero-copy">Thoughtful, responsive plumbing services for Fairfield homes and businesses. From urgent leak repairs to water heaters and drain cleaning, we keep your day moving forward.</p>
              <div className="hero-actions">
                <Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a></Button>
                <a className="text-link light-link" href="#services">Explore services <ArrowRight size={16}/></a>
              </div>
              <div className="hero-proof">
                <span><ShieldCheck size={18}/> Licensed & Insured (#1132505)</span>
                <span><Clock3 size={18}/> 24/7 Emergency Service</span>
              </div>
            </div>
            <div className="hero-visual">
              <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85" alt="Professional plumber in Fairfield CA working under a sink" loading="eager"/>
              <div className="hero-card">
                <span className="hero-card-icon"><Sparkles size={19}/></span>
                <div><b>Need a plumber fast?</b><span>Direct support for Fairfield residents.</span></div>
                <a href={PHONE_TEL} aria-label="Call A2Z Plumbing LLC"><ArrowRight size={18}/></a>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span>Plumbing Repairs</span><i/> <span>Water Heaters</span><i/> <span>Drain Cleaning</span><i/> <span>Emergency Plumbing</span>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section scroll-reveal">
          <div className="container intro-grid">
            <div className="intro-number">01 <span>ABOUT A2Z</span></div>
            <div>
              <div className="eyebrow dark-eyebrow">LOCAL EXPERTISE & INTEGRITY</div>
              <h2>Your trusted local plumber in Fairfield, CA.</h2>
            </div>
            <div className="intro-copy">
              <p>When a plumbing issue arises, you want a local Fairfield plumber who listens carefully, explains the cause, and provides a straightforward solution. A2Z Plumbing LLC provides trusted residential and commercial plumbing support across Solano and Napa counties.</p>
              <a className="text-link" href="#why-us">Why local homeowners choose A2Z <ArrowRight size={16}/></a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section scroll-reveal">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow dark-eyebrow">OUR CORE SERVICES</div>
                <h2>Comprehensive plumbing services in Fairfield, CA.</h2>
              </div>
              <p>From routine maintenance to complex pipe repairs and water heater installations, we keep every detail clear and practical.</p>
            </div>
            <div className="service-grid">
              {services.map(({title, text, icon:Icon, href}) => (
                <Link href={href} className="service-card" key={title}>
                  <span className="icon-box"><Icon size={20}/></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="card-link">View Service <ArrowRight size={15}/></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Band */}
        <section className="feature-band scroll-reveal">
          <div className="container feature-grid">
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85" alt="Emergency plumbing repair work in Fairfield CA" loading="lazy"/>
              <div className="feature-stamp"><BadgeCheck size={18}/><span>Local<br/><b>service</b></span></div>
            </div>
            <div className="feature-copy">
              <div className="eyebrow">URGENT PLUMBING ASSISTANCE</div>
              <h2>24/7 Emergency Plumber in Fairfield, CA</h2>
              <p>Active leaks, burst pipes, and severe drain backups require an immediate, professional response. We provide direct phone support and rapid dispatch to prevent property damage.</p>
              <div className="feature-list">
                <span><span className="check">✓</span> Direct phone contact with a plumber</span>
                <span><span className="check">✓</span> Honest, upfront explanations</span>
                <span><span className="check">✓</span> Respect for your home and schedule</span>
              </div>
              <Button asChild className="btn-copper"><a href={PHONE_TEL}>Call Emergency Plumber <Phone size={16}/></a></Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="why-section scroll-reveal">
          <div className="container">
            <div className="why-heading">
              <div className="eyebrow dark-eyebrow">THE A2Z STANDARDS</div>
              <h2>Professional service without the runaround.</h2>
            </div>
            <div className="why-grid">
              <div className="why-item"><span>01</span><h3>Listen first</h3><p>We start by listening to your description of the symptoms and inspect the issue thoroughly.</p></div>
              <div className="why-item"><span>02</span><h3>Explain clearly</h3><p>We explain repair options and costs upfront so you can make an informed decision.</p></div>
              <div className="why-item"><span>03</span><h3>Respect the space</h3><p>We protect your floors, keep the workplace clean, and respect your routine.</p></div>
              <div className="why-item"><span>04</span><h3>Stay reachable</h3><p>Reach us directly whenever you have questions or need follow-up support.</p></div>
            </div>
          </div>
        </section>

        {/* Service Areas & NAP */}
        <section id="service-areas" className="areas-section scroll-reveal">
          <div className="container areas-grid">
            <div>
              <div className="eyebrow dark-eyebrow">OUR SERVICE COVERAGE</div>
              <h2>Serving Fairfield and Solano County.</h2>
              <p>A2Z Plumbing LLC is a licensed local plumbing company based in Fairfield, CA. We serve residential and commercial clients across Solano, Napa, and Contra Costa counties.</p>
              <div className="authority-details">
                <div className="detail-box"><MapPin size={20}/><div><strong>A2Z Plumbing LLC</strong><span>4970 Paramount Ct<br/>Fairfield, CA 94534</span></div></div>
                <div className="detail-box"><Phone size={20}/><div><strong>Direct Phone</strong><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></div></div>
                <div className="detail-box"><BadgeCheck size={20}/><div><strong>Licensed & Verified</strong><span>CA CSLB License #1132505<br/><small>(Exp 2/28/2027)</small></span></div></div>
                <div className="detail-box">
                  <House size={20}/>
                  <div>
                    <strong>Top Cities Served</strong>
                    <div className="area-links" style={{marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                      <Link href="/plumber-fairfield-ca"><MapPin size={13}/> Fairfield</Link>
                      <Link href="/plumber-suisun-city-ca"><MapPin size={13}/> Suisun City</Link>
                      <Link href="/plumber-vacaville-ca"><MapPin size={13}/> Vacaville</Link>
                      <Link href="/plumber-vallejo-ca"><MapPin size={13}/> Vallejo</Link>
                      <Link href="/plumber-benicia-ca"><MapPin size={13}/> Benicia</Link>
                      <Link href="/plumber-napa-ca"><MapPin size={13}/> Napa</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="authority-visual">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" alt="A2Z Plumbing LLC headquarters in Fairfield CA" className="authority-img" loading="lazy"/>
              <div className="map-frame" style={{height: '250px'}}>
                <iframe title="A2Z Plumbing LLC location map" src="https://www.google.com/maps?q=A2Z+Plumbing+LLC,+4970+Paramount+Ct,+Fairfield,+CA+94534&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                <a className="map-overlay" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={16}/> View on Google Maps <ArrowRight size={15}/></a>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="reviews-section scroll-reveal">
          <div className="container">
            <div className="section-heading review-heading">
              <div>
                <div className="eyebrow dark-eyebrow">CUSTOMER TESTIMONIALS</div>
                <h2>What local homeowners say about A2Z.</h2>
              </div>
              <div className="review-score">
                <strong>5.0 ★</strong>
                <span>Verified Google Rating<br/><small>Based on real customer feedback</small></span>
              </div>
            </div>
            <div className="review-grid">
              <blockquote>
                <div className="stars">★★★★★</div>
                <p>“We had a great experience with A2Z Plumbing. They were professional, courteous, and respectful of our home—especially wearing shoe covers while working. The pricing was transparent and fair. Highly recommended!”</p>
                <cite><strong>Monique Keana</strong><span>Fairfield Homeowner</span></cite>
              </blockquote>
              <blockquote>
                <div className="stars">★★★★★</div>
                <p>“Fast service, excellent workmanship. Took our emergency call at 6:00 PM and completed the fixture repair before 9:00 PM. Professional and reliable service.”</p>
                <cite><strong>Sim Manuta</strong><span>Local Resident</span></cite>
              </blockquote>
              <blockquote>
                <div className="stars">★★★★★</div>
                <p>“Super helpful team, arrived promptly after our call. Very professional, diagnosed the issue quickly, and left everything clean. Will definitely hire again.”</p>
                <cite><strong>Antje Worring</strong><span>Local Guide</span></cite>
              </blockquote>
              <blockquote>
                <div className="stars">★★★★★</div>
                <p>“Our toilet needed urgent repair and A2Z came out the very next day—even on a Sunday! Service was fast, clean, and the price was very reasonable.”</p>
                <cite><strong>Veronika Skrnjug</strong><span>Verified Review</span></cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="faq-section scroll-reveal">
          <div className="container faq-grid">
            <div>
              <div className="eyebrow dark-eyebrow">FREQUENTLY ASKED QUESTIONS</div>
              <h2>Plumbing questions answered.</h2>
              <p>Have questions about your plumbing issue or service options? We are always happy to help over the phone.</p>
              <Button asChild className="btn-navy"><a href={PHONE_TEL}>Call {PHONE_DISPLAY} <Phone size={16}/></a></Button>
            </div>
            <div className="faq-stack">
              {faqs.map(([q,a]) => (
                <details key={q}>
                  <summary>{q}<ChevronDown size={18}/></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta scroll-reveal">
          <div className="container final-cta-inner">
            <div>
              <div className="eyebrow">READY TO SCHEDULE SERVICE?</div>
              <h2>Speak directly with a licensed Fairfield plumber.</h2>
            </div>
            <Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a></Button>
          </div>
        </section>
      </div>
    </>
  );
}
