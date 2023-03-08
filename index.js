const menu = document.getElementById('navigation');
const menuItems = document.querySelectorAll('.navigation li a');
const close = document.getElementById('cross');
const open = document.getElementById('open-menu');

function closeMenu() {
  menu.classList.add('d-none');
}
// all-interaction-scripts
function interactions() {
  open.addEventListener('click', () => {
    menu.classList.remove('d-none');
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });

  close.addEventListener('click', closeMenu);
}

interactions();

// portfolio-works section render dynamically
const projects = [
  {
    name: "Tonic",
    bullets: {
      client: 'Canopy',
      tech: 'Back End Dev',
      year: 2015
    },
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    preview: "#",
    code: "#",
    cover: "./image/Snapshoot Portfolio 1a.png",
  },
  {
    name: "Multipost stories",
    bullets: {
      client: 'Canopy',
      tech: 'Back End Dev',
      year: 2015
    },
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    preview: "#",
    code: "#",
    cover: "./image/Snapshoot Portfolio 1a.png",
  },
  {
    name: "Tonic",
    bullets: {
      client: 'Canopy',
      tech: 'Back End Dev',
      year: 2015
    },
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    preview: "#",
    code: "#",
    cover: "./image/Snapshoot Portfolio 1a.png",
  },
];

const workContainer = document.getElementById("work");
const h2 = document.createElement('h2');
h2.innerText = "recent works";
h2.style.display = "none";
workContainer.appendChild(h2);

projects.map((project) => {
  const container = document.createElement('div');
  container.classList.add('project');
  const details = document.createElement('div');
  details.classList.add('project-details');
  details.innerHTML = `
        <div class="details">
          <h2 class="project-title">${project.name}</h2>
          <nav class="project-nav">
            <h4 class="project-client">${project.bullets.client}</h4>

            <img src="./image/Counter.svg" alt="counter" />
            <span class="project-lang">${project.bullets.tech}</span>
            <img src="./image/Counter.svg" alt="counter" />

            <span class="year">${project.bullets.year}</span>
          </nav>
          <p class="project-description">${project.description}}</p>
          <ul class="pro-tool">
            <li class="tool">html</li>
            <li class="tool">css</li>
            <li class="tool">javascript</li>
          </ul>
          <button class="more">see project</button>
        </div>
  `;

  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.classList.add('d-none');
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-container');
  popupContent.innerHTML = `
        <div class="top-bar">
          <h3>${project.name}</h3>
          <button class="close-popup"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
        <nav class="project-nav">
          <h4 class="project-client">${project.bullets.client}</h4>

          <img src="./image/Counter.svg" alt="counter" />
          <span class="project-lang">${project.bullets.tech}</span>
          <img src="./image/Counter.svg" alt="counter" />

          <span class="year">${project.bullets.year}</span>
        </nav>
        <img src="${project.cover}" />
        <div class="popup-details">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
          </p>
          <div class="side-bar">
            <ul>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>github</li>
              <li>ruby</li>
              <li>Bootstrap</li>
            </ul>

            <div class="btn-group">
              <a href="${project.preview}">
                <span>see live</span>
                <span><i class="fa fa-external-link" aria-hidden="true"></i></span>
              </a>
              <a href="${project.code}">
                <span>see source</span>
                <span><i class="fa fa-github" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
        </div>
  `;

  container.appendChild(details);
  popup.appendChild(popupContent);
  container.appendChild(popup);
  workContainer.appendChild(container);

  // interactions
  const popupClose = popup.querySelector('.close-popup');
  const popupOpen = details.querySelector('.more');

  popupOpen.addEventListener('click', () => {
    popup.classList.remove('d-none');
  });

  popupClose.addEventListener('click', () => {
    popup.classList.add('d-none');
  });
});


// validation for contact form
const submit = document.getElementById('submitForm');
const form = document.getElementById('contact-form');

function checkEmail(str) {
  return typeof(str) === 'string' && str === str.toLowerCase();
}

let formData = {};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formData = Object.assign({
    name: event.currentTarget.name.value || '',
    email: event.currentTarget.email.value || '',
    feedback: event.currentTarget.feedback.value || '',
  });

  if (checkEmail(formData['email'])) {
    form.submit();
  } else {
    // console.log("Error!", formData);
    const error = document.createElement('p');
    error.innerText = "Invalid Email Address!";
    error.classList.add('error');
    form.appendChild(error);
  }
});
