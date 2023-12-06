document.addEventListener("DOMContentLoaded", function() {
  showSection('sectionA');
});

function showSection(sectionId) {
  hideAllSections();

  document.getElementById(sectionId).style.display = "block";

  if (sectionId === 'sectionB') {
    document.getElementById('sectionA').style.display = "none";
  }
}

function hideAllSections() {
  var sections = document.querySelectorAll('.hidden');
  sections.forEach(function(section) {
    section.style.display = "none";
  });
}

// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 400
// })

// sr.reveal('.nav')
// sr.reveal('.nav', {delay: 500})
// sr.reveal('.logo', {delay: 600})

// sr.reveal('.hero', {delay: 700})
// sr.reveal('.hero-button', {interfal: 100, delay: 700})

// sr.reveal('.card', {delay: 800})

// sr.reveal('.content', {delay: 900})
// sr.reveal('.filters', {delay: 900})