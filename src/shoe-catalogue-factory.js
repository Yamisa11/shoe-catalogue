function ShoeCatalogue() {
    const shoes = [
        {
            name: "Scott formal shoe",
            brand: "GINO PAOLI",
            colour: "Grey",
            size: 6,
            price: 799,
            in_stock: 12,
            img_src: "../public/images/scott-formal-shoe.png"
        },
        {
            name: "Nanni 38 loafer",
            brand: "MAZERATA",
            colour: "Tan",
            size: 8,
            price: 559,
            in_stock: 8,
            img_src: "../public/images/nanni-38-loafer.png"
        },
        {
            name: "Miraylle",
            brand: "ALDO",
            colour: "Brown",
            size: 10,
            price: 2199,
            in_stock: 5,
            img_src: "../public/images/miraylle.png"
        },
        {
            name: "Percival",
            brand: "ALDO",
            colour: "Burgundy",
            size: 7,
            price: 1649,
            in_stock: 3,
            img_src: "../public/images/percival.png"
        },
        {
            name: "Nanni 36 - loafer",
            brand: "MAZERATA",
            colour: "Black",
            size: 6,
            price: 664,
            in_stock: 7,
            img_src: "../public/images/nanni-36-loafer.png"
        },
        {
            name: "Magio 72 formal",
            brand: "MAZERATA",
            colour: "Dark Brown",
            size: 8,
            price: 559,
            in_stock: 14,
            img_src: "../public/images/magio-72-formal.png"
        },
        {
            name: "Monetto",
            brand: "ALDO",
            colour: "Grey",
            size: 9,
            price: 1649,
            in_stock: 4,
            img_src: "../public/images/monetto.png"
        },
        {
            name: "Sergio formal shoe",
            brand: "GINO PAOLI",
            colour: "Brown",
            size: 7,
            price: 799,
            in_stock: 9,
            img_src: "../public/images/sergio-formal-shoe.png"
        },
        {
            name: "Killyon",
            brand: "CALL IT SPRING",
            colour: "Brown",
            size: 8,
            price: 899,
            in_stock: 11,
            img_src: "../public/images/killyon.png"
        },
        {
            name: "Albeck",
            brand: "ALDO",
            colour: "Tan",
            size: 6,
            price: 1899,
            in_stock: 5,
            img_src: "../public/images/albeck.png"
        },
        {
            name: "Magio 52 loafer",
            brand: "MAZERATA",
            colour: "Dark Brown",
            size: 7,
            price: 551,
            in_stock: 6,
            img_src: "../public/images/magio-52-loafer.png"
        },
        {
            name: "Wingstroll",
            brand: "ALDO",
            colour: "Black",
            size: 9,
            price: 1699,
            in_stock: 10,
            img_src: "../public/images/wingstroll.png"
        },
        {
            name: "Matey leather",
            brand: "STEVE MADDEN",
            colour: "Black",
            size: 6,
            price: 250,
            in_stock: 4,
            img_src: "../public/images/matey-leather.png"
        },
        {
            name: "Grazie 61 canvas",
            brand: "MAZERATA",
            colour: "Grey",
            size: 8,
            price: 899,
            in_stock: 8,
            img_src: "../public/images/grazie-61-canvas.png"
        },
        {
            name: "Ybiari",
            brand: "CALL IT SPRING",
            colour: "Tan",
            size: 10,
            price: 899,
            in_stock: 12,
            img_src: "../public/images/ybiari.png"
        },
        {
            name: "Oxford leather lace up",
            brand: "POLO",
            colour: "Burgundy",
            size: 8,
            price: 2999,
            in_stock: 5,
            img_src: "../public/images/oxford-leather-lace-up.png"
        },
        {
            name: "Brogue gibson leather lace up",
            brand: "POLO",
            colour: "Brown",
            size: 7,
            price: 2099,
            in_stock: 9,
            img_src: "../public/images/brogue-toe-cap-gibson-leather-lace-up.png"
        },
        {
            name: "Sheldon slip-on",
            brand: "GINO PAOLI",
            colour: "Grey",
            size: 6,
            price: 599,
            in_stock: 7,
            img_src: "../public/images/sheldon-slip-on.png"
        },
        {
            name: "Lindo leather",
            brand: "STEVE MADDEN",
            colour: "Dark Brown",
            size: 9,
            price: 1999,
            in_stock: 3,
            img_src: "../public/images/lindo-leather.png"
        },
        {
            name: "Burnished gibson leather lace up",
            brand: "POLO",
            colour: "Dark Brown",
            size: 9,
            price: 2999,
            in_stock: 10,
            img_src: "../public/images/burnished-toe-cap-gibson-leather-lace-up.png"
        }
    ]

    function addToCart(shoeName) {
        shoes.forEach(item => {

            if (shoeName === item.name) {
                if (item.in_stock > 0) {
                    item.in_stock -= 1;
                }
            }

        })
    }

    function filterShoes(brand, colour, size) {
        const filteredShoes = shoes.filter(item =>
            (brand === "default" || item.brand === brand) &&
            (colour === "default" || item.colour === colour) &&
            (size === "default" || item.size === Number(size)))

        return filteredShoes;
    }

    return {
        shoes,
        addToCart,
        filterShoes
    }
}
