// Related to 'REPO/collections/mapSpread/mapSpread.js'

print = console.log;

/* Example of object - iterating over key-value data */

function getAppliedFilters(filters) {
    const filtersKeys = Object.keys(filters);
    const applied = [];

    // filtersKeys.sort();

    for (const key of filtersKeys) {
        applied.push(`${key}:${filters[key]}`);
    }
    return `Your filters are: ${applied.join(', ')}`;
}

const dogFiltersInObject = {
    color: 'White & Tan',
    breed: 'Jack Russell Terrier',
};

/* Example of Map - iterating over key-value data */

const dogFiltersInMap = new Map()
    .set('color', 'White & Tan')
    .set('breed', 'Jack Russell Terrier');

function checkFilters(filters) {
    // [ 'color', 'White & Tan' ]
    // [ 'breed', 'Jack Russell Terrier' ]
    for (const entry of filters) {
        console.log(entry);
    }
}

// Do note that a Map is NOT ordered. There's a simple ordered
// version in file 'REPO/collections/mapSpread/mapSpread.js'
function getAppliedFiltersInMap(filters) {
    const applied = [];
    for (const [key, value] of filters) {
        applied.push(`${key}:${value}`);
    }
    return `Your filters are: ${applied.join(', ')}`;
}

// It's either paired arraies OR an iterator
checkFilters(dogFiltersInMap);
print(dogFiltersInMap.entries());

// The 'Map' version is much simpler. A Map object iterates its
// elements in insertion order and you can easily iterating it
// without using sth like 'Xxx.keys()` (btw the Map is NOT ordered).
print(getAppliedFilters(dogFiltersInObject));
print(getAppliedFiltersInMap(dogFiltersInMap));

print({ ...dogFiltersInObject });
print(...dogFiltersInMap); // kinda like `for of` deconstructing
print([...dogFiltersInMap]); // kinda like the format while defining it
