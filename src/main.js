import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTK_kXHGUWFOk4lyN7iWIepNLc0b0odDY",
    authDomain: "petauth-d6ee4.firebaseapp.com",
    projectId: "petauth-d6ee4",
    storageBucket: "petauth-d6ee4.appspot.com",
    messagingSenderId: "930219252632",
    appId: "1:930219252632:web:a2373cc12d05378e7e29ed",
    measurementId: "G-YCX1E9B65W"
  }

firebase.initializeApp(firebaseConfig)

library.add(fas, fab)

createApp(App).use(store).use(router).component('fa', FontAwesomeIcon).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'