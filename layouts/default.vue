<template>
  <div>
		<div class="content">
			<Navigation></Navigation>
	    <Nuxt />
		</div>
		<Footer></Footer>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';

export default {
	components: {
    Navigation,
    Footer,
}
}
</script>

<style>
html {
  font-family: "Mulish";
  font-weight: 300;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins";
  font-weight: 600;
}
</style>
