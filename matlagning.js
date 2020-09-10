var fridge = [];
var desk = [];
var matKasse = [];
let varor = ["potatis", "tomat", "linser"];

const lagaMat = () => {
    var ingredienser = [];
    matKasse.forEach((vara) => {
        for (x = 0; x < vara.length; x++) {
            // Hacka alla ingredienser...
            ingredienser.push(vara[x]);
        }
        desk.push(vara);
    });

    for (i = 0; i < 500000000; i++) {
        // Nothing, men det tar några sekunder. Settimeout funkar dåligt med promises...
    }
    return ingredienser;
};
var handlaMat = new Promise((resolve, reject) => {
    // varor.forEach((vara) => {
    //     matKasse.push(vara)
    // })
    if (matKasse.length > 0) {
        console.log("Nu har jag handlat mat");
        resolve(matKasse);
    } else {
        let err = new Error("Inga pengar");
        reject(err);
    }
});

const fridgeEmpty = function () {
    if (fridge.length == 0) {
        handlaMat
            .then(lagaMat)
            .then((fulfilled) => console.log(fulfilled))
            .catch((error) => console.error(error.message));
    }
};
// Vi måste först handla mat innan vi kan lagaMat.
fridgeEmpty();
