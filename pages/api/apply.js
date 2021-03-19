const axios = require('axios');
export default function handler(req, res) {
    axios.post("process.env.WEBHOOK_URl", req.body).then(resp => {
        res.status(200).send(process.env.WEBHOOK_URl)
    }).catch(err => {
        res.status(500).send("error")
    })
}