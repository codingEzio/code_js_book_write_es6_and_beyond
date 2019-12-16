function rmItem(items, rmable) {
    // no mutations in this array
    const index = items.indexOf(rmable);

    // start                to where-the-item-is  (exclude the item itself)
    // where-the-item-is    to the-end            (exclude the item itself)
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

function formatBook(title, author, price) {
    return `<${title}> by ${author} $${price}`;
}

let items = [3, 'haha', true];

rmItem(items, 3) === ['haha', true];
rmItem(items, true) === [3, 'haha'];

const book = ['Reasons and Persons', 'Derek Parfit', 19.99];

console.log(formatBook(book[0], book[1], book[2]));
console.log(formatBook(...book)); // like `*arg` in Python
