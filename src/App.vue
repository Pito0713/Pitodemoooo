<template>
  <div id="app">
    <div
      class="burger"
      @click="toggle"
      :class="{ burgerDown: burgerDown }"
    >
      <span class="icon-line" :class="{ iconLineOneActive: open }"></span>
      <span class="icon-line-short" :class="{ iconLinetwoActive: open }"></span>
      <span class="icon-line" :class="{ iconLineThereActive : open }"></span>
    </div>
    <nav class="navbar" :class="{ navOps: open }">
      <div class="nav-logo" @click="homePage">
        <router-link to="/" >Pito</router-link>
      </div>
      <ul class="nav-branch">
        <li class="nav-items" @click="seen = !seen">
          <router-link to="/">Home</router-link>
        </li>
        <div v-if="seen" class="list">
          <div
            class="nav-lists"
            :class="{ active: active === 0 }"
            @click="scrollTo(0)"
          >
            component
          </div>
          <div
            class="nav-lists"
            :class="{ active: active === 1 }"
            @click="scrollTo(1)"
          >
            Prop In
          </div>
          <div
            class="nav-lists"
            :class="{ active: active === 2 }"
            @click="scrollTo(2)"
          >
            Event Emit
          </div>
          <div
            class="nav-lists"
            :class="{ active: active === 3 }"
            @click="scrollTo(3)"
          >
            Life Cycle
          </div>
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
//---------- goboal ------------------------------------
#app {
  
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
//-------------- navbar ------------------------------------
.navbar {
  font-family: 'Fira Sans Extra Condensed', sans-serif;
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
  font-size: 8rem;
  padding-top: 2rem;
  cursor: pointer;
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
// --------burger--------------------
.burger {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  cursor: pointer;
  z-index: 3;
  display: none;
}
.burgerDown {
  width: 100%;
  background-color: #aee5a7;
  transform: translateY(0.1px);
  transition: all 0.5s ease-out;
}
.icon-line {
  width: 1.5rem;
  height: 3px;
  background-color: #000000;
  display: block;
  margin: 5px;
  transition: all 0.5s ease;
}
.icon-line-short {
  width: 1.2rem;
  height: 3px;
  background-color: #000000;
  display: block;
  margin: 5px;
}
.iconLineOneActive {
  transform: rotate(45deg) translate(5px, 7px);
  width: 2rem;
}
.iconLinetwoActive {
  opacity: 0;
}
.iconLineThereActive {
  transform: rotate(-45deg) translate(5px, -7px);
  width: 2rem;
}
//----------------Viewport ----------------------
@media only screen and (max-width: 1024px) {
  .navbar {
    width: 30%;
    left: -30%;
    opacity: 0.92;
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
    opacity: 0.92;
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
    opacity: 0.92;
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
    opacity: 0.92;
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
      burgerDown: false,
      seen: false,
      active: 0, // 建立起始
      screenWidth: document.documentElement.clientWidth,
      scrollTop: document.documentElement.scrollTop || document.body.scrollTop
    };
  },
  methods: {
    //navbar
    toggle() {
      this.open = !this.open;
    },
    homePage() {
      window.document.body.scrollTop = 0;
      window.document.documentElement.scrollTop = 0;
    },

    //用來顯示你看到navlist哪個section
    onScroll() {
      // 取的所有list元素
      const navList = document.querySelectorAll(".tip section");

      // 建立變數矩陣
      // 將list.offsetTop的值帶入 矩陣中
      const offsetTopArr = [];
      navList.forEach(item => {
        offsetTopArr.push(item.offsetTop);
      });
      //驗證一下
      console.log(offsetTopArr);

      //取得DOM的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 建立list的index  起始為0
      let navListIndex = 0;
      //建立迴圈
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大於第n元素的 offsetTop
        // 那就是前一個元素已經看不到了 ,這是輪到下個 n 元素
        if (scrollTop >= offsetTopArr[n]) {
          navListIndex = n;
        }
      }
      // 回傳n值 觸發 active
      this.active = navListIndex;
    },

    //用來直接傳到你指定的navlist
    scrollTo(index) {
      // 取得點及目標的 offsetTop
      // 從1 開始算 因為css起始是 1
      // arr.index 起始是 ０
      let getOffsetTop = document.querySelector(
        `.tip section:nth-child(${index + 1})`
      ).offsetTop;

      //帶入目標的 offsetTop  然後移動是目標位置
      document.documentElement.scrollTop = getOffsetTop;
    }
  },
  watch: {
    screenWidth: function() {
      // 當mounted 監聽 screenWidth值 變化
      // 讓open =false
      // 大於1024 burger收起來
      if (this.screenWidth < 1024) {
        return (this.open = false);
      }
    },
    scrollTop: function() {
      // 當mounted 監聽 scrollTop值 變化
      //  讓小於1收起來
      if (this.scrollTop  < 1) {
        return (this.burgerDown = false);
      } 
      else {
        return (this.burgerDown = true);
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

    window.onscroll = function() {
      // 定義scroll大小變更事件
      //_this.scrollTop 即時修改父函数的“scrollTop”動態變量
      _this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    };

    //新增監聽 scroll 與 onScroll方法的異動
    window.addEventListener("scroll", this.onScroll);
  },
  destroy() {
    // 移除 onScroll監聽，不然前一個子件註銷 但監聽還在會除錯
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
