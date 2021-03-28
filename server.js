const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser());
app.use(cors());

app.use(express.static('build'));

app.post('/search', async function (req, res) {

    const { fullTime, keyword, location } = req.body;

    let query = [];
    if (fullTime) { query.push("full_time=true"); }
    if (location) { query.push(`location=${location.toLowerCase()}`); }
    if (keyword) { query.push(`description=${keyword}`); }

    let baseUrl = "https://jobs.github.com/positions.json";
    if (query.length > 0) {
        query = query.join("&");
        baseUrl += `?${query}`;
    }
    console.log(baseUrl);

    try {

        const resp = await axios.get(baseUrl, {}, {
        });

        res.json({
            success: true,
            data: resp.data
        });

    } catch {

        res.json({
            success: true,
            data: []
        });
    }
});

app.get("/job/:id", async function (req, res) {

    const id = req.params.id;

    const url = `https://jobs.github.com/positions/${id}.json`;

    try {

        const resp = await axios.get(url, {}, {
        });

        res.json({
            success: true,
            data: resp.data
        });

    } catch {

        res.json({
            success: true,
            data: null
        });
    }

})

app.listen(80, () => {
    console.log("Server is listening on port", 80);
})
