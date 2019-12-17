function addFilters(filters, key, value) {
    filters[key] = value;
}

function deleteFilters(filters, key) {
    delete filters[key];
}

function clearFilters(filters) {
    filters = {};
    return filters;
}

// Chaining are supported :)
let profile = new Map()
    .set('name', 'Josh')
    .set('age', 30)
    .set('gender', 'male');

// Key-value objects can be represented as an array of pairs
let movie = new Map([
    ['title', 'Interstellar'],
    ['rating', 'PG-13'],
    ['director', 'Christopher Nolan'],
]);

// You have to use `get`, there isn't a 'MAP[KEY]' syntax
console.log(profile.get('name'));
console.log(movie.get('director'));

movie.delete('rating');
console.log(movie.get('rating') === undefined);

movie.clear();
console.log(movie.get('title') === undefined);
