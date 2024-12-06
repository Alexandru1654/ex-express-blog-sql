const mysql = require('mysql2');

connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione al DB:', err.stack);
        return;
    }
    console.log('Connesso al database con id ' + connection.threadId);
});

module.exports = connection;
