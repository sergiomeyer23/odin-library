# Library

Projeto do [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library): uma biblioteca pessoal feita com HTML, CSS e JavaScript puro.

Demo: https://sergiomeyer23.github.io/odin-library/

## O que dá para fazer

- Ver os livros em cards (título, autor, páginas e status de leitura)
- Adicionar um livro pelo botão "Novo livro", que abre um formulário em `<dialog>`
- Remover um livro
- Marcar um livro como lido ou não lido

## Como funciona

- Os livros ficam no array `myLibrary`, criados pelo construtor `Book`.
- Cada livro tem um `id` gerado com `crypto.randomUUID()`. O card guarda esse `id` em um `data-id`, e é por ele que o livro certo é removido ou alterado.
- `Book.prototype.toggleRead` troca o status de leitura.
- `displayBooks()` desenha a tela a partir do array, então os dados e a exibição ficam separados.
- O formulário usa `event.preventDefault()` para não tentar enviar os dados a um servidor.

Os dados não são salvos, então a lista volta ao início quando a página recarrega.

## Como rodar

Abra o `index.html` no navegador. Não precisa instalar nada.
