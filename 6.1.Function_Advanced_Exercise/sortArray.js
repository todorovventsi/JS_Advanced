function sortArray(numbers, order){
    return order === 'asc' ? numbers.sort((a,b) => a -b) : numbers.sort((a,b) => b-a);
}

output = sortArray([14, 7, 17, 6, 8], 'desc')
console.log(output)
console.log('hello')
