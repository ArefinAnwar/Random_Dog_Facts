const app = require('express')();
const port = 8080;
var cors = require('cors')
const d = require('./data.json');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
app.use(cors());
app.listen(process.env.PORT || port, () => { console.log(d.length) });

app.get('/dog-facts', (req, res) => {
    res.status(200).send({
        "fact": d[getRandomInt(d.length)],
    });
});