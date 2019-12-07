print = console.log;

function generateLink(image, width) {
    const widthInt = parseInt(width, 10);
    const privider = getProvider();
    return `https://${privider}/${image}/?width${widthInt}`;
}

function yell(name) {
    return `HI, ${name.toUpperCase()}!!!`;
}

print(yell(''));
