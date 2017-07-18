<template>
	<div>
		<swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
                <img :src="slide.pic">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
		<ol>
			<li v-for="item in lists.channels">{{item.name}}</li>
		</ol>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		data () {
			return {
				lists: [],
            	swiperOption: {
	                autoplay: 3500,
	                setWrapperSize :true,
	                pagination : '.swiper-pagination',
	                paginationClickable :true,
	                mousewheelControl : true,
	                observeParents:true,
            	},
            	swiperSlides: [1, 2, 3, 4, 5],		
			}
		},
		methods: {
			getData: function(){
				var $this = this;
				this.$http.get('../../../static/data/data.json').then(function (res) {
					console.log(res.data.data);
					$this.lists = res.data.data;
					$this.swiperSlides = res.data.data.carousel;
				})
			}
		},
		created () {
			this.getData();
		},
		components:{
	        swiper,
	        swiperSlide
    	}
	}
</script>

<style>
	
</style>