// Vendors
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import SocialSharing from 'vue-social-sharing';
import VueRouter from "vue-router";
import firebase from 'firebase';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Routs
import routes from './routes';
// Components
import App from './App.vue';
// Store
import store from '@/store';
// Enviroments
import { environment } from '@/../environment/environment';

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(SocialSharing);
Vue.config.productionTip = false;

firebase.initializeApp(environment.firebaseConfig)

const router = new VueRouter({
  mode:'history',
  routes,
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
