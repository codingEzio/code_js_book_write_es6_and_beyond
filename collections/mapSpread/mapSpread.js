// Related to 'REPO/collections/mapSpread/object.js'

const dogFiltersInMap = new Map()
    .set('color', 'White & Tan')
    .set('breed', 'Jack Russell Terrier');

function sortByKey(a, b) {
    if (a.name === b.name) {
        return 0;
    }
    return a.name > b.name ? 1 : -1;
}

// Detailed steps:
// 1) conv map to an array                  [...MAP]
// 2) sort the array                        .sort()
// 3) conv each pair to a string (k:v)      .map()
// 4) join the array items creating a str   .join()
function getSortedAppliedFilters(filters) {
    const applied = [...filters]
        .sort()
        .map(([key, value]) => {
            return `${key}:${value}`;
        })
        .join(', ');

    return `Your filters are: ${applied}`;
}

console.log(getSortedAppliedFilters(dogFiltersInMap));
