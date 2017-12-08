<template>
	<!-- 搜索框 -->
	<div class="search">
		<div>
			<img src="./okh.png" alt="">{{placeholder}}
		</div>
	</div>
</template>
<script>
	export default{
		name:'search',
		props:['placeholder']
	}
</script>
<style scoped lang="less">
	.search{
		padding-top:6px;
		margin:0 auto;
		width:99%;
		cursor:pointer;
		>div{
			margin:0 auto;
			height:30px;
			line-height:30px;
			border-radius:2px;
			font-size:14px;
			color:#666;
			background:#f7f6f6;
			text-align:center;
			width:90%;
			img{
				display:inline-block;
				width:14px;
				height:14px;
				/*vertical-align:middle;*/
			}
		}
	}
</style>