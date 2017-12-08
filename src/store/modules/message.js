import * as types from '../mutations-types'
import * as api from '@/api/message'
import {parseMessageTime} from '@/common/js/parse-time'

// state
const state = {
  'allMessage': [] //所有消息
}

// mutations
const mutations = {
  [types.GET_ALL_MESSAGE](state, data) {
    //state.allMessage = data.allMessage
    state.allMessage = [{
          "id":2,"imgUrl":"/static/user/face/4.jpg","unread":0,
          "message":"你试试","time":"07-28","from_user":"楚乔","type":"single"
        },{
          "id":6,"unread":0,"from_user":"牛客网IT笔试面试交流群",
          "imgUrl":"/static/user/face/1.jpg","message":"宇文玥:哪里不明白？",
          "time":"07-28","type":"group"
        },{
          "id":3,"imgUrl":"/static/user/face/5.jpg","unread":0,"message":"哈哈哈",
          "time":"07-20","from_user":"马哲涵","type":"single"
        },{
          "id":7,"unread":0,"from_user":"14级网络工程2班",
          "imgUrl":"/static/user/face/3.jpg",
          "message":"马哲涵:男生的材料我现在看不到,你们走心...","time":"07-16",
          "type":"group"
        },{
          "id":2,"unread":0,"from_user":"ThinkPHP技术交流中心",
          "imgUrl":"/static/user/face/2.jpg","message":"楚乔:有谁会nodejs的吗",
          "time":"07-15","type":"group"
        }];
  },
  [types.UPDATE_MESSAGE](state, data) {
    const index = state.allMessage.findIndex((item) => {
      return item.type == data.type && item.id == data.id
    })

    let unread
    if (index != -1) {
      unread = (state.allMessage)[index].unread
      unread++
      state.allMessage.splice(index, 1)
    } else {
      unread = 1
    }

    if (data.isEnterChat) unread = 0

    state.allMessage.unshift({
      from_user: data.from_user,
      id: data.id,
      imgUrl: data.imgUrl,
      message: data.message,
      time: parseMessageTime(data.time),
      type: data.type,
      unread: unread
    })
  },
  [types.UPDATE_UNREAD_MESSAGE](state, data) {
    const index = state.allMessage.findIndex((item) => {
      return item.type == data.type && item.id == data.id
    })
    if (index != -1) {
      (state.allMessage)[index].unread = 0
    }
  }
}

// actions
const actions = {
  async getAllMessage({commit}, userId) {
    const res = await api.get_all_message(userId)
    const {singleMessage,groupMessage} = res.data

    for (let index of singleMessage.keys()) {
      singleMessage[index]['type'] = 'single'
    }
    for (let index of groupMessage.keys()) {
      groupMessage[index]['type'] = 'group'
    }
    const allMessage = singleMessage.concat(groupMessage)
    allMessage.sort((prev, current) => { //按时间降序排列
        return current.time - prev.time
    })
    for (let [index, value] of allMessage.entries()) {
      allMessage[index]['time'] = parseMessageTime(value.time) //解析时间
    }

    const data = {allMessage}
    commit(types.GET_ALL_MESSAGE, data)
  }
}

export default {
  state,
  actions,
  mutations
}