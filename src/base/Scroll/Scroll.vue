<template>
	<!-- 滚动条组件 -->
	<div id="wrapper">
		<div id="scroller">
			<slot>要滚动的内容写在slot里</slot>
		</div>
	</div>
</template>
<script>
	import IScroll from 'iscroll';
	import {mapGetters} from 'vuex';
	export default{
		name:'scroll',
		props:{
			isScrollToBottom:{//是否要滚动到底部
				type:Boolean,
				default:false
			},
			data:{//数据列表，如果数据改变了，则自动刷新
				type:Array,
				default:null
			},
			isHeightChange:{
				type:Boolean,
				default:false
			},
			component:{//哪个组件需要滚动，用于处理页面返回时滚动位置还原
				type:String,
				default:''
			},
			tabIndex:{//标签页的索引，只对联系人有效
				type:Number,
				default:1
			}
		},
		computed:{
			...mapGetters([
				'scrollPosition'
			]),
			position(){//获取state里滚动条的位置
				const index=this.scrollPosition.findIndex((item)=>{
        			return item.name==this.component;
      			});
      			const pos = (this.scrollPosition)[index].pos;
      			return typeof pos ==='number' ? pos : pos[this.tabIndex-1];
			}
		},
		mounted(){
			//初始化滚动 条
			setTimeout(() => {
				this.initScroll();
			},200);
		},
		methods:{
			initScroll(){
				this.scroll = new IScroll('#wrapper',{
					mouseWheel:true,
					click:true
				});
				//滚动条滚动到指定位置
				this.scrollToPosition();
				//滚动结束时记录滚 动位置到store里
				this.savePosition();
			},
			scrollToPosition(time=1){
				if(this.scroll){
					//如果要滚动到底部
					if(this.isScrollToBottom){
						this.scroll.scrollTo(0,this.scroll.maxScrollY,time);
					}else{
						//否则滚动到state里的位置
						this.scroll.scrollTo(0,this.position,time);
					}
				}
			},
			savePosition(){
				//滚动结束时记录滚动位置到store里
				const vm = this;
				this.scroll.on('scrollEnd',function(){
					vm.$store.commit('SAVE_SCROLL_POSITION',{
						component:vm.component,
						position:this.y,
						tabIndex:vm.tabIndex
					});
				})
			},
			refresh(){
				//这里必须要有个延时，因为重绘页面需要时间
				setTimeout(() => {
					if(this.scroll){
						this.scroll.refresh();
						this.isScrollToBottom && this.scroll.scrollTo(0,this.scroll.maxScrollY,200);
					}
				},0);
			}
		},
		watch:{
			data(){
				//data数据改变，自动刷新
				this.refresh();
			},
			isHeightChange(){//scroller高度改变,自动刷新
				this.refresh();
			}
		}
	}
</script>
<style scoped lang="less">
	#wrapper{
		position:absolute;
		top:50px;
		bottom:0;
		left:0;
		right:0;
		overflow:hidden;
		z-index:1;
		touch-action:none;
		#scroller{
			z-index:1;
			-webkit-touch-callout:none;
			-webkit-tap-highlignt-color:rgba(0,0,0,0);
			width:100%;
			padding:0;
		}
	}
	.iScrollVerticalScrollbar{
		width:6px;
	}
</style>