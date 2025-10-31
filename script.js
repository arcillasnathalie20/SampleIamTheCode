// Navigation between sections
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bio popup
function showBio(text) {
  const popup = document.getElementById('bio-popup');
  const bioText = document.getElementById('bio-text');
  bioText.textContent = text;
  popup.classList.add('show');
}

function closeBio() {
  document.getElementById('bio-popup').classList.remove('show');
}

// Load testimonials from localStorage
function loadTestimonials() {
  const container = document.getElementById('testimonial-list');
  const saved = JSON.parse(localStorage.getItem('testimonials')) || [];
  container.innerHTML = '';
  saved.forEach(t => {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.textContent = `"${t}" – Guest`;
    container.appendChild(div);
  });
}

// Add testimonial
function addTestimonial() {
  const input = document.getElementById('userTestimonial');
  const text = input.value.trim();
  if (!text) return alert('Please write something first!');
  
  const saved = JSON.parse(localStorage.getItem('testimonials')) || [];
  saved.push(text);
  localStorage.setItem('testimonials', JSON.stringify(saved));
  
  input.value = '';
  loadTestimonials();
}

// Initial load
window.onload = loadTestimonials;