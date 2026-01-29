import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA048XKVO67rrsTyrq1XDnBdf8R4Eoslws",
  authDomain: "supprep-11a9b.firebaseapp.com",
  projectId: "supprep-11a9b",
  storageBucket: "supprep-11a9b.appspot.com",
  messagingSenderId: "270248758885",
  appId: "1:270248758885:web:b01580e26cf7edc0c5008c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ===== SIGN UP =====
const signUpForm = document.getElementById("signup-form");

if (signUpForm) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = signUpForm.username.value;
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(result.user, {
        displayName: username
      });

      await sendEmailVerification(result.user);

      alert("Verification email sent. Please verify, then sign in.");
      window.location.href = "signin.html";

    } catch (err) {
      alert(err.message);
    }
  });
}

// ===== SIGN IN =====
const signInForm = document.getElementById("signin-form");

if (signInForm) {
  signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signInForm.email.value;
    const password = signInForm.password.value;

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (!result.user.emailVerified) {
        alert("Please verify your email first.");
        return;
      }

      window.location.href = "dashboard.html";
    } catch (err) {
      alert(err.message);
    }
  });
}
