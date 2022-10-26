const Products = [
    {
        id:1,
        name: "Tablero 19x19",
        description: "Tablero 19x19 líneas. Hecho en melamina",
        price: 2500,
        category: "tableros",
        stock: 10,
        img: "/img/kiai-tablero-19.png"
    },
    {
        id:2,
        name: "Tablero 13x13",
        description: "Tablero 13x13 líneas. Hecho en melamina",
        price: 2000,
        category: "tableros",
        stock: 10,
        img: '/img/kiai-tablero-13.png'
    },
    {
        id:3,
        name: "Tablero 9x9",
        description: "Tablero 9x9 líneas. Hecho en melamina",
        price: 1500,
        category: "tableros",
        stock: 10,
        img: "/img/kiai-tablero-9.png"
    },
    {
        id:4,
        name: "Tablero piso",
        description: "Tablero 19x19 líneas con patas para piso. Hecho en madera de pino",
        price: 20000,
        category: "tableros",
        stock: 10,
        img: "/img/kiai-tablero-goban.png"
    },
    {
        id:5,
        name: "Goke",
        description: "Bowls de madera para juego de 361 piedras",
        price: 5000,
        category: "gokes",
        stock: 10,
        img: "/img/kiai-goke.png"
    },
    {
        id:6,
        name: "Slate",
        description: "Juego de piedras slate and shell. Contiene 181 piedras negras y 181 piedras blancas",
        price: 20000,
        category: "piedras",
        stock: 10,
        img: "/img/kiai-piedras-3.png"
    },
    {
        id:7,
        name: "Yunzi",
        description: "Juego de piedras Yunzi. Contiene 181 piedras negras y 181 piedras blancas",
        price: 15000,
        category: "piedras",
        stock: 10,
        img: "/img/kiai-piedras.png"
    },
    {
        id:8,
        name: "Vidrio",
        description: "Juego de piedras de vidrio. Contiene 181 piedras negras y 181 piedras blancas",
        price: 10000,
        category: "piedras",
        stock: 10,
        img: "/img/kiai-piedras-1.png"
    },
]

export const data = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
      if (condition) {
        resolve(Products);
      } else {
        reject('Error');
      }
    }, 1000);
  });

  export const getProductById = (id) =>{
    return Products[id];
  }