<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <FoodSelect @change="selectedRestaurant = $event" />
    </div>
    <RestaurantInfo :foodData="filteredRestaurants" />
  </main>
</template>

<script>
import RestaurantInfo from "../components/RestaurantInfo.vue";
import FoodSelect from "../components/FoodSelect.vue";
import { mapState } from "vuex";

export default {
  components: {
    RestaurantInfo,
    FoodSelect,
  },
  data() {
    return {
      selectedRestaurant: "",
    };
  },
  computed: {
    ...mapState(["foodData"]),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        return this.foodData.filter((el) => {
					let name = el.name.toLowerCase();
					return name.includes(this.selectedRestaurant)
        });
			}
			return this.foodData
    },
  },
};
</script>
