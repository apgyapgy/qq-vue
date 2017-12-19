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
const Login = asyncComponent('Login/Login'),
      Register = asyncComponent('Register/Register'),
      Message = asyncComponent('Message/Message'),
      ChatOne = asyncComponent('Message/ChatOne'),
      ChatGroup = asyncComponent("Message/ChatGroup"),
      ChatSetting = asyncComponent("Message/ChatSetting"),
      Profile = asyncComponent('User/Profile'),
      Setting = asyncComponent('Setting/Setting'),
      AccontSet = asyncComponent('Setting/AccontSet'),
      AddUser = asyncComponent('Setting/AddUser')

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
      name:'Login',
      component:Login,
      meta:{
        title:'登录'
      }
    },{
      path:'/register',
      name:'Register',
      component:Register,
      meta:{
        title:'注册'
      }
    },{
      path:'/message',
      name:'Message',
      component:Message,
      meta:{
        title:'消息'
      }
    },{
      path:'/chat_one/:user_id',
      name:'chat_one',
      component:ChatOne
    },{
      path:'/chat_one/:user_id/set',
      name:'chat_set',
      component:ChatSetting
    },{
      path:'/chat_one/:user_id/set/profile',
      component:Profile
    },{
      path:'/chat_one/:user_id/profile',
      component:Profile
    },{
      path:'/chat_group/:group_id',
      name:'chat_group',
      component:ChatGroup
    },{
      path: '/profile/:user_id',
      component: Profile
    },{
      path:'/setting',
      name:'setting',
      component:Setting
    },{
      path:'/accont_set',
      name:'accont_set',
      component:AccontSet
    },{
      path:'/accont_set/add_user',
      name:'add_user',
      component:AddUser
    }
  ]
})
