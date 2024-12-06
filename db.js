const mysql = require('mysql2');

connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione al DB:', err.stack);
        return res.status(500).send('Errore nell\'eliminazione del post');
    }
    if (result.affectedRows === 0) {
        return res.status(404).send('Post non trovato');
    }
});

module.exports = connection;
