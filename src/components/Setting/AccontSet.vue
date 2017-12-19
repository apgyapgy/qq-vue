<template>
	<!-- 帐号管理 -->
	<div class="wrapper">
		<div class="header">
			<div class="item left" @click="$router.back()">返回</div>
			<div class="item center">帐号管理</div>
			<div class="item right" @click="editAccont">{{edit.text}}</div>
		</div>
		<VScroll :data="accounts" component="accountSet">
			<div class="accontSet">
				<div class="first">
					<ul class="users">
						<li v-for="item in accounts" @click="changeUser(item.id)">
							<img :src="item.face" class="face" alt="">
							<div class="info">
								<p>{{item.nick_name}}</p>
								<p class="message">{{item.qq}}</p>
								<img :src="edit.imgSrc" @click.stop="removeAccont(item.id)" alt="" :class="{'other':item.id!=userInfo.id&&edit.status ==0}">
							</div>
						</li>
					</ul>
					<p class="addAccont" @click="$router.push('/accont_set/add_user')">添加或注册帐号</p>
				</div>
				<div class="second">
					<p class="item relative">关联QQ号</p>
					<p class="item info">关联QQ号后，即可代收该号的好友消息</p>
				</div>
				<div class="third">
					<p class="item" @click="changeStatus(1)">在线状态
						<img src="./icon/gzb.png" :class="{'cur':userInfo.status==1}" alt="">
					</p>
					<p class="item" @click="changeStatus(2)">
						隐身状态
						<img src="./icon/gzb.png" :class="{'cur':userInfo.status==2}" alt="">
					</p>
				</div>
				<div class="fourth">
					<p class="item" @click="logout">退出当前帐号</p>
				</div>
			</div>
		</VScroll>
	</div>
</template>
<script>
	import VScroll from '@/base/Scroll/Scroll';
	import {mapGetters} from 'vuex';
	//import * as api from '@/api/user';
	export default{
		name:'accongSet',
		data(){
			return{
				edit:{
					text:'编辑',
					imgSrc:require('./icon/gzb.png'),
					status:0
				}
			}
		},
		computed:{
			...mapGetters(['userInfo','accounts'])
		},
		components:{
			VScroll
		},
		methods:{
			//编辑
			editAccont(){
				if(this.edit.status == 0){
					this.edit.text = '完成';
					this.edit.imgSrc = require('./icon/osr.png');
					this.edit.status = 1;
				}else{
					this.edit.text = '编辑';
					this.edit.imgSrc = require('./icon/gzb.png');
					this.edit.status = 0;
				}
			},
			//移除某个帐户
			removeAccont(id){
				this.$store.commit('REMOVE_ACCOUNT',id);
				if(id == this.userInfo.user_id){
					//如果移除的刚好是当前登录的用户，则退出
					this.$store.commit("LOGOUT");
					//socket.emit('logout',this.userInfo.user_id);
					this.$router.push('/login');
				}
				if(this.accounts.length==0){
					//如果都移除了则重置
					this.$store.commit('RESET');
					this.$router.push('/login');
				}
			},
			async logout(){
				console.log("退出");return;
				const {code} = await api.logout(this.userInfo.user_id);
				if(code == 1){
					this.$store.commit('LOGOUT');
					//socket.emit('logout',this.userInfo.user_id);
					this.$router.push('/login');
				}
			},
			//切换在线状态
			async changeStatus(status){
				console.log("切换在线状态");return;
				const {code} = await api.change_status(this.userInfo.user_id,status);
				code == 1 && this.$store.commit('UPDATE_LOGIN_STATUS',status);
			},
			//切换用户
			async chageUser(userId){
				const currentUserId = this.userInfo.user_id;
				if(userId == currentUserId){
					return;
				}
				console.log("切换用户");return;
				const {code,data} = await api.change_user(currentUserId,userId);
				code == 1&&this.$store.commit("CHANGE_USER",data);
				socket.emit('changeUser',{
					currentUserId,
					userId
				});
			}

		}
	}
</script>
<style lang="less" scoped>
	.wrapper{
		background:#fffdfd;
		.header{
			display:flex;
			padding:0 20px;
			height:50px;
			line-height:50px;
			background:#1e90ff;
			color:white;
			font-size:18px;
			letter-spacing:2px;
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
				}
				&.center{
					text-align:center;
				}
				&.right{
					text-align:right;
					cursor:pointer;
				}
			}
		}
		.accontSet{
			.first,.second,.third,.fourth{
				background:#fff;
				margin-top:14px;
				border-top:1px solid #eee;
				.item{
					border-bottom:1px solid #eee;
					height:2.7rem;
					line-height:2.7rem;
					padding-left:10px;
					overflow:hidden;
					&.relative{
						background:url(./icon/nqj.9.png) no-repeat 98% center;
						background-size:14px;
					}
				}
			}
			.first{
				ul{
					cursor:pointer;
					width:100%;
					li{
						border-bottom:1px solid #eee;
						height:60px;
						line-height:60px;
						padding:4px 10px;
						img.face{
							width:50px;
							height:50xp;
							border-radisu:50%;
							float:left;
							vertical-align:middle;
						}
						.info{
							font-size:16px;
							line-height:24px;
							margin-left:60px;
							position:relative;
							p.message{
								color:#666;
								font-size:12px;
							}
							img{
								position:absolute;
								top:50%;
								transform:translateY(-50%) scale(.6);
								right:0;
								&.other{
									opacity:0;
								}
							}
						}
					}
				}
				p.addAccont{
					line-height:50px;
					padding-left:14%;
					color:#1e90ff;
					border-top:1px solid #eee;
					border-bottom:1px solid #eee;
					background:url(./icon/idz.png) no-repeat 2% center;
					background-size:40px;
					cursor:pointer;
				}
			}
			.second{
				.info{
					background:#fffdfd;
					border-bottom:none;
					color:#666;
					font-size:14px;
					margin-left:4px;
				}
			}
			.fourth{
				margin-top:30px;
			}
			.third{
				.item{
					position:relative;
					img{
						position:absolute;
						top:50%;
						transform:translateY(-50%) scale(0.6);
						right:10px;
						display:none;
						&.cur{
							display:block;
						}
					}
				}
			}
		}
	}
</style>