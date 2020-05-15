<template>
  <div class="myWeb">
    <div class="webTitle">
      <h1>{{ msg }}</h1>
      <a>Date : {{ value }}</a>
    </div>
    <div class="infoTitle">
      <a>VueWorkSpace</a>
    </div>
    <div class="workspaceInfo">
      <a>MyTip Category</a>
      <div class="workspaceInfoActive">Click</div>
    </div>
    <VueWorkspace></VueWorkspace>
    <div class="tip">
      <Vuespacecomponent></Vuespacecomponent>
      <VuespaceProp></VuespaceProp>
      <VuespaceEvent></VuespaceEvent>
      <VuespaceLifecycle></VuespaceLifecycle>
    </div>
  </div>
</template>
<style scoped lang="scss">
.myWeb {
  padding: 2rem;
}
.webTitle {
  position: relative;
  display: block;
  padding-bottom: 2rem;
  font-family: "Paprika", cursive;
}
.webTitle::before {
  position: absolute;
  display: block;
  content: " ";
  top: -2%;
  left: 6%;
  border-top: 1px solid #7c8782;
  border-left: 1px solid #7c8782;
  width: 20px;
  height: 20px;
}
.webTitle::after {
  position: absolute;
  display: block;
  content: " ";
  top: 70%;
  right: 6%;
  border-bottom: 1px solid #7c8782;
  border-right: 1px solid #7c8782;
  width: 20px;
  height: 20px;
}
.workspaceInfo {
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  a {
    font-size: 2.5rem;
  }
  .workspaceInfoActive {
    position: absolute;
    top: -50%;
    right: 50%;
    font-family: "Port Lligat Slab", serif;
    color: #258433;
    font-size: 2.2rem;
    font: 900;
    transform: translateX(160px) translateY(-5px) rotate(20deg);
    animation: InfoActive 1s alternate infinite;
  }
}
@keyframes InfoActive {
  0% {
    margin-top: 10px;
  }
  100% {
    margin-top: 0px;
  }
}
.infoTitle {
  font-size: 5rem;
  font-weight: 600;
  padding: 3.5rem 0rem;
  border-top: 1px solid #7c8782;
  color: #7cbc5c;
  font-family: "Paprika", cursive;
}
@media only screen and (max-width: 786px) {
  .webTitle::after {
    top: 80px;
    right: -10px;
  }
  .webTitle::before {
    top: -15px;
    left: -10px;
  }
  .infoTitle {
    font-size: 4rem;
  }
}
@media only screen and (max-width: 512px) {
  .infoTitle {
    font-size: 2rem;
  }
}
</style>

<script>
import VuespaceProp from "../components/VuespaceProp.vue";
import VuespaceEvent from "../components/VuespaceEvent.vue";
import VueWorkspace from "../components/VueWorkspace.vue";
import Vuespacecomponent from "../components/Vuespacecomponent.vue";
import VuespaceLifecycle from "../components/VuespaceLifecycle.vue";

export default {
  name: "HelloMyweb",
  components: {
    VueWorkspace,
    Vuespacecomponent,
    VuespaceProp,
    VuespaceEvent,
    VuespaceLifecycle
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
    console.log(this.value);
  }
};
</script>
