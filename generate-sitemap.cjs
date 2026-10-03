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

const urls = ['/', '/about', '/contact'];

// Add core standalone service pages
coreServices.forEach(s => urls.push('/' + s));

// Add primary city landing pages
cities.forEach(c => urls.push('/plumber-' + c + '-ca'));

const today = new Date().toISOString().split('T')[0];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
urls.forEach(u => {
  xml += `  <url>\n    <loc>https://www.a2zplumbingllc.com${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n`;
});
xml += '</urlset>';

fs.writeFileSync('client/public/sitemap.xml', xml);
if (fs.existsSync('dist/public')) {
  fs.writeFileSync('dist/public/sitemap.xml', xml);
}
console.log("High-quality Sitemap generated with " + urls.length + " canonical URLs.");

