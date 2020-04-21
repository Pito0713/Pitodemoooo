<template>
  <div class="VueWorkSpace">
    <div class="leftarrowIcon" @click="plusSpace(-1)">
      <span class="leftArrow">1</span>
    </div>
    <div class="rightarrowIcon" @click="plusSpace(1)">
      <span class="rightArrow">2</span>
    </div>
    <div class="spaceContainer">
      <div class="space">
        <div class="text">1</div>
        <div class="textInfo">467</div>
      </div>
      <div class="space">
        <div class="text">2</div>
        <div class="textInfo">458</div>
      </div>
      <div class="space" style="display: none">
        <div class="text">3</div>
        <div class="textInfo">556</div>
      </div>
      <div class="space" style="display: none">
        <div class="text">4</div>
        <div class="textInfo">556</div>
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
  display: flex;
  box-shadow: 3px 2px 3px 2px #c6c6c6;
  margin: 1rem;
  height: 250px;
}
.VueWorkSpace .text {
  flex: 2 1 30%;
  font-size: 2rem;
}
.VueWorkSpace .textInfo {
  flex: 1 3 70%;
  font-size: 2em;
}

/*---arrow*/
.leftarrowIcon,
.rightarrowIcon {
  width: 30px;
  height: 20px;
  background: #00000020;
  transform: translateY(50%);
  z-index: 1;
  cursor: pointer;
}
.leftarrowIcon {
  position: absolute;
  left: 0;
  top: 45%;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.rightarrowIcon {
  position: absolute;
  right: 0;
  top: 45%;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
}
.leftarrowIcon:hover,
.rightarrowIcon:hover {
  background: #00000050;
  transition: ease 0.3s;
  z-index: 1;
}
/*當小於尺寸 隱藏部分*/
@media only screen and (max-width: 1023px) {
  .space:nth-child(2) {
    display: none;
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
