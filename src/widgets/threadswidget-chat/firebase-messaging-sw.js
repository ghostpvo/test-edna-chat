/*
    service worker for push messages based on firebase
*/
importScripts('https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.3/firebase-messaging.js');

var config = {
    firebaseConfig: {
        apiKey: 'BAL6xgukszC0Xg9M_HvUeTSiK066sUF1H5rN71PYH8v1QUjKaPdPZ-gY2QKVC50QOotQIL97JZzPwDwAz_EmKLo',
        authDomain: 'ibtestchat-123.firebaseapp.com',
        databaseURL: 'https://ibtestchat-123.firebaseio.com',
        projectId: 'ibtestchat-123',
        storageBucket: 'ibtestchat-123.appspot.com',
        messagingSenderId: '890731413500',
        appId: '1:890731413500:web:08758b3cf9b85939a2fc79'
    },
    title: 'Threads Chat',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUxpcejo6Onp6enp6eTk5Onp6erq6uvr6+np6eXl5enp6ejo6Ovr6+zs7Ojo6Onp6ePj4+rq6pmZmdPT06enp+bm5p6entra2sLCwrm5ueNweO8AAAARdFJOUwBOiKUcunn78A3dnllqk8XwLooT9gAAAWVJREFUSMedllmShSAMRXHggYq+YhLd/0bbtluLJODA/SR1yiQmFxgj6tTEeymE7PmkOnarduRCRxJ8bK+BQSc05KGuljopWWfyqzLADlUp4qMv9aFJNfpGDUqu++pbfSHT6AdqXtSRqKeiUR+Cp6dn3zrcXW+d2eQs6fVRTo0CYQd2KKBQ/T8l6CNhNqdmxMi/2UFz5SNiY1BFw/4R9O3VAK0o/PuZEZ3NEJlReNwQjvIySCgzvnVYvENEx5R+h2jFprfIhEu5Rzjr3yI9I9t702QtmcBHDiIOxwVFFogsFCGJBYgEmlivLzMjeW3lc3JmY4Rs2dbkia7rmp/j/VcquvYxQg1A0bFc4IotdCxhMQhIQBytmHUmIeA0I1jkkASQ07SxXQRzoRDbxWlK9gqxwJQO63uC1NBgvcsTzkODPWzc26w8svGSy6LkSiq5+Aqu15JLvOipUPIgKXn2FD2uHj3hfgChdIQNPQdYDAAAAABJRU5ErkJggg=='
};

firebase.initializeApp(config.firebaseConfig);

var messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ');
    const notificationTitle = config.title;
    const notificationOptions = {
        body: payload && payload.data && payload.data.message || '',
        icon: config.icon
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
