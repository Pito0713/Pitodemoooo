<template>
  <div class="home">
    <img alt="Vue logo" width="80%" src="../assets/vue-newsletter.png" />
    <HelloMyweb msg="Welcome to My web" />
    <VuespaceFooter></VuespaceFooter>
  </div>
</template>

<style scoped>
.home {
  padding-top: 3rem;
}
</style>

<script>
// @ is an alias to /src
import VuespaceFooter from "../components/VuespaceFooter.vue";
import HelloMyweb from "@/components/HelloMyweb.vue";
export default {
  name: "Home",
  components: {
    HelloMyweb,
    VuespaceFooter
  }
};
</script>
