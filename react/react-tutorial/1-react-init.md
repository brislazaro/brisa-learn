# Empezar proyecto de React

1. Actualizar nodejs: https://nodejs.org/en

2. Abrir una consola, navegar hasta la carpeta deonde quieras crear el proyecto y ejecutar este comando:
   `npm create vite@latest {nombre-del-proyecto} -- --template react`

Nota: Si te pide instalar cosas, le dices que si.

Esto crea tu proyecto de react con toda la estructura de carpetas ya hecha (index.jsx + App.jsx) y la configuracion basica.

Gracias a `vite`, ya se te configuran todas las dependencias (librerias) necesarias.

3. Navegar dentro de la carpeta del proyecto e Instalar dependencias: `npm install`

4. Arrancar el proyecto: `npm run dev` --> en tu `packaje.json` puedes ver todos los comandos en el apartado `"scripts"`
   Esto arranca el proyecto en la url: `http://localhost:5173/` abrela para ver que funciona.

5. Abre el fichero `src/App.jsx`, ahi puedes ver el codigo de la pagina que has visto.
6. Borra todo el codigo de de `App.jsx` y pega este:

```jsx
import React from "react";
import "./App.css";

function App() {
  return <div>This is my app component</div>;
}

export default App;
```

7. Borra tambien todo el codigo de `App.css` y de `index.css`. Recuerda añadir en `index.css` el bloque de css de siempre

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

8. Ya puedes empezar a hacer codigo en React.

# Ejercicio 1:

Copia [esta pagina web](https://www.pixar.com/technology) y pon el codigo dentro de `App.jsx` y los estilos en `App.css`.

De momento no crees ningun componente.

# Ejercicio 2:

Ahora crea una carpeta Header y dentro el componente Header.jsx y el fichero Header.css

Acuerdate que un componente de React tiene esta estructura

```jsx
// 1- Imports
import "./Header.css";

// 2- El componente
function Header() {
  // El componente siempre retorna un bloque de HTML
  return <header>...</header>;
}

// 3- Export
export default Header;
```

Mueve todo el codigo (y estilos) del header dentro de los ficheros.

Pinta el componente del header en `<App />`

El resultado deberia ser similar a:

```jsx
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header />

      <div>... el resto de tu codigo</div>
    </div>
  );
}

export default App;
```

# Ejercicio 3

Haz lo mismo para otras secciones de la web

- La imagen principal con el "Renderman"
- La seccion con texto de debajo
- La seccion con las imagenes
- Footer
