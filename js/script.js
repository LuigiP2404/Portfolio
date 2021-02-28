let navbar = document.getElementsByClassName('navbar')[0];
let logowhite = document.getElementById('white');
let logored = document.getElementById('red');
let links = document.getElementsByClassName('links');
let hambmenu = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let hamburgericon = document.getElementById('hamburger-icon');
let carousel = document.getElementsByClassName('.carousel')[0];

window.addEventListener('scroll', () => {
  if(this.scrollY > 20) {
    navbar.classList.add('scrolled');
    logowhite.classList.remove('dn');
    logored.classList.add('dn');
  }
  else{
    navbar.classList.remove('scrolled');
    logored.classList.remove('dn');
    logowhite.classList.add('dn');
  }
})

hambmenu.addEventListener('click', () => {
  menu.classList.toggle('clicked');
  hamburgericon.classList.toggle('hambclicked');
})

for (let i = 0; i<links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('clicked');
    hamburgericon.classList.remove('hambclicked');
  })
}
 
