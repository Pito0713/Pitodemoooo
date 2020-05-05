<template>
  <section class="TipSpace">
    <div class="textspace">
      <h1> Life cycle</h1>
      <div>
        <p><a class="weight">new Vue</a> <br />
        ( 新增一個Vue)<br /></p>
        <p><a class="weight">init</a> events $ lifecycle<br /></p>
        <p><a class="weight">beforeCreate</a> <br />
        在 Vue Instance、 Component 初始化之後，在 data 和 event/watch 事件之前被調用<br /></p>
        <p><a class="weight">init</a> injection & reactivity <br /></p>
        <p><a class="weight">created</a><br />
        資料 $data 已可以取得，但 DOM 還未生成，並且 $el 屬性還為建立 <br /></p>
        <p><a class="weight">el檢查</a></p>
        <p><a class="weight">template檢查</a></p>
        <p><a class="weight">beforeMount</a><br /> 
        建立了 $el, 但還沒 $el載入  例如：{ {msg} } 還是模板沒載入<br /></p>
        <p><a class="weight">mounted</a><br />
        取得DOM 也載入了 $el的值 <br /></p>
        <p><a class="weight">beforeUpdate (hooks)</a><br />
        數據更新被調用之前，發生在 DOM 重新渲染之前，並不會觸發重新渲染過程<br /></p>
        <p><a class="weight">updated (hooks)</a><br />
        DOM 重新渲染，View 顯示在畫面上<br /></p>
        <p><a class="weight">beforeDestroy (hooks)</a><br />
        Instance 被銷毀之前，在這前 instance 完全可以使用<br /></p>
        <p><a class="weight">destroyed (hooks) </a><br />
        Instance 銷毀後，所有東西會解除綁定，也同時解掉所有 event listener<br /></p>
      </div>
    </div>
    <div>
      <img
        alt="Vue lifecycle"
        width="100%"
        src="../assets/Vue-lifecycle.png"
      />
    </div>
  </section>
</template>
<style scoped>
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
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0 1rem 0 0;
}
.textspace h1 {
  padding: 1rem;
}
.codeSpace {
  padding: 0 1rem 0 0;
}
.weight {
  font-weight: 800;
  color: #a82b4f;
}
</style>
