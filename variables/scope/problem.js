function addClick(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].onClick = function() {
            return i;
        };
    }
    return items;
}

const example = [{}, {}];
const clickSet = addClick(example);

for (i of example) {
    console.log(i.onClick()); // [0]: 2, [1]: 2 still
}
