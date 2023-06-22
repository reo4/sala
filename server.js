const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.get('/test', (req, res) => {
  console.log('recevied')
  res.send('recieved');
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});