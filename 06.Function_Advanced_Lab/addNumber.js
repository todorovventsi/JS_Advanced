function solution(n){
    number = n

    return function add(num){
        return number + num
    }
}


let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

