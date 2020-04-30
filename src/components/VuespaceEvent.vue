<template>
  <section class="TipSpace">
    <div class="textspace">
      <h1>元件傳遞 Emit event</h1>
      <a class="weight">子元件</a>傳遞資料給
      <a class="weight">父元件</a>
      <p>
        emit 函式使用方法是在第一個傳送參數中，填入要觸發方法的名稱：<br />
        而第二個傳送參數則是傳入想要給予對方什麼樣的內容。
      </p>
    </div>
    <div class="codeSpace">
      <pre>
<code class="html">
&lt;div id=&quot;foo&quot;&gt;
    &lt;p&gt;父元件
        //綁定message
        &lt;input type=&quot;text&quot; v-model=&#39;message&#39;&gt;
    &lt;/p&gt;
    &lt;p&gt;子元件
        //子元件中parentmsg等於message
        &lt;child-component :parentmsg=&quot;message&quot;&gt;&lt;/child-component&gt;
    &lt;/p&gt;
&lt;/div&gt;  
&lt;script&gt;
    //建立元件
    Vue.component(&#39;child-component&#39;,{
        //設立監聽updateText
        template: `&lt;div&gt;子元件資料&lt;input type=&quot;text&quot; v-model=&quot;parentmsg&quot;&gt;
            &lt;button type=&quot;button&quot; @click=&quot;updateText&quot;&gt;Update&lt;/button&gt;&lt;/div&gt;`,
        // props 中指定了元件的資料為 parentmsg 是字串    
        props:{
            parentmsg:String
        },
        data(){
            return{
                message :this.parentmsg
            }
        },
        //監聽的方法
        methods:{
        //藉由 $emit 來發送給父元件
        //觸發方法的名稱update，傳入this.parentmsg
        //子件可藉由this.parent來存取父層
        //父件可藉由this.children來存取子層
            updateText: function(){
                this.$parent.$emit(&#39;update&#39;,this.parentmsg)
            }
        }
    })
    var vm = new Vue({
        el:&#39;#foo&#39;,
        data:{
            message:&#39;父元件資料&#39;
        },
        //$on這個方法來監聽目標的事件
        //觸發方法的名稱update，傳入this.update
        mounted(){
            this.$on(&#39;update&#39;,this.update)
        }
        // 觸發 update 函數將子元件的資料，賦與傳遞進來的值。
        methods:{
            update(value){
                this.message = value
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
  display: block;
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 5rem;
  width: 100%;
  border-bottom: 1px solid #000006;
}
.textspace {
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0 1rem 0 0;
}
.textspace h1 {
  text-align: center;
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
