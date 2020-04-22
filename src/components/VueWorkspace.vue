<template>
  <div class="VueWorkSpace">
    <div class="leftarrowIcon" @click="plusSpace(-1)">
      <span><i class="fas fa-angle-left"></i></span>
    </div>
    <div class="rightarrowIcon" @click="plusSpace(1)">
      <span><i class="fas fa-angle-right"></i></span>
    </div>
    <div class="spaceContainer">
      <div class="space">
        <div><img alt="Vue logo"  width="100%" src="../assets/VueWorkspaceEvent.png"/></div>
      </div>
      <div class="space">
        <div><img alt="Vue logo" style="display:block; margin:auto" width="100%" src="../assets/VueWorkspaceComponent.png"/></div>
      </div>
      <div class="space" style="display: none">
        <div><img alt="Vue logo" style="display:block; margin:auto" width="80%" src="../assets/VueWorkspaceLifecycle.png"/></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.VueWorkSpace {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.spaceContainer {
  display: flex;
  width: 100%;
}
.space {
  width: 100%;
  box-shadow: 0px 0px 2px 1px #c6c6c6;
  margin: 1rem;
  height: 250px;
  border-radius: 3%;
    display:  flex;
   align-items: center;
   justify-content:  center;
}



/*---arrow*/
.leftarrowIcon,
.rightarrowIcon {
  width: 4%;
  height: 20%;
  background: #00000010;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 30px;
}
.leftarrowIcon {
  position: absolute;
  left: 2%;
  top: 50%;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.rightarrowIcon {
  position: absolute;
  right: 2%;
  top: 50%;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
}
.leftarrowIcon:hover,
.rightarrowIcon:hover {
  background: #00000005;
  transition: ease 0.3s;
  z-index: 1;
  box-shadow: 0 0 3px 2px #c6c6c6;
}
.leftarrowIcon .fa-angle-left,
.rightarrowIcon .fa-angle-right {
  transform: translateY(35%)
}
/*------當小於尺寸1023 
隱藏部分space*/
@media only screen and (max-width: 1023px) {
  .space:nth-child(2) {
    display: none;
  }
}
/*------當小於尺寸1023 
調整space arrow的位置*/
@media only screen and (max-width: 432px) {
  .leftarrowIcon,
.rightarrowIcon {
  width: 8%;
  height: 20%;
  background: #00000010;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 30px;
}
.leftarrowIcon {
  left: 5%;
  top: 50%;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.rightarrowIcon {
  position: absolute;
  right: 5%;
  top: 50%;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
}
}
</style>
<script>
export default {
  data: function() {
    return {
      slideIndex: 1,
      screenWidth: document.documentElement.clientWidth
    };
  },
  methods: {
    plusSpace(n) {
      this.slideIndex += n;
      console.log(this.slideIndex + "plus");

      var slides = document.getElementsByClassName("space");

      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }
      console.log(this.slideIndex + "watch1");
      if (this.slideIndex < 1) {
        this.slideIndex = slides.length;
      }
      console.log(this.slideIndex + "watch2");
    }
  },
  watch: {
    slideIndex: function() {
      var i;
      var slides = document.getElementsByClassName("space");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      if (this.screenWidth > 1023) {
        if (this.slideIndex < slides.length) {
          slides[this.slideIndex - 1].style.display = "flex";
          slides[this.slideIndex - 1].style.order = 1;
          slides[this.slideIndex].style.display = "flex";
          slides[this.slideIndex].style.order = 2;
        }
        if (this.slideIndex == slides.length) {
          slides[this.slideIndex - 1].style.display = "flex";
          slides[this.slideIndex - 1].style.order = 1;
          slides[0].style.display = "flex";
          slides[0].style.order = 2;
        }
      }
      if (this.screenWidth < 1024) {
        slides[this.slideIndex - 1].style.display = "flex";
        slides[this.slideIndex - 1].style.order = 1;
      }
    }
  },
  mounted() {
    var _this = this; //聲明ㄧ新變量指向Vue父函数的this
    window.onresize = function() {
      // 定義視窗大小變更通知事件
      //_this.screenWidth 即時修改父函数的“screenWidth”動態變量
      _this.screenWidth = document.documentElement.clientWidth; // 視窗寬度
    };
  }
};
</script>
