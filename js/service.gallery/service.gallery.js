'use strict'

var gProjects = [
  {
    id: 1,
    name: 'pacman',
    title: 'eat all u can',
    desc: 'lorem ipsum lorem ipsum lorem ipsum',
    url: 'https://tal0311.github.io/pacman-js/',
    publishedAt: '24.1.2022',
    labels: ['Matrixes', 'keyboard events'],
    img: 'img/pacman.png',
  },
  {
    id: 2,
    name: 'Minesweeper',
    title: 'classical take on a classical game',
    desc: 'sprint 1 in CA bootCamp',
    url: 'https://tal0311.github.io/ca-minesweeper-sprint1/',
    publishedAt: '27.1.2022',
    labels: ['Matrixes', 'keyboard events', 'DOM manipulations'],
    img: 'img/mineSwepper.png',
  },
  {
    id: 3,
    name: 'Book store',
    title: 'book store',
    desc: 'MVC with CRUDL',
    url: 'https://tal0311.github.io/ca-mvc-book-store/',
    publishedAt: '4.1.2022',
    labels: ['CRUDL', 'MVC', 'DOM manipulations'],
    img: 'img/bookShop2.png',
  },
]

function getProjectsForDisplay() {
  return gProjects
}

function getProjById(projId) {
  const proj = gProjects.find((proj) => proj.id === projId)
  return proj
}
