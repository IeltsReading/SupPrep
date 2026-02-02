import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "/SupPrep/auth_v4.js";

const btn = document.getElementById("backHomeBtn");

if (btn) {
  btn.addEventListener("click", () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = "/SupPrep/dashboard.html";
      } else {
        window.location.href = "/SupPrep/index.html";
      }
    });
  });
}
