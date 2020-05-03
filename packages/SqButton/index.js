// 暴露组件
import SqButton from './src/SqButton'
SqButton.install = Vue => {
  Vue.component(SqButton.name, SqButton)
}
export default SqButton
