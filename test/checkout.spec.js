var expect = require('chai').expect;
var Checkout = require('../checkout');

/*
    Test cases to be implemented

    -   Can create an instance of the Checkout class
    -   Can add an item price
    -   Can add an item
    -   Can calculate the current total
    -   Can add multiple items and get correct total
    -   Can add discount rules
    -   Can apply discount rules to the total
    -   Exception is thrown for item added without price
*/

var checkout;

beforeEach(function (){
    checkout = new Checkout();
});

// Can add an item price
it('Can add an item price', function () {
    checkout.addItemPrice('Apple', 100);
});

// Can add an item
it('Can add an item', function () {
    checkout.addItemPrice('Apple', 100);
    checkout.addItemPrice('Apple');
});

//Can calculate the current total
it('Can calculate the current total', function (){
    checkout.addItemPrice('Apple', 100);
    checkout.addItem('Apple');
    expect(checkout.calculateTotal()).to.equal(100);
});