<template>
	<div>
		<div class="sidemenu" @touchstart="touchstart" @touchmove="touchmove" :class="{'show':isShowSideBar}">
			<div class="top" :style="style">
				<div class="userinfo">
					<img src="userinfo.face" class="face" alt="">
					<span class="nickname">{{userinfo.nickname}}</span>
					<div class="level">
						<ul>
							<li v-for="n in userinfo.level.crown">
								<img src="../../../common/icon/hdr.png" class="level-1" alt="">
							</li>
							<li v-for="n in userinfo.level.sun">
								<img src="../../../common/icon/hdu.png" class="level-1" alt="">
							</li>
							<li v-for="n in userinfo.level.moon">
								<img src="../../../common/icon/hds.png" class="level-1" alt="">
							</li>
							<li v-for="n in userinfo.level.star">
								<img src="../../../common/icon/hdt.png" class="level-1" alt="">
							</li>
						</ul>
					</div>
					<p class="sign">{{userinfo.signature}}</p>
				</div>
			</div>
			<div class="side">
				<ul>
					<li>
						<img src="./qq_setting_svip.png" alt="">
						<span>了解会员特权</span>
					</li>
					<li>
						<img src="./qq_setting_qianbao.png" alt="">
						<span>QQ钱包</span>
					</li>
					<li>
						<img src="./qq_setting_zhuangban.png" alt="">
						<span>个性装扮</span>
					</li>
					<li>
						<img src="./qq_setting_shoucang.png" alt="">
						<span>我的收藏</span>
					</li>
					<li>
						<img src="./qq_setting_xiangce.png" alt="">
						<span>我的相册</span>
					</li>
					<li>
						<img src="./qq_setting_wenjian.png" alt="">
						<span>我的文件</span>
					</li>
				</ul>
			</div>
			<div class="setting">
				<ul>
					<li @click="$router.push('/setting')">
						<img src="./qq_setting_setting.png" alt="">
						<span>设置</span>
					</li>
					<li>
						<img src="./qq_setting_me_nightmode_on.png" alt="">
						<span>夜间</span>
					</li>
					<li></li>
				</ul>
				<p class="weather">{{city}}<span>{{temperature}}<sup>o</sup></span></p>
			</div>
			<div class="mask" v-show="isShowMask" @click="hideSideBar"></div>
		</div>
	</div>
</template>
<script>
	import calcLevel from '@/common/js/level';
	import {mapGetters} from 'vuex';
	//import {get_weather} from '@/api/user';
	export default{
		name:'sidebar',
		data(){
			return {
				city:'南昌',
				temperature:28
			}
		},
		created(){
			//获取天气信息
			const weather = localStorage.weather?JSON.parse(localStorage.weather):'';
			var _date = this.getDate();
			const oldTime = weather ? weather.time:_date/1000;
			//时间差值
			const diff = this.getDate()/1000 - oldTime;
			if(!weather || diff > 4*60*60){//超过4个小时
				this.getWeather();
			}else{
				this.city = weather.city;
				this.temperature = weather.temperature;
			}
		},
		computed:{
			...mapGetters([
				'userInfo',
				'isShowSideBar',
				'isShowMask'
			]),
			userinfo(){
				return {
					nickname:this.userInfo.nick_name,
					signature:this.userInfo.signature,
					face:this.userInfo.face,
					level:calcLevel(this.userInfo.level)
				}
			},
			style(){
				return{
					backgroundkey: `url(${this.userInfo.profile_bg}) no-repeat`,
					backgroundSize:'100% 100%' 
				}
			}
		},
		methods:{
			hideSideBar(){
				this.$store.commit('SHOW_SIDEBAR',{
					'isShowSideBar':false,
					'isShowMask':false
				})
			},
			touchstart(e){
				this.startX = this.getTouchXY(e).X;
				this.startY = this.getTouchXY(e).Y;
			},
			touchmove(e){
				const X = this.getTouchXY(e).X - this.startX;
				const Y = this.getTouchXY(e).Y - this.startY;
				if(Math.abs(X) > 3*Math.abs(Y) && X < -30){
					//限定只能是左滑，最大限度减小倾斜的角度 
					this.hideSideBar();
				}
			},
			getTouchXY(e){
				return {
					X:e.targetTouches[0].pageX,
					Y:e.targetTouches[0].pageY
				}
			},
			getDate(){
				return Date.parse(new Date());
			},
			async getWeather(){
				console.log("获取天气，接口调通再开放!");return;
				const {data} = await get_weather();
				this.city = data.city;
				this.temperature = data.temperature;
				//持久化到本地
				const weather = {
					city:data.city,
					temperature:data.temperature,
					time:this.getDate()/1000
				}
				localStorage.setItem('weather',JSON.stringify(weather));
			}
		}
	}
</script>
<style lang="less" scoped>
	.sidemenu{
		position:absolute;
		z-index:20;
		background:#fff;
		width:0;
		overflow:hidden;
		box-shadow:0 0 10px gray;
		cursor:pointer;
		transition:width .2s;
		&.show{
			width:80%;
		}
		.top{
			width:100%;
			height:32%;
			position:relative;
			.userinfo{
				position:absolute;
				top:30%;
				left:6%;
				color:#fff;
				opacity:1;
				width:100%;
				img.face{
					width:3rem;
					height:3rem;
					border-radius:50%;
					border:3px solid #fff;
				}
				span.nickname{
					width:270px;
					font-size:2rem;
					position:absolute;
					left:60px;
					letter-spacing:4px;
					font-weight:lighter;
					overflow:hidden;
				}
				.level{
					clear:both;
					width:300px;
					overflow:hidden;
					margin:10px 0 0 -10px;
					ul{
						li{
							list-style:none;
							float:left;
							width:18px;
							height:18px;
						}
					}
					img.level-1{
						transform:scale(0.5);
					}
				}
				p.sign{
					width:300px;
					overflow:hidden;
					margin-top:4px;
					font-size:14px;
					letter-spacing:2px;
				}
			}
		}
		.side{
			font-size:18px;
			ul{
				width:300px;
				overflow:hidden;
				li{
					list-style:none;
					height:46px;
					line-height:46px;
					padding-left:10px;
					img{
						transform:scale(.5);
					}
					span{
						position:relative;
						top:-20px;
						left:-8px;
					}
				}
			}
		}
		.setting{
			width:300px;
			overflow:hidden;
			position:absolute;
			bottom:18px;
			height:60px;
			ul{
				width:100%;
				display:flex;
				margin-top:26px;
				li{
					list-style:none;
					flex:1;
					&:first-child{
						margin-left:14px;
					}
					img{
						transform:scale(.5);
						margin-bottom:18px;
						margin-right:-10px;
					}
				}
			}
			p.weather{
				display:inline;
				position:absolute;
				right:30px;
				bottom:0;
				span{
					color:#1e90ff;
					position:absolute;
					right:30px;
					bottom:0;
					span{
						color:#1e90ff;
						position:absolute;
						left:-4px;
						bottom:20px;
						font-size:30px;
						sup{
							font-size:1rem;
						}
					}
				}
			}
		}
	}
	.mask{
		position:absolute;
		width:100%;
		height:100%;
		cursor:pointer;
		bacground:#000;
		opacity:.3;
		z-index:19;
	}
</style>