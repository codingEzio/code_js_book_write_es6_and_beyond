function rmItem(items, rmable) {
    const updated = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== rmable) {
            updated.push(items[i]);
        }
    }
    return updated;
}

let items = [3, 'haha', true];

console.log(rmItem(items, 3).length === 2);
console.log(rmItem(items, true).length === 2);
console.log(rmItem(items, 'haha').length === 2);
