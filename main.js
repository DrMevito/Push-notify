// Import modules (no need to use script tags for this if you're using Cloudflare Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdNeq3qKvQ1Odjy94wJ1CNtXM00siLUK0",
  authDomain: "mevito-2003.firebaseapp.com",
  projectId: "mevito-2003",
  storageBucket: "mevito-2003.firebasestorage.app",
  messagingSenderId: "202471029560",
  appId: "1:202471029560:web:0101b5c77a2e04c6aa9fcd",
  measurementId: "G-SH3YG65TCJ"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission and get token
Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    getToken(messaging, {
      vapidKey: "BFdM17MrTixtwua7ySCOuMjc9pkIEQ0E2CXoYDgE8bewlTF1uV2hiLzEhJRlPsv9oWuJMuZduoOGnwsos4Re6QQ"
    }).then((currentToken) => {
      if (currentToken) {
        console.log("FCM Token:", currentToken);
        // You can send this token to PocketBase or save it
      } else {
        console.log("No registration token available.");
      }
    }).catch((err) => {
      console.error("An error occurred while retrieving token.", err);
    });
  } else {
    console.log("Permission not granted.");
  }
});
