let express = require("express");
let app = express();

app.get('/say', (req, res) => {
  console.log("request");
  let {callback} = req.query;
  res.send(`${callback}('hello!')`);
})
app.listen(3000);
