var tobinary = require('to-binary');

function tcpipPortToBin(port) {
	return tobinary(port);
}

module.exports = tcpipPortToBin;
