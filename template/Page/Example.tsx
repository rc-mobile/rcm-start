/**
 * @component PageExample
 * @version 0.0.1
 * @author $userName
 */
import * as React from 'react'
import Page from './Page'

export default class Example extends React.PureComponent<any, any> {
  static defaultProps = {}

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount(): void {

  }

  render() {
    return (
      <div>
        <Page />
      </div>
    )
  }
}
