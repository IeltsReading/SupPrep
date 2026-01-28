const tryBtn = document.getElementById("tryBtn");
const sample = document.getElementById("sample");
const feedback = document.getElementById("feedback");

let answered = false;

tryBtn.onclick = () => {
  sample.classList.remove("hidden");
  sample.scrollIntoView({ behavior: "smooth" });
};

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
<script>
  const toggleBtn = document.getElementById("toggleAbout");
  const aboutSection = document.getElementById("about");

  let open = false;

  toggleBtn.addEventListener("click", () => {
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
</script>
