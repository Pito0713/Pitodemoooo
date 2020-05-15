<template>
  <section class="TipSpace">
    <div class="textspace">
      <div class="textspaceTitle">
        <div class="titleDot"></div>
        <div class="title">Life cycle</div>
        <div class="titleDot"></div>
      </div>
      <div>
        <p>
          <a class="weight">new Vue</a>
          <br />( 新增一個Vue)
          <br />
        </p>
        <p>
          <a class="weight">init</a> events $ lifecycle
          <br />
        </p>
        <p>
          <a class="weight">beforeCreate</a>
          在VueInstanceComponent初始化之後，在data和event/watch事件之前被調用<br />
        </p>
        <p>
          <a class="weight">init</a> injection & reactivity
          <br />
        </p>
        <p>
          <a class="weight">created</a>
          <br />資料 $data 已可以取得，但 DOM 還未生成，並且 $el 屬性還為建立
          <br />
        </p>
        <p>
          <a class="weight">el檢查</a>
        </p>
        <p>
          <a class="weight">template檢查</a>
        </p>
        <p>
          <a class="weight">beforeMount</a>
          <br />
          建立了 $el, 但還沒 $el載入 例如：{ {msg} } 還是模板沒載入
          <br />
        </p>
        <p>
          <a class="weight">mounted</a>
          <br />取得DOM 也載入了 $el的值
          <br />
        </p>
        <p>
          <a class="weight">beforeUpdate (hooks)</a>
          數據更新被調用之前，發生在 DOM 重新渲染之前，並不會觸發重新渲染過程<br />
        </p>
        <p>
          <a class="weight">updated (hooks)</a>
          <br />DOM 重新渲染，View 顯示在畫面上
          <br />
        </p>
        <p>
          <a class="weight">beforeDestroy (hooks)</a>
          <br />Instance 被銷毀之前，在這前 instance 完全可以使用
          <br />
        </p>
        <p>
          <a class="weight">destroyed (hooks)</a>
          Instance 銷毀後，所有東西會解除綁定，也同時解掉所有 event listener<br />
        </p>
      </div>
    </div>
    <div>
      <img alt="Vue lifecycle" width="100%" src="../assets/Vue-lifecycle.png" />
    </div>
  </section>
</template>
<style scoped lang="scss">
.TipSpace {
  display: block;
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 5rem;
  width: 100%;
  border-bottom: 1px solid #000006;
  text-align: center;
}
.textspace {
  flex: 1 2 50%;
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0 1rem 0 0;
  .title {
    position: relative;
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
  .title::before {
    position: absolute;
    display: block;
    content: " ";
    bottom: 5%;
    left: -20%;
    border-bottom: #258433 1px solid;
    width: 140%;
    animation: TitleActive 3s alternate infinite;
    animation-delay: 6s;
  }
  .textspaceTitle {
    display: flex;
    justify-content: center;
  }
  .titleDot {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #258433;
    margin: 1rem 1rem;
  }
}
.codeSpace {
  padding: 0 1rem 0 0;
}
.weight {
  font-weight: 800;
  color: #a82b4f;
}
@keyframes TitleActive {
  0% {
    width: 0%;
  }
  100% {
    width: 140%;
  }
}
</style>
