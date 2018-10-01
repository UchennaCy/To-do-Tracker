
let path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()
app.set('port', PORT)

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))
