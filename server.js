const express = require('express');
const app = express();

const PORT =process.env.PORT || '8080';

app.use(express.static('public'));

app.listen(PORT, (err) => {
  if (err) { return console.log(err); }
  console.log(`Server up on port: ${PORT}`);
});