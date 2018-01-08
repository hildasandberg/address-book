import React from "react"

class Contact extends React.Component {
  render() {
    return (

      <div>
        <h4>{this.props.name}</h4>
        <p>{this.props.phone}</p>
      </div>

    )
  }
}

export default Contact
