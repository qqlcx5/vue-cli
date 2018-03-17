'use strict';
//引入第三方包 开始
import Vue from 'vue';

// //VueRouter:引入路由对象
import VueRouter from 'vue-router';
//VueRouter:安装插件
Vue.use(VueRouter);

// //Mint:引入mint-ui
// import MintUI from 'mint-ui';
// //Mint:引入css
// import 'mint-ui/lib/style.css';
// //Mint:安装插件
// Vue.use(MintUI);


// //Axios:引入axios
import Axios from 'axios';
// //挂载原型
Vue.prototype.$axios = Axios;
// //默认配置
// Axios.defaults.baseURL = 'url';



//引入第三方包 结束




//引入自己的vue文件 开始  
import App from './app.vue';
import Home from './components/home/home.vue';
//引入自己的vue文件 结尾




//VueRouter:创建对象并配置路由规则
let router = new VueRouter({
	mode: "history",
	routes: [
		//VueRouter：配置路由规则
		{ path: '/', redirect: { name: 'home' } }, //重定向
		{ name: 'home', path: '/home', component: Home }
	],

});

//创建vue实例
new Vue({
	el: '#app',
	router,
	render: c => c(App)
})