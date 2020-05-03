<template>
  <button v-if="type === 'changeColor'" class="sq-button-changeColor btn">
    变色按钮
  </button>
  <button v-else-if="type === 'flash'" class="sq-button-flash btn">
    闪光按钮
  </button>
  <button v-else-if="type === 'open'" class="sq-button-open btn">
    开合按钮
  </button>
</template>

<script>
export default {
  name: 'SqButton',
  props: {
    type: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  height: 50px;
  margin: 0 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.sq-button-changeColor {
  color: white;
  background-color: #fc297f;
  &:hover {
    animation: draw 5s linear infinite;
  }
}
@keyframes draw {
  0%,
  100% {
    background-color: #f35588;
  }
  20% {
    background-color: #05dfd7;
  }
  40% {
    background-color: #a3f7bf;
  }
  60% {
    background-color: #fff591;
  }
  80% {
    background-color: #feb72b;
  }
}
.sq-button-flash {
  color: #fc297f;
  border: 2px solid #fc297f;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    background-color: #fff;
    height: 100%;
    width: 35px;
    display: block;
    position: absolute;
    top: 0;
    left: -60px;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    background-color: #fc297f;
    color: #fff;
  }
  &:hover:before {
    transform: skewX(-45deg) translateX(600px);
    transition: all 0.8s linear;
  }
}
.sq-button-open {
  color: #fc297f;
  background-color: #fff;
  border: 2px solid #fc297f;
  position: relative;
  display: inline-block;
  -webkit-transform: perspective(1px);
  transform: perspective(1px);
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fc297f;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
  }
  &:hover {
    color: #fff;
  }
  &:hover:before {
    transform: scaleX(1);
    transition: all 0.3s ease-out;
  }
}
</style>
