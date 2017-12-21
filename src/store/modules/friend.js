import * as types from '../mutations-types'
import * as api from '@/api/friend.js'

// state
const state = {
  'hasGetFriendList': 0, //是否已经获取过好友列表
  'friendList': {},
  'hasGetNewFriends':0,
  'newFriends':[],
  'friendStatus':{},
  'tabIndex':1  //联系人页面的当前标签页
}

// mutations
const mutations = {
  [types.GET_FRIEND_LIST](state, data) {
    state.hasGetFriendList = data.hasGetFriendList
    state.friendList = data.friendList
    state.friendStatus = data.friendStatus
  },
  [types.GET_NEW_FRIENDS](state,data){
    state.hasGetNewFriends=data.hasGetNewFriends
    state.newFriends=data.newFriends
  },
  [types.UPDATE_NEW_FRIENDS](state,update){
    (state.newFriends)[update.index].status=update.status
  },
  [types.TAB_INDEX](state,tabIndex){
    state.tabIndex=tabIndex
  },
  [types.UPDATE_FRIEND_LIST](state){
    state.hasGetFriendList=0
  }
}

// actions
const actions = {
  async getFriendList({commit},userId) {
      //const res = await api.get_friend_list(userId)
      const res = {"code":1,"data":{"friend":{"allMember":[{"id":2,"name":"楚乔","special":1,"face":"/static/user/face/4.jpg","sign":"路漫漫其修远兮","vip":2,"status":3,"fenzu":"特别关心"},{"id":3,"name":"马哲涵","special":1,"face":"/static/user/face/5.jpg","sign":"人生路漫漫","vip":1,"status":1,"fenzu":"特别关心"},{"id":4,"name":"魏明","special":0,"face":"/static/user/face/6.jpg","sign":"最近真的太开心了","vip":2,"status":3,"fenzu":"特别关心"},{"id":5,"name":"程文宇","special":0,"face":"/static/user/face/7.jpg","sign":"月下问归人东篱黄昏约，是是非非","vip":0,"status":0,"fenzu":"特别关心"},{"id":6,"name":"许易","special":0,"face":"/static/user/face/8.jpg","sign":"西风醉，几度痴人泪","vip":2,"status":0,"fenzu":"晓风残月"},{"id":7,"name":"张扬扬","special":0,"face":"/static/user/face/9.jpg","sign":"孤灯点，青丝雪，只怨情已怯","vip":2,"status":5,"fenzu":"晓风残月"},{"id":8,"name":"许志荣","special":0,"face":"/static/user/face/10.jpg","sign":"青春、若有张不老的脸","vip":1,"status":0,"fenzu":"晓风残月"},{"id":9,"name":"李萌","special":0,"face":"/static/user/face/11.jpg","sign":"掩面叹息、泪落红妆残","vip":0,"status":2,"fenzu":"晓风残月"}],"fenzu":[{"zu_name":"晓风残月","zu_member":"6,7,8,9"},{"zu_name":"特别关心","zu_member":"3,4,5,2"}]},"group":[{"id":1,"role":0,"name":"英语四六级自动查询","url":"/static/user/face/11.jpg"},{"id":2,"role":0,"name":"ThinkPHP技术交流中心","url":"/static/user/face/2.jpg"},{"id":3,"role":1,"name":"工作室招新群","url":"/static/user/face/12.jpg"},{"id":4,"role":1,"name":"心率手表","url":"/static/user/face/13.jpg"},{"id":5,"role":1,"name":"心理电影赏析","url":"/static/user/face/14.jpg"},{"id":6,"role":2,"name":"牛客网IT笔试面试交流群","url":"/static/user/face/1.jpg"},{"id":7,"role":2,"name":"14级网络工程2班","url":"/static/user/face/3.jpg"},{"id":8,"role":2,"name":"心理电影周日8-9W7306","url":"/static/user/face/8.jpg"},{"id":9,"role":2,"name":"计算机网络学习交流","url":"/static/user/face/15.jpg"}]}};
      let friendData = res.data.friend.allMember,
      fenzuData=res.data.friend.fenzu,
      groupData = res.data.group

      //按在线状态和VIP类型降序排列
      friendData.sort((prev, current) => {
        //先按在线状态排序
        if (prev.status == 0 && current.status > 0) {
          return true
        }
        //状态一样的情况下再按VIP级别排序
        if ((prev.status > 0 && current.status > 0) || (prev.status == 0 && 
          current.status == 0)){    
          return  current.vip - prev.vip
        }
        //否则不排序
        return false
      })
      //按角色升序排列
      groupData.sort((prev, current) => {
        return prev.role - current.role
      })

      //先将好友数据转换成指定格式
      let friend_arr=[]
      for(let value0 of fenzuData.values()){
        let fenzuName=value0.zu_name
        let friend={
          name: fenzuName,
          online: 0,
          members: [] 
        }
        for (let [index, value] of friendData.entries()) {
          if(value.fenzu==fenzuName){
            friend.members.push({
              id: value.id,
              name: value.name,
              face: value.face,
              vipurl: value.vip == 0 ? '' : value.vip == 1 ? require('@/common/icon/vip.png') : 
                      require('@/common/icon/ewm.png'),
              status: value.status == 0 ? '离线' : value.status == 1 ? '手机在线' : 
                      value.status == 2 ? '3G在线' : value.status == 3 ? '4G在线' : 
                      value.status == 4 ? 'WiFi在线' : '电脑在线',
              sign: value.sign
            })
            if (value.status != 0) {
              friend.online++
            }
          }
        }
        friend_arr.push(friend)
      }

      //再将群数据转换成指定格式
      let group_set = new Set() //保存最终结果
      let group_map = new Map()
      for (let [index, value] of groupData.entries()) {
        let fenzuName = value.role
        let group
        if (group_map.has(fenzuName)) {
          group = group_map.get(fenzuName)
        } else {
          group = {
            type: value.role == 0 ? '我创建的群' : value.role == 1 ? '我管理的群' : 
                '我加入的群',
            groups: []
          }
        }
        group.groups.push({
          id: value.id,
          name: value.name,
          url: value.url
        })
        group_map.set(fenzuName, group)
      }
      group_map.forEach((item) => {
        group_set.add(item)
      })
      const groups_arr = Array.from(group_set)
      
      let data = {
        hasGetFriendList: 1,
        friendList: {
          friends:friend_arr,
          groups:groups_arr
        },
        friendStatus:{
          friend:new Array(friend_arr.length).fill(0),
          group:new Array(groups_arr.length).fill(0)
        }
      }
      //特别关心放在最顶部
      data.friendList.friends.sort((prev,current)=>{
         return prev.name!='特别关心'&&current.name=='特别关心'
      })
      commit(types.GET_FRIEND_LIST, data)
  },
  async getNewFriends({commit},userId){
      const res = await api.get_new_friends(userId)
      const data={
        hasGetNewFriends:1,
        newFriends:res.data
      }
      commit(types.GET_NEW_FRIENDS,data)
  },
  updateNewFriends:({commit,state},data)=>{
    let newFriends=state.newFriends,
        indexOfNewFriends   //要更新的项的下标
    for(let [index,value] of newFriends.entries()){
      if(value.id==data.applyId){
        indexOfNewFriends=index
        break
      }
    }
    const update={
      index:indexOfNewFriends,
      status:data.status
    }
    commit(types.UPDATE_NEW_FRIENDS,update)
  }
}

export default {
  state,
  actions,
  mutations
}