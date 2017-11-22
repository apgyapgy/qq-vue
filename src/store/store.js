import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	goodsList:[
		{
			"cartGoodsNum":1,"goodsAmt":888,"goodsAmtStr":"8.88","goodsImgDetail":"test",
			"goodsImgLogo":"test","goodsNm":"满8.88减8.87","goodsNo":"5200004411","goodsNum":219,
			"goodsNumTotal":1,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":1,"mchId":80001850
		},{
			"cartGoodsNum":2,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"test",
			"goodsImgLogo":"test","goodsNm":"满10减11","goodsNo":"5200004419","goodsNum":4,
			"goodsNumTotal":1,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004430","goodsNum":12,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004434","goodsNum":12,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004436","goodsNum":12,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":300,"goodsAmtStr":"3.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"打得过","goodsNo":"5200004438","goodsNum":3,
			"goodsNumTotal":2,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"11111","goodsNo":"5200004441","goodsNum":12,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004442","goodsNum":12,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":500,"goodsAmtStr":"5.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"455","goodsNo":"5200004443","goodsNum":6,
			"goodsNumTotal":5,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"222","goodsNo":"5200004444","goodsNum":12,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":300,"goodsAmtStr":"3.00","goodsImgDetail":"testimg.jp",
			"goodsImgLogo":"non","goodsNm":"f","goodsNo":"5200004446","goodsNum":4,
			"goodsNumTotal":3,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1200,"goodsAmtStr":"12.00","goodsImgDetail":"testimg.jp",
			"goodsImgLogo":"non","goodsNm":"ff","goodsNo":"5200004447","goodsNum":13,
			"goodsNumTotal":12,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":1,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"testimg.jp",
			"goodsImgLogo":"non","goodsNm":"1111 ","goodsNo":"5200004448","goodsNum":11,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":0,"goodsAmt":1100,"goodsAmtStr":"11.00","goodsImgDetail":"testimg.jp",
			"goodsImgLogo":"non","goodsNm":"1111","goodsNo":"5200004450","goodsNum":12,
			"goodsNumTotal":11,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":0,"goodsAmt":100,"goodsAmtStr":"1.00","goodsImgDetail":"testimg.jp",
			"goodsImgLogo":"non","goodsNm":"db ","goodsNo":"5200004451","goodsNum":2,
			"goodsNumTotal":1,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":0,"goodsAmt":400,"goodsAmtStr":"4.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"4","goodsNo":"5200004452","goodsNum":5,
			"goodsNumTotal":4,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":0,"goodsAmt":100,"goodsAmtStr":"1.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"测测错错错","goodsNo":"5200004453","goodsNum":2,
			"goodsNumTotal":1,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":0,"goodsAmt":100,"goodsAmtStr":"1.00","goodsImgDetail":"err save img",
			"goodsImgLogo":"non","goodsNm":"我的人","goodsNo":"5200004454","goodsNum":2,
			"goodsNumTotal":1,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":0,"mchId":80001850
		},{
			"cartGoodsNum":0,"goodsAmt":1,"goodsAmtStr":"0.01","goodsImgDetail":"err save img",
			"goodsImgLogo":"err save img","goodsNm":"盖茨","goodsNo":"5200004456","goodsNum":2,
			"goodsNumTotal":2,"goodsPackNum":0,"goodsPackWeight":0,"goodsPackWeightJin":"0",
			"goodsSt":1,"goodsTp":1,"mchId":80001850
		}
	],
	cartList:[
		{
			"crtTs":"2017-10-25 15:41:36.732000000","distAmt":1,"goodsAmt":888,
			"goodsImgLogo":"test","goodsNm":"满8.88减8.87","goodsNo":"5200004411",
			"goodsNum":219,"hostId":"70000030","loginId":"15316117950","mchId":80001850,
			"operator":"15316117950","orderAmt":888,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:36.732000000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 10:06:18.882861000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"test","goodsNm":"满10减11","goodsNo":"5200004419","goodsNum":4,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":1100,"orderNum":2,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 10:06:19.526591000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:35.890441000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004430","goodsNum":12,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":1100,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:35.890441000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:37.766425000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004434","goodsNum":12,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":1100,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:37.766425000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:38.697331000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004436","goodsNum":12,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,
			"operator":"15316117950","orderAmt":1100,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:38.697331000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:40.293575000","distAmt":1,"goodsAmt":300,
			"goodsImgLogo":"non","goodsNm":"打得过","goodsNo":"5200004438","goodsNum":3,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":300,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:40.293575000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:41.212399000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"non","goodsNm":"11111","goodsNo":"5200004441","goodsNum":12,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":1100,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:41.212399000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:42.607368000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"non","goodsNm":"11","goodsNo":"5200004442","goodsNum":12,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,
			"operator":"15316117950","orderAmt":1100,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:42.607368000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:43.417903000","distAmt":1,"goodsAmt":500,
			"goodsImgLogo":"non","goodsNm":"455","goodsNo":"5200004443","goodsNum":6,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":500,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:43.417903000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:45.115128000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"non","goodsNm":"222","goodsNo":"5200004444","goodsNum":12,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":1100,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:45.115128000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:46.651740000","distAmt":1,"goodsAmt":300,
			"goodsImgLogo":"non","goodsNm":"f","goodsNo":"5200004446","goodsNum":4,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":300,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:46.651740000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:47.338128000","distAmt":1,"goodsAmt":1200,
			"goodsImgLogo":"non","goodsNm":"ff","goodsNo":"5200004447","goodsNum":13,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":1200,"orderNum":1,"remark":"","shopNm":"我的么么",
			"updTs":"2017-10-25 15:41:47.338128000","userId":"15316117950"
		},{
			"crtTs":"2017-10-25 15:41:48.908919000","distAmt":1,"goodsAmt":1100,
			"goodsImgLogo":"non","goodsNm":"1111 ","goodsNo":"5200004448","goodsNum":11,
			"hostId":"70000030","loginId":"15316117950","mchId":80001850,"operator":"15316117950",
			"orderAmt":1100,"orderNum":1,"remark":"","shopNm":"我的么么","updTs":"2017-10-25 15:41:48.908919000","userId":"15316117950"
		}
	],
	expireList:[{
		"crtTs":"2017-10-24 14:19:45.511089000","distAmt":1,"goodsAmt":667,
		"goodsImgLogo":"test","goodsNm":"满6.77减6.66","goodsNo":"5200004403",
		"goodsNum":0,"hostId":"70000030","loginId":"15316117950","mchId":80001850,
		"operator":"15316117950","orderAmt":667,"orderNum":1,"remark":"","shopNm":"我的么么",
		"updTs":"2017-10-24 14:19:45.511089000","userId":"15316117950"
	}],
	coupons:[
		{
			"couponAmt":300,"couponAmtMin":200,"couponDesc":"","couponLogo":"",
			"couponLogoTeam":"","couponNm":"34567","couponNo":"60003792",
			"couponSrcDesc":"系统发放","couponStDesc":"未使用","couponTp":1,
			"expireDt":20171115,"mchAddr":"视3213","mchId":80001828,"mchLogo":"",
			"mchMobile":"18516589920","mchNm":"视不会后悔","startDt":20170901
		},{
			"couponAmt":200,"couponAmtMin":200,"couponDesc":"","couponLogo":"",
			"couponLogoTeam":"","couponNm":"23456","couponNo":"60003790",
			"couponSrcDesc":"系统发放","couponStDesc":"未使用","couponTp":1,
			"expireDt":20171103,"mchAddr":"视3213","mchId":80001828,"mchLogo":"",
			"mchMobile":"18516589920","mchNm":"视不会后悔","startDt":20170901
		},{
			"couponAmt":90,"couponAmtMin":98,"couponDesc":"","couponLogo":"",
			"couponLogoTeam":"","couponNm":"模棱两可","couponNo":"60003794",
			"couponSrcDesc":"系统发放","couponStDesc":"未使用","couponTp":1,
			"expireDt":20171101,"mchAddr":"视3213","mchId":80001828,"mchLogo":"",
			"mchMobile":"18516589920","mchNm":"视不会后悔","startDt":20171016
		},{
			"couponAmt":90,"couponAmtMin":98,"couponDesc":"","couponLogo":"",
			"couponLogoTeam":"","couponNm":"模棱两可","couponNo":"60003794",
			"couponSrcDesc":"商户公众号发放","couponStDesc":"已使用","couponTp":1,
			"expireDt":20170930,"mchAddr":"视3213","mchId":80001828,"mchLogo":"","mchMobile":"18516589920",
			"mchNm":"视不会后悔","startDt":20171016
		},{
			"couponAmt":90,"couponAmtMin":98,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"模棱两可","couponNo":"60003794","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170930,"mchAddr":"视3213",
			"mchId":80001828,"mchLogo":"","mchMobile":"18516589920","mchNm":"视不会后悔","startDt":20171016
		},{
			"couponAmt":1000,"couponAmtMin":1500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"新增测试","couponNo":"60003777","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170930,"mchAddr":"123",
			"mchId":80001342,"mchLogo":"sys/o2o2/2017/07/12/o2oGoods_196808574038786.jpg",
			"mchMobile":"18211111111","mchNm":"小李探花xx2","startDt":20170901
		},{
			"couponAmt":1000,"couponAmtMin":1500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"新增测试","couponNo":"60003777","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170930,"mchAddr":"123",
			"mchId":80001342,"mchLogo":"sys/o2o2/2017/07/12/o2oGoods_196808574038786.jpg",
			"mchMobile":"18211111111","mchNm":"小李探花xx2","startDt":20170901
		},{
			"couponAmt":1000,"couponAmtMin":1500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"新增测试","couponNo":"60003777","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170930,"mchAddr":"123","mchId":80001342,
			"mchLogo":"sys/o2o2/2017/07/12/o2oGoods_196808574038786.jpg","mchMobile":"18211111111",
			"mchNm":"小李探花xx2","startDt":20170901
		},{
			"couponAmt":1000,"couponAmtMin":1500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"新增测试","couponNo":"60003777","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170930,"mchAddr":"123","mchId":80001342,
			"mchLogo":"sys/o2o2/2017/07/12/o2oGoods_196808574038786.jpg","mchMobile":"18211111111",
			"mchNm":"小李探花xx2","startDt":20170901
		},{
			"couponAmt":1000,"couponAmtMin":1500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"新增测试","couponNo":"60003777","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170930,"mchAddr":"123","mchId":80001342,
			"mchLogo":"sys/o2o2/2017/07/12/o2oGoods_196808574038786.jpg","mchMobile":"18211111111",
			"mchNm":"小李探花xx2","startDt":20170901
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,
			"mchLogo":"","mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,
			"mchLogo":"","mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,
			"mchLogo":"","mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,
			"mchLogo":"","mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,
			"mchLogo":"","mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放",
			"couponStDesc":"已过期","couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,
			"mchLogo":"","mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":100,"couponAmtMin":4500,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"记忆","couponNo":"60003780","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170922,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170922
		},{
			"couponAmt":1100,"couponAmtMin":0,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"好好","couponNo":"60003775","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170921,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170917
		},{
			"couponAmt":1100,"couponAmtMin":0,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"好好","couponNo":"60003775","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170921,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170917
		},{
			"couponAmt":1100,"couponAmtMin":0,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"好好","couponNo":"60003775","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170921,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170917
		},{
			"couponAmt":1100,"couponAmtMin":0,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"好好","couponNo":"60003775","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170921,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170917
		},{
			"couponAmt":1100,"couponAmtMin":0,"couponDesc":"","couponLogo":"","couponLogoTeam":"",
			"couponNm":"好好","couponNo":"60003775","couponSrcDesc":"商户公众号发放","couponStDesc":"已过期",
			"couponTp":1,"expireDt":20170921,"mchAddr":"视3213","mchId":80001822,"mchLogo":"",
			"mchMobile":"15555555555","mchNm":"哈赢得","startDt":20170917
		}
	],
	cartsNum:0
};
const mutations = {
	/*imcre(state){
		state.aa++;
		console.log(state.aa);
		return state.aa;
	}*/
	addUserCart(state,goodsNo){//添加购物车
		var _goodsList = state.goodsList;
		var _cartList =  state.cartList;
		var _index  = -1;
		var _gindex = -1;
		for(var key in _goodsList){
			if(_goodsList[key].goodsNo == goodsNo){
				_gindex = key;
				break;
			}
		}
		for(var key in _cartList){
			if(_cartList[key].goodsNo == goodsNo){
				_index = key;
				break;
			}
		}
		if(_index != -1){
			_cartList[_index].orderNum++;
			_goodsList[_gindex].cartGoodsNum++;
		}else{
			_goodsList[_gindex].cartGoodsNum = 1;
			var _obj = {
				goodsAmt:_goodsList[_gindex].goodsAmt,
				orderAmt:_goodsList[_gindex].goodsAmt,
				goodsNm:_goodsList[_gindex].goodsNm,
				goodsImgLogo:_goodsList[_gindex].goodsImgLogo,
				goodsNo:_goodsList[_gindex].goodsNo,
				goodsNum:_goodsList[_gindex].goodsNum,
				mchId:_goodsList[_gindex].mchId,
				orderNum:1
			}
			_cartList.push(_obj);
		}
	},
	emptyCart(state){ //清空购物车
		var _goodsList = state.goodsList;
		for(var key in _goodsList){
			_goodsList[key].cartGoodsNum = 0;
		}
		state.cartList = [];
	},
	addsub(state,goodsNo){//点击购物车的 -
		var _goodsList = state.goodsList,
		    _cartList = state.cartList,
		    _gidx = -1,
		    _cidx = -1;
		for(var key in _goodsList){
			if(_goodsList[key].goodsNo == goodsNo){
				_gidx = key;
				break;
			}
		}
		for(var key in _cartList){
			if(_cartList[key].goodsNo == goodsNo){
				_cidx = key;
				break;
			}
		}
		if(_cartList[_cidx].orderNum == 1){
			_goodsList[_gidx].cartGoodsNum = 0;
			_cartList.splice(_cidx,1);
		}else{
			_goodsList[_gidx].cartGoodsNum--;
			_cartList[_cidx].orderNum--;
		}
	},
	getCartNums(state){
		var _cartList = state.cartList;
		var _num = 0;
		for(var key in _cartList){
			_num += _cartList[key].orderNum;
		}
		state.cartsNum = _num;
	}
};
const actions = {
	/*imcre:({commit}) => commit('imcre');*/
};
const getters = {};
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});