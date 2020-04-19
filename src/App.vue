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
        <li class="nav-items">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-items"><router-link to="/about">test</router-link></li>
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
#app {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 250px;
  margin-left: 250px;
  padding: 2rem;
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
//--- navbar -----
.navbar {
  font-family: "Playfair Display SC", serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 250px;
  height: 100%;
  padding-top: 2rem;
  background-color: #ccefba;
  transition: all 1s ease;
}
.nav-logo {
  font-size: 5rem;
}
.nav-branch {
  list-style: none;
  font-size: 1.5rem;
}
.nav-items {
  padding: 2rem 5rem 2rem 5rem;
}

/*------Viewport less than 768px------*/
@media only screen and (max-width: 1024px) {
  .navbar {
    left: -250px;
  }
  .nav-logo {
    padding: 2rem 3rem 2rem 3rem;
  }
  .navOps {
    left: 0px !important;
  }
  #app {
    margin-left: 0 !important;
  }
  .navActive {
    transform: translateX(250px);
  }
  .burger {
    display: block !important;
  }
}
// -----burger
.burger {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem 1rem;
  cursor: pointer;
  z-index: 2;
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
</style>
<script>
export default {
  data: function() {
    return {
      open: false,
      screenWidth: document.documentElement.clientWidth
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      console.log("123");
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
  }
};
</script>
