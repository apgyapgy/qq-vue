<template>
	<!-- 群聊 -->
	<div class="wrapper">
		<div class="header">
			<div class="item left" @click="back">
				<span v-show="unread!=0">{{unread}}</span>
			</div>
			<div class="item center">
				<span class="name">{{dataList.groupName}}</span>
			</div>
			<div class="item right">
				<img src="./icon/skin_header_icon_group.png" class="person" alt="">
			</div>
		</div>

		<VScroll :isScrollToBottom='isScrollToBottom' :data="dataList.message" component="chatGroup">
			<div class="chat">
				<ul>
					<li v-for="item in dataList.message" :class="{'time':item.type=='time','me':item.type=='message'&&item.content.from=='me','other':item.type=='message'&&item.content.from=='other'}">
						<template v-if="item.type=='message'">
							<img :src="item.content.face" @click="$router.push(`/profile/${item.content.user_id}`)" alt="">
							<p class="name">{{item.content.name}}:{{item.content.from}}</p>
							<p class="message">{{item.content.message}}</p>
						</template>
						<template v-else>
							{{item.content}}
						</template>
					</li>
				</ul>
			</div>
		</VScroll>

		<div class="footer">
			<div class="writeMessage">
				<textarea v-model="writeMessage" @keydown.enter.prevent="sendMessage" ref="message"></textarea>
				<button class="btn" :class="{'enable':writeMessage!=''}" @click="sendMessage">{{btnInfo}}</button>
			</div>
			<div class="other" @click="focus">
				<div class="item" v-for="item in iconUrl">
					<img :src="item">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import VScroll from '@/base/Scroll/Scroll';
	//import * as api from '@/api/chatGroup';
	import {mapGetters} from 'vuex';
	import {parseChatTime} from '@/common/js/parse-time';
	export default{
		name:'ChatGroup',
		data(){
			return{
				isScrollToBottom:true,
				writeMessage:'',//要发送的消息
				unread:0,
				dataList:{
					groupId:'',//群id
					groupName:'正在加载中...',//群名称
					groupAvator:'',//群头像
					groupMember:[],
					nick_name:'',//自己的群昵称
					message:[]  //拉取到的消息
				},
				btnInfo:'发 送',
				iconName:['ptt','image','ptv','camera','hongbao','flash','emotion','plus']
			}
		},
		computed:{
			...mapGetters([
				'userId',
				'userInfo',
				'allMessage'
			]),
			iconUrl(){
				return this.iconName.map(item => require(`./icon/skin_aio_panel_${item}_nor.png`))
			}
		},
		mounted(){
			this.dataList.groupId = this.$route.params.group_id;//群id
			this.resetAndGetUnread(this.dataList.groupId);
			this.getMessage(this.userId,this.dataList.groupId);//摘取群聊天消息
			this.updateBySocket();//通过socket来更新消息
		},
		components:{
			VScroll
		},
		methods:{
			focus(){
				this.$refs.message.focus();
			},
			//将该群消息未读消息数置0，并拉取未读消息条数
			resetAndGetUnread(id){
				this.$store.commit('UPDATE_UNREAD_MESSAGE',{
					type:'group',
					id
				});
				this.getUnread();
			},
			//获取未读消息数
			getUnread(){
				let unread = 0;
				this.allMessage.forEach(item => {
					unread += item.unread
				});
				this.unread = unread;
			},
			//获取群消息
			async getMessage(userId,groupId){
				//const {data} = await api.get_message(userId,groupId);
				const data = {
					"message":[{
						"from_user":2,"message":"楚乔:电商项目中发模板邮件这种业务有谁了解吗","time":1500007000,
						"face":"/static/user/face/4.jpg","nick_name":"楚乔",from:''
					},{
						"from_user":3,"message":"马哲涵:邮件是html格式","time":1500008000,
						"face":"/static/user/face/5.jpg","nick_name":"马哲涵"
					},{
						"from_user":2,"message":"楚乔:嗯，那个能实现。老板给两张表就不管了，我不太清楚具体的业务流程之类",
						"time":1500010000,"face":"/static/user/face/4.jpg","nick_name":"楚乔"
					},{
						"from_user":2,"message":"楚乔:还是不太明白啊","time":1500902861,
						"face":"/static/user/face/4.jpg","nick_name":"楚乔"
					},{
						"from_user":1,"message":"宇文玥:哪里不明白？","time":1501229199,
						"face":"/static/user/face/0.jpg","nick_name":"宇文玥"
					}],
					"info":{
						"id":6,"group_name":"牛客网IT笔试面试交流群","group_avator":"/static/user/face/1.jpg",
						"nick_name":"宇文玥"
					},
					"groupMember":[2,3]
				};
				const {info,message,groupMember} = data;
				this.dataList.groupId = info.id;//群id
				this.dataList.groupAvator = info.group_avator;//群头像
				this.dataList.groupName = info.group_name;
				this.dataList.nick_name = info.nick_name;
				this.dataList.groupMember = groupMember;//其它群成员的Id
				//取消息
				if(message.length == 0){
					return;
				}
				//添加第一条时间消息，不需要经过判断
				this.isAddTimeMessage(0,message[0].time);
				//添加消息内容 
				for(let [index,value] of message.entries()){
					index > 0 && this.isAddTimeMessage(1,value.time,message[index-1].time);
					let content = {
						type:'message',
						content:{
							userId:value.from_user,
							from:value.from_user == this.userId?'me':'other',
							face:value.face,
							name:value.nick_name,
							message:value.message.substr(value.message.indexOf(":")+1),
							time:value.time
						}
					};
					this.dataList.message.push(content);
				}
				console.log("message:",this.dataList.message)
			},
			//发送消息
			async sendMessage(){
				if(this.writeMessage.trim() == ''){
					return;
				}
				this.$refs.message.focus();
				this.btnInfo = '发送中';
				this.sendBySocket();//先通过socket发送消息
				//持久化到服务器
				let data = {
					userId:this.userId,
					groupId:this.dataList.groupId,
					message:this.writeMessage,
					nickName:this.dataList.nick_name,
					time:Date.parse(new Date())/1000
				};
				const {code} = await api.send_message(data);
				if(code == 1){//消息发送成功
					data = {
						type:'message',
						content:{
							user_id:this.userId,
							from:'me',
							name:this.dataList.nick_name,
							face:this.userInfo.face,
							message:this.writeMessage,
							time:Date.parse(new Date())/1000
						}
					}
				}
				//本地追加自己发送的消息
				this.addMessageLocal(data);
				this.writeMessage = '';
				this.btnInfo = '发 送';
			},
			//本地追加消息
			addMessageLocal(data){
				const message = this.dataList.message;//获取本地已经存在 的消息
				if(message.length == 0){
					//如果本地原来没有消息，则直接添加时间消息，不需要经过比较判断
					this.isAddTimeMessage(0,data.content.time);
				}else{
					//否则需要经过比较判断才能确定是否要添加时间消息
					const latestMessage = message[message.length-1];//本地最新的一条消息
					const latestTime = latestMessage.content.time;//该 消息的时间
					this.isAddTimeMessage(1,data.content.time,latestTime);
				}
				this.dataList.message.push(data);
			},
			//是否要添加时间消息
			isAddTimeMessage(flag,currentTime,prevTime=''){
				if(flag){//当flag为真时，需要比较判断，才能确定是否要添加时间
					const seprator = 30*60;//时间间隔基准，半个小时
					if(currentTime-prevTime>seprator){
					//当下一条消息和这条消息的时间间隔大于30分钟，才添加时间
						this.dataList.message.push({
							type:'time',
							content:parseChatTime(currentTime)
						});
					}
				}else{
					//当flag为假时，是必须要添加时间消息的
					this.dataList.message.push({
						type:'time',
						content:parseChatTime(currentTime)
					})
				}
			},
			//按返回时更新状态
			back(){
				//api.update_enter_chat(this.userId,this.dataList.groupId);
				this.$router.back();
			},
			//socket发送消息
			sendBySocket(){
				return;
				socket.emit('sendGroupMessage',{
					group_id:this.dataList.groupId,
					group_name:this.dataList.groupName,
					group_avator:this.dataList.groupAvator,
					group_member:this.dataList.groupMember,
					from_suer_id:this.userId,
					from_user_nick_name:this.dataLsit.nick_name,
					from_user_face:this.userInfo.face,
					message:this.writeMessage,
					time:Date.parse(new Date())/1000
				});
			},
			//socket更新消息
			updateBySocket(){
				return;
				socket.removeAllListeners();//移除原来的事件
				socket.on('receiveGroupMessage',(data) => {
					if(!data.group_member.includes(this.userId)){
						return;
					}
					if(this.dataList.groupId == data.from_user_id){
						this.addMessageLocal({
							type:'message',
							content:{
								user_id:data.from_user_id,
								from:'other',
								name:data.from_user_nick_name,
								face:data.from_user_face,
								message:data.message,
								time:data.time
							}
						});
					}
					//提交到store里
					this.$store.commit('UPDATE_MESSAGE',{
						from_user:data.group_name,
						id:data.group_id,
						imgUrl:data.group_avator,
						message:`${data.from_user_nick_name}:${data.message}`,
						time:data.time,
						type:'group',
						isEnterChat:this.dataList.groupId == data.group_id
					});
				});
				socket.on('receivePrivateMessage',(data) => {
					//提交到store里
					this.$store.commit('UPDATE_MESSAGE',{
						from_user:data.from_user_beizhu,
						id:data.from_user,
						imgUrl:data.from_user_face,
						message:data.message,
						time:data.time,
						type:'single',
						isEnterChat:false
					});
				})
			}
		},
		watch:{
			allMessage(){
				//监控到消息改变时，则自动修改未读消息数
				this.getUnread();
			}
		}
	}
</script>
<style scoped lang="less">
	#wrapper{
		background:#efefef;
		bottom:70px;
	}
	.header{
		display:flex;
		padding:0 20px;
		height:50px;
		line-height:50px;
		background:#1e90ff;
		color:#fff;
		font-size:18px;
		position:absolute;
		top:0;
		width:100%;
		z-index:3;
		.item{
			flex:1;
			&.left{
				background:url(./icon/flc.png) no-repeat left center;
				margin-left:-10px;
				padding-left:20px;
				background-size:26px 26px;
				cursor:pointer;
				span{
					display:inline-block;
					background:rgba(255,255,255,.5);
					border-radius:50%;
					width:24px;
					height:24px;
					line-height:24px;
					text-align:center;
					font-size:14px;
				}
			}
			&.center{
				text-align:center;
				span{
					display:block;
					letter-spacing:2px;
					line-height:26px;
					font-size:16px;
					overflow:hidden;
					margin:0 auto;
					width:240px;
					text-overflow:ellipsis;
					white-space:nowrap;
				}
			}
			&.right{
				text-align:right;
				cursor:pointer;
				position:relative;
				left:20px;
				img{
					transform:scale(0.5);
				}
			}
		}
	}
	.chat{
		cursor:pointer;
		ul{
			width:100%;
			li{
				padding:6px 10px;
				img{
					border-radius:50%;
					width:46px;
					height:46px;
				}
				p.message{
					min-height:40px;
					line-height:30px;
					max-width:56%;
					display:inline-block;
					border-radius:10px;
					padding:6px 10px;
					margin-top:10px;
					text-align:left;
					word-break:break-all;
				}
				p.name{
					color:#666;
					font-size:14px;
					position:relative;
				}
			}
			li.time{
				height:40px;
				line-height:40px;
				font-size:14px;
				color:#666;
				text-align:center;
			}
			li.me{
				text-align:right;
				overflow:hidden;
				img{
					float:right;
				}
				p.message{
					margin-right:10px;
					background:#1e90ff;
					color:#fff;
				}
				p.name{
					right:14px;
				}
			}
			li.other{
				text-align:left;
				overflow:hidden;
				img{
					float:left;
				}
				p.message{
					margin-left:10px;
					background:#fff;
					color:#000;
				}
				p.name{
					left:14px;
				}
			}
		}
	}
	.footer{
		width:100%;
		height:70px;
		position:absolute;
		bottom:0;
		background:#eee;
		.writeMessage{
			height:32px;
			display:flex;
			textarea{
				width:80%;
				margin:0 6px;
				padding-top:7px;
				padding-left:6px;
				border-radius:2px;
				outline:none;
				resize:none;
				border:none;
				overflow-y:hidden;
				font:'Microsoft Yahei' 16px/18xp;
			}
			button.btn{
				height:100%;
				width:16%;
				background:#ccc;
				color:white;
				border-radius:2px;
				cursor:not-allowed;
				font-family:'Microsoft Yahei';
				&.enable{
					background:#1e90ff;
					cursor:pointer;
				}
			}
		}
		.other{
			display:flex;
			background:#eee;
			.item{
				height:100%;
				flex:1;
				text-align:center;
				line-height:32px;
				img{
					width:32px;
					height:32px;
					margin-top:4px;
					cursor:pointer;
				}
			}
		}
	}
</style>