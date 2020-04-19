<template>
  <div class="VueWorkSpace">
    <div class="leftarrowIcon">
      <span class="leftArrow">1</span>
    </div>
    <div class="rightarrowIcon">
      <span class="rightArrow">2</span>
    </div>
    <div class="spaceContainer">
      <div class="space">
        <div class="text">123</div>
        <div class="textInfo">456</div>
      </div>
      <div class="space">
        <div class="text">123</div>
        <div class="textInfo">456</div>
      </div>
      <div class="space">
        <div class="text">123</div>
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
  background-color: aquamarine;
}
.spaceContainer {
  display: flex;
  width: 150%;
}
.space {
  width: 50%;
  display: grid;
  /*4等分 第一佔 1/4 第二佔 3/4*/
  grid-template-columns: 1fr 3fr;
}
.VueWorkSpace .text {
  font-size: 2rem;
}
.VueWorkSpace .textInfo {
  font-size: 2em;
  background-color: wheat;
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
  top: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.rightarrowIcon {
  position: absolute;
  right: 0;
  top: 0;
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
@media only screen and (max-width: 1024px) {
}
</style>
