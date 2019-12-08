<template>
  <div class="Home">
    <div class="container-sm">
      <h1 class="m-3 text-center">Home</h1>
      <Product />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";

export default {
  name: "Home",
  components: {
    Product
  }
};
</script>