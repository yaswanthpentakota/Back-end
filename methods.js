import express from 'express';
const app = express();

app.get('/users',(req, res) => {
    res.send("Hello from backend.");
    console.log(req.method);
});

app.listen(8003, () => {
    console.log('Server running at port 8003');
});