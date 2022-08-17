<template>
  <main>
    <Header></Header>
    <RestaurantInfo :foodData="foodData"></RestaurantInfo>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import RestaurantInfo from "../components/RestaurantInfo.vue";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    RestaurantInfo,
	},
	computed: {
		...mapState(['foodData']),
	}
};
</script>
