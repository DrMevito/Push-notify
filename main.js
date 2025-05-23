// Firebase config (use yours)
const firebaseConfig = {
  apiKey: "AIzaSyCdNeq3qKvQ1Odjy94wJ1CNtXM00siLUK0",
  authDomain: "mevito-2003.firebaseapp.com",
  projectId: "mevito-2003",
  storageBucket: "mevito-2003.firebasestorage.app",
  messagingSenderId: "202471029560",
  appId: "1:202471029560:web:0101b5c77a2e04c6aa9fcd",
  measurementId: "G-SH3YG65TCJ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Ask for permission and get token
messaging
  .requestPermission()
  .then(() => messaging.getToken({ vapidKey: 'BFdM17MrTixtwua7ySCOuMjc9pkIEQ0E2CXoYDgE8bewlTF1uV2hiLzEhJRlPsv9oWuJMuZduoOGnwsos4Re6QQ' }))
  .then((token) => {
    console.log("FCM Token:", token);
    // Send this token to your server or PocketBase for later notifications
  })
  .catch((err) => {
    console.error("Permission or token error", err);
  });
