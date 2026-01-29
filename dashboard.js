import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import { auth } from "./auth_v4.js";

const userEmailEl = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "signin.html";
    return;
  }

  const email = user.email;
  const username = user.displayName || "User";

  userEmailEl.textContent = `Signed in as ${username} (${email})`;
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "signin.html";
});
