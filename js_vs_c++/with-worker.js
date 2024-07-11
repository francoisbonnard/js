const { log } = require("console");
const {Worker} = require ("worker_threads");
const jobs =Array.from({length:100}, ()=>1e9);

function chunkify (array, n) {
    let chunks = [];
    for (let i=n; i >0 ; i--) {
        chunks.push(array.splice(0, Math.ceil(array.length /i)));
        // 100 jobs / 4 cores = 25 jobs per worker
    }
    return chunks; 
}

function run(jobs, concurrentWorkers) {
    const chunks = chunkify (jobs, concurrentWorkers);
    const tick = performance.now();
    let completeWorker =0;

    chunks.forEach((data,i) => {
        const worker=new Worker("./worker.js")
        worker.postMessage(data);
        worker.on("message", () => {
            console.log(`Worker ${i} completed`);
            completeWorker++;
            if (completeWorker == concurrentWorkers) {
                console.log(
                    `${concurrentWorkers} workers took ${performance}`
                );
                process.exit();
            }
        });
    });
}


run(jobs, 2);