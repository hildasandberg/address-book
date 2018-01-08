import express from "express"
import cors from "cors"
const app = express()
const contacts = require("./contacts.json")

app.use(cors())

app.get("/", (req, res) =>
  res.status(404)
  res.send("Not found")
)

app.get("/contacts", (req, res) => {
  res.send(contacts.contacts)
})

app.get("/contacts/:id", (req, res) => {
  const contactId = parseInt(req.params.id)
  const oneContact = contacts.contacts.find(c => c.id === contactId)
  if (oneContact) {
    res.send(oneContact)
  } else {
    res.status(404)        // HTTP status 404: NotFound
    res.send("Not found")
  }
})

app.get("/*", (req, res) => {
    res.status(404)
    res.send("Not found")
})

app.listen(8080, () =>
  console.log("Example app listening on port 8080!")
)
