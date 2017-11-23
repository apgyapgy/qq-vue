<template>
	<p class="loading" v-show="isShow">{{message}}</p>
</template>
<script>
	export default{
		name:'warn',
		computed:{
			isShow(){
				return this.$store.state.warn.isShow;
			},
			message(){
				return this.$store.state.warn.message
			}
		}
	}
</script>
<style scoped lang="less">
	p.loading{
		position:absolute;
		top:20px;
		left:0;
		right:0;
		margin:0 10px;
		height:28px;
		text-align:center;
		line-height:28px;
		color:#fff;
		letter-spacing:1px;
		background:#000;
		opacity:.6;
		font-size:14px;
		border-radius:2px;
	}
</style>