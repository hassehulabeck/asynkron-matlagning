var fridge = [];
var desk = [];
var matKasse = [];
let varor = ["Gurka", "Grädde", "fiskpinnar", "morot"]

console.log(new Date().getTime());

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
                // matKasse.push(vara)
            })
            if (matKasse.length > 0) {
                resolve("Nu har jag handlat mat")
            } else {
                reject("Inga pengar");
            }

        }, 1000)

    });
}

function diska() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Diskat");
        }, 700)
    })
}

// Async före funktionen, antingen som statement eller expression (var x = async function)
async function fridgeEmpty() {
    if (fridge.length == 0) {
        console.log(new Date().getTime());
        // Await framför den funktion, eller det kodblock du vill köra asynkront. Variabeln tar hand om det som returneras.
        const shop = await handlaMat();
        console.log(shop);
        const cook = await lagaMat();
        console.log(cook);
        const diskning = await diska();
        console.log(diskning);
        console.log(new Date().getTime());
    }
}

console.log(new Date().getTime());

// Vi måste först handla mat innan vi kan lagaMat.
fridgeEmpty().catch(err => console.error(err));

console.log(new Date().getTime());