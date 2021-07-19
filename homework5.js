//Number 1

let arr = [{ name: 'John', surname: 'Smith', id: 1 },
    { name: 'Mary', surname: 'key', id: 2 }
];

function getFullName(array) {
    return array.map(function(item) {
        let result = {};
        result.fullname = (item.name + ' ' + item.surname);
        result.id = item.id;
        return result;
    })
}
console.log(getFullName(arr));