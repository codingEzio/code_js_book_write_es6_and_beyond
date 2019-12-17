print = console.log;

function addFilters(filters, key, value) {
    filters.set(key, value);
}

function deleteFilters(filters, key) {
    filters.delete(key);
}

function clearFilters(filters) {
    filters.clear();
}

// It's much easier to work with 'Map' than objects, since the CRUD operations
// are always done on a Map instance. For objects, the 'clear' mechanism does
// requires you create a blank `{}`, there's no need for this in Map.
const filters = new Map();

// ----- ----- Example two ----- -----

// Although you can't do `errCode.100`, you can do `errCode[100]`.
// But if you're using the array notation, all the interger keys
// would be converted to strings, either for the creation or accessing.
const errorsCodesInObject = {
    301: 'Moved Permanently',
    304: 'Not Modified',
    401: 'Unauthorized',
};

const errorCodesInMap = new Map([
    [301, 'Moved Permanently'],
    [304, 'Not Modified'],
    [401, 'Unauthorized'],
]);

print(Object.keys(errorsCodesInObject)); // all converted to strings
print(errorCodesInMap.keys()); // types were retained
