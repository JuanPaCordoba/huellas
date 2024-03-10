const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Puerto en el que se ejecutará, usa el puerto proporcionado por el entorno o 3000 como predeterminado

app.use(express.static(path.join(__dirname, 'public')));

// Configura la ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
