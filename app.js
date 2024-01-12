const express = require('express')
const {add} = require('date-fns')
const app = express()

app.get('/', async (request, response) => {
  const dateTime = new Date()

  const dateAfter100Days = await add(new Date(dateTime), {days: 100})

  response.send(
    `${dateAfter100Days.getDate()}/${
      dateAfter100Days.getMonth() + 1
    }/${dateAfter100Days.getFullYear()}`,
  )
})

module.exports = app
