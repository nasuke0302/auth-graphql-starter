const app = require('./server/server');
const path = require('path');

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})
app.listen(4000, () => {
    console.log('Listening');
});
