/**
 * @component Page
 * @version 0.0.1
 * @author $userName
 */
import * as React from 'react'
import './style/index.scss'

export interface PageProps {

}

export default class Page extends React.PureComponent<PageProps, any> {
  constructor(props: PageProps) {
    super(props)
    this.state = {}
  }

  componentDidMount(): void {}

  render() {
    return (
      <div className="x-Page">
        hello,word!
      </div>
    )
  }
}
