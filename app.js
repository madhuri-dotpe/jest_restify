const server = require('./server');

const port = 8001;
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
