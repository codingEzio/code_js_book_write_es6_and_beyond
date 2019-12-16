const cart = [
    {
        name: 'The Foundation Triology',
        price: 19.99,
        discount: false,
    },
    {
        name: 'Godel, Escher, Bach',
        price: 15.99,
        discount: false,
    },
    {
        name: 'Red Mars',
        price: 5.99,
        discount: true,
    },
];

const reward = {
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0,
};

function addFreeGift(cart) {
    /* Gift are given if items you buy is greater than two */

    if (cart.length > 2) {
        cart.push(reward);
        return cart;
    }
    return cart;
}

function summarizeCart(cart) {
    /* An example of seemingly harmless mutation (the `addFreeGift` call) */

    // A few days/months later, you might refactor this whole thing,
    // for example starting with the declaration, once you move it
    // to the top, all the other statments might/would be affected.
    const cartWithReward = addFreeGift(cart);

    // When you call a function (e.g. addFreeGift), "you" should trust
    // that it won't change any supplied values, this kind of function
    // is called "pure" functions. It's what you should strive to achieve.
    const discountable = cart.filter(item => item.discount);

    if (discountable.length > 1) {
        return {
            error: 'Can only have one discount',
        };
    }
    return {
        discounts: discountable.length,
        items: cartWithReward.length,
        cart: cartWithReward,
    };
}

console.log(summarizeCart(cart));
