const defaults = {
    author: '',
    title: '',
    year: 2019,
    rating: null,
};

const book = {
    author: 'Phillip Goff',
    title: 'Consciousness and Fundamental Reality',
};

function addBookDefaults(book, defaults) {
    const fields = Object.keys(defaults);
    const updated = {};

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        updated[field] = book[field] || defaults[field];
    }

    return updated;
}

// no mutation but a little bit wordy
console.log(addBookDefaults(book, defaults));

// add a '{}' if you don't wanna mutate the original object
// -> but do note that what 'assign' does is a "shallow" copy
console.log(Object.assign(defaults, book));
console.log(Object.assign({}, defaults, { year: 2020 }));
