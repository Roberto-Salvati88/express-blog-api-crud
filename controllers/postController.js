const posts = require('../data/posts');

// funzione di supporto: cerca il post, se non c'è risponde 404 e restituisce undefined
function findPostOr404(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);

  if (!post) {
    res.status(404).json({
      error: 'Not Found',
      message: `Post con id ${id} non trovato`
    });
  }

  return post;
}

// index: lista dei post, con filtro opzionale per tag (BONUS) → GET /posts?tag=Dolci
function index(req, res) {
  const { tag } = req.query;
  let result = posts;

  if (tag) {
    result = posts.filter(post =>
      post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    );
  }

  res.json(result);
}

// show: singolo post
function show(req, res) {
  const post = findPostOr404(req, res);
  if (!post) return;

  res.json(post);
}

// store: crea un post. L'id NON arriva dal client: lo genero io (poi lo farà il database)
function store(req, res) {
  console.log(req.body);

  const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
  const { title, content, image, tags } = req.body;

  const newPost = {
    id: newId,
    title,
    content,
    image,
    tags
  };

  posts.push(newPost);

  // 201 Created + la risorsa creata
  res.status(201).json(newPost);
}

// update: sostituisce tutti i campi del post (PUT)
function update(req, res) {
  const post = findPostOr404(req, res);
  if (!post) return;

  const { title, content, image, tags } = req.body;
  post.title = title;
  post.content = content;
  post.image = image;
  post.tags = tags;

  res.json(post);
}

// modify: modifica solo i campi inviati (PATCH)
function modify(req, res) {
  const post = findPostOr404(req, res);
  if (!post) return;

  Object.assign(post, req.body, { id: post.id });

  res.json(post);
}

// destroy: elimina, stampa la lista aggiornata, risponde 204 senza contenuto
function destroy(req, res) {
  const post = findPostOr404(req, res);
  if (!post) return;

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
