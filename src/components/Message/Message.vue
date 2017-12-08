<template>
	<!-- 消息 -->
	<div class="wrapper">
		<VAsideMenu></VAsideMenu>
		<VHeader :currentTab="currentTab"></VHeader>
		<VScroll :data="dataList" component="message">
			<ul>
				<li>
					<VSearch placeholder="搜索"></VSearch>
				</li>
				<li class="message" v-for="item in dataList" @click="goChat(item.type,item.id)" @touchstart="touchStart" @touchmove="touchMove">
					<img :src="item.imgUrl" alt="">
					<div class="info">
						<p class="from">
							{{item.from_user}}
							<span>{{item.time}}</span>
						</p>
						<p class="message">
							{{item.message}}
							<span v-if="item.unread!=0">{{item.unread}}</span>
						</p>
					</div>
				</li>
			</ul>
		</VScroll>
		<VFooter :currentTab="currentTab"></VFooter>
	</div>
</template>
<script>
	import VAsideMenu from '@/components/Common/SideMenu/SideMenu';
	import VHeader from '@/components/Common/Header/Header';
	import VScroll from '@/base/Scroll/Scroll';
	import VSearch from '@/base/Search/Search';
	import VFooter from '@/components/Common/Footer/Footer';
	import {mapGetters} from 'vuex';
	export default{
		data(){
			return{
				currentTab:1,
				dataList:[{
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
		        }]
			}
		},
		components:{VAsideMenu,VHeader,VScroll,VSearch,VFooter},
		computed:{
			...mapGetters({
				'userId':'userId'//,'dataList':'allMessage'
			}) 
		},
		created(){
			//获取消息
			//this.$store.dispatch('getAllMessage',this.userId);//先注释，接口写到再取消注释
			//新消息通过socket来获取
			this.updateBySocket();
		},
		methods:{
			touchStart(e){
				this.startX = this.getTouchXY(e).X;
				this.startY = this.getTouchXY(e).Y;
			},
			touchMove(e){
				const X = this.getTouchXY(e).X - this.startX;
				const Y = this.getTouchXY(e).Y - this.startY;
				if(Math.abs(X) > 3*Math.abs(Y) && X > 50){
					this.showSidebar();
				}
			},
			getTouchXY(e){
				return {
					X:e.targetTouches[0].pageX,
					Y:e.targetTouches[0].pageY
				}
			},
			showSidebar(e){
				this.$store.commit('SHOW_SIDEBAR',{
					'isShowSideBar':true,
					'isShowMask':true
				});
			},
			goChat(chatType,chatId){
				const path = chatType=='single'?`/chat_one/${chatId}`: `/chat_group/${chatId}`;
				this.$router.push(path); 
			},
			//通过socket来更新消息
			updateBySocket(){
				return;//没做socket先return
				//先移除原来的事件，否则会生成重复的监听器
				socket.removeAllListeners();
				socket.on('receivePrivateMessage',(data) =>{
					this.$store.commit('UPDATE_MESSAGE',{
						from_user:data.from_user_beizhu,
						id:data.from_user,
						imgUrl:data.from_user_face,
						message:data.message,
						time:data.time,
						tyep:'single',
						isEnterChat:false //是否进入聊天页面，进入的话该消息的unread为0
					});
				});
				socket.on('receiveGroupMessage',(data)=> {
					//如果不包含自己，则直接丢弃这个 socket消息
					if(!data.group_member.includes(this.userId-0)){
						return;
					}
					this.$store.commit('UPDATE_MESSAGE',{
						from_user:data.group_name,
						id:data.group_id,
						imgUrl:data.group_avator,
						message:`${data.from_user_nick_name}:${data.message}`,
						time:data.time,
						type:'group',
						isEnterChat:false
					})
				})
			}
		}
	}
</script>
<style scoped lang="less">
	#wrapper{
		bottom:2.75rem;
		ul{
			cursor:pointer;
			width:100%;
			background:#fff;
		}
		ul li.message{
			display:flex;
			padding:4px 10px;
			height:60px;
			width:100%;
			line-height:60px;
			border-bottom:1px solid #eee;
			list-style:none;
			img{
				float:left;
				width:50px;
				height:50px;
				vertical-align:middle;
				border-radius:50%;
			}
			.info{
				flex:1;
				display:block;
				position:relative;
				width:100%;
				left:18px;
				font-size:16px;
				line-height:24px;
				text-align:left;
				p.from{
					span{
						float:right;
						position:absolute;
						right:30px;
						font-size:13px;
						color:#666;
					}
				}
				p.message{
					width:64%;
					font-size:14px;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
					word-break:keep-all;
					color:#666;
					span{
						position:absolute;
						right:30px;
						width:22px;
						height:22px;
						color:#fff;
						font-size:12px;
						border-radius:50%;
					}
				}
			}
		}
		ul li:first-child{
			padding:0;
			margin-top:2px;
			height:42px;
			line-height:42px;
			border:none;
		}
		.search{
			padding:0;
		}
	}
</style>