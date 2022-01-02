const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/data", function (req, res) {
    obj = {
        imie: "Klaudia",
        nazwisko: "Marszałek",
        klasa: "3i1",
        grupa: 1
    }
    res.send(obj)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

