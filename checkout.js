module.exports = class Checkout {
    constructor() {
        this.prices = new Object();
        this.discount = new Object();
        this.items = new Object();
    }

    addItemPrice(item, price) {
        this.prices[item] = price;
    }

    addItem(item) {
        if (!(item in this.prices)) {
            throw('No price defined for item ' + item);
        }

        if (item in this.items) {
            this.items[item]++;
        } else {
            this.items[item] = 1;
        }
    }

    calculateTotal() {
        var total = 0;

        for (var item in this.items) {
            var discount = this.discount[item];

            if (discount) {
                var batch_count = Math.floor(this.items[item] / discount.count);
                total += batch_count * this.discount[item].discounted_price;

                var remainder_count = this.items[item] % discount.count;
                total += remainder_count * this.prices[item];
            } else {
                total += this.prices[item];
            }
        }

        return total;
    }

    addDiscount(item, count, discounted_price) {
        this.discount[item] = {
            count: count,
            discounted_price: discounted_price
        }
    }
};