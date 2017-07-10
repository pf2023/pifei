<template>
	<div>
		<div v-for="(item, index) in lists">
		<p>{{ item.name }}</p>
			<img :src="item.pic" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				lists: []
			}
		},
		methods: {
			getData: function(){
				var $this = this;
				this.$http.get('../../../static/data/data.json').then(function (res) {
					console.log(res.data.data);
					$this.lists = res.data.data.carousel;
				})
			}
		},
		created () {
			this.getData();
		}
	}
</script>

<style>
	
</style>