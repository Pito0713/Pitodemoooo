<template>
  <div class="intro">
    <h1 class="infoTitle">About Me</h1>
    <div class="introContainer">
      <div class="introFrame webTitle">
        <img src="../assets/S__34971680.jpg" alt="大頭照" />
      </div>
      <div class="introIntro">
        <div class="textspace">
          <div class="textspaceTitle">
            <div class="titleDot"></div>
            <div class="title">
              <a>我是梁輝捷</a>
            </div>
            <div class="titleDot"></div>
          </div>
          <p>畢業於國立高雄應用科技大學 工業管理與工程系</p>
          <p>擁有2~3年工作經驗</p>
          <p>就職於幸康電子股份有限公司 生管員</p>
          <p>個性開朗活潑, 與他人相處融洽</p>
          <p>
            喜歡嘗試和挑戰 ,對於不懂的事物會抱有好奇的心 ,新的事物會勇於試著去做
          </p>
          <p>
            對於創作設計方面感有興趣, 開始接觸到前端程式設計
            ,主要原因希望達到能夠把工作與興趣合而為一
          </p>
          <p>
            而對於一個新知識,新專業要重零開始的學習 ,雖然剛開始什麼也不懂
            ,但進而嘗試與了解從當初僅是想學習一項新知識 ,轉而想在工作上學以致用
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.intro {
  display: block;
}
.introContainer {
  display: flex;
  padding-top: 2rem;
  padding-bottom: 3rem;
  width: 100%;
  border-bottom: 1px solid #000006;
  .introFrame {
    flex: 50%;
    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
  .introIntro {
    flex: 50%;
  }
}
.infoTitle {
  font-size: 3rem;
  font-weight: 600;
  color: #7cbc5c;
  font-family: "Paprika", cursive;
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
