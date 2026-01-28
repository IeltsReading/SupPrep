document.addEventListener("DOMContentLoaded", () => {
  // ===== TRY SAMPLE (legacy, harmless if unused) =====
  const tryBtn = document.getElementById("tryBtn");
  const sample = document.getElementById("sample");
  const feedback = document.getElementById("feedback");

  let answered = false;

  if (tryBtn) {
    tryBtn.onclick = () => {
      sample.classList.remove("hidden");
      sample.scrollIntoView({ behavior: "smooth" });
    };
  }

  document.querySelectorAll(".option").forEach(option => {
    option.onclick = () => {
      if (answered) return;
      answered = true;

      if (option.dataset.correct === "true") {
        option.classList.add("correct");
        feedback.textContent = "Correct ✔";
      } else {
        option.classList.add("wrong");
        feedback.textContent = "Incorrect ✖";
      }
    };
  });

  // ===== SEE HOW IT WORKS TOGGLE =====
  const toggleBtn = document.getElementById("toggleAbout");
  const aboutSection = document.getElementById("about");

  if (!toggleBtn || !aboutSection) return;

  let open = false;

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    open = !open;

    if (open) {
      aboutSection.classList.remove("hidden");
      toggleBtn.textContent = "Hide details ↑";
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      aboutSection.classList.add("hidden");
      toggleBtn.textContent = "See how it works ↓";
    }
  });
});
