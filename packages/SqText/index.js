// 暴露组件
import SqText from './src/SqText'
SqText.install = vue => {
  vue.component(SqText.name, SqText)
}
export default SqText
