importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAlrVvK-tPJAe9IgIrbVHw2ek4po8U9QwE",
    authDomain: "webpush-86945.firebaseapp.com",
    projectId: "webpush-86945",
    storageBucket: "webpush-86945.appspot.com",
    messagingSenderId: "946738825220",
    appId: "1:946738825220:web:d0c00db9d4365a1226cd51"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});
