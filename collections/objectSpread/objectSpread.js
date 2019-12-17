const book = {
    author: 'Phillip Goff',
    title: 'Consciousness and Fundamental Reality',
};

// Either adding new k/v
let update = { ...book, year: 2017 };

// Or updating existing k/v
update = { ...book, year: 2018 };
