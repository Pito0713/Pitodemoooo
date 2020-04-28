<template>
  <div class="footer">
    <div class="footTitle">Vue cil</div>
    <div class="footTitle whiteBorder">Vue</div>
    <div class="footTitle">Vue Router</div>
    <div class="foottext">© 2020 04 By AJie</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  width: 100%;
  height: 20%;
  background-color: #7daa77;
}
.footTitle {
  position: relative;
  color: #e5e5e5;
  font-size: 1.3rem;
  padding: 1rem 0 1rem 0;
  margin: 0.5rem;
}
.whiteBorder {
  border-left: 1px #e5e5e5 solid;
  border-right: 1px #e5e5e5 solid;
}
.foottext {
  color: #e5e5e5;
  position: relative;
  font-size: 1rem;
}
</style>
