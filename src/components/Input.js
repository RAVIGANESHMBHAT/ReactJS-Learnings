import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRfe = React.createRef()
    }

    focusInput() {
        this.inputRfe.current.focus()
    }

  render() {
    return (
        <div>
            <input type="text" ref={this.inputRfe} />
      </div>
    )
  }
}

export default Input