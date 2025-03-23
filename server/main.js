const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8081;  // يمكن تغييره حسب الحاجة
const errorChance = 0.1;

app.use(cors());
app.use(express.json());

// محاكاة حدوث خطأ عشوائي بنسبة 10%
app.use((req, res, next) => {
    if (Math.random() <= errorChance) return res.status(500).send(undefined);
    else next();
});

// فحص حالة السيرفر
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

// استقبال تتبع السحب والإفلات
app.post("/track", (req, res) => {
   const { id, from = undefined, to = undefined } = req.body;
   if (!id || typeof from === "undefined" || typeof to === "undefined") {
       return res.status(400).json({ error: "Bad Request" });
   }
   return res.status(204).send(null);
});

// إرجاع شجرة التنقل (Navigation)
app.get("/nav", (req, res) => {
    if (fs.existsSync("server/nav.json")) {
        const fileContent = fs.readFileSync("server/nav.json", "utf8").trim();
        if (fileContent.length === 0) {
            return res.json([]);
        } else {
            return res.json(JSON.parse(fileContent));
        }
    } else {
        return res.json([]);
    }
});

// حفظ شجرة التنقل
app.post("/nav", (req, res) => {
    const items = req.body;
    if (!(items instanceof Array)) return res.status(400).send("Bad Request");
    
    fs.writeFileSync("server/nav.json", JSON.stringify(items));
    return res.status(204).send(null);
});

module.exports = app;
