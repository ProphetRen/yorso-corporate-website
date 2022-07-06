import Vue from "vue";
import Vuelidate from "vuelidate"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import localizeFilter from "./filters/localize.filter";
import messagePlugin from '../src/utils/message.plugin'
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min"
import Loader from '/src/components/app/Loader'
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database'
import currencyFilter from "./filters/currency.filter";


Vue.config.productionTip = false;
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date',dateFilter)
Vue.filter('currency',currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyDqPlDV3oSAIh70J8Mc2jWwuY9FaYvgrCk",
  authDomain: "my-crm-project-fd8bd.firebaseapp.com",
  projectId: "my-crm-project-fd8bd",
  storageBucket: "my-crm-project-fd8bd.appspot.com",
  messagingSenderId: "699693711339",
  appId: "1:699693711339:web:c5feaafc32b22d51a7e3ae",
  measurementId: "G-HR3T3TYEY5",
  databaseURL:'https://my-crm-project-fd8bd-default-rtdb.europe-west1.firebasedatabase.app'
})

let app

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})




