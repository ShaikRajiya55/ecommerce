/**
 * NexusCRM Web Server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4000;
const PUBLIC_INDEX_PATH = path.join(__dirname, 'public', 'index.html');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === '/api/v1/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      status: 'ok',
      system: 'NexusCRM Enterprise Platform',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    }));
  }

  if (req.url === '/api/v1/analytics/dashboard') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      totalPipelineValue: 555000,
      closedWonRevenue: 220000,
      qualifiedLeads: 3,
      winRate: 20
    }));
  }

  try {
    const htmlContent = fs.readFileSync(PUBLIC_INDEX_PATH, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(htmlContent);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error: ' + err.message);
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 NexusCRM Web Application Server running at http://localhost:${PORT}/`);
});
