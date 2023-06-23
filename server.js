const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.use(express.urlencoded());
app.use(express.json());

app.post('/test', (req, res) => {
  const requestHMAC = req.headers["x-salla-signature"];
  const event = req.body.event
  if (event === 'product.created') {

  }
  console.log(requestHMAC, req.body)
  res.send('recieved post');

  // 
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});