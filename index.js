const menu = document.getElementById('navigation');
const menuItems = document.querySelectorAll('.navigation li a');
const close = document.getElementById('cross');
const open = document.getElementById('open-menu');

function closeMenu() {
  menu.classList.add('d-none');
}
// all-interaction-scriptss
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
/* eslint-disable array-callback-return */
// store of projects
const cards=[
    {
    name:'Tonic',
    image:'./image/Snapshoot Portfolio.svg',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology:[{
        name1:'html',
        name2:'css',
        name3:'Javascript',

    }]
},
   { 
    name:'Tonic',
    image:'./image/Snapshoot Portfolio.svg',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology:[{
        name1:'html',
        name2:'css',
        name3:'Javascript',

    }] 
  },
    {name:'Tonic',
    image:'./image/Snapshoot Portfolio.svg',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology:[{
        name1:'html',
        name2:'css',
        name3:'Javascript',

    }]
  },
     {
        name:'Tonic',
    image:'./image/Snapshoot Portfolio.svg',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology:[{
        name1:'html',
        name2:'css',
        name3:'Javascript',

    }]
},
    {
    name:'Tonic',
    image:'./image/Snapshoot Portfolio.svg',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology:[{
        name1:'html',
        name2:'css',
        name3:'Javascript',

    }]
}, 
    {
    name:'Tonic',
    image:'./image/Snapshoot Portfolio.svg',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology:[{
        name1:'html',
        name2:'css',
        name3:'Javascript',

    }]
}]


 let div = document.createElement('div')
 div.className='project-details';
 document.body.appendChild(div);
 let h2=document.createElement('h2');
 h2.textContent='add h2 element to the div';
 div.appendChild(h2);
 const card=document.querySelector("carte")

 
