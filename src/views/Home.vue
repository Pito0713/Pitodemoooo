<template>
  <div class="home">
    <img alt="Vue logo" width="60%" src="../assets/vue-newsletter.png" />
    <HelloWorld msg="Welcome to My web" />
  </div>
</template>

<style scoped>
.home {
  padding-top: 3rem;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
