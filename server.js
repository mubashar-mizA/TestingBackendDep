import express from 'express'

const app = express()
const port = 3300
app.get( '/ping', (req, res)=>{
    res.send('Pong')
} )
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})