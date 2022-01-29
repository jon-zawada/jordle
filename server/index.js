const express = require('express');

const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'app', 'dist');

const app = express();
const PORT = 3000;

app.use(express.static(DIST_DIR));

app.listen(PORT, () => {
  console.log(`Jordle listening on PORT ${PORT}`);
});
