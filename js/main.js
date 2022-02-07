console.log('Starting up')

function init() {
  renderProjects()
}

function clickEvents() {}

function renderProjects() {
  const projects = getProjectsForDisplay()
  console.log(projects)
  const strHTMLs = projects.map((project) => {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a
              class="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal${project.id}"
            >
              <div class="portfolio-hover" onclick="redProj('${project.id}')">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/portfolio/01-thumbnail.jpg"
                alt=""
              />
            </a>
            <div class="portfolio-caption">
              <h4>${project.name}</h4>
              <p class="text-muted">${project.title}</p>
            </div>
          </div>`
  })

  const $elProjectsGrid = $('.pojects-grid')
  $elProjectsGrid.html(strHTMLs)
}

function renderProjModal(project) {
  var strHTML = `
 
 
               
                  <!-- Project Details Go Here -->
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">
                   ${project.title}
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="${project.img}"
                    alt="${project.name}"
                  />
                  <p>
                    ${project.desc}
                  </p>
                  <ul class="list-inline">
                    <li>Date: ${project.publishedAt}</li>
                    <li>Client: Threads</li>
                    <li>Category: ${project.labels}</li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
                </div>
              
   
 `

  const $elModalBody = $('.modal-body')
  $elModalBody.html(strHTML)
}

function redProj(projId) {
  console.log(projId)
  var proj = getProjById(projId)
  renderProjModal(proj)
}
