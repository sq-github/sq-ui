<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <div class="logo">
        <Logo></Logo>
      </div>
      <button class="toGithub" @click="toGithub">View on GitHub</button>
    </div>
    <div class="main">
      <!-- sidebar -->
      <div class="sidebar">
        <nav-side :data="navsData"></nav-side>
      </div>
      <div class="view page-container">
        <router-view></router-view>
      </div>
    </div>
    <!-- footer -->
    <!-- <div class="footer"></div> -->
  </div>
</template>
<script>
import Logo from './components/Logo'
import navSide from './components/menuCom'
import navsData from './router/routerCon.json'
export default {
  components: {
    Logo,
    navSide
  },
  data() {
    return {
      navsData
    }
  },
  methods: {
    toGithub() {
      window.location.href = 'https://github.com/sq-github/sq-ui'
    }
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
  background-color: #17171d;
}
.header {
  top: 0;
  height: 60px;
  background-color: #121217;
  .logo {
    float: left;
  }
  .toGithub {
    vertical-align: middle;
    width: 120px;
    height: 40px;
    line-height: 40px;
    float: right;
    margin: 10px 28px 0 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 0 8px rgb(156, 147, 147);
    border: none;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    background-color: #fc297f;
    color: #fff;
    &:hover {
      box-shadow: 0 0 8px #fff;
    }
  }
}
.footer {
  position: absolute;
  height: 60px;
  background-color: antiquewhite;
  width: 100%;
}
.footer {
  bottom: 0;
}
.main {
  background-color: #17171d;
  position: absolute;
  bottom: 0;
  top: 60px;
  // padding: 0 0 20px 0;
  width: 100%;
  overflow: hidden;
}
.sidebar,
.view {
  overflow: auto;
}
.sidebar {
  float: left;
  height: 100%;
  width: 200px;
  padding: 10px 0 10px 0;
  border-right: #000000 3px solid;
}
.view {
  padding: 0 0 80px 0;
  float: left;
  height: calc(100% - 50px);
  width: calc(100% - 203px);
  overflow: auto;
}
</style>
