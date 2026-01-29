import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase already initialized in auth_v4.js
const auth = getAuth();

const userEmailEl = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Not signed in → kick out
    window.location.href = "signin.html";
    return;
  }

  // Signed in → show email
  userEmailEl.textContent = `Signed in as: ${user.email}`;
});

logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    window.location.href = "signin.html";
  } catch (err) {
    alert(err.message);
  }
});
