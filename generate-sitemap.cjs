const fs = require('fs');

const cities = ['fairfield', 'suisun-city', 'vacaville', 'vallejo', 'benicia', 'dixon', 'rio-vista', 'american-canyon', 'napa', 'martinez'];
const coreServices = [
  'emergency-plumber', 
  'drain-cleaning', 
  'leak-detection-repair', 
  'water-heater-repair', 
  'water-heater-installation', 
  'sewer-line-repair', 
  'repiping', 
  'toilet-repair', 
  'faucet-repair', 
  'garbage-disposal-repair',
  'residential-plumbing',
  'plumbing-repair'
];

const guides = [
  'water-heater-not-producing-hot-water',
  'signs-of-hidden-water-leak',
  'how-to-unclog-drain-safely',
  'when-to-replace-water-heater',
  'water-heater-repair-vs-replacement-guide',
  'what-causes-recurring-drain-clogs',
  'signs-of-a-leaking-water-line',
  'when-should-a-sewer-line-be-inspected',
  'what-to-do-before-an-emergency-plumber-arrives'
];

const urls = ['/', '/about', '/contact', '/reviews'];

// Primary city landing pages

// Add primary city landing pages
cities.forEach(c => urls.push('/plumber-' + c + '-ca'));

// Add educational guides
guides.forEach(g => urls.push('/guides/' + g));

// Add all local city-service landing pages (12 services x 10 cities = 120 pages)
coreServices.forEach(s => {
  cities.forEach(c => {
    urls.push('/' + s + '-' + c + '-ca');
  });
});

const today = new Date().toISOString().split('T')[0];

const DOMAIN = 'https://www.a2zplumbingllc.com';

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
urls.forEach(u => {
  // Ensure we do not add trailing slashes to non-root URLs (SEO best practice)
  const loc = u === '/' ? `${DOMAIN}/` : `${DOMAIN}${u}`;
  xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n`;
});
xml += '</urlset>';

fs.writeFileSync('client/public/sitemap.xml', xml);
if (fs.existsSync('dist/public')) {
  fs.writeFileSync('dist/public/sitemap.xml', xml);
}
console.log("High-quality Sitemap generated with " + urls.length + " canonical URLs. Trailing slashes optimized.");
