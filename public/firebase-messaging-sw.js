  // Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
  apiKey: "AIzaSyAxrrfsCTqgkco5DOW9Z9Xkz70IwAaD4qo",
  authDomain: "notification-10a05.firebaseapp.com",
  projectId: "notification-10a05",
  storageBucket: "notification-10a05.appspot.com",
  messagingSenderId: "1024701851322",
  appId: "1:1024701851322:web:149d0e4a7d7af4c8b88483",
  measurementId: "G-LFE6DTBQYX"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});