// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCdNeq3qKvQ1Odjy94wJ1CNtXM00siLUK0",
  authDomain: "mevito-2003.firebaseapp.com",
  projectId: "mevito-2003",
  storageBucket: "mevito-2003.firebasestorage.app",
  messagingSenderId: "202471029560",
  appId: "1:202471029560:web:0101b5c77a2e04c6aa9fcd",
  measurementId: "G-SH3YG65TCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Messaging
const messaging = getMessaging(app);

// VAPID key (yours)
const vapidKey = "BFdM17MrTixtwua7ySCOuMjc9pkIEQ0E2CXoYDgE8bewlTF1uV2hiLzEhJRlPsv9oWuJMuZduoOGnwsos4Re6QQ";

// Request permission and get token
getToken(messaging, { vapidKey })
  .then((currentToken) => {
    if (currentToken) {
      console.log("FCM Token:", currentToken);
      alert("FCM Token: " + currentToken);
    } else {
      console.warn("No registration token available. Request permission to generate one.");
    }
  })
  .catch((err) => {
    console.error("An error occurred while retrieving token.", err);
  });

// Listen for foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received in foreground:", payload);
  alert("Notification: " + payload.notification.title);
});
