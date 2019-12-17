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

// Shadow copy is fine until you meet those nested objects
// These two serve the same purposes (no worries).
const updated = Object.assign({}, defaults, book);
const updated2 = { ...defaults, ...book };

/* ----- ----- Second example ----- ----- */

const defaultEmployee = {
    name: {
        fname: '',
        lname: '',
    },
    years: 0,
};

// For 'years',                     it's all fine
// For nested keys like 'fname',    it's a shallow copy
const employee1 = Object.assign({}, defaultEmployee);
const employee2 = { ...defaultEmployee };

employee2.name.fname = 'ghweq8';

// Since it just copies the references to the 'name',
// changes made to 'employee1' will not only affect
// the other shallow-copied objects, but also affect
// the original one!
console.log(employee1.name === employee2.name);
console.log(employee1.name === defaultEmployee.name);

// A bit wordy, but deep-copy indeed
const employee3 = Object.assign({}, defaultEmployee, {
    name: Object.assign({}, defaultEmployee.name),
});

employee3.name.fname = 'Test whether I would affect employee4';

// A way better version of deep-copy
const employee4 = {
    ...defaultEmployee,
    name: {
        ...defaultEmployee.name,
    },
};

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
