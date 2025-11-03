// ===== SECTION NAVIGATION =====
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll("section");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    sections.forEach((section) => {
      section.classList.remove("active");
      section.style.display = "none";
    });

    document.getElementById(target).style.display = "block";
    document.getElementById(target).classList.add("active");

    // Smooth scroll to top when switching sections
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Show home section by default
document.addEventListener("DOMContentLoaded", () => {
  sections.forEach((section) => (section.style.display = "none"));
  document.getElementById("home").style.display = "block";
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

// ===== FAQ INTERACTIVITY =====
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach((ans) => {
      ans.style.display = "none";
    });

    if (!isOpen) {
      answer.style.display = "block";
    }
  });
});

// ===== TESTIMONIALS (LOCAL STORAGE) =====
const commentInput = document.getElementById("userComment");
const submitComment = document.getElementById("submitComment");
const commentsContainer = document.getElementById("commentsContainer");

function loadComments() {
  const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
  commentsContainer.innerHTML = "";
  savedComments.forEach((comment) => {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.textContent = `"${comment}"`;
    commentsContainer.appendChild(div);
  });
}

submitComment.addEventListener("click", () => {
  const comment = commentInput.value.trim();
  if (comment) {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.push(comment);
    localStorage.setItem("comments", JSON.stringify(savedComments));
    commentInput.value = "";
    loadComments();
  } else {
    alert("Please write a comment before submitting.");
  }
});

window.addEventListener("load", loadComments);

// ===== EXPLORE BUTTON SCROLL =====
document.getElementById("explore-btn").addEventListener("click", () => {
  const journeySection = document.getElementById("journey");
  journeySection.scrollIntoView({ behavior: "smooth" });
});