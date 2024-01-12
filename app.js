const express = require('express')
const addDays = require('date-fns/addDays')
const app = express()

app.get('/', (request, response) => {
  const dateTime = new Date()

  const dateAfter100Days = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100,
  )

  response.send(
    `${dateAfter100Days.getDate()}/${
      dateAfter100Days.getMonth() + 1
    }/${dateAfter100Days.getFullYear()}`,
  )
})

module.exports = app
