import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as firebase from "firebase";
import global from './mixins/global'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.mixin(global)

const firebaseConfig = {
  apiKey: "",
  authDomain: "adept-voltage-293920.firebaseapp.com",
  databaseURL: "https://adept-voltage-293920.firebaseio.com",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("getUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
