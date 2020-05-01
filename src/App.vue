<template>
  <div id="app">
    <div class="burger" @click="toggle">
      <span class="icon-line"></span>
      <span class="icon-line-short"></span>
      <span class="icon-line"></span>
    </div>
    <nav class="navbar" :class="{ navOps: open }">
      <div class="nav-logo">
        <router-link to="/">Pito</router-link>
      </div>
      <ul class="nav-branch">
        <li class="nav-items" @click="seen = !seen">
          <router-link to="/">Home</router-link>
        </li>
        <div v-if="seen" class="list">
          <div class="nav-lists" :class="{active: active===0}" @click="scrollTo(0)">component</div>
          <div class="nav-lists" :class="{active: active===1}" @click="scrollTo(1)">Prop In</div>
          <div class="nav-lists" :class="{active: active===2}" @click="scrollTo(2)">Event Emit</div>
        </div>
        <li class="nav-items">
          <router-link to="/about">test</router-link>
        </li>
        <li class="nav-items">Note</li>
        <li class="nav-items">About Me</li>
      </ul>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
//--- goboal ------------------------------------
#app {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 25%;
}
ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
a {
  text-decoration: none;
}
a:visited {
  color: #2c3e50;
}
//--- navbar ------------------------------------
.navbar {
  font-family: "Playfair Display SC", serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 25%;
  height: 100%;
  padding-top: 2rem;
  background-color: #ccefba;
  transition: all 1s ease;
}
.nav-logo {
  font-size: 7rem;
  padding-top: 2rem;
}
.nav-branch {
  list-style: none;
  font-size: 2rem;
}
.nav-items {
  padding: 1rem;
  font-size: 2.5rem;
}
.list {
  padding-bottom: 3rem;
}
.nav-lists {
  font-size: 1.5rem;
  padding: 1rem;
}
.active {
  background-color: #aee5a7;
}
// -----burger
.burger {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem 1rem;
  cursor: pointer;
  z-index: 3;
  display: none;
}
.icon-line {
  width: 1.5rem;
  height: 3px;
  background-color: #000000;
  display: block;
  margin: 5px;
}
.icon-line-short {
  width: 1.2rem;
  height: 3px;
  background-color: #000000;
  display: block;
  margin: 5px;
}
/*------Viewport less than 1024px------*/
@media only screen and (max-width: 1024px) {
  .navbar {
    width: 30%;
    left: -30%;
  }
  .nav-logo {
    font-size: 6rem;
  }
  .navOps {
    left: 0px !important;
  }
  #app {
    margin-left: 0 !important;
  }
  .burger {
    display: block !important;
  }
}
@media only screen and (max-width: 765px) {
  .navbar {
    width: 40%;
    left: -40%;
  }
  .nav-logo {
    font-size: 4rem;
  }
  .nav-items {
    font-size: 1.5rem;
  }
  .nav-lists {
  font-size: 0.9rem;
}
  .navOps {
    left: 0px !important;
  }
  #app {
    margin-left: 0 !important;
  }
  .burger {
    display: block !important;
  }
}
@media only screen and (max-width: 465px) {
  .navbar {
    width: 40%;
    left: -40%;
  }
  .nav-logo {
    font-size: 3rem;
  }
  .nav-items {
    font-size: 1rem;
  }
  .nav-lists {
  font-size: 0.9rem;
}
  .navOps {
    left: 0px !important;
  }
  #app {
    margin-left: 0 !important;
  }
  .burger {
    display: block !important;
  }
  .icon-line {
    width: 1rem;
    height: 2px;
    margin: 3px;
  }
  .icon-line-short {
    width: 0.8rem;
    height: 2px;
    margin: 3px;
  }
}
@media only screen and (max-width: 320px) {
  .navbar {
    width: 40%;
    left: -40%;
  }
  .nav-logo {
    font-size: 3rem;
  }
  .nav-items {
    font-size: 1rem;
  }
  .nav-lists {
  font-size: 0.6rem;

}
  .navOps {
    left: 0px !important;
  }
  #app {
    margin-left: 0 !important;
  }
  .burger {
    display: block !important;
  }
  .icon-line {
    width: 1rem;
    height: 2px;
    margin: 3px;
  }
  .icon-line-short {
    width: 0.8rem;
    height: 2px;
    margin: 3px;
  }
}

</style>
<script>
export default {
  data: function() {
    return {
      open: false,
      seen: false,
      active: 0, // 建立起始
      screenWidth: document.documentElement.clientWidth
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    onScroll() {
      // 取的所有list元素
      const navContents = document.querySelectorAll(".tip section");
      // 建立所有list元素的 offsetTop
      const offsetTopArr = [];
      //帶入 offsetTop
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop);
      });
      //驗證
      console.log(offsetTopArr)

      //取得DOM的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // 起始為0 
      let navIndex = 0;
      //建立迴圈
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大於第n元素的 offsetTop
        // 那前一個元素就看不到了 ,這是輪到下個 n 元素
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n;
          console.log(n + 'n')
          console.log(scrollTop)
        }
      }
      // 回傳 data 觸發 active
      this.active = navIndex;
    },
    scrollTo(index) {
      // 取得點及目標的 offsetTop
      // 從1 開始算 因為css起始是 1 
      // index 起始是 ０
      let getOffsetTop = document.querySelector(`.tip section:nth-child(${index + 1})`).offsetTop
      console.log(getOffsetTop + 'get');
      //帶入目標的 offsetTop  然後移動是目標位置
      document.documentElement.scrollTop = getOffsetTop;
    }
  },
  watch: {
    screenWidth: function() {
      // 監聽螢幕寬度變化
      if (this.screenWidth < 1024) {
        return (this.open = false);
      }
      console.log(122);
    }
  },
  mounted() {
    var _this = this; //聲明ㄧ新變量指向Vue父函数的this
    window.onresize = function() {
      // 定義視窗大小變更通知事件
      //_this.screenWidth 即時修改父函数的“screenWidth”動態變量
      _this.screenWidth = document.documentElement.clientWidth; // 視窗寬度
    };

    window.addEventListener("scroll", this.onScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  }
}
</script>
