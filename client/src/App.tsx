import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import {
  ArrowRight, Bath, ChevronDown, Clock3, Droplets, Flame, House, BadgeCheck,
  Mail, MapPin, Menu, Phone, ShieldCheck, Sparkles, Wrench, X, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Home from "./pages/Home";

export const PHONE = "+1 510-544-1054";
export const PHONE_DISPLAY = "510-544-1054";
export const PHONE_TEL = "tel:+15105441054";
export const MAPS_URL = "https://maps.app.goo.gl/9HrL1aAYbxrksA7t7";

export const mainServices = [
  ["Emergency Plumbing", "/emergency-plumber"],
  ["Drain Cleaning", "/drain-cleaning"],
  ["Leak Detection & Repair", "/leak-detection-repair"],
  ["Water Heater Repair", "/water-heater-repair"],
  ["Water Heater Installation", "/water-heater-installation"],
  ["Sewer Line Repair", "/sewer-line-repair"],
  ["Repiping Services", "/repiping"],
  ["Toilet Repair", "/toilet-repair"],
  ["Faucet Repair", "/faucet-repair"],
  ["Garbage Disposal Repair", "/garbage-disposal-repair"],
  ["Residential Plumbing", "/residential-plumbing"],
  ["Plumbing Repair", "/plumbing-repair"],
] as const;

import { locationPagesList, cityData } from "./data/locations";
import { servicesData } from "./data/services";

const locationPages = locationPagesList.map(city => [city, cityData[city].slug]);

const icons = [Droplets, Wrench, Zap, Bath, Flame, House];

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => setOpen(false), [location]);
  return <>
    <div className="topbar"><div className="container topbar-inner"><span><Clock3 size={14}/> Open 24 hours</span><span className="topbar-sep">•</span><span>Serving Fairfield & Solano County</span><a href={PHONE_TEL}><Phone size={14}/> {PHONE_DISPLAY}</a></div></div>
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="A2Z Plumbing LLC home"><span className="brand-mark"><Droplets size={19}/></span><span>A2Z <b>PLUMBING</b><small>LLC</small></span></Link>
        <nav className="desktop-nav"><div className="nav-dropdown"><button>Services <ChevronDown size={14}/></button><div className="dropdown-menu services-menu">{mainServices.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></div><Link href="/about">Why A2Z</Link><div className="nav-dropdown"><button>Service Areas <ChevronDown size={14}/></button><div className="dropdown-menu areas-menu">{locationPages.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></div><Link href="/contact">Contact</Link><a href="/#faqs">FAQs</a></nav>
        <div className="nav-actions"><a className="nav-phone" href={PHONE_TEL}><Phone size={16}/> <span>{PHONE_DISPLAY}</span></a><Button asChild className="btn-copper"><a href={PHONE_TEL}>Call Now <ArrowRight size={16}/></a></Button><button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>
      </div>
      {open && <div className="mobile-nav"><div className="mobile-nav-heading">Services</div>{mainServices.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<div className="mobile-nav-heading">Service Areas</div>{locationPages.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/about">Why A2Z</Link><Link href="/contact">Contact</Link><a href="/#faqs">FAQs</a><a className="mobile-call" href={PHONE_TEL}><Phone size={16}/> Call {PHONE_DISPLAY}</a></div>}
    </header>
  </>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand brand-light"><span className="brand-mark"><Droplets size={19}/></span><span>A2Z <b>PLUMBING</b><small>LLC</small></span></Link><p className="footer-lede">Thoughtful plumbing service for the homes and businesses that keep Solano County moving.</p><a className="footer-call" href={PHONE_TEL}><Phone size={16}/> {PHONE_DISPLAY}</a></div><div><h4>Services</h4>{mainServices.slice(0,6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div><h4>Service Areas</h4>{locationPages.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<a href={MAPS_URL} target="_blank" rel="noreferrer">Google Maps listing <ArrowRight size={13}/></a></div><div><h4>Explore</h4><Link href="/about">Why A2Z</Link><Link href="/contact">Contact</Link><h4 className="footer-subhead">Get in touch</h4><p>Need a plumber? Let’s talk through the issue and the next best step.</p><Button asChild className="btn-copper"><a href={PHONE_TEL}>Speak with a plumber <Phone size={15}/></a></Button></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} A2Z Plumbing LLC. All rights reserved.</span><span>Fairfield, California</span></div></footer>;
}


export function Seo({title, description, canonicalUrl, image = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80"}:{title:string;description:string;canonicalUrl?:string;image?:string}) {
  useEffect(() => { 
    document.title = title; 
    const setMeta = (name: string, content: string, isProp = false) => {
      const attr = isProp ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if(!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Trailing Slash Normalization (strips trailing slash for non-root paths)
    let finalCanonical = canonicalUrl;
    if (!finalCanonical) {
      const urlObj = new URL(window.location.href);
      let path = urlObj.pathname;
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
      }
      finalCanonical = `${urlObj.origin}${path}`;
    }

    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("googlebot", "index, follow");
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", image, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", finalCanonical, true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null; 
    if(!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = finalCanonical; 
  },[title,description,canonicalUrl,image]); 
  return null; 
}

export function JsonLd({data}:{data:Record<string, unknown>}) { useEffect(() => { const script=document.createElement("script"); script.type="application/ld+json"; script.textContent=JSON.stringify(data); document.head.appendChild(script); return () => { document.head.removeChild(script); }; },[data]); return null; }

export function BreadcrumbNav({items}:{items:{label:string, href?:string}[]}) {
  return (
    <div className="container" style={{paddingTop: '2rem', paddingBottom: '0', fontSize: '0.9rem', color: '#666', display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
      {items.map((item, i) => (
        <span key={i} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          {item.href ? <Link href={item.href} style={{color: '#666', textDecoration: 'none'}}>{item.label}</Link> : <span style={{color: '#333', fontWeight: '500'}}>{item.label}</span>}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </div>
  );
}

export function BreadcrumbJsonLd({items}:{items:{name:string, url:string}[]}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `https://www.a2zplumbingllc.com${item.url}`
    }))
  };
  return <JsonLd data={schema} />;
}

// Standalone Core Service Page Component
function CoreServicePage({serviceId}:{serviceId:string}) {
  const service = servicesData[serviceId];
  if(!service) return <NotFound/>;

  const title = `${service.name} Services | A2Z Plumbing LLC`;
  const cleanTitle = service.title.replace(" in {city}, CA", "").replace(" in {city}", "");
  const cleanDesc = service.description.replace(" in {city}", " in Fairfield, Solano & Napa County");
  const cleanIntro = service.intro.replace(" {city}", " Fairfield and Solano County");
  const canonicalUrl = `https://www.a2zplumbingllc.com/${serviceId}`;

  const schema = {
    "@context":"https://schema.org",
    "@type":"Service",
    "name": service.name,
    "description": cleanDesc,
    "provider": {
      "@type":"LocalBusiness",
      "name":"A2Z Plumbing LLC",
      "telephone":PHONE,
      "address": {
        "@type":"PostalAddress",
        "streetAddress":"4970 Paramount Ct",
        "addressLocality":"Fairfield",
        "addressRegion":"CA",
        "postalCode":"94534",
        "addressCountry":"US"
      }
    }
  };

  return (
    <>
      <Seo title={title} description={cleanDesc} canonicalUrl={canonicalUrl} image={service.image} />
      <JsonLd data={schema}/>
      <BreadcrumbJsonLd items={[{name:"Home", url:"/"}, {name:"Services", url:"/#services"}, {name:service.name, url:`/${serviceId}`}]} />
      
      <div className="page-shell">
        <BreadcrumbNav items={[{label:"Home", href:"/"}, {label:service.name}]} />
        
        <main>
          <section className="service-hero">
            <div className="container service-hero-grid">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot"/>EXPERT PLUMBING SERVICE</div>
                <h1>{cleanTitle}</h1>
                <p className="hero-copy">{cleanIntro}</p>
                <div className="hero-actions">
                  <Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a></Button>
                  <a className="text-link light-link" href="#service-details">Explore details <ArrowRight size={16}/></a>
                </div>
              </div>
              <div className="service-hero-image">
                <img src={service.image} alt={`${service.name} - A2Z Plumbing LLC`} />
                <div className="image-note"><ShieldCheck size={17}/><span>Clear communication.<br/><b>Upfront pricing transparency.</b></span></div>
              </div>
            </div>
          </section>

          <section id="service-details" className="content-section">
            <div className="container two-col">
              <div>
                <div className="eyebrow dark-eyebrow">DIAGNOSTICS & SIGNS</div>
                <h2>{service.signsH2.replace(" in {city}", "")}</h2>
                <div className="detail-copy" style={{marginTop: '25px'}}>
                  {service.signs.map((d,i)=><div className="detail-row" key={i}><span>0{i+1}</span><p>{d}</p></div>)}
                </div>
              </div>
              <div>
                <div className="eyebrow dark-eyebrow">COMMON PROBLEMS WE FIX</div>
                <h2>{service.commonH2.replace(" in {city}", "")}</h2>
                <div className="detail-copy" style={{marginTop: '25px'}}>
                  {service.common.map((d,i)=><div className="detail-row" key={i}><span>0{i+1}</span><p>{d}</p></div>)}
                </div>
              </div>
            </div>
          </section>

          <section className="soft-section scroll-reveal">
            <div className="container">
              <div className="section-heading">
                <div>
                  <div className="eyebrow dark-eyebrow">OUR REPAIR & SERVICE PROCESS</div>
                  <h2>{service.servicesH2.replace("{city} ", "")}</h2>
                </div>
              </div>
              <div className="value-grid">
                {service.services.map((s,i)=><div key={i}><b>0{i+1}</b><h3 style={{fontSize: '18px'}}>{s}</h3></div>)}
              </div>
            </div>
          </section>

          <section className="feature-band scroll-reveal">
            <div className="container feature-grid">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85" alt={`Emergency ${service.name}`}/>
                <div className="feature-stamp"><BadgeCheck size={18}/><span>Local<br/><b>service</b></span></div>
              </div>
              <div className="feature-copy">
                <div className="eyebrow">TRANSPARENT REPAIR APPROACH</div>
                <h2>{service.emergencyH2.replace(" in {city}", "")}</h2>
                <p>{service.emergencyP.replace(" {city}", " Solano and Napa County homes")}</p>
                <div className="feature-list">
                  <span><span className="check">✓</span> Direct phone consultation with a licensed plumber</span>
                  <span><span className="check">✓</span> Straightforward diagnostic process & clear estimate</span>
                  <span><span className="check">✓</span> Full cleanup and respect for your property</span>
                </div>
                <Button asChild className="btn-copper"><a href={PHONE_TEL}>Speak with a plumber <Phone size={16}/></a></Button>
              </div>
            </div>
          </section>

          {/* Contextual City Links */}
          <section className="soft-section scroll-reveal">
            <div className="container">
              <div className="section-heading">
                <div>
                  <div className="eyebrow dark-eyebrow">SERVICE LOCATIONS</div>
                  <h2>{service.name} Service Areas</h2>
                </div>
              </div>
              <p style={{marginBottom: '20px', color: '#555'}}>We provide professional {service.name.toLowerCase()} services across Fairfield and neighboring Solano, Napa, and Contra Costa communities.</p>
              <div className="related-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
                {locationPagesList.map(city => {
                  const locSlug = cityData[city].slug;
                  return <Link className="related-card" style={{padding: '12px 15px', fontSize: '13px'}} href={`/${locSlug}`} key={city}><span>{service.name} in {city}</span><ArrowRight size={14}/></Link>
                })}
              </div>
            </div>
          </section>

          <section className="faq-section scroll-reveal">
            <div className="container faq-grid">
              <div>
                <div className="eyebrow dark-eyebrow">QUESTIONS, ANSWERED</div>
                <h2>{service.name} FAQs</h2>
                <p>Have questions about {service.name.toLowerCase()}? Contact us directly for advice.</p>
                <Button asChild className="btn-navy"><a href={PHONE_TEL}>Call {PHONE_DISPLAY} <Phone size={16}/></a></Button>
              </div>
              <div className="faq-stack">
                {service.faqs.map(([q,a])=>
                  <details key={q}>
                    <summary>{q.replace(" in {city}", "")}<ChevronDown size={18}/></summary>
                    <p>{a.replace(" {city}", " local properties")}</p>
                  </details>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// City-Service Matrix Page (Canonicalized to Core Service URL to prevent duplication)
function ServicePage({serviceId, cityId}:{serviceId:string, cityId:string}) { 
  const service = servicesData[serviceId]; 
  const cityInfo = cityData[cityId];
  if(!service || !cityInfo) return <NotFound/>; 
  
  const cityName = cityInfo.name;
  const fullTitle = service.title.replace(/{city}/g, cityName);
  const fullDesc = service.description.replace(/{city}/g, cityName);
  const introText = service.intro.replace(/{city}/g, cityName);
  const slug = `${serviceId}-${cityInfo.slug.replace("plumber-", "")}`;
  
  // Canonicalize city-service matrix back to core service URL to prevent thin/duplicate content penalties
  const canonicalUrl = `https://www.a2zplumbingllc.com/${serviceId}`;
  
  const schema = {
    "@context":"https://schema.org",
    "@type":"Service",
    "name": fullTitle,
    "description": fullDesc,
    "provider": {
      "@type":"LocalBusiness",
      "name":"A2Z Plumbing LLC",
      "telephone":PHONE,
      "address": {
        "@type":"PostalAddress",
        "streetAddress":"4970 Paramount Ct",
        "addressLocality":"Fairfield",
        "addressRegion":"CA",
        "postalCode":"94534",
        "addressCountry":"US"
      }
    },
    "areaServed": {
      "@type":"City",
      "name": cityName
    }
  }; 
  
  return (
    <>
      <Seo title={`${fullTitle} | A2Z Plumbing LLC`} description={fullDesc} canonicalUrl={canonicalUrl} image={service.image} />
      <JsonLd data={schema}/>
      <BreadcrumbJsonLd items={[{name:"Home", url:"/"}, {name:service.name, url:`/${serviceId}`}, {name:cityName, url:`/${cityInfo.slug}`}]} />
      
      <div className="page-shell">
        <BreadcrumbNav items={[{label:"Home", href:"/"}, {label:service.name, href:`/${serviceId}`}, {label:cityName}]} />
        
        <main>
          <section className="service-hero">
            <div className="container service-hero-grid">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot"/>{service.name.toUpperCase()} IN {cityName.toUpperCase()}</div>
                <h1>{fullTitle}</h1>
                <p className="hero-copy">{introText}</p>
                <div className="hero-actions">
                  <Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a></Button>
                  <a className="text-link light-link" href="#service-details">Explore service details <ArrowRight size={16}/></a>
                </div>
              </div>
              <div className="service-hero-image">
                <img src={service.image} alt={`${fullTitle} - professional plumbing in ${cityName} CA`} />
                <div className="image-note"><ShieldCheck size={17}/><span>Clear communication.<br/><b>Practical next steps.</b></span></div>
              </div>
            </div>
          </section>

          <section id="service-details" className="content-section">
            <div className="container two-col">
              <div>
                <div className="eyebrow dark-eyebrow">DIAGNOSTICS</div>
                <h2>{service.signsH2.replace(/{city}/g, cityName)}</h2>
                <div className="detail-copy" style={{marginTop: '25px'}}>
                  {service.signs.map((d,i)=><div className="detail-row" key={i}><span>0{i+1}</span><p>{d}</p></div>)}
                </div>
              </div>
              <div>
                <div className="eyebrow dark-eyebrow">COMMON ISSUES</div>
                <h2>{service.commonH2.replace(/{city}/g, cityName)}</h2>
                <div className="detail-copy" style={{marginTop: '25px'}}>
                  {service.common.map((d,i)=><div className="detail-row" key={i}><span>0{i+1}</span><p>{d}</p></div>)}
                </div>
              </div>
            </div>
          </section>

          <section className="soft-section scroll-reveal">
            <div className="container">
               <div className="section-heading">
                <div>
                  <div className="eyebrow dark-eyebrow">WHAT WE DO</div>
                  <h2>{service.servicesH2.replace(/{city}/g, cityName)}</h2>
                </div>
              </div>
              <div className="value-grid">
                {service.services.map((s,i)=><div key={i}><b>0{i+1}</b><h3 style={{fontSize: '18px'}}>{s}</h3></div>)}
              </div>
            </div>
          </section>

          <section className="feature-band scroll-reveal">
            <div className="container feature-grid">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85" alt={`Emergency ${service.name} in ${cityName}`}/>
                <div className="feature-stamp"><BadgeCheck size={18}/><span>Local<br/><b>service</b></span></div>
              </div>
              <div className="feature-copy">
                <div className="eyebrow">URGENT RESPONSE</div>
                <h2>{service.emergencyH2.replace(/{city}/g, cityName)}</h2>
                <p>{service.emergencyP.replace(/{city}/g, cityName)}</p>
                <div className="feature-list">
                  <span><span className="check">✓</span> Direct phone support</span>
                  <span><span className="check">✓</span> Straightforward next steps</span>
                  <span><span className="check">✓</span> Respect for your home</span>
                </div>
                <Button asChild className="btn-copper"><a href={PHONE_TEL}>Speak with a plumber <Phone size={16}/></a></Button>
              </div>
            </div>
          </section>

          <section className="soft-section scroll-reveal">
             <div className="container">
               <div className="section-heading">
                <div>
                  <div className="eyebrow dark-eyebrow">RELATED LOCATIONS</div>
                  <h2>{service.name} in Nearby Cities</h2>
                </div>
              </div>
              <div className="related-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
                 {locationPagesList.slice(0, 8).map(city => {
                    const locSlug = cityData[city].slug;
                    return <Link className="related-card" style={{padding: '12px 15px', fontSize: '13px'}} href={`/${locSlug}`} key={city}><span>{service.name} in {city}</span><ArrowRight size={14}/></Link>
                 })}
              </div>
             </div>
          </section>

          <section className="faq-section scroll-reveal">
            <div className="container faq-grid">
              <div>
                <div className="eyebrow dark-eyebrow">QUESTIONS, ANSWERED</div>
                <h2>{service.name} FAQs</h2>
                <p>Find quick answers to common questions about {service.name.toLowerCase()} in {cityName}.</p>
                <Button asChild className="btn-navy"><a href={PHONE_TEL}>Call {PHONE_DISPLAY} <Phone size={16}/></a></Button>
              </div>
              <div className="faq-stack">
                {service.faqs.map(([q,a])=>
                  <details key={q}>
                    <summary>{q.replace(/{city}/g, cityName)}<ChevronDown size={18}/></summary>
                    <p>{a.replace(/{city}/g, cityName)}</p>
                  </details>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  ); 
}

function LocationPage({city}:{city:string}) { 
  const data=cityData[city]; 
  const title=`Plumber in ${city}, CA`; 
  
  return (
    <>
      <Seo title={`${title} | A2Z Plumbing LLC`} description={data.metaDesc}/>
      <BreadcrumbJsonLd items={[{name:"Home", url:"/"}, {name:title, url:`/${data.slug}`}]} />
      
      <div className="page-shell">
        <BreadcrumbNav items={[{label:"Home", href:"/"}, {label:title}]} />
        
        {/* Hero Section */}
        <section className="location-hero">
          <div className="container">
            <div className="eyebrow dark-eyebrow">LOCAL SERVICE AREA</div>
            <h1>{title}</h1>
            <p className="location-lede">{data.heroLede}</p>
            <Button asChild className="btn-copper">
              <a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </section>

        {/* Local Service Context */}
        <section className="content-section">
          <div className="container two-col location-content">
            <div>
              <h2>{data.introH2}</h2>
              <p>{data.introP1}</p>
              <p>{data.introP2}</p>
            </div>
            
            {/* NAP and Service Area Details */}
            <div className="location-panel">
              <MapPin size={20}/>
              <h3>Serving {city}</h3>
              <p>{data.landmarks}</p>
              <div style={{marginTop: '15px', paddingTop: '15px', borderTop: '1px solid rgba(0,0,0,0.1)'}}>
                 <strong style={{display: 'block', marginBottom: '5px'}}>A2Z Plumbing LLC</strong>
                 <div style={{fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '5px', color: 'var(--muted)'}}>
                   <span>4970 Paramount Ct<br/>Fairfield, CA 94534</span>
                   <a href={PHONE_TEL} style={{color: 'var(--copper)', fontWeight: 700}}>{PHONE_DISPLAY}</a>
                   <span>CA CSLB License #1132505</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Available */}
        <section className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow dark-eyebrow">PLUMBING SERVICES IN {city.toUpperCase()}</div>
                <h2>Expert solutions for common plumbing problems.</h2>
              </div>
            </div>
            <div className="service-grid">
              {mainServices.slice(0,6).map(([label,href])=>{
                return (
                  <Link href={href} className="service-card" key={href}>
                    <span className="icon-box"><Wrench size={20}/></span>
                    <h3>{label}</h3>
                    <p>Clear guidance and practical plumbing support in {city}.</p>
                    <ArrowRight size={17}/>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Plumbing Section */}
        <section className="feature-band scroll-reveal">
          <div className="container feature-grid">
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85" alt={`Emergency plumbing repair in ${city}, CA`}/>
              <div className="feature-stamp">
                <BadgeCheck size={18}/>
                <span>Local<br/><b>service</b></span>
              </div>
            </div>
            <div className="feature-copy">
              <div className="eyebrow">URGENT PLUMBING</div>
              <h2>{data.emergencyH2}</h2>
              <p>{data.emergencyP}</p>
              <div className="feature-list">
                <span><span className="check">✓</span> Direct phone support</span>
                <span><span className="check">✓</span> Straightforward next steps</span>
                <span><span className="check">✓</span> Respect for your home</span>
              </div>
              <Button asChild className="btn-copper">
                <a href={PHONE_TEL}>Speak with a plumber <Phone size={16}/></a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why A2Z */}
        <section className="why-section scroll-reveal">
          <div className="container">
            <div className="why-heading">
              <div className="eyebrow dark-eyebrow">WHY CHOOSE A2Z</div>
              <h2>Professional service for {city} residents.</h2>
            </div>
            <div className="why-grid">
              <div className="why-item"><span>01</span><h3>Listen first</h3><p>We start with your description of the problem and the context around it.</p></div>
              <div className="why-item"><span>02</span><h3>Explain clearly</h3><p>We keep the conversation practical, so you can make an informed decision.</p></div>
              <div className="why-item"><span>03</span><h3>Respect the space</h3><p>Thoughtful work includes care for your home, your time, and your routine.</p></div>
              <div className="why-item"><span>04</span><h3>Stay reachable</h3><p>Call directly when something changes or you need help deciding what is urgent.</p></div>
            </div>
          </div>
        </section>

        {/* City Specific FAQs */}
        <section className="faq-section scroll-reveal" style={{background: 'var(--mist)'}}>
          <div className="container faq-grid">
            <div>
              <div className="eyebrow dark-eyebrow">{city.toUpperCase()} FAQS</div>
              <h2>Questions about plumbing in {city}?</h2>
              <p>Find quick answers to some of the most common questions we hear from local homeowners.</p>
              <Button asChild className="btn-navy">
                <a href={PHONE_TEL}>Call {PHONE_DISPLAY} <Phone size={16}/></a>
              </Button>
            </div>
            <div className="faq-stack">
              {data.faqs.map(([q,a])=>
                <details key={q}>
                  <summary>{q}<ChevronDown size={18}/></summary>
                  <p>{a}</p>
                </details>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function NotFound(){return <div className="not-found"><h1>Page not found</h1><p>Let’s get you back to dependable plumbing help.</p><Button asChild className="btn-copper"><Link href="/">Back to home</Link></Button></div>}

function ScrollToTop(){ const [location] = useLocation(); useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, [location]); return null; }

function ScrollEffects(){ const [location] = useLocation(); useEffect(() => { const items = Array.from(document.querySelectorAll(".scroll-reveal")); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }); items.forEach((item) => observer.observe(item)); return () => observer.disconnect(); }, [location]); return null; }

function AboutPage(){ return <><Seo title="Why A2Z Plumbing LLC | Fairfield, CA" description="Learn why Fairfield homeowners and businesses call A2Z Plumbing LLC for clear, responsive plumbing support."/><BreadcrumbJsonLd items={[{name:"Home", url:"/"}, {name:"About Us", url:"/about"}]} /><div className="page-shell"><BreadcrumbNav items={[{label:"Home", href:"/"}, {label:"About Us"}]} /><section className="location-hero about-hero"><div className="container"><div className="eyebrow dark-eyebrow">WHY A2Z</div><h1>Professional plumbing without the runaround.</h1><p className="location-lede">A2Z Plumbing LLC is building a local plumbing company around thoughtful communication, practical repairs, and respect for the homes and businesses we serve.</p><Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Speak with a plumber</a></Button></div></section><section className="content-section scroll-reveal"><div className="container about-grid"><div><div className="eyebrow dark-eyebrow">OUR APPROACH</div><h2>Start with the real problem.</h2></div><div className="about-copy"><p>Plumbing issues rarely arrive at a convenient time. That is why the first step should be useful: understand what changed, what is urgent, and what options make sense for the property.</p><p>From everyday fixture problems to leaks, drains, water heaters, and larger plumbing questions, A2Z Plumbing keeps the experience direct and easy to follow.</p><div className="about-points"><span><ShieldCheck size={18}/> Clear explanations</span><span><Clock3 size={18}/> Responsive service</span><span><House size={18}/> Respect for your space</span></div></div></div></section><section className="soft-section scroll-reveal"><div className="container about-values"><div><div className="eyebrow dark-eyebrow">WHAT YOU CAN EXPECT</div><h2>A better conversation about your plumbing.</h2></div><div className="value-grid"><div><b>01</b><h3>Listen first</h3><p>We start with your description and the signs you are seeing.</p></div><div><b>02</b><h3>Explain clearly</h3><p>We keep the next step practical and easy to understand.</p></div><div><b>03</b><h3>Stay reachable</h3><p>Call when the situation changes or you need help deciding what is urgent.</p></div></div></div></section><section className="final-cta scroll-reveal"><div className="container final-cta-inner"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Let’s talk through the next right step.</h2></div><Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a></Button></div></section></div></>; }

function ContactPage(){ return <><Seo title="Contact A2Z Plumbing LLC | Fairfield, CA" description="Contact A2Z Plumbing LLC for plumbing service in Fairfield and nearby California communities."/><BreadcrumbJsonLd items={[{name:"Home", url:"/"}, {name:"Contact", url:"/contact"}]} /><div className="page-shell"><BreadcrumbNav items={[{label:"Home", href:"/"}, {label:"Contact"}]} /><section className="location-hero contact-hero"><div className="container"><div className="eyebrow dark-eyebrow">CONTACT A2Z PLUMBING</div><h1>Tell us what’s happening.</h1><p className="location-lede">Call directly for plumbing help, service questions, and the best next step for your home or business.</p><Button asChild className="btn-copper"><a href={PHONE_TEL}><Phone size={17}/> Call {PHONE_DISPLAY}</a></Button></div></section><section className="content-section scroll-reveal"><div className="container contact-grid"><div><div className="eyebrow dark-eyebrow">GET IN TOUCH</div><h2>One call gets the conversation started.</h2><p>Share the location, what changed, and whether water is actively escaping. A photo or a quick description can help us understand the situation.</p><div className="contact-cards"><a href={PHONE_TEL}><Phone size={20}/><span><b>Call directly</b><small>{PHONE_DISPLAY}</small></span><ArrowRight size={16}/></a><a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={20}/><span><b>Find the listing</b><small>Google Maps</small></span><ArrowRight size={16}/></a><a href="mailto:hello@a2zplumbingllc.com"><Mail size={20}/><span><b>Email</b><small>hello@a2zplumbingllc.com</small></span><ArrowRight size={16}/></a></div></div><div className="contact-panel"><div className="eyebrow dark-eyebrow">SERVICE HOURS</div><h3>Open 24 hours</h3><p>Call anytime to discuss an urgent plumbing issue or request service.</p><div className="contact-panel-line"><Clock3 size={18}/> Fairfield, California</div><div className="contact-panel-line"><ShieldCheck size={18}/> Residential & commercial plumbing</div></div></div></section><section className="soft-section scroll-reveal"><div className="container contact-map-grid"><div><div className="eyebrow dark-eyebrow">SERVICE AREA</div><h2>Serving Fairfield and nearby communities.</h2><p>A2Z Plumbing is based in Fairfield and serves the surrounding communities listed on this site. Call to confirm availability for your address.</p></div><div className="map-frame"><iframe title="A2Z Plumbing LLC location map" src="https://www.google.com/maps?q=A2Z+Plumbing+LLC,+4970+Paramount+Ct,+Fairfield,+CA+94534&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section></div></>; }

const generatedServiceRoutes: {href:string, serviceId:string, cityId:string}[] = [];
Object.keys(servicesData).forEach(serviceId => {
  Object.keys(cityData).forEach(cityId => {
    const locSlug = cityData[cityId].slug.replace("plumber-", "");
    generatedServiceRoutes.push({
      href: `/${serviceId}-${locSlug}`,
      serviceId,
      cityId
    });
  });
});

function Router(){
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/contact" component={ContactPage}/>
      
      {/* Core Standalone Service Routes */}
      {Object.keys(servicesData).map(serviceId => (
        <Route key={serviceId} path={`/${serviceId}`}>
          <CoreServicePage serviceId={serviceId}/>
        </Route>
      ))}

      {/* City Landing Pages */}
      {locationPages.map(([city,href]) => (
        <Route key={href} path={href}>
          <LocationPage city={city}/>
        </Route>
      ))}

      {/* City-Service Matrix Routes (Canonicalized to Core Service URL) */}
      {generatedServiceRoutes.map(({href, serviceId, cityId}) => (
        <Route key={href} path={href}>
          <ServicePage serviceId={serviceId} cityId={cityId}/>
        </Route>
      ))}

      <Route component={NotFound}/>
    </Switch>
  );
}

export default function App(){return <><ScrollToTop/><ScrollEffects/><Header/><Router/><Footer/><a className="sticky-call" href={PHONE_TEL}><Phone size={18}/> Call Now</a></>}

