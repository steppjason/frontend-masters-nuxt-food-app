<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/"><Logo /></nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
		<div v-if="totalCount > 0" class="smallnum">{{ totalCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo.vue";

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapGetters(["totalCount"]),
  },
};
</script>
