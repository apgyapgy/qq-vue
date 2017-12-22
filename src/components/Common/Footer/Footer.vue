<template>
	<!-- 主页面底部 -->
	<div class="vfooter">
		<div class="item" @click="$router.push('/message')">
			<img :src="currentTab==1?iconUrl.message_selected:iconUrl.message" alt="">
			<span :class="{'blue':currentTab==1}">消息</span>
		</div>
		<div class="item" @click="$router.push('/friend')">
			<img :src="currentTab==2?iconUrl.person_selected:iconUrl.person" alt="">
			<span :class="{'blue':currentTab==2}">联系人</span>
		</div>
		<div class="item" @click="$router.push('/social')">
			<img :src="currentTab==3?iconUrl.social_selected:iconUrl.social" alt="">
			<span :class="{'blue':currentTab==3}">动态</span>
		</div>
	</div>
</template>
<script>
	export default{
		props:['currentTab'],
		data(){
			return{
				iconUrl:{
					message:require('./message.png'),
					message_selected:require('./message_selected.png'),
					person:require('./person.png'),
					person_selected:require('./person_selected.png'),
					social:require('./social.png'),
					social_selected:require('./social_selected.png')
				}
			}
		}
	}
</script>
<style scoped lang="less">
	.vfooter{
		position:fixed;
		bottom:0;
		width:100%;
		z-index:3;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		height:50px;
		color:#666;
		background:#fff;
		border-top:1px solid #eee;
		.item{
			margin:0 auto;
			text-align:center;
			cursor:pointer;
			img{
				transform:scale(0.3);
				display:block;
				position:relative;
				bottom:26px;
			}
			span{
				position:relative;
				bottom:60px;
				font-size:10px;
				&.blue{
					color:#9cf;
				}
			}
		}
		a{
			color:#666;
		}
	}
</style>