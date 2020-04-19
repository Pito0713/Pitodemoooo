<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="title">
      <a>Vue WorkSpace</a>
    </div>
    <div class="workspaceInfo">
      <a>更新於{{ value }}</a>
      <a>分類於</a>
    </div>
    <div class="VueWorkSpace">
      <div class="text">123</div>
      <div class="textInfo">5434</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
.VueWorkSpace {
  display: inline-flex;
  position: relative;
  width: 100%;
  background-color: aquamarine;
}
.VueWorkSpace .text {
  flex: 2 1 20%;
  font-size: 2rem;
}
.VueWorkSpace .textInfo {
  flex: 1 2 80%;
  font-size: 1rem;
  background-color: wheat;
}
.workspaceInfo a {
  padding: 1rem 2rem;
  font-size: 0.8rem;
}
.title {
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding: 2rem 0rem;
}
</style>
