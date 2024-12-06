const express = require('express');
const connection = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/posts', (req, res) => {
    connection.query('SELECT * FROM posts', (err, results) => {
        if (err) {
            console.error('Errore nel recupero dei post:', err);
            return res.status(500).send('Errore nel recupero dei post');
        }
        res.json(results);
    });
});

app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    connection.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
        if (err) {
            console.error('Errore nel recupero del post:', err);
            return res.status(500).send('Errore nel recupero del post');
        }

        if (results.length === 0) {
            return res.status(404).send('Post non trovato');
        }

        res.json(results[0]);
    });
});

app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
    connection.query('DELETE FROM posts WHERE id = ?', [postId], (err, result) => {
        if (err) {
            console.error('Errore nell\'eliminazione del post:', err);
            return res.status(500).send('Errore nell\'eliminazione del post');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Post non trovato');
        }

        res.status(204).send();
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});


