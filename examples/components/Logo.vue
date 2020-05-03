<template>
  <div class="Logo">
    <svg class="svgDom">
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{ 'font-size': size + 'px' }"
        class="text text-1"
      >
        sq-ui
      </text>
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{ 'font-size': size + 'px' }"
        class="text text-2"
      >
        sq-ui
      </text>
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{ 'font-size': size + 'px' }"
        class="text text-3"
      >
        sq-ui
      </text>
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{ 'font-size': size + 'px' }"
        class="text text-4"
      >
        sq-ui
      </text>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 36
    }
  }
}
</script>
<style lang="scss" scoped>
.Logo {
  text-align: center;
  height: 80px;
}
.svgDom {
  width: 120px;
  height: 60px;
  padding-top: 10px;
}
.text {
  // font-size: 36px;
  font-weight: bold;
  fill: none;
  // stroke-width: 2px;
  stroke-dasharray: 90 310;
  animation: stroke 6s infinite linear;
}
.text-1 {
  stroke: #fc297f;
  text-shadow: 0 0 5px #fc297f;
  animation-delay: -1.5s;
}
.text-2 {
  stroke: #ffd5d5;
  text-shadow: 0 0 5px #ffd5d5;
  animation-delay: -3s;
}
.text-3 {
  stroke: #ff6464;
  text-shadow: 0 0 5px #ff6464;
  animation-delay: -4.5s;
}
.text-4 {
  stroke: #f5b5fc;
  text-shadow: 0 0 5px #f5b5fc;
  animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
</style>
