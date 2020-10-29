/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  console.log('Hello, UOC!');

  
} )();


const toggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const limit_size_screen = window.matchMedia('screen and (max-width: 768px)');
const items = document.getElementsByClassName("menu__item");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener("click", toggleMenu, false);


function cerrar() {
	menu.classList.remove("active");
	toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
}

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', cerrar, false);
}




