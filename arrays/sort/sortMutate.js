print = console.log;

const staff = [
    {
        name: 'Joe',
        years: 10,
    },
    {
        name: 'Theo',
        years: 5,
    },
    {
        name: 'Dyan',
        years: 10,
    },
];

function sortByYear(a, b) {
    if (a.years === b.years) {
        return 0;
    }
    return a.years - b.years;
}

function sortByName(a, b) {
    if (a.name === b.name) {
        return 0;
    }
    return a.name > b.name ? 1 : -1;
}

// `.sort / .reverse` will change the original array
// print(staff.sort(sortByName));
// print(staff.reverse(sortByYear));

// but you can do this to avoid modifying it
print([...staff].sort(sortByName));
print([...staff]); // 'years' should be 10, 5, 10
