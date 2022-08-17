<template>
  <main>
		<Header></Header>
		<RestaurantInfo></RestaurantInfo>
	</main>
</template>

<script>
import Header from '../components/Header.vue';
import RestaurantInfo from '../components/RestaurantInfo.vue';

export default {
	components: {
    Header,
    RestaurantInfo
}
}
</script>
