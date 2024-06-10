var express = require("express");
const bodyParser = require('body-parser');
const { exec } = require('child_process');

var app = express();
var URL2 = 'localhost:5000';

app.get("/", function(req, res) {
 console.log("hello user");
});

;

const PORT = 3000;

app.use(bodyParser.json());

app.get('/api/v1/actuations/test', async (req, res) => {
    const { device, endpoint, value } = req.query;

    try {
        const curlCommand = `curl http://${URL2}/api/v1/actuations/test \n
        --header 'Content-Type: application/json' \n
        --header 'Cookie: connect.sid=s%3Ac5RaeDyaqzdsowPYgyiWEBmXqxb-OgmD.MhqsGmsVIY2On1t5dRx%2BW5BAfB0MSlkA5Y993G0a6cQ' \n
        --data '{"device":"${device}","endpoint":"${endpoint}","value":"${value}"}`;

        exec(curlCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }

            res.json({ message: 'cURL command executed successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});