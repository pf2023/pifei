import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//一级路由
import Home from '../pages/home/home'
import Class from '../pages/class/class'
import Market from '../pages/market/market'
import Cart from '../pages/cart/cart'
import Mine from '../pages/mine/mine'

//二级路由
import MineList from '../components/mine/mineList'
import Fukuan from '../components/mine/fukuan'
import Fahuo from '../components/mine/fahuo'
import Shouhuo from '../components/mine/shouhuo'
import Pingjia from '../components/mine/pingjia'
import Shouhou from '../components/mine/shouhou'


export default new Router({
	routes: [
    	{
			path: '/',
			name: 'home',
		 	component: Home,
		},
		{
			path: '/class',
			name: 'class',
		 	component: Class,
		},
		{
			path: '/market',
			name: 'market',
		 	component: Market,
		},
		{
			path: '/cart',
			name: 'cart',
		 	component: Cart,
		},
		{
			path: '/mine',
			name: 'mine',
		 	component: Mine,
		},
		{
			path: '/mineList',
			name: 'mineList',
			component: MineList,
		},
		{
			path: '/fukuan',
			name: 'fukuan',
			component: Fukuan,
		},
		{
			path: '/fahuo',
			name: 'fahuo',
			component: Fahuo,
		},
		{
			path: '/shouhuo',
			name: 'shouhuo',
			component: Shouhuo,
		},
		{
			path: '/pingjia',
			name: 'pingjia',
			component: Pingjia,
		},
		{
			path: '/shouhou',
			name: 'shouhou',
			component: Shouhou,
		},
	]
})
