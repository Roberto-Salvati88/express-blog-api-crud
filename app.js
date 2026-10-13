const express = require('express');
const postsRouter = require('./routers/posts');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

const app = express();
const port = 3000;

// body-parser: senza questo req.body è undefined nelle POST e PUT con body JSON
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use('/posts', postsRouter);

// i middleware di errore vanno IN FONDO, dopo tutte le rotte
app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
