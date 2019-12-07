// Simply put, variables defined by 'let', 'const' will be
// gc-ed after the closing `}`, whereas for the `var`, it
// will be delete after the current function's `}`, aka "lexical".

// References
// ~ https://stackoverflow.com/q/48295265
// ~ https://stackoverflow.com/a/56374199

/* ----- ----- First example ----- ----- */

var x = 'global';

function print_x() {
    console.log(x);
}

function foo() {
    var x = 'foo';
    print_x();
} // now x is no longer 'foo'

function bar() {
    var x = 'bar';
    print_x();
} // now x is no longer 'bar'

foo(); // now there's only one 'x' (which equals 'global')
bar(); // now there's only one 'x' (which equals 'global')

/* ----- ----- Second example ----- ----- */

var outerFunc = function() {
    if (true) {
        var x = 5;
        let y = 5;
    } // x = 5, y no longer exists

    // x is still accessible within this function
    var innerFunc = function() {
        if (true) {
            console.log(x);
            console.log(typeof y === 'undefined');
        }
    }; // x still exists after this inner function

    innerFunc();
}; // x no longer exists after this closing `}`

outerFunc();
