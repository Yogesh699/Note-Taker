import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const dbFilePath = path.join(__dirname, 'db', 'db.json');

app.use(express.static('public'));
app.use(express.json());

let db = loadData();

// API routes
// GET API ROUTE
app.get('/api/notes', (req, res) => {
    res.json(db);
});
// POST API ROUTE
app.post('/api/notes', (req, res) => {
    let newId;
    if (db.length > 0) {
        newId = Math.max(...db.map(note => note.id)) + 1;
    } else {
        newId = 1;
    }
    let { title, text } = req.body;
    let newNote = { title, text, id: newId };
    db.push(newNote);
    saveData();
    res.json(db);
});

// DELETE API ROUTE
app.delete('/api/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    db = db.filter((note) => note.id !== noteId);
    saveData();
    res.json(db);
});

// HTML Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Helper Functions
function loadData() {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
}
function 
saveData() {
    fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2));
}

// App listening
app.listen(PORT, () => console.log(`Visit http://localhost:${PORT}`));