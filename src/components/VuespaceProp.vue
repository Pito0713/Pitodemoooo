<template>
  <section class="TipSpace">
    <div class="textspace">
      <div class="textspaceTitle">
        <div class="titleDot"></div>
        <div class="title">元件傳遞 Props</div>
        <div class="titleDot"></div>
      </div>
      <p>
        <a class="weight">父元件</a> 傳遞資料給
        <a class="weight">子元件</a>
      </p>
      <p>
        傳遞資料時，可以使用元件內的 props 選項來指定傳遞的資料名稱，<br />
        元件可以為 props 指定要求。如果未指定要求，Vue 會發出警告
      </p>
    </div>
    <div class="codeSpace">
      <pre>
<code class="html">
&lt;div id=&quot;vueProp&quot;&gt;
    &lt;input-data  :place=&#39;place&#39; :myName=&#39;myname&#39;&gt;&lt;/input-data&gt;
&lt;/div&gt;
&lt;script&gt;
    Vue.component(&#39;input-data&#39;,{
        //指定傳遞父元件的資料
        props:{
            myname:null,//不指定型別
            place:{
                //指定型別可以是 字串或數字
                type:[String,Number]
                //指定為必要的欄位
                requires:true,
                //指定預設值
                default:&#39;Jie&#39;,
            }
        },
        
        template:
            `&lt;div&gt;
                &lt;span&gt;輸入{ { myname} }：&lt;/span&gt;
                &lt;input :placeholder=&quot;place&quot; /&gt;
            &lt;/div&gt;`,
    })
    var vm = new Vue({
        el:&#39;#vueProp&#39;,
        //帶入資料
        data:{
            place: &#39;name&#39;,
            myname:&#39;你的名字&#39;,
        }
    })
&lt;/script&gt;      
</code>
</pre>
    </div>
  </section>
</template>
<style scoped lang="scss">
.TipSpace {
  display: flex;
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 5rem;
  width: 100%;
  border-bottom: 1px solid #000006;
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
    left: -15%;
    border-bottom: #258433 1px solid;
    width: 130%;
    animation: TitleActive 3s alternate infinite;
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
  flex: 2 1 50%;
  padding: 0 1rem 0 0;
}
.weight {
  font-weight: 800;
  color: #a82b4f;
}
@media only screen and (max-width: 968px) {
  .TipSpace {
    display: block;
  }
}
@keyframes TitleActive {
  0% {
    width: 0%;
  }
  100% {
    width: 130%;
  }
}
</style>
