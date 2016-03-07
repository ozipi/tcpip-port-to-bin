var should = require('chai').should(),
	tcpipPortToBin = require('../src/tcpip-port-to-bin.js');

describe('#tcp ip port', function() {
	it('converts 22 into 00010110', function() {
		tcpipPortToBin('22').should.equal('00010110');
	});
});
