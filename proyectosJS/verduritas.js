/*
    Te han pedido una plataforma para administrar el inventario de una fruteria.
    (inventarios de las diferentes versiones debajo)

    --- VERSION BASE (MVP) ---
    Para que la tienda pueda empezar a funcionar, vas a desarrollar un MVP (minimum viable product), que será una version
    muy basica de este.
    
    Para esta version, el inventario constara solamente de strings y el programa debe poder añadir o borrar frutas.

    - Debe preguntar al usuario si desea AÑADIR o BORRAR productos (si introduce otra cosa, vuelve a pedirlo)

    - Si quiere AÑADIR:
        - Pide el producto a añadir (asegurandote que no sea null)
        - Si el producto ya existe en el inventario, vuelve a pedirlo, sino debe añadirlo.
        - Imprime la lista de productos completa.
    
    - Si quiere BORRAR:
        - Pide el producto a borrar (asegurandote que no sea null)
        - Si el producto no existe en el inventario, vuelve a pedirlo, sino debe borrarlo.
        - Imprime la lista de productos completa.

    --- VERSION MEJORADA ---
    Ahora, hay que mejorar el programa para que sea mas legible y escalable de cara a futuras versiones.
    Por lo que debemos refactorizar el codigo para que sea mas legible y no repitamos bloques de codigo.

    - Crea una funcion que se encargue de imprimir el inventario completo.
    - Crea una funcion que valide si un producto existe en el inventario o no (devolviendo true o false)

    Despues de esto, haz estas 2 funciones:

    - Crea una funcion que se encargue de añadir un producto al inventario (el proceso entero con pedir producto, validarlo y añadirlo).
    - Crea una funcion que se encargue de borrar un producto del inventario (proceso entero).

    --- VERSION AVANZADA ---
        Ahora una vez agregue o borre un producto, hay que preguntarle al usuario si desea seguir agregando o borrando productos.

        - Si quiere seguir agregando o borrando, se repite el proceso.
        - Si no quiere seguir, se imprime el inventario completo y se acaba el programa.

*/

const basicInventary = ['strawberry', 'mango', 'grape', 'kiwi'];
