<template>
  <div class="footer">
    <div class="footerContainer">
      <div class="footTitle">
        <a href="https://cli.vuejs.org/zh/">Vue cil</a>
      </div>
      <div class="footTitle whiteBorder">
        <a href="https://cn.vuejs.org">Vue</a>
      </div>
      <div class="footTitle">
        <a href="https://router.vuejs.org/zh/">Vue Router</a>
      </div>
    </div>
    <div class="foottext">© 2020.05.14  By Pito</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  width: 100%;
  height: 120px;
  background-color: #7daa77;
}
.footerContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.footTitle {
  position: relative;
  color: #e5e5e5;
  font-size: 1.5rem;
  padding: 1rem 0 1rem 0;
  margin: 0.5rem;
}
a:link {
  color: #e5e5e5;
}
a:visited {
  color: #e5e5e5;
}
.whiteBorder {
  border-left: 1px #e5e5e5 solid;
  border-right: 1px #e5e5e5 solid;
}
.foottext {
  color: #e5e5e5;
  position: relative;
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

@media only screen and (max-width: 1024px) {

}
@media only screen and (max-width: 465px) {
  .footTitle {
  font-size: 1rem;
  padding: 1rem 0 1rem 0;
  margin: 0.5rem;
}
}

</style>
