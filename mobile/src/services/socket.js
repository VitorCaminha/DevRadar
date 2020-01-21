import socketio from 'socket.io-client';
import IP from './utils/IP';

const socket = socketio(`http://${IP}:3333`, {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('newDev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};