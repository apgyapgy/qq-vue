<template>
	<!-- 联系人列表  -->
	<div class="wrapper">
		<VAsideMenu></VAsideMenu>
		<VHeader :currentTab="currentTab"></VHeader>
		<VScroll :data="dataList.friends" :isHeightChange="isHeightChange"></VScroll>
		<VFooter :currentTab='currentTab'></VFooter>
	</div>
</template>
<script>
	import VAsideMenu from '@/components/Common/SideMenu/SideMenu';
	import VHeader from '@/components/Common/Header/Header';
	import VFooter from '@/components/Common/Footer/Footer';
	import VScroll from '@/base/Scroll/Scroll';
	import {mapGetters} from 'vuex';
	export default{
		data(){
			return{
				currentTab:2,
				isHeightChange:false,//高度是否改变
				//多人聊天，公众号，设备，通讯录假数据
				officialAccount:[{
					start:'B',
					accounts:[{
						name:'部落冲突',
						url:require('./icon/iei.png')
					}]
				},{
					start:'D',
					accounts:[{
						name:'地图',
						url:require('./icon/feu.png')
					}]
				},{
					start:'Q',
					accounts:[{
						name:'QQ红包',
						url:require('./icon/rdz.png')
					},{
						name:'QQ购物',
						url:require('./icon/qfw.png')
					},{
						name:'QQ Call',
						url:require('./icon/odv.png')
					}]
				},{
					start:'T',
					accounts:[{
						name:'腾讯课堂',
						url:require('./icon/ewj.png')
					}]
				}],
				chats:[{
					name:'Java课题设计',
					members:4
				},{
					name:'寝室长集会',
					members:20
				}],
				addressList:[{
					face:'/static/user/face/7.jpg',
					name:'程文宇',
					status:'手机在线'
				},{
					face:'/static/user/face/8.jpg',
					name:'楚乔',
					status:'手机在线'
				},{
					face:'/static/user/face/10.jpg',
					name:'许易',
					status:'Wifi在线'
				}]
			}
		},
		components:{
			VAsideMenu,VHeader,
			VFooter,VScroll
		},
		// computed:{
		// 	...mapGetters([
		// 		'userId',
		// 		'hasGetFriendList',
		// 		'friendStatus',
		// 		'fenzu',
		// 		'tabIndex'
		// 	]),
		// 	...mapGetters({
		// 		'dataList':'friendList'
		// 	}),
		// 	status(){
		// 		//通过数据来控制展开和收缩，实现图片懒加载
		// 		return{
		// 			friend:this.friendStatus.friend,
		// 			group:this.friendStatus.group
		// 		}
		// 	}
		// },
		// created(){
		// 	this.hasGetFriendList == 0 && this.$store.dispatch('getFriendList',this.userId);
		// },
		// methods:{
		// 	changeTab(tabIndex){
		// 		this.$store.commit('TAB_INDEX',tabIndex);
		// 	},
		// 	toggle(index,type){
		// 		//通过数据来控制展开和收缩，实现图片懒加载
		// 		this.isHeightChange = this.isHeightChange?false:true;//触发Scroll刷新
		// 		if(type == 1){
		// 			this.status.friend[index] = this.status.friend[index]==0?1:0;
		// 		}else if(type==2){
		// 			this.status.group[index] = this.status.group[index]==0?1:0;
		// 		}
		// 	},
		// 	chatOne(user_id){
		// 		this.$router.push(`/chat_one/${user_id}`);
		// 	},
		// 	chatGroup(group_id){
		// 		this.$router.push(`/chat_group/${group_id}`);
		// 	}
		// }
	}
</script>
<style lang="less" scoped></style>