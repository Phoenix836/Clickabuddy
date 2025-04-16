// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  // Form submission handler
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
          alert("Please fill in all fields.");
          return;
      }

      // Optional: simulate sending message
      alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");

      // Optional: Clear form fields after submission
      form.reset();
  });
});
