importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCdNeq3qKvQ1Odjy94wJ1CNtXM00siLUK0",
  authDomain: "mevito-2003.firebaseapp.com",
  projectId: "mevito-2003",
  storageBucket: "mevito-2003.firebasestorage.app",
  messagingSenderId: "202471029560",
  appId: "1:202471029560:web:0101b5c77a2e04c6aa9fcd",
  measurementId: "G-SH3YG65TCJ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
