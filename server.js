res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
if (req.method === 'OPTIONS') {
  res.writeHead(204);
  res.end();
  return;
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/upload-image') {
    const boundary = req.headers['content-type'].split('boundary=')[1];
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      // Extract file content from multipart/form-data
      const parts = data.split(`--${boundary}`);
      const filePart = parts.find(p => p.includes('Content-Type:'));

      if (!filePart) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'No file found' }));
        return;
      }

      const match = filePart.match(/filename="(.+?)"/);
      if (!match) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Filename not found' }));
        return;
      }

      const filename = `${Date.now()}-${match[1]}`;
      const fileStart = filePart.indexOf('\r\n\r\n') + 4;
      const fileContent = filePart.slice(fileStart, filePart.lastIndexOf('\r\n'));

      const buffer = Buffer.from(fileContent, 'binary');
      const filePath = path.join(__dirname, 'uploads', filename);

      fs.writeFile(filePath, buffer, err => {
        if (err) {
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'File write failed' }));
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            location: `http://localhost:${PORT}/uploads/${filename}`
          }));
        }
      });
    });
  }

  // Serve uploaded images
  else if (req.method === 'GET' && req.url.startsWith('/uploads/')) {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
      } else {
        res.writeHead(200);
        res.end(content);
      }
    });
  }

  // Default response
  else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
