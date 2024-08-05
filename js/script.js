// OUTDOOR 
var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);


// MOBILE MENU
function toggleMenu() {
      const navList = document.querySelector('.nav-list');
      navList.classList.toggle('active');
  }


// EMAIL
function sendEmail() {
      var email = document.getElementById('email').value;
      var subject = "Contato via website";
      var body = "Olá,\n\nGostaria de entrar em contato a respeito dos seus serviços.\n\nMeu email é: " + email;
      window.location.href = "mailto:blueprints@outlook.com.br?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  document.getElementById('contact-button').addEventListener('click', function() {
      var subject = "Interesse nos serviços";
      var body = "Olá,\n\nGostaria de entrar em contato a respeito dos seus serviços.\n\nMeu email é: ";
      window.location.href = "mailto:blueprints@outlook.com.br?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

// PREÇOS
document.getElementById('btnHoras').addEventListener('click', function() {
    document.querySelectorAll('.plano').forEach(function(el) {
        el.classList.remove('active');
    });
    document.querySelectorAll('.plano-horas').forEach(function(el) {
        el.classList.add('active');
    });
});

document.getElementById('btnProjetos').addEventListener('click', function() {
    document.querySelectorAll('.plano').forEach(function(el) {
        el.classList.remove('active');
    });
    document.querySelectorAll('.plano-projetos').forEach(function(el) {
        el.classList.add('active');
    });
});

// Exibir inicialmente os planos por horas
document.getElementById('btnHoras').click();