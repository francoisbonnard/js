//https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd

// immediately invoked function expression
const privateCounter = ( ()=> {
    let count=0;
    console.log(`the counter is ${count}`);
    return () => {count +=1; console.log(count)}
})()

// ( ()=> {} ) ()


privateCounter();
privateCounter();
privateCounter();

const credit = ((num) => {
    let credits = num;
    console.log(`New game : initial value ${credits}`);
    return () => {
        credits -=1;
        if (credits >0) console.log(`playing game, ${credits} credits remained`);
        if (credits <=0) console.log('not enough credits');
    }
})(4);

credit();
credit();
