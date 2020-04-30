<template>
  <section class="TipSpace">
    <div class="textspace">
      <h1>區域註冊</h1>
      <p>
        某些特定元件就會用區域註冊的方式，註冊在需要使用它的元件之中，是一個選項物件，可以由components這個選項物件屬性載入
      </p>
      <p>
        在Vue.component設定的組件名稱,在HTML標籤DOM只支援短橫線命名法，但是Vue.js即使用駝峰命名法創建新組件，在HTML中還是要把他轉成短橫線命名法才行。
      </p>
      <p>
        Vue.component都擁有data、methods、computed和watch，但不是實體，所以不會有el。此外，data的值必須要是方法的回傳值；這樣會讓每次創建一個組件實體的時候，都會重新new一個新的data，讓每組件都擁有自己獨立的data，
      </p>
      <p>
        元件的data只能是函式(Function)在一般情況下，function是最小單位,為了防止與其他父層其他data干擾混肴,強烈建議用function區分
      </p>
    </div>
    <div class="codeSpace">
      <pre>
<code class="html">
&lt;div id=&quot;localTest&quot;&gt;
    &lt;callText&gt;&lt;/callText&gt;
&lt;/div&gt;
&lt;script&gt;
    var vm = new Vue({
        el:&#39;#localTest&#39;,
        components:{
            //組件名稱
            &#39;callText&#39;:{
            //選項物件
                template:
                &#39;&lt;div class=&quot;component&quot;&gt;{ {message} }&lt;/div&gt;&#39;,
            //元件data只能是Function可以重複利用
                data: function(){
                    return{
                        message: &quot;I am Jie&quot;,
                    }
                },
            }
        },  
    })
&lt;/script&gt;        
</code>
</pre>
    </div>
  </section>
</template>
<style scoped>
.TipSpace {
  display: flex;
  text-align: left;
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100%;
  border-bottom: 1px solid #000006;
}
.textspace {
  flex: 1 2 50%;
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0 1rem 0 0;
}
.textspace h1 {
  text-align: center;
}
.codeSpace {
  flex: 2 1 50%;
  padding: 0 1rem 0 0;
}
@media only screen and (max-width: 968px) {
  .TipSpace {
    display: block;
  }
}
</style>
