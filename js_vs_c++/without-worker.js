const jobs =Array.from({length:100}, ()=>1e9);

const tick = performance.now()

for (let job of jobs) {
    
    let count =0;
    for (let i=0; i<job; i++) {
        count++;
    }
}

const tock = performance.now()

console.log(`main thread took ${tock - tick} ms`);
// main thread took 38488.67700000107 ms