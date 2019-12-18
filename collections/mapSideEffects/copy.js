function applyDefaults(map, defaults) {
    const copy = new Map([...map]);

    for (const [key, value] of defaults) {
        if (!copy.has(key)) {
            copy.set(key, value);
        }
    }

    return copy;
}

function applyDefaultsWithoutCompAnymore(map, defaults) {
    return new Map([...defaults, ...map]);
}

const defaults = new Map()
    .set('color', 'Brown')
    .set('breed', 'Pug')
    .set('origin', 'Japan');

const myFilters = new Map().set('color', 'Black');

// Mutation doesn't happen outside these functions :P
console.log(applyDefaults(myFilters, defaults));
console.log(applyDefaultsWithoutCompAnymore(myFilters, defaults));

// Will not be affected by 'applyDefaultsXxx'
console.log(defaults);
console.log(myFilters);

/* ----- ----- Second example ----- ----- */

const ftr1 = new Map().set('color', 'black').set('color', 'brown');

const ftrr1 = new Map().set('color', 'black');
const ftrr2 = new Map().set('color', 'brown');
let fttrCombined = new Map([...ftrr1, ...ftrr2]);

// The latter attr updates the previous value (=> 'brown')
console.log(ftr1.get('color') === fttrCombined.get('color'));
