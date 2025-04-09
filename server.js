const express = require('express');
const next = require('next');
const apiRoutes = require('./server/main');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 8081;

app.prepare().then(() => {
    const server = express();

 
    server.use('/api', apiRoutes);

 
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});

server.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
  });
  
