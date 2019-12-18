function applyDefaults(map, defaults) {
    /* Apply OUR filters to the DEFAULT one */
    for (const [key, value] of defaults) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }

    return map;
}

const defaults = new Map()
    .set('color', 'Brown')
    .set('breed', 'Pug')
    .set('origin', 'Japan');

const myFilters = new Map().set('color', 'Black');

// The mutated `myFilters` is the side-effect we're talking about.
// When we applied our filter to the defaults, the filters we're
// passing are also being mutated. ONLY the 'defaults' should be modified.

console.log(defaults);
console.log(myFilters);
