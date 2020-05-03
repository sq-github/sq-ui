import SqButton from './SqButton'
import SqText from './SqText'
import SqTextDraw from './SqTextDraw'

// 所有组件列表
const components = [SqButton, SqText, SqTextDraw]
// 定义install方法，接收Vue作为参数
const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
}

// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components
}
