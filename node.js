const fs = require('fs')

const message = 'Hello node';

fs.writeFile('helloNode.txt', message, err => {
  console.log('wrote-to-file-node')
});