var express = require('express');
var socket = require('socket.io');

var app = express();


server = app.listen(5010, function () {
    console.log('server is running on port 5010')
});
// let userList = {};
// let chatGroupList = {};
let onlineUser = {}

io = socket(server);

io.on('connection', (socket) => {
    console.log("socket.id", socket.id);


    /**
     * 
     * As new user  enter his name and click on join button then joined  
     */
    socket.on('ADD_USER', function (data) {
        // console.log(data);
        socket.emit('ONLINE_USER', onlineUser) //  Sending online user

        if (!onlineUser[socket.id]) {           // adding user in online list
            socket.nickname = data.userName
            onlineUser[socket.id] = data.userName
        }
    })

    /**
     * Sending friend request to online user
     */
    socket.on('SEND_REQUEST', function (data) {
        data.userId = socket.id
        // console.log("data", data);
        let sendRequestData = {
            friendId: data.userId,
            friendName: data.userName
        }
        io.to(data.friendId).emit('FRIEND_REQUEST', sendRequestData);
        // io.emit('REQUEST_ACCEPT', data);
    })

    /**
     * by default any  request come to usr we are accepting
     */
    socket.on('ACCEPT_REQUEST', function (data) {
        data.userId = socket.id
        let acceptedRequestData = {
            friendId: data.userId,
            friendName: data.userName
        }
        io.to(data.friendId).emit('ACCEPTED_REQUEST', acceptedRequestData);
    })

    /**
     * Chat functionlity 
     */
    socket.on('SEND_MESSAGE', function (data) {
        data.userId = socket.id
        console.log("data", data);
        const me = "ME"
        let chatData = {
            userId: data.userId,
            userName: data.userName,
            message: data.message
        }
        io.to(data.friendId).emit('MESSAGE', chatData);
        chatData = {
            userId: data.friendId,
            userName: me,
            message: data.message
        }
        io.to(data.userId).emit('MESSAGE', chatData);
    })

    /**
     * If any user leave chat then removing from online user
     */
    socket.on('disconnect', () => {
        delete onlineUser[socket.id]
        io.emit('quit', socket.id)
    })
});
