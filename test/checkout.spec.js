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
    checkout.addItemPrice('Apple', 100);
    checkout.addItemPrice('Grape', 120);    
});

//Can calculate the current total
it('Can calculate the current total', function (){
    checkout.addItem('Apple');
    expect(checkout.calculateTotal()).to.equal(100);
});

// Can add multiple items and get correct total
it('Can add multiple items and get correct total', function (){
    checkout.addItem('Apple');
    checkout.addItem('Grape');

    expect(checkout.calculateTotal()).to.equal(220);
});


// Can add discount rules
it('Can add discount rules', function (){
    checkout.addDiscount('Apple', 2, 50);
});

// Can apply discount rules to the total
it('Can apply discount rules to the total', function (){
    checkout.addDiscount('Apple', 3, 200);
    checkout.addItem('Apple');
    checkout.addItem('Apple');
    checkout.addItem('Apple');
    checkout.addItem('Apple');
    expect(checkout.calculateTotal()).to.equal(300);
});