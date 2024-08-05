// OUTDOOR 
var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);


// MOBILE MENU
function toggleMenu() {
      const navList = document.querySelector('.nav-list');
      navList.classList.toggle('active');
  }