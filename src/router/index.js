import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/*
[异步组件加载函数]
@param  string name 组件名称
@return promise     组件
*/
const asyncComponent = (name) =>{
  return resolve => require([`@/components/${name}`],resolve);
}
//异步加载组件
const Login = asyncComponent('Login/Login')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
      	title:'HelloWorld'
      }
    },{
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
