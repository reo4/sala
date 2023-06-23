const express = require("express");
const app = express();
const SallaAPIFactory = require("@salla.sa/passport-strategy");
const PORT = process.env.PORT || 3030;

const SallaAPI = new SallaAPIFactory({
  clientID: "6b2143a5-148a-4c4e-b6ee-2f2d975640b8",
  clientSecret: "aa8d7f95bdca4ed81521cfade2f92275",
  callbackURL: "http://localhost:8081/oauth/callback",
});



// your code

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/test', async (req, res) => {
  const event = req.body.event

  if (event === 'product.created') {
    SallaAPI.requestNewAccessToken(SallaAPI.getRefreshToken())
      .then(({ accessToken, newRefreshToken }) => {
        console.log(accessToken, newRefreshToken)
      })
      .catch((err) => res.send(err));
  }

  console.log(req.headers)

  // 
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});