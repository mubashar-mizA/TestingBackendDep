import express from "express";
const app = express()

const PORT = 1110

app.get('/ping', (req, res) => {
    res.send('Dirrty minds!')
})



app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})
