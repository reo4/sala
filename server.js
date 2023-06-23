const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.use(express.urlencoded());
app.use(express.json());

app.get('/test', (req, res) => {
  console.log('recevied get')
  res.send('recieved get');
})

app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('recieved post');

  // 
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});