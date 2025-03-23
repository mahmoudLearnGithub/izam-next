const express = require('express');
const next = require('next');
const apiRoutes = require('./server/main');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 8081;

app.prepare().then(() => {
    const server = express();

    // استخدام الـ API Routes الخاصة بـ Express
    server.use('/api', apiRoutes);

    // جميع الطلبات الأخرى تذهب إلى Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});
