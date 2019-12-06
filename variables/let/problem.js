function getLowestPrice_var(item) {
    const count = item.inventory;
    let price = item.price;

    if (item.salePrice) {
        const saleCount = item.saleInventory;
        if (saleCount > 0) {
            price = item.salePrice;
        }
    }

    if (count) {
        return price;
    }

    return 0;
}

const item1 = {
    inventory: 3,
    price: 3,
    salePrice: 2,
    saleInventory: 0,
};

console.log(getLowestPrice_var(item1));
