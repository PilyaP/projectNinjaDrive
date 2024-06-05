export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(
    `User-agent: *
Disallow:

Sitemap: https://ninjadriveclub.com/sitemap.xml`
  );
  res.end();
}
