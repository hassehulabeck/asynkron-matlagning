var kylskåp = [];

function lagaMat() {
    // Laga mat.
    console.log("Nu är maten färdig");
}

function handlaMat(varor, callback) {
    // Gå till affären och köp [varor].
    kylskåp.push(varor);
    callback();
}

let varor = ["potatis", "tomat", "linser"]
handlaMat(varor, lagaMat);

// Vi måste först handla mat innan vi kan lagaMat.