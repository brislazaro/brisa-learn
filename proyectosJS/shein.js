/*
    La marca de ropa Shein te ha pedido que les hagas una app.

    EL FLUJO DEL PROGRAMA SERA EL SIGUIENTE:

    ----- VERSION BASE ------

        - El programa iniciara mostrando la lista de productos completa en este formato:
            "Producto: vestido - Color: rosa - Precio: 20"
        
        - Le pedira al usuario que tipo de usuario es (mediante prompt), user o admin (debe acceptar mayusculas y minusculas)

        - Si el usuario es tipo USER:
            - Debe preguntar al usuario que producto desea comprar (por ID). Si el usuario introduce un producto no existente, le tienes 
            que volver a preguntar el producto.
            - Ahora debes pedirle la cantidad. Asegurate de que sea un numero.
            - Finalmente, tienes que mostrarle el producto que ha comprado, la cantidad y el precio final:
                "Has comprado 4 unidades del producto anillo con un precio total: 35"
        
        - Si el usuario es de tipo ADMIN:
            - Tiene que agregar 1 producto al array:
                - Debes pedirle cada uno de los campos de un nuevo producto y validarlos como sea necesario.
                - El ID del producto no se puede repetir.
                - Al finalizar mostraras la lista de productos completa con el formato que imprimiste inicialmente.


    ---- VERSION MEJORADA ----

    Ahora dedicale UN BUEN rato a analizar tu codigo y ver en que lo puedes mejorar. Por ej:
    - Nombres de variables y funciones mejorables
    - Bloques repetidos de codigo que podrias meter en una función y reutilizarla (x ejemplo imprimir un producto, validaciones, entre otros...)
    - Procesos complejos de codigo que podrias meter en una función para hacer el codigo mas facil de leer
    - Condiciones en IFs complejas, que podrias meter en una funcion que devuelva true o false con un nombre adequado...
    - Procesos que a lo mejor podrian ser mas simples
    - etc....

            

    ---- VERSION PRO ----

    Ahora, para el flujo de USUARIO, despues de mostrar productos y antes de comprar:
        - Debe preguntar al usuario por que categoria de productos desea filtrar. Le debes indicar al usuario todas las
        categorias de producto que tienes en la tienda (pero no puede ser hardcodeado), debes obtenerlos de tu inventario.
            Ej: Que categoria busca? camisetas, zapatos, sombreros, joyeria ...resto de categorias k tengas.

        - Si el usuario introduce una categoria que no es valida, debes volver a pedirsela.

        - Ahora debe poder comprar un producto, SOLO de los que ve actualmente con el filtro. Si intenta comprar un producto
        que existe en el inventario pero no es de esa categoria, vuelve a pedir un producto de nuevo.

    Para el flujo de ADMIN. Ahora debes preguntar si quiere AGREGAR o BORRAR productos. Si agrega otra opcion, veulve a pedirselo.

        - Para agregar productos, el flujo es el mismo.

        - Si quiere BORRAR:
            - Pide que ID de producto quiere borrar. Si no existe, dile que no existe y pide un nuevo ID.
            - Si existe, borra el producto del inventario e imprime la lista de productos en el formato inicial.
    
*/

const inventory = [
  {
    id: 1,
    name: "vestido",
    color: "rosa",
    price: 20,
    category: "ropa",
  },
  {
    id: 2,
    name: "camiseta",
    color: "azul",
    price: 10,
    category: "ropa",
  },
  {
    id: 3,
    name: "zapatos",
    color: "negro",
    price: 40,
    category: "calzado",
  },
  {
    id: 4,
    name: "sombrero",
    color: "marrón",
    price: 15,
    category: "accesorio",
  },
  {
    id: 5,
    name: "pantalón",
    color: "gris",
    price: 30,
    category: "ropa",
  },
  {
    id: 6,
    name: "reloj",
    color: "plateado",
    price: 50,
    category: "accesorio",
  },
  {
    id: 7,
    name: "sandalias",
    color: "blanco",
    price: 25,
    category: "calzado",
  },
  {
    id: 8,
    name: "chaqueta",
    color: "negro",
    price: 45,
    category: "ropa",
  },
  {
    id: 9,
    name: "collar",
    color: "dorado",
    price: 18,
    category: "accesorio",
  },
  {
    id: 10,
    name: "falda",
    color: "verde",
    price: 22,
    category: "ropa",
  },
  {
    id: 11,
    name: "botas",
    color: "marron",
    price: 55,
    category: "calzado",
  },
  {
    id: 12,
    name: "gafas de sol",
    color: "negro",
    price: 12,
    category: "accesorio",
  },
  {
    id: 13,
    name: "falda",
    color: "rosa",
    price: 28,
    category: "ropa",
  },
  {
    id: 14,
    name: "sneakers",
    color: "azul",
    price: 38,
    category: "calzado",
  },
  {
    id: 15,
    name: "cinturon",
    color: "marron",
    price: 16,
    category: "accesorio",
  },
];
