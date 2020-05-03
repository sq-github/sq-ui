<template>
  <div class="SqText">
    <svg
      class="svgDom"
      :style="{ width: size * 4 + 'px', height: size * 2 + 'px' }"
    >
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{
          'font-size': size + 'px',
          stroke: colors[0],
          'text-shadow': ' 0 0 5px ' + colors[0]
        }"
        class="text text-1"
      >
        {{ text }}
      </text>
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{
          'font-size': size + 'px',
          stroke: colors[1],
          'text-shadow': ' 0 0 5px ' + colors[1]
        }"
        class="text text-2"
      >
        {{ text }}
      </text>
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{
          'font-size': size + 'px',
          stroke: colors[2],
          'text-shadow': ' 0 0 5px ' + colors[2]
        }"
        class="text text-3"
      >
        {{ text }}
      </text>
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        :style="{
          'font-size': size + 'px',
          stroke: colors[3],
          'text-shadow': ' 0 0 5px ' + colors[3]
        }"
        class="text text-4"
      >
        {{ text }}
      </text>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'SqText',
  props: {
    text: {
      type: String,
      default: 'sq-ui',
      required: false
    },
    size: {
      type: String,
      default: '36',
      required: false
    },
    colors: {
      type: Array[String],
      default() {
        return ['#fc297f', '#400082', '#ff6464', '#f5b5fc']
      },
      required: false
    }
  }
}
</script>
<style lang="scss" scoped>
.SqText {
  text-align: center;
}
.svgDom {
  padding-top: 10px;
}
.text {
  font-weight: bold;
  fill: none;
  stroke-dasharray: 90 310;
  animation: stroke 6s infinite linear;
}
.text-1 {
  animation-delay: -1.5s;
}
.text-2 {
  animation-delay: -3s;
}
.text-3 {
  animation-delay: -4.5s;
}
.text-4 {
  animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
</style>
