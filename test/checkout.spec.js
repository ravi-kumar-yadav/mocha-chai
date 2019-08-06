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

it('Can instantiate checkout', function () {
    var checkout = new Checkout();
});
