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
