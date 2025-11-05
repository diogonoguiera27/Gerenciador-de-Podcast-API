# Podcast Menager

### Descrição

um app ap estilo netflix, aonde possa centralizar diferentes episodio podcasts separados por categoria

### Dominio

Podcast feitos em video

### Funcionalidade ( Features )

- lista os episodios Podcast em sessao de categorias
  - [ saude , fitness , mentalidade , humor ]
- Filtra episodios por nome de Podcast

## Como

#### Feature:

lista os episodios Podcast em sessao de categorias

#### Como vou Implementar:

GET: retorna uma lista de epsodios

response: 

```js
[
 {
   podcastName: "flow",
   episode: "CBUM - Flow #319",
   videoId:"QSuQmUfS30",
   cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAk5TyXYllLjrM-ug4wDGURUuxvSw",
   link:"https://www.youtube.com/watch?v=pQSuQmUfS30"
   category: ["saude","bodybuilder"]
 },
 {
   podcastName: "flow",
   episode: "RUBENS BARRICHELLO - Flow #339",
   videoId:"QSuQmUfS30",
   cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAk5TyXYllLjrM-ug4wDGURUuxvSw",
   link:"https://www.youtube.com/watch?v=pQSuQmUfS30"
   category: ["esporte","corrida"]
 }
]
```
