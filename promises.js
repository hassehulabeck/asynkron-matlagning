fetch("https://www.hulabeck.se/html/temp/products.json")
    .then((response) => {
        console.log("Filen är hämtad");
        return response.json();
    })
    .then((jsonRes) => {
        var products = jsonRes;
        console.log("Variabeln products har fått ett värde.")
        return products.products.filter(product => {
            // Välj ut alla produkter med jämnt id.
            console.log(product.id);
            return product.id % 2 == 0;
        });
    })
    .then((evenProducts) => {
        console.log("Nu loopar vi igenom de jämna produkterna.")
        evenProducts.forEach(prod => {
            console.log(prod.id + ": " + prod.name);
        });
    })
    .catch((error) => {
        console.error(error);
    })