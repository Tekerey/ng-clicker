const express = require('express');
const app = express();

app.use(express.static('./dist/ng-clicker'));

app.get('/*', function(req, res) {
    res.sendFile( 'index.html', { root: 'dist/ng-clicker/' } );
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});