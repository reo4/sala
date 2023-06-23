const express = require("express");
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 3030;


// your code

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const options = {
//   method: 'POST',
//   url: 'https://accounts.salla.sa/oauth2/token',
//   headers: { 'Content-Type': 'application/json' },
//   data: {
//     client_id: '6b2143a5-148a-4c4e-b6ee-2f2d975640b8',
//     client_secret: 'aa8d7f95bdca4ed81521cfade2f92275',
//     grant_type: 'authorization_code',
//     code: 'CODE_PARAMETER',
//     scope: 'offline_access',
//     redirect_uri: 'REDIRECT_URI'
//   }
// };

// try {
//   const { data } = await axios.request(options);
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }

app.post('/test', async (req, res) => {
  // const requestHMAC = req.headers["x-salla-signature"];
  const event = req.body.event
  if (event === 'product.created') {
    const options = {
      method: 'POST',
      url: 'https://api.salla.dev/admin/v2/orders',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer aa8d7f95bdca4ed81521cfade2f92275'
      },
      data: {
        customer_id: 1438395499,
        shipping_address: {
          country_id: 566146469,
          city_id: 2097610897,
          block: 'Om El 9823489237',
          street_number: 'jmoh El 8912749823764',
          address: 'building 124234324, floor 212423',
          postal_code: '23874982374',
          geocode: '21.4283792, 21.4283792'
        },
        payment: { status: 'paid', method: 'credit_card' },
        products: [{ id: 784769282 }]
      }
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(req.body)
  res.send('recieved post');

  // 
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});