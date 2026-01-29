import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const auth = getAuth();

const userEmailEl = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Safety check (prevents silent crashes)
if (!userEmailEl || !logoutBtn) {
  console.error("Dashboard elements missing");
}

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
