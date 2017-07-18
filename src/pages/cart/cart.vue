<template>
	<div>
		<h1>总价格: {{totalPrice }}</h1>
		<div>
			<input type="checkbox" v-model="allChecked" @click="checkAll"> 全选
		</div>
		<div v-for="item in getCartList" :key="item.id">
			<div>
				<input type="checkbox" v-model="item.isChecked" @click="clickMe(item)">
				<img v-lazy="item.pic" alt="" width="80" height="80">
				{{ item.name}} &nbsp;&nbsp;
				￥{{ item.salesPrice }} 
				<span v-if="item.number > 0" class="delBtn" @click="minusCart(item)">-</span>&nbsp;&nbsp;{{ item.number }}
				<span class="addBtn" @click="addCart(item)">+</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				allChecked: true,
				totalPrice: 0
			}
		},
		created: function () {
			if(this.$store.getters.getCartList.length == 0){
				this.allChecked = false;
			}
			this.getCartTotal();
		},
		computed: {
			getCartList: function () {
				return this.$store.getters.getCartList;
			}
		},
		methods: {
			clickMe: function (item) {
				item.isChecked = !item.isChecked;
				var list = this.$store.getters.getCartList;
				var arr = [];
				list.forEach(function (c) {
					if(c.isChecked){
						arr.push(1);
					}
				});
				if(list.length === arr.length){
					this.allChecked = true;
				}else{
					this.allChecked = false;
				}
				this.getCartTotal();
			},
			getCartTotal: function () {
				this.totalPrice = 0;
				this.$store.getters.getCartList.forEach(c => {
					if(c.isChecked){
						this.totalPrice += c.number * c.salesPrice;						
					}
				});
				this.totalPrice = this.totalPrice.toFixed(2);
			},
			checkAll: function () {
				var list = this.$store.getters.getCartList;
				this.allChecked = !this.allChecked;
				if(this.allChecked){
					list.forEach(c => {
						c.isChecked = true;
					});
				}else{
					list.forEach(c => {
						c.isChecked = false;
					});
				}
				this.getCartTotal();
			},
			mixData:function(desc,src){
	            var obj = {};
	            var arr = [];
	            for(var i in src){
	                var n = src[i];
	                obj[n.id] = n;
	            }

	            for(var j in desc){
	                var m = desc[j];
	                if(obj[m.id]){
	                    arr.push(obj[m.id]);
	                }else{
	                    m.number = 0;
	                    arr.push(m);
	                }
	            }
	            return arr;
	        },
			addCart: function (item) {
				var cartData = this.$store.state.cartlist;
				this.$store.dispatch('addCart', item);
				this.mixData(this.lists, cartData);
				this.getCartTotal();
			},
			minusCart: function (item) {
				var cartData = this.$store.state.cartlist;
				this.$store.dispatch('minusCart', item);
				this.mixData(this.lists, cartData);
				this.getCartTotal();
			}
		}
	}
</script>

<style>
	.addBtn{
		display: inline-block;
		color: white;
		width: 1.666667rem;
		height: 1.666667rem;
		line-height: 1.666667rem;
		text-align: center;
		border-radius: 50%;
		background-color: blue;
	}
	.delBtn{
		display: inline-block;
		color: white;
		width: 1.666667rem;
		height: 1.666667rem;
		line-height: 1.666667rem;
		text-align: center;
		border-radius: 50%;
		background-color: blue;
	}
</style>