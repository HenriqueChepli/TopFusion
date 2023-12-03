
const btnForms = document.getElementById('btn-forms');

function toggleMenu() {
  const forms = document.getElementById('formulario');
  forms.classList.toggle('active');
}

btnForms.addEventListener('click', toggleMenu);

