// ===== FIREBASE SETUP =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAO48XKV067rrsTyrq1XDnBdf8R4Eoslws",
  authDomain: "supprep-11a9b.firebaseapp.com",
  projectId: "supprep-11a9b",
  storageBucket: "supprep-11a9b.firebasestorage.app",
  messagingSenderId: "270248758885",
  appId: "1:270248758885:web:b01580e26cf7edc0c5008c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ===== SIGN IN =====
const signInForm = document.getElementById("signin-form");

if (signInForm) {
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signInForm.email.value;
    const password = signInForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch(err => {
        alert(err.message);
      });
  });
}

// ===== SIGN UP =====
const signUpForm = document.getElementById("signup-form");

if (signUpForm) {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signUpForm.email.value;
    const password = signUpForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch(err => {
        alert(err.message);
      });
  });
}
