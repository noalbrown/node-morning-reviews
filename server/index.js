const express = require('express')
const users = require('../users.json')

const app = express()
const port = 4338

app.get('/api/users', (req, res) => {
  res.status(200).send(users)
})

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params

    if (!id) {
      return res.status(404).send('Unable to find resource')
    }

    const user = users.find(user => user.id === +id)

    if (!user) {
      return res.status(500).send('Unable to find user')
    }

    res.status(200).send(user)
  })

app.listen(port, () => console.log(`Server running on port ${port}`))