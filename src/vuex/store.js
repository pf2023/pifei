import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	totalPrice: 0,
	cartList: []
}

const mutations = {
	addCart(state, item){
		//根据id查找
		var _item = state.cartList.find(c => c.productId === item.productId)
		if(_item){
			_item.number ++;
		}else{
			//数量给一个1
			item.number = 1;
			//在购物车里面默认是选中的
			item.isChecked = true;
			//添加到购物车里面
			state.cartList.push(item);
		}
		console.log(state.cartList);
	},
	minusCart:function(state,item){
        //根据id查找索引
        var index = state.cartList.findIndex( c => c.productId === item.productId)       
        if(state.cartList[index].number>=1){
            state.cartList[index].number --
        }
        if(state.cartList[index].number==0){
            state.cartList.splice(index,1);
        }
        // console.log(state.cartList);
    }
}

const actions = {
	addCart({commit}, item){
		commit('addCart', item);
	},
	minusCart({commit}, item){
		commit('minusCart', item);
	}
}

const getters = {
	getCartList: function () {
		return state.cartList
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})