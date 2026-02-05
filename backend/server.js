const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/cv-data', (req, res) => {
    console.log('cv-data request')
    res.json(req.body);
});

app.listen(3000, () => console.log('Server on port 3000'));