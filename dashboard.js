import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { auth } from "/SupPrep/auth_v4.js";

const userEmailEl = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("/SupPrep/signin.html");
    return;
  }

  const email = user.email;
  const username = user.displayName || "User";

  userEmailEl.textContent = `Signed in as ${username} (${email})`;
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.replace("/SupPrep/signin.html");
});
