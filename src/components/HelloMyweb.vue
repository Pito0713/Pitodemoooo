<template>
  <div class="myWeb">
    <div class="webTitle">
      <h1>{{ msg }}</h1>
    </div>
    <div class="infoTitle">
      <a>VueWorkSpace</a>
    </div>
    <div class="workspaceInfo">
      <a>今天是{{ value }}</a>
      <a>分類於</a>
    </div>
    <VueWorkspace></VueWorkspace>
    <div class="tip">
      <Vuespace></Vuespace>
      <VuespaceProp></VuespaceProp>
      <VuespaceEvent></VuespaceEvent>
    </div>
    <div class="scrollTop" @click="upTop">＾</div>
  </div>
</template>

<script>
import VuespaceProp from "../components/VuespaceProp.vue";
import VuespaceEvent from "../components/VuespaceEvent.vue";
import VueWorkspace from "../components/VueWorkspace.vue";
import Vuespace from "../components/Vuespace.vue";
export default {
  name: "HelloMyweb",
  components: {
    VueWorkspace,
    Vuespace,
    VuespaceProp,
    VuespaceEvent
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
    //2019-8-20
  },
  methods: {
    upTop() {
      //每次上滑移動50px
      const step = 50;
      //取的當前scrollTop 
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //let getFirstOffsetTop = document.querySelector(
        //`div:nth-child(1)`
      //).offsetTop;
      if (scrollTop > 0) {
        goUP();
      }
      function goUP() {
        if (scrollTop > 0) {
          if (scrollTop - step > 0) {
            scrollTop -= step;
            let _scrollTop = scrollTop;
            document.body.scrollTop = _scrollTop;
            document.documentElement.scrollTop = _scrollTop;
          } else {
            let _scrollTop = 0;
            document.body.scrollTop = _scrollTop;
            document.documentElement.scrollTop = _scrollTop;
          }
          requestAnimationFrame(goUP);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.myWeb {
  padding: 2rem;
}
.webTitle {
  position: relative;
  display: block;
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
  top: 75%;
  right: 6%;
  border-bottom: 1px solid #7c8782;
  border-right: 1px solid #7c8782;
  width: 20px;
  height: 20px;
}
.workspaceInfo a {
  padding: 1rem 2rem;
  font-size: 0.8rem;
}
.infoTitle {
  font-size: 3rem;
  font-weight: 600;
  padding: 1rem 0rem;
  border-top: 1px solid #7c8782;
  color: #7cbc5c;
}
.scrollTop {
  position: fixed;
  display: block;
  bottom: 5%;
  right: 5%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #7cbc5c;
  z-index: 4;
  cursor: pointer;
  transition: all 3s ease;
}
@media only screen and (max-width: 786px) {
  .webTitle::after {
    top: 30px;
    right: -10px;
  }
  .webTitle::before {
    top: -10px;
    left: -10px;
  }
}
@media only screen and (max-width: 512px) {
  .infoTitle {
    font-size: 2rem;
  }
}
</style>
