const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/src`));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(54321, () => console.log(`Jacz website running on port 4321.`));