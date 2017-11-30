// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App'
import router from './router'
import store from './store';
import FastClick from 'fastclick';
import vueg from 'vueg';
//import VueResource from 'vue-resource'
import VueWechat from 'vue-wechat-title'
import 'vueg/css/transition-min.css'


Vue.config.productionTip = false
//Vue.use(VueResource);
Vue.use(VueWechat);

Vue.use(VueAxios,axios);
Vue.use(Vuex);
//vueg转场动画
const options = {
  forwardAnim:'fadeInRight',
  duration:0.2
}
// fastclick,解决移动端300ms延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body)
  }, false)
}

/*Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push((request, next)  => {
  $.showLoading();
  request.jsonp = 'callback';
  next((response)=>{
  	setTimeout(function(){
  		$.hideLoading();
  	});
  });
});*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
