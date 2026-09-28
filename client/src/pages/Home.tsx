import { Link } from "wouter";
import { ArrowRight, BadgeCheck, Bath, ChevronDown, Clock3, Droplets, Flame, House, MapPin, Phone, ShieldCheck, Sparkles, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainServices, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, Seo, JsonLd } from "../App";

const services = [
  {title:"Residential Plumbing", text:"Whole-home plumbing support for repairs, fixtures, leaks, and everyday issues.", icon:House, href:"/residential-plumbing-fairfield-ca"},
  {title:"Emergency Plumber", text:"A calm, direct response for active leaks, burst pipes, and urgent plumbing problems.", icon:Zap, href:"/emergency-plumber-fairfield-ca"},
  {title:"Plumbing Repair", text:"Practical repair support for noisy, slow, leaking, or unreliable plumbing systems.", icon:Wrench, href:"/plumbing-repair-fairfield-ca"},
  {title:"Drain Cleaning", text:"Help with slow sinks, backed-up showers, recurring clogs, and drain concerns.", icon:Droplets, href:"/drain-cleaning-fairfield-ca"},
  {title:"Leak Detection & Repair", text:"Find the source of visible moisture, unexplained water, and active leaks.", icon:ShieldCheck, href:"/leak-detection-repair-fairfield-ca"},
  {title:"Water Heater Repair", text:"Restore hot water and address inconsistent temperatures, sounds, and leaks.", icon:Flame, href:"/water-heater-repair-fairfield-ca"},
  {title:"Water Heater Installation", text:"Plan a safe, tidy water-heater installation that fits your home and routine.", icon:Sparkles, href:"/water-heater-installation-fairfield-ca"},
  {title:"Toilet Repair", text:"Fix running, rocking, clogging, leaking, and other disruptive toilet problems.", icon:Bath, href:"/toilet-repair-fairfield-ca"},
  {title:"Faucet Repair", text:"Quiet drips, loose handles, under-sink leaks, and everyday fixture issues.", icon:Clock3, href:"/faucet-repair-fairfield-ca"},
  {title:"Garbage Disposal Repair", text:"Troubleshoot humming, jammed, leaking, or non-starting kitchen disposals.", icon:MapPin, href:"/garbage-disposal-repair-fairfield-ca"},
];

const faqs = [
  ["What areas does A2Z Plumbing serve?", "A2Z Plumbing is based in Fairfield and also serves nearby Suisun City. Call to confirm availability for your address."],
  ["What should I do if water is actively leaking?", "If it is safe, turn off the nearest fixture valve or the main water supply, move belongings away from the water, and call directly."],
  ["Can you help with both small and larger plumbing issues?", "Yes. Customers call about everyday fixture repairs, drains, leaks, water heaters, and larger system questions such as repiping."],
  ["How do I reach A2Z Plumbing?", "Call +1 510-701-2472. A direct conversation helps us understand what is happening and the most useful next step."],
];

export default function Home(){
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "A2Z Plumbing LLC",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://www.a2zplumbingllc.com",
    "url": "https://www.a2zplumbingllc.com",
    "telephone": "+1-510-701-2472",
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
      "https://maps.app.goo.gl/95T4H9T4bQyV8jW99"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Fairfield",
        "sameAs": "https://en.wikipedia.org/wiki/Fairfield,_California"
      },
      {
        "@type": "City",
        "name": "Suisun City"
      },
      {
        "@type": "City",
        "name": "Vacaville"
      },
      {
        "@type": "City",
        "name": "Vallejo"
      }
    ]
  };

 return <><Seo title="Plumber in Fairfield, CA | A2Z Plumbing LLC" description="A2Z Plumbing LLC provides professional plumbing services in Fairfield, CA, including plumbing repairs, drain services, water heater services and more. Call (510) 701-2472." /><JsonLd data={localBusinessSchema} /><div className="home"><section className="hero"><div className="hero-watermark">A2Z</div><div className="container hero-grid"><div className="hero-content"><div className="eyebrow"><span className="eyebrow-dot"/> YOUR TRUSTED PLUMBING COMPANY IN FAIRFIELD CA</div><h1>Professional Plumber in Fairfield, CA</h1><p className="hero-copy">Thoughtful, responsive plumbing services in Fairfield CA for homes and businesses. Let us keep your day moving.</p><div className="hero-actions"><Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call Now</a></Button><a className="text-link light-link" href="#services">Explore services <ArrowRight size={16}/></a></div><div className="hero-proof"><span><ShieldCheck size={18}/> Clear communication</span><span><Clock3 size={18}/> Open 24 hours</span></div></div><div className="hero-visual"><img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85" alt="Professional plumber in Fairfield CA working under a sink"/><div className="hero-card"><span className="hero-card-icon"><Sparkles size={19}/></span><div><b>Need a plumber?</b><span>Let’s talk through it.</span></div><a href={PHONE_TEL}><ArrowRight size={18}/></a></div></div></div><div className="hero-bottom"><div className="container hero-bottom-inner"><span>Plumbing repairs</span><i/> <span>Water heaters</span><i/> <span>Drain cleaning</span><i/> <span>Emergency help</span></div></div></section>
 <section className="intro-section scroll-reveal"><div className="container intro-grid"><div className="intro-number">01 <span>ABOUT A2Z</span></div><div><div className="eyebrow dark-eyebrow">THE PRACTICAL DIFFERENCE</div><h2>Your local plumber in Fairfield for honest service.</h2></div><div className="intro-copy"><p>When something goes wrong, you want a local plumber in Fairfield who listens, explains what may be happening, and helps you decide on the next step. A2Z Plumbing LLC provides expert support, whether you need a residential plumber in Fairfield CA for your home or reliable commercial plumbing Fairfield CA for your business.</p><a className="text-link" href="#why-us">Why homeowners call A2Z <ArrowRight size={16}/></a></div></div></section>
 <section id="services" className="services-section scroll-reveal"><div className="container"><div className="section-heading"><div><div className="eyebrow dark-eyebrow">WHAT WE HANDLE</div><h2>Comprehensive plumbing services in Fairfield CA.</h2></div><p>From routine maintenance to complex plumbing repair in Fairfield CA, we keep the details clear and the work focused on the problem in front of you.</p></div><div className="service-grid">{services.map(({title,text,icon:Icon,href})=><Link href={href} className="service-card" key={title}><span className="icon-box"><Icon size={20}/></span><h3>{title}</h3><p>{text}</p><span className="card-link">{title} <ArrowRight size={15}/></span></Link>)}</div></div></section>
  <section className="feature-band scroll-reveal"><div className="container feature-grid"><div className="feature-image"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85" alt="Plumbing tools and emergency plumbing repair work in Fairfield CA"/><div className="feature-stamp"><BadgeCheck size={18}/><span>Local<br/><b>service</b></span></div></div><div className="feature-copy"><div className="eyebrow">WHEN IT MATTERS</div><h2>Fast answers from an emergency plumber in Fairfield CA.</h2><p>A leak under the sink. A drain that will not clear. A water heater that goes cold. You do not need more confusion—you need a reliable emergency plumber in Fairfield CA to help you find a calm place to start.</p><div className="feature-list"><span><span className="check">✓</span> Direct phone support</span><span><span className="check">✓</span> Straightforward next steps</span><span><span className="check">✓</span> Respect for your home</span></div><Button asChild className="btn-copper"><a href={PHONE_TEL}>Speak with a plumber <Phone size={16}/></a></Button></div></div></section>
 <section id="why-us" className="why-section scroll-reveal"><div className="container"><div className="why-heading"><div className="eyebrow dark-eyebrow">WHY A2Z</div><h2>Professional without the runaround.</h2></div><div className="why-grid"><div className="why-item"><span>01</span><h3>Listen first</h3><p>We start with your description of the problem and the context around it.</p></div><div className="why-item"><span>02</span><h3>Explain clearly</h3><p>We keep the conversation practical, so you can make an informed decision.</p></div><div className="why-item"><span>03</span><h3>Respect the space</h3><p>Thoughtful work includes care for your home, your time, and your routine.</p></div><div className="why-item"><span>04</span><h3>Stay reachable</h3><p>Call directly when something changes or you need help deciding what is urgent.</p></div></div></div></section>
 <section id="service-areas" className="areas-section scroll-reveal"><div className="container areas-grid"><div><div className="eyebrow dark-eyebrow">YOUR LOCAL FAIRFIELD PLUMBING COMPANY</div><h2>Dedicated to Fairfield and Solano County.</h2><p>A2Z Plumbing LLC is a licensed, professional plumbing company based right here in Fairfield, CA. We provide honest, clear, and reliable plumbing repairs to our neighbors across the region.</p><div className="authority-details"><div className="detail-box"><MapPin size={20}/><div><strong>A2Z Plumbing LLC</strong><span>4970 Paramount Ct<br/>Fairfield, CA 94534</span></div></div><div className="detail-box"><Phone size={20}/><div><strong>Direct Support</strong><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></div></div><div className="detail-box"><BadgeCheck size={20}/><div><strong>Licensed & Verified</strong><span>CA CSLB License #1132505<br/><small>(Exp 2/28/2027)</small></span></div></div><div className="detail-box"><House size={20}/><div><strong>Service Areas</strong><span>Fairfield, Suisun City & beyond.</span><div className="area-links" style={{marginTop: '8px'}}><Link href="/plumber-fairfield-ca"><MapPin size={15}/> Fairfield <ArrowRight size={14}/></Link><Link href="/plumber-suisun-city-ca"><MapPin size={15}/> Suisun City <ArrowRight size={14}/></Link></div></div></div></div></div><div className="authority-visual"><img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" alt="A2Z Plumbing LLC company truck and professional plumbers in Fairfield CA" className="authority-img"/><div className="map-frame" style={{height: '250px'}}><iframe title="A2Z Plumbing LLC location map" src="https://www.google.com/maps?q=A2Z+Plumbing+LLC,+4970+Paramount+Ct,+Fairfield,+CA+94534&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className="map-overlay" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={16}/> View Google Maps listing <ArrowRight size={15}/></a></div></div></div></section>
 <section className="reviews-section scroll-reveal"><div className="container"><div className="section-heading review-heading"><div><div className="eyebrow dark-eyebrow">CUSTOMER FEEDBACK</div><h2>Real words from A2Z customers.</h2></div><div className="review-score"><strong>5.0</strong><span>Google listing rating<br/><small>4 public reviews</small></span></div></div><div className="review-grid"><blockquote><div className="stars">★★★★★</div><p>“We had a great experience with A2Z Plumbing. They were professional, courteous, and respectful of our home especially wearing shoe covers while working. The pricing was good/transparent, the two who came out were easy to communicate with and kept us in the loop throughout the process. They made everything stress-free and got the job done efficiently. A2Z is a reliable plumbing service, highly recommended!”</p><cite><strong>Monique Keana</strong><span>4 reviews · 1 photo · 4 months ago</span></cite></blockquote><blockquote><div className="stars">★★★★★</div><p>“Fast service. Excellent workmanship. Took the emergency call at 6:00pm, completed before 9:00pm. Replaced 25 year old Delta assembly for Moen unit. Not a DIY YouTube job.”</p><cite><strong>sim manuta</strong><span>Local Guide · 67 reviews · 7 photos · 1 year ago</span></cite></blockquote><blockquote><div className="stars">★★★★★</div><p>“Super helpful team, came within 12 hours of calling. I let them in my house and they got to work right away. Very professional. Will rehire and recommend to all in the area. Thanks!”</p><cite><strong>Antje Worring</strong><span>Local Guide · 101 reviews · 209 photos · 5 months ago</span></cite></blockquote><blockquote><div className="stars">★★★★★</div><p>“I highly recommend A2Z Plumbing! Our toilet became loose from the floor and got to the point where we couldn’t use it, so we needed someone to take care of it ASAP. They came out the very next day—even though it was Sunday! The service was fast and professional, everything was left clean afterward, and the price was very fair.”</p><cite><strong>Veronika Skrnjug</strong><span>7 reviews · 1 month ago</span></cite></blockquote></div></div></section><section id="faqs" className="faq-section scroll-reveal"><div className="container faq-grid"><div><div className="eyebrow dark-eyebrow">QUESTIONS, ANSWERED</div><h2>Before you pick up the phone.</h2><p>Not sure if your issue needs a plumber yet? Start here, then call when you are ready.</p><Button asChild className="btn-navy"><a href={PHONE_TEL}>Call {PHONE_DISPLAY} <Phone size={16}/></a></Button></div><div className="faq-stack">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></section>
 <section className="final-cta scroll-reveal"><div className="container final-cta-inner"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Let’s get your plumbing moving in the right direction.</h2></div><Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a></Button></div></section></div></>
}
