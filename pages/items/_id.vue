<template>
  <div class="container">
    <section
      class="image"
      :style="`background: url(/${currentItem.img}) no-repeat center center`"
    ></section>

    <section class="details">
      <h1>{{ currentItem.item }}</h1>
      <h3>Price: ${{ currentItem.price.toFixed(2) }}</h3>
      <div class="quantity">
        <input type="number" min="1" v-model="count" />
        <button @click="addToCart" class="primary">Add to Cart</button>
      </div>

      <fieldset v-if="currentItem.options">
        <legend>
          <h3>Options</h3>
        </legend>
        <div v-for="option in currentItem.options" :key="option">
          <input
            type="radio"
            name="option"
            :id="option"
            value="option"
            v-model="itemOptions"
          />
          <label for="option">{{ option }}</label>
        </div>
      </fieldset>

      <fieldset v-if="currentItem.addOns">
        <legend>
          <h3>Add Ons</h3>
        </legend>
        <div v-for="addon in currentItem.addOns" :key="addon">
          <input
            type="checkbox"
            name="addon"
            :id="addon"
            :value="addon"
            v-model="itemAddons"
          />
          <label for="addon">{{ addon }}</label>
        </div>
      </fieldset>

      <Toast v-if="cartSubmitted"
        >Order Submitted <br />
        Check out more <nuxt-link to="/page">page</nuxt-link> restaurants
      </Toast>
    </section>

    <section class="options">
      <h3>Description</h3>
      <div>{{ currentItem.description }}</div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Toast from "@/components/Toast.vue";

export default {
  components: {
    Toast,
  },
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      itemOptions: "",
      itemAddons: [],
      itemSizeAndCount: [],
      cartSubmitted: false,
    };
  },
  computed: {
    ...mapState(["foodData"]),
    currentItem() {
      let result;
      for (let i = 0; i < this.foodData.length; i++) {
        for (let j = 0; j < this.foodData[i].menu.length; j++) {
          if (this.foodData[i].menu[j].id === this.id) {
            result = this.foodData[i].menu[j];
            break;
          }
        }
      }
      return result;
    },
    combinedPrice() {
      let total = this.count * this.currentItem.price;
      return total.toFixed(2);
    },
  },
  methods: {
    addToCart() {
      let formOutput = {
        item: this.currentItem.item,
        count: this.count,
        options: this.itemOptions,
        addOns: this.itemAddons,
        combinedPrice: this.combinedPrice,
      };

      this.cartSubmitted = true;
      this.$store.commit("addToCart", formOutput);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1ft;
  grid-template-rows: 400px 1ft;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}

.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}

.options {
  grid-area: 2 / 1 / 3 / 2;
}
</style>
