// Navigation between sections
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ==============================
// ACTIVE NAV BUTTON
// ==============================
const navButtons = document.querySelectorAll(".nav-links button");


function setActiveNav(sectionId) {
  navButtons.forEach(btn => btn.classList.remove("active-btn"));


  const activeButton = [...navButtons].find(btn =>
    btn.getAttribute("onclick").includes(sectionId)
  );


  if (activeButton) activeButton.classList.add("active-btn");
}


// Modify your showSection()
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");


  setActiveNav(sectionId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// ==============================
// SHRINK NAVBAR ON SCROLL
// ==============================
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-nav");
  if (window.scrollY > 50) nav.classList.add("shrink");
  else nav.classList.remove("shrink");
});


// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuIcon = document.getElementById("menuIcon");
const navbarMenu = document.getElementById("navbarMenu");
const overlay = document.getElementById("menu-overlay");


menuIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
  menuIcon.classList.toggle("open");
  overlay.classList.toggle("show");
});


// Close menu when clicking a button
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
    menuIcon.classList.remove("open");
    overlay.classList.remove("show");
  });
});


// Close menu when clicking outside
overlay.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
  menuIcon.classList.remove("open");
  overlay.classList.remove("show");
});


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


// === GALLERY LIGHTBOX WITH NAVIGATION ===
const galleryImgs = document.querySelectorAll(".gallery-img");
const popup = document.getElementById("img-popup");
const popupImg = document.getElementById("popup-img");
const closePopup = document.getElementById("close-popup");
const prevBtn = document.getElementById("prev-img");
const nextBtn = document.getElementById("next-img");


let currentIndex = 0;


// Show popup when clicking image
galleryImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    popup.classList.add("show");
  });
});


// Display selected image
function showImage() {
  popupImg.src = galleryImgs[currentIndex].src;
}


// Close popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});


// Navigation buttons
prevBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
  showImage();
});


nextBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  showImage();
});


// Close when clicking outside image
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});


// Keyboard arrows for desktop users
document.addEventListener("keydown", (e) => {
  if (!popup.classList.contains("show")) return;


  if (e.key === "ArrowRight") {
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    prevBtn.click();
  } else if (e.key === "Escape") {
    popup.classList.remove("show");
  }
});


// === FAQ INTERACTIVITY ===
const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
   
    // Optionally, close others when opening one
    faqItems.forEach(other => {
      if (other !== item) other.classList.remove("active");
    });
  });
});
