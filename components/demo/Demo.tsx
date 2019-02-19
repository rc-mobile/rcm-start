/**
 * @component Button
 * @version 0.0.1
 * @author sayll
 */
import * as React from 'react'
import './style/index.scss'

export interface DemoProps {
  /**
   * 文字颜色
   * */
  color?: string

  /**
   * 按钮大小
   * @default default
   * */
  size: 'large' | 'small' | 'default'
}

export default class Demo extends React.PureComponent<DemoProps, any> {
  static defaultProps = {
    size: 'default'
  }

  constructor(props: DemoProps) {
    super(props)
    let sizeConfig = {}
    switch (props.size) {
      case 'small':
        sizeConfig = { padding: '5px 10px' }
        break
      case 'large':
        sizeConfig = { padding: '15px 30px' }
        break
      default:
        sizeConfig = { padding: '10px 20px' }
    }

    this.state = {
      sizeConfig
    }
  }

  render() {
    return (
      <button style={{ color: this.props.color, ...this.state.sizeConfig }}>
        {this.props.children}
      </button>
    )
  }
}
