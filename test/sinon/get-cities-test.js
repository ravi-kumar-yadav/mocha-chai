var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');

var getCities = require('../../get-cities');

chai.should();
chai.use(sinonChai);

/*
    - Can call get-cities
    - Verfy callback is called once
    - Verfy correct URL is called
    - Verfy callback returns correct data
*/

describe('GetCities Test', function (){
    it('is true', function() {
        expect(true).to.be.equal(true);
    });

    // Can call get-cities
    it('Get cities', function (){
        getCities();
    });

    it('Calls the callback', function (){
        var spy = sinon.spy();

        getCities(spy);

        spy.should.have.been.calledOnce;
    });
});