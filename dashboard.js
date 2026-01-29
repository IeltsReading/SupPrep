import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAO48XKV067rrsTyrq1XDnBdf8R4Eoslws",
  authDomain: "supprep-11a9b.firebaseapp.com",
  projectId: "supprep-11a9b",
  storageBucket: "supprep-11a9b.appspot.com",
  messagingSenderId: "270248758885",
  appId: "1:270248758885:web:b01580e26cf7edc0c5008c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔒 PROTECT DASHBOARD
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Not logged in
    window.location.href = "signin.html";
    return;
  }

  if (!user.emailVerified) {
    // Logged in but not verified
    alert("Please verify your email before accessing the dashboard.");
    window.location.href = "signin.html";
    return;
  }

  // ✅ User is authenticated & verified
  console.log("✅ Access granted:", user.email);
});
