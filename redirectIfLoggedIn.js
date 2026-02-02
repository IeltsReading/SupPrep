import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "/SupPrep/auth_v4.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.replace("/SupPrep/dashboard.html");
  }
});
