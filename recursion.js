const countToTen = (num=1) => {
    while (num <=10) {
        console.log(num);
        num++;
    }
}

const recurToTen = (num=1) => {
    if (num >10) return;
    console.log(num);
    num ++;
    recurToTen(num);
}

// countToTen();
//recurToTen();


//without recursion
const fibonacci = (num, array = [0,1]) => {
    while (num>2) {
        console.log(num);
        const [nextToLast,last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}
console.log(fibonacci(12));

//with recursion

const fib = ( num, array = [0,1] ) => {
    if (num <=2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib (num -1, [...array, nextToLast + last])
}

console.log(fib(4));

const fibos = (pos) => {
    // console.log(pos);
    if (pos < 2) return pos;
    return fibos (pos-1) + fibos (pos-2);
}
console.log(fibos(4));

const fibosoneline = (pos) => pos <2 ? pos : fibosoneline (pos-1) + fibosoneline (pos -2)

console.log(fibosoneline(8));

//real-life examples
// continuation token from an API
