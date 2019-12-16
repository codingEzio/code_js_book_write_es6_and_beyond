function rmItem(items, rmable) {
    const index = items.indexOf(rmable);
    return items.slice(0, index).concat(items.slice(index + 1));
}

let items = [3, 'haha', true];

console.log(rmItem(items, 3).length === 2);
console.log(rmItem(items, true).length === 2);
console.log(rmItem(items, 'haha').length === 2);
