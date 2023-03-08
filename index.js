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
  },
];
const workContainer = document.getElementById("work");
projects.map((project) => {
  const container = document.createElement('div');
  container.classList.add('project');
  const details = document.createElement('div');
  details.innerHTML = `
  <div class="project-details">
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
      </div>
  `;
  container.appendChild(details);
  workContainer.appendChild(container);
});

