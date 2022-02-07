'use strict'

var gProjects = [
  {
    id: '1',
    name: 'pacman',
    title: 'eat all u can',
    desc: 'lorem ipsum lorem ipsum lorem ipsum',
    url: 'https://tal0311.github.io/pacman-js/',
    publishedAt: '24.1.2022',
    labels: ['Matrixes', 'keyboard events'],
    img: 'img/pacman.png',
  },
]

function getProjectsForDisplay() {
  return gProjects
}

function getProjById(projId) {
  const proj = gProjects.find((proj) => proj.id === projId)
  return proj
}
