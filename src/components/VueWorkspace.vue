<template>
  <div class="VueWorkSpace">
    <div class="leftarrowIcon" @click="plusSpace(-1)">
      <span>
        <i class="fas fa-angle-left"></i>
      </span>
    </div>
    <div class="rightarrowIcon" @click="plusSpace(1)">
      <span>
        <i class="fas fa-angle-right"></i>
      </span>
    </div>
    <div class="spaceContainer">
      <div class="space" @click="scrollTo(0)">
        <div>
          <img
            alt="Vue logo"
            width="80%"
            src="../assets/VueWorkspaceComponent.png"
          />
        </div>
      </div>
      <div class="space" @click="scrollTo(1)">
        <div>
          <img
            alt="Vue logo"
            width="80%"
            src="../assets/VueWorkspaceEvent.png"
          />
        </div>
      </div>
      <div class="space" style="display: none" @click="scrollTo(3)">
        <div>
          <img
            alt="Vue logo"
            width="50%"
            src="../assets/VueWorkspaceLifecycle.png"
          />
        </div>
      </div>
    </div>
    <div style="text-align:center">
      <span class="dot active" @click="clickDot(1)"></span>
      <span class="dot" @click="clickDot(2)"></span>
      <span class="dot" @click="clickDot(3)"></span>
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
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}
/*---dot*/
.dot {
  cursor: pointer;
  height: 7px;
  width: 7px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active,
.dot:hover {
  background-color: #717171;
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
  transform: translateY(35%);
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
      screenWidth: document.documentElement.clientWidth,
      //抓出點點的數量
      dots: document.getElementsByClassName("dot"),
      //建立一個虛的位置給計數器放
      timer: ""
    };
  },
  methods: {
    //當我觸發plusSpace的時候 slideIndex +/- n值
    //設立範圍 slideIndex
    // 當 slideIndex 值大於 lenght   //回傳1 回到第一項
    // 當 slideIndex 值小於 1     //回到 最後一項
    plusSpace(n) {
      this.slideIndex += n;

      let slides = document.getElementsByClassName("space");

      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }
      if (this.slideIndex < 1) {
        this.slideIndex = slides.length;
      }
    },

    // 當我觸發 點點直接顯示第n的
    clickDot(n) {
      this.slideIndex = n;
    },

    scrollTo(index) {
      // 取得點及目標的 offsetTop
      // 從1 開始算 因為css起始是 1
      // arr.index 起始是 ０
      let getOffsetTop = document.querySelector(
        `.tip section:nth-child(${index + 1})`
      ).offsetTop;

      //帶入目標的 offsetTop  然後移動是目標位置
      //document.documentElement.scrollTop = getOffsetTop;

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
          if (scrollTopStep + step < getOffsetTop) {
            scrollTopStep += step;
            //建立的一個持續變動的變量
            let _scrollTopStep = scrollTopStep;

            //持續變動的變量 會回傳到scrollTop 使他慢慢的變化移動
            document.body.scrollTop = _scrollTopStep;
            document.documentElement.scrollTop = _scrollTopStep;

            //提出動畫需求 當goUP被執行時
            //持續性的執行 直到goUP 被停下
            requestAnimationFrame(goUP);
          }
        }
      }
    }
  },
  watch: {
    //監聽slideIndex 如果他有異動執行 function
    //先在所有 slides ,dot 只要沒被呼叫的 顯示none 或無動作
    //設立兩種顯示方式 當我螢幕尺寸大於1024 顯示 2個space , 小於則顯示 1 space
    //利用 flex order 改變順序 使原本要div順序 可改變顯示
    //利用 class: active 使點點的顏色變化
    slideIndex: function() {
      let i;
      let slides = document.getElementsByClassName("space");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < this.dots.length; i++) {
        this.dots[i].className = this.dots[i].className.replace(" active", "");
      }
      if (this.screenWidth > 1023) {
        if (this.slideIndex < slides.length) {
          slides[this.slideIndex - 1].style.display = "flex";
          slides[this.slideIndex - 1].style.order = 1;

          slides[this.slideIndex].style.display = "flex";
          slides[this.slideIndex].style.order = 2;

          this.dots[this.slideIndex - 1].className += " active";
        }
        if (this.slideIndex == slides.length) {
          slides[this.slideIndex - 1].style.display = "flex";
          slides[this.slideIndex - 1].style.order = 1;
          this.dots[this.slideIndex - 1].className += " active";
          slides[0].style.display = "flex";
          slides[0].style.order = 2;
        }
      }
      if (this.screenWidth < 1024) {
        slides[this.slideIndex - 1].style.display = "flex";
        slides[this.slideIndex - 1].style.order = 1;
        this.dots[this.slideIndex - 1].className += " active";
      }
    }
  },
  mounted() {
    //聲明ㄧ新變量 _this 指向Vue父函数的 this
    //定義視窗大小變更通知事件 window.onresize
    //當_this.screenWidth 可即時修改父函数的“screenWidth”動態變量
    var _this = this;
    window.onresize = function() {
      _this.screenWidth = document.documentElement.clientWidth; // 視窗寬度
    };
    //自動播放 5秒一次
    this.timer = setInterval(() => {
      _this.plusSpace(1);
    }, 3000);

    //新增監聽 scrollTopStep 與 upTop方法的異動
    window.addEventListener("scrollTopStep", this.upTop);
  },
  beforeDestroy() {
    //即時清除防止資料累積太多 beforeDestroy停止setInterval
    clearInterval(this.timer);
  },
  destroy() {
    // 移除  upTop監聽，不然前一個子件註銷 但監聽還在會除錯
    window.removeEventListener("scrollTopStep", this.upTop);
  }
};
</script>
