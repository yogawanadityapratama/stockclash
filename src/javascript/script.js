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