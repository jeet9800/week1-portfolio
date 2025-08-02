const button = document.getElementById("toggleProject");
const project = document.getElementById("ProjectInfo");


  button.addEventListener("click", () => {
  project.style.display =
    project.style.display === "none" ? "block" : "none";
});

// Load theme from localStorage on page load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// On toggle
darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "❌ Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  // ✅ Disposable domain blocklist
  const blockedDomains = ["tempmail.com", "mailinator.com", "10minutemail.com"];
  const emailDomain = email.split("@")[1];

  if (blockedDomains.includes(emailDomain)) {
    formMessage.textContent = "❌ Disposable email addresses are not allowed.";
    formMessage.style.color = "red";
    return;
  }

  // ✅ Format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formMessage.textContent = "❌ Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // ✅ Success
  formMessage.style.color = "green";
  formMessage.textContent = "✅ Message sent successfully (mock)!";
  form.reset();
});

