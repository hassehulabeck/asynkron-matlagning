var fridge = [];
var desk = [];
var matKasse = [];
let varor = ["Gurka", "Grädde", "fiskpinnar", "morot"]

const lagaMat = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            var ingredienser = [];
            matKasse.forEach((vara) => {
                for (x = 0; x < vara.length; x++) {
                    // Hacka alla ingredienser...
                    ingredienser.push(vara[x]);
                }
                desk.push(vara);
            });
            resolve(ingredienser)
        }, 1500)
    })
}

function handlaMat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            varor.forEach((vara) => {
                matKasse.push(vara)
            })
            if (matKasse.length > 0) {
                resolve("Nu har jag handlat mat")
            } else {
                reject("Inga pengar");
            }

        }, 1000)

    });
}


async function fridgeEmpty() {
    if (fridge.length == 0) {
        const shop = await handlaMat();
        console.log(shop);
        const cook = await lagaMat();
        console.log(cook);
    }
}
// Vi måste först handla mat innan vi kan lagaMat.
fridgeEmpty();