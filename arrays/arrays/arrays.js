print = console.log;

const lang = ['German', 'French', 'Spanish', 'English'];

function alphabetizeLang(lang) {
    return [...lang].sort();
}

const staff = [
    {
        name: 'Jay',
        position: 'musician',
    },
    {
        name: 'Bolton',
        position: 'butcher',
    },
];

function getMusicians(staff) {
    return staff.filter(member => {
        member.position === 'musician';
    });
}
