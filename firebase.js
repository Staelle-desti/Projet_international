<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmVOHOHR7zOotXGQDn6jbugAMdUurVwnQ",
  authDomain: "iutfore.firebaseapp.com",
  projectId: "iutfore",
  storageBucket: "iutfore.firebasestorage.app",
  messagingSenderId: "942183391896",
  appId: "1:942183391896:web:b74b86fb01a5973c80a6ed"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
</script>
