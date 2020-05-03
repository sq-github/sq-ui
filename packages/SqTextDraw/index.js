// 暴露组件
import SqTextDraw from './src/SqTextDraw'
SqTextDraw.install = vue => {
  vue.component(SqTextDraw.name, SqTextDraw)
}
export default SqTextDraw
