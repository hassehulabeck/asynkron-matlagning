export default function lagaMat(fridge, desk, callback) {
    // Laga mat.
    fridge.forEach((vara) => {
        desk.push(vara);
    });
    setTimeout(() => {
        console.log("Nu är maten färdig");
        callback();
    }, 1200);
}