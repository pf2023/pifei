<template>
	<div>
		<router-view></router-view>
	    <ul>
	        <li>
	          <router-link to="/">Home</router-link>
	        </li>
	        <li>
	          <router-link to="/class">Class</router-link>
	        </li>
	        <li>
	          <router-link to="/market">Market</router-link>
	        </li>
	        <li>
	          <router-link to="/cart">Cart</router-link>
	        </li>
	        <li>
	          <router-link to="/mine">Mine</router-link>
	        </li>
	    </ul>
	</div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
*{
  padding:0;
  margin:0
}
ul{
  list-style: none;
  display: flex;
  align-items: center;
  position: fixed;
  line-height: 46px;
  background-color: #dfdfdf;
  bottom:0;
  left:0;
  right:0
}
ul li{
  width:25%;
  text-align: center;
}
a{
	text-decoration: none;
}
</style>
