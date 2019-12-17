// Objects are a path to find information when u know where it'll be.
// Config files are often objects cuz they're setup before runtime &
// are simple key-value stores of static information.
export const config = {
    endpoint: 'http://pragprog.com',
    key: 'this-is-a-secret-key',
};

// Defining objects programmatically

function getBill(item) {
    return {
        name: item.name,
        due: twoWeeksFromNow(),
        total: calculateTotal(item.price),
    };
}

const bill = getBill({ name: 'Room cleaning', price: 30 });

function displayBill(bill) {
    return `Your total ${bill.total} for ${bill.name} is due on ${bill.due}`;
}
