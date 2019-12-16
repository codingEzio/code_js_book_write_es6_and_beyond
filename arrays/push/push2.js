function append() {
    const titles = ['Interstellar', 'Shazam'];
    const moreTitles = ['Downtown Abbey', ...movieTitles];

    // Yay!
    evenMoreTitles = [];
    evenMoreTitles.unshift('John Wick'); // insert(0, ELEM) in Python
}

function copy() {
    const games = ['Beyond: Two Souls', 'Detroit: Become Human'];
    const gamesCopied = games.slice();

    // Yay!
    const moreGames = ['The Last of Us Part II', 'Civilization VI'];
    const moreGamesCopied = [...moreGames];
}
