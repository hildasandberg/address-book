import React from "react"
import Contact from "./contact.js"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      answer: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/contacts/").then(response => response.json()).then(json => {
      this.setState({
        answer: json
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        {this.state.answer.map(item =>
          <Contact
            key={item.id}
            name={item.name}
            phone={item.phoneNumber}
            email={item.emailAddress} />)}
      </div>
    )
  }

}

export default App
