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
      <a>分類於</a>
    </div>
    <VueWorkspace></VueWorkspace>
    <div class="tip">
      <Vuespacecomponent></Vuespacecomponent>
      <VuespaceProp></VuespaceProp>
      <VuespaceEvent></VuespaceEvent>
      <VuespaceLifecycle></VuespaceLifecycle>
    </div>
    <!--自動向上-->
    <div class="scrollTop" :class="{ scrollTopHidden: scrollTopShow }" @click="upTop">
      <i class="fas fa-arrow-up"></i>
      <a>top</a>
    </div>
  </div>
</template>

<script>
import VuespaceProp from "../components/VuespaceProp.vue";
import VuespaceEvent from "../components/VuespaceEvent.vue";
import VueWorkspace from "../components/VueWorkspace.vue";
import Vuespacecomponent from "../components/Vuespacecomponent.vue";
import VuespaceLifecycle from "../components/VuespaceLifecycle.vue";

export default {
  name: "HelloMyweb",
  data:function(){
    return{
      scrollTopShow: true,
      scrollTop: document.documentElement.scrollTop || document.body.scrollTop
    }
  },
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
  },
  methods: {
    upTop() {
      //step每次上滑移動50px
      // scrollTopStep 取的當前scrollTop
      const step = 50;
      let scrollTopStep =
        document.documentElement.scrollTop || document.body.scrollTop;
      //當scrollTopStep 大於0 就執行
      if (scrollTopStep > 0) {
        goUP();
      }

      function goUP() {
        //scrollTopStep 大於0 就執行
        //建立迴圈 如果scrollTop - step還大於0就繼續執行
        //每次都剪掉step的長度 讓畫面慢慢的往上移動

        if (scrollTopStep > 0) {
          if (scrollTopStep - step > 0) {
            scrollTopStep -= step;
            //建立的一個持續變動的變量
            let _scrollTopStep = scrollTopStep;

            //持續變動的變量 會回傳到scrollTop 使他慢慢的變化移動
            document.body.scrollTop = _scrollTopStep;
            document.documentElement.scrollTop = _scrollTopStep;

            //提出動畫需求 當goUP被執行時
            //持續性的執行 直到goUP 被停下
            requestAnimationFrame(goUP);
          } else {
            //不是每次都是50整數
            // scrollTopStep - step < 0
            // 讓_scrollTopStep 直接 = 0
            let _scrollTopStep = 0;
            document.body.scrollTop = _scrollTopStep;
            document.documentElement.scrollTop = _scrollTopStep;
          }
        }
      }
    }
  },
  watch:{
    scrollTop: function() {
      // 當mounted 監聽 scrollTop值 變化
      //  讓小於500觸發
      if (this.scrollTop < 500) {
        return (this.scrollTopShow = true);
      } else{
        return (this.scrollTopShow = false);
      }
    }
  },
  mounted() {
    var _this = this;
    window.onscroll = function() {
      // 定義scroll大小變更事件
      //_this.scrollTop 即時修改父函数的“scrollTop”動態變量
      _this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    };
    
    //新增監聽 scrollTopStep 與 upTop方法的異動
    window.addEventListener("scrollTopStep", this.upTop);
  },
  destroy() {
    // 移除  upTop監聽，不然前一個子件註銷 但監聽還在會除錯
    window.removeEventListener("scrollTopStep", this.upTop);
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
.workspaceInfo a {
  padding: 1rem 2rem;
  font-size: 0.8rem;
}
.infoTitle {
  font-size: 5rem;
  font-weight: 600;
  padding: 1rem 0rem;
  border-top: 1px solid #7c8782;
  color: #7cbc5c;
  font-family: "Paprika", cursive;
}
.scrollTop {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 5%;
  right: 5%;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #4d8e56;
  z-index: 4;
  cursor: pointer;
  text-align: center;
  transition: all 1s ease;
  opacity: 1;
}
.scrollTop:hover {
  background-color: #4BC65E;
  box-shadow: #7c8782 1px 1p;
}
.scrollTopHidden {
  opacity: 0;
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
}
@media only screen and (max-width: 512px) {
  .infoTitle {
    font-size: 2rem;
  }
}
</style>
