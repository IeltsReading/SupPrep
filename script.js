const tryBtn = document.getElementById("tryBtn");
const sample = document.getElementById("sample");
const feedback = document.getElementById("feedback");

tryBtn.onclick = () => {
  sample.classList.remove("hidden");
  sample.scrollIntoView({ behavior: "smooth" });
};

document.querySelectorAll(".option").forEach(option => {
  option.onclick = () => {
    if (option.dataset.correct === "true") {
      option.classList.add("correct");
      feedback.textContent = "Correct ✔";
    } else {
      option.classList.add("wrong");
      feedback.textContent = "Incorrect ✖";
    }
  };
});
