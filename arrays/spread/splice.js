function rmItem(items, rmable) {
    const index = items.indexOf(rmable);

    // One of the disadvantages of 'splice' is that it
    // mutates the original variable. Do avoid this combination
    // of 'const' and mutation (splice) on array.
    items.splice(index, 1);

    return items;
}

let items = [3, 'haha', true];

rmItem(items, 3);
rmItem(items, true);
rmItem(items, 'haha');

console.log(items.length === 0);
