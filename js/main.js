console.log('Starting up')
$(init)

function init() {
  renderProjects()
  clickEvents()
}

function clickEvents() {
  $('.fa-plus').click(function () {
    readProj($(this).data('id'))
  })
}

function renderProjects() {
  const projects = getProjectsForDisplay()

  const strHTMLs = projects.map((project) => {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a
              class="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal${project.id}"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content ">
                  <i data-id="${project.id}" class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="${project.img}"
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
 
  <div
      class="portfolio-modal modal fade"
      id="portfolioModal${project.id}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">
                    ${project.title}
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="${project.img}"
                    alt=""
                  />
                  <p>
                   ${project.desc}
                  </p>
                  <ul class="list-inline">
                    <li>Date:${project.date}</li>
                    <li><a href="${project.url}">link to project </a></li>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
               
                
                 
              
   
 `

  const $elModalBody = $('.modal-insertion')
  $elModalBody.html(strHTML)
}

function readProj(projId) {
  console.log('readProj')
  console.log(projId)
  var proj = getProjById(projId)
  renderProjModal(proj)
}
