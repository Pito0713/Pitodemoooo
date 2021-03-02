<template>
  <div class="Demo">
    <h1 class="infoTitle ">My Demo</h1>
    <div class="DemoContainer">
      <div class="DemoFrame">
        <iframe
          src="https://pito0713.github.io/Demo/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div class="DemoIntro">
        <div class="textspace">
          <div class="textspaceTitle">
            <div class="titleDot"></div>
            <div class="title">
              <a href="https://pito0713.github.io/Demo/">Vue Dome</a>
            </div>
            <div class="titleDot"></div>
          </div>
          <p>RWD</p>
          <p>css animation</p>
          <p>VueJs應用 ($emit)</p>
          <p>Fetch API 串接</p>
          <p>簡易後台建立(google app script)</p>
        </div>
      </div>
    </div>
    <div class="DemoContainer">
      <div class="DemoFrame">
        <iframe
          src="https://pito0713.github.io/MyWedDemo/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div class="DemoIntro">
        <div class="textspace">
          <div class="textspaceTitle">
            <div class="titleDot"></div>
            <div class="title">
              <a href="https://pito0713.github.io/MyWedDemo/"
                >Javascript Dome</a
              >
            </div>
            <div class="titleDot"></div>
          </div>
          <p>RWD</p>
          <p>css animation</p>
          <p>Javascript應用</p>
          <p>Jquery應用</p>
          <p>Json data 串接</p>
          <p>簡易後台建立(google app script)</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.Demo {
  display: block;
}
.DemoContainer {
  display: flex;
  padding-top: 2rem;
  padding-bottom: 3rem;
  width: 100%;
  border-bottom: 1px solid #000006;
  .DemoFrame {
    flex: 50%;
  }
  .DemoIntro {
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
