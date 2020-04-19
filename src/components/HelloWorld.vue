<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="title">
      <a>VueWorkSpace</a>
    </div>
    <div class="workspaceInfo">
      <a> 今天是{{ value }} </a>
      <a>分類於</a>
    </div>
    <VueWorkspace></VueWorkspace>
  </div>
</template>
<script>
import VueWorkspace from "../components/VueWorkspace.vue";
export default {
  name: "HelloWorld",
  components: {
    VueWorkspace
  },
  props: {
    msg: String
  },
  created: function() {
    var aData = new Date();
    console.log(aData);
    this.value =
      aData.getFullYear() +
      "-" +
      (aData.getMonth() + 1) +
      "-" +
      aData.getDate();
    console.log(this.value); //2019-8-20
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.workspaceInfo a {
  padding: 1rem 2rem;
  font-size: 0.8rem;
}
.title {
  font-size: 4.5rem;
  font-weight: 600;
  padding: 2rem 0rem;
}
</style>
