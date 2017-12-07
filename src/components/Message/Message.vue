<template>
	<!-- 消息 -->
	<div class="wrapper">
		<VAsideMenu></VAsideMenu>
		<VHeader :currentTab="currentTab"></VHeader>
		<VScroll></VScroll>
	</div>
</template>
<script>
	import VAsideMenu from '@/components/Common/SideMenu/SideMenu';
	import VHeader from '@/components/Common/Header/Header';
	import VScroll from '@/base/Scroll/Scroll'
	export default{
		data(){
			return{
				currentTab:1
			}
		},
		components:{VAsideMenu,VHeader,VScroll}
	}
</script>
<style scoped lang="less"></style>