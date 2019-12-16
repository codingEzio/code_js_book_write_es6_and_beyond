print = console.log;

function use_const_instead_of_var() {
    /* 
    Using const make sure that
    - don't need to worry whether it would change (for non-collection)
    - you know exactly what it'd be since it cannot be re-assigned
    */
    const taxRate = 0.1;
    const total = 100 + 100 * taxRate;
    // ... tons of code ...
    return `something`;
}

function certainity_and_uncertainity() {
    // these two are definitely not going to change (for non-collection)
    const taxRate = 0.1;
    const shipping = 5.0;
    // pragmatically    you might change the variable later
    // stylishly        you indicate this would|might change (uncertain)
    let total = 100 + 100 * taxRate + shipping;
}

function isNumber(value) {
    return typeof value === 'number';
}

function avoid_mutations_with_const() {
    /*
    A value assigned to 'const' cannot be re-assigned,
    but the value can be changed, like array, objs, other collections.
    */
    const an_array = [1, 2, 3];

    // with mutations
    const val_mut = [];
    for (let i = 0; i <= 2; i++) {
        if (isNumber(an_array[i])) {
            val_mut.push(an_array[i]);
        }
    }

    // without mutations
    const val_immut = an_array.filter(item => typeof item === 'number');
}
