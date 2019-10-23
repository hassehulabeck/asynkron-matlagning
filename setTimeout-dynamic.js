const delays = [100, 2000, 4000, 2500];

delays.forEach((delay) => {
    setTimeout(() => {
        console.log("Fördröjning: " + delay);
    }, delay)
})