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
    fetch("http://localhost:8080/contacts/").then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        answer: json
      })
    })
  }

  render() {
    return (
      <div>
        Find me in src/app.js!

        {this.state.answer.map(item => {
          return <Contact
            name={item.name}
            phone={item.phoneNumber} />
        })}

      </div>
    )
  }

}

export default App
