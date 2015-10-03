/**
 * Created by timomo on 2015/10/03.
 */
var WebScoketServer = require('ws').Server,
    wss = new WebScoketServer({port: 8181});

wss.on('connection', function(ws) {
    console.log('client.connected');
    ws.on('message', function(message) {
        console.log(message);
    });
});
