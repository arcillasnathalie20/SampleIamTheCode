// Navigation section switching
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Team Bio Popup
function showBio(text) {
    document.getElementById('bio-text').innerText = text;
    document.getElementById('bio-popup').classList.remove('hidden');
}

function closeBio() {
    document.getElementById('bio-popup').classList.add('hidden');
}

// Add Testimonials
function addTestimonial() {
    const input = document.getElementById('userTestimonial');
    const text = input.value.trim();
    if (text === '') {
      alert('Please write something before submitting!');
      return;
    }
    const container = document.getElementById('testimonial-list');
    const newDiv = document.createElement('div');
    newDiv.classList.add('testimonial');
    newDiv.textContent = `"${text}" – Guest`;
    container.appendChild(newDiv);
    input.value = '';
}