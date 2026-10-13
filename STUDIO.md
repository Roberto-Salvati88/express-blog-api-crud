# express-blog-api-crud

`npm install`, poi `npm run watch`. Prova le rotte con Postman:

| Operazione | Verbo | URL | Risposta |
|---|---|---|---|
| index | GET | /posts (anche ?tag=Dolci) | 200 + lista |
| show | GET | /posts/1 | 200 + post, 404 se non esiste |
| store | POST | /posts (body raw JSON, senza id) | 201 + post creato |
| update | PUT | /posts/1 | 200 + post aggiornato, 404 |
| modify | PATCH | /posts/1 | 200, 404 |
| destroy | DELETE | /posts/1 | 204 senza contenuto, 404 |

Domande d'esame collegate: cos'è un middleware (funzione con req, res, next), differenza PUT e PATCH,
perché serve express.json(), perché l'id lo assegna il server, cosa significano 201, 204, 404, 500.
