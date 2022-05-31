const cars = [{
        brand: 'audi',
        year: 2000
    },
    {
        brand: 'fiat',
        year: 2002
    },
    {
        brand: 'toyota',
        year: 2002

    }
];
let failEntries = 0

function filterByYear(item) {
    if (Number.isFinite(item.year) && item.year > 2001) {
        return true
    }
    failEntries++
    return false
}
const carsAfter2001 = cars.filter(filterByYear);

console.log("carsAfter2001", carsAfter2001);