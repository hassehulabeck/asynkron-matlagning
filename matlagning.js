var fridge = [];
var desk = [];

function lagaMat() {
    // Laga mat.
    fridge.forEach((vara) => {
        desk.push(vara);
    });
    setTimeout(() => {
        console.log("Nu är maten färdig");
    }, 1200);
}

function handlaMat(varor, callback) {
    // Gå till affären och köp [varor]. Det tar en stund.
    setTimeout(function () {
        fridge.push(varor);
    }, 2000);
    callback();
}

let varor = ["potatis", "tomat", "linser"]
handlaMat(varor, lagaMat);

// Vi måste först handla mat innan vi kan lagaMat.