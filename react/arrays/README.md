# Arrays

**Este proyecto usa TypeScript**

En App.tsx, vamos a tener un conjunto de componentes, cada uno para un ejercicio distinto.

## Ex 1

Crea un componente `FruitList` (tiene que ser .tsx en lugar de .jsx)
Dentro de este componente haz lo siguiente:

1. Crea un array `fruits` con los siguientes elementos: "banana", "apple", "orange", "pineapple", "kiwi".
Nota: Acuerdate de tiparlo con TS. El tipo para los array de strings es `string[]`

2. Dentro del HTML del componente haz un <ul> con un <li> por cada fruta del array. Usa el map para hacerlo.
Recuerda que cada elemento del map tiene que tener una prop `key` con un valor unico.
Aqui tienes un ejemplo de como se hace el map:

```jsx
const userNames = ['John', 'Paul', 'George', 'Ringo'];
...

// Dentro del HTML creamos el ul, ya que este es fijo y no cambia
<div className='users-container'>
  { // <-- Abrimos { para poder escribir JS
    userNames.map((user) => { // Iteramos los usuarios y creamos un li por cada uno
      return ( // <-- Lo que hay en el return es lo que va a acabar en el HTML
        <p key={user} className="users-item">{user}</p>
      ) 
    })
  } 
</div>

// IMPORTANTE: Tu lista tiene que ser un <ul> con <li>. Esto es un ejemplo para que veas como se hace el map
```

Una vez hecho esto, en el DOM (o el HTML) vas a tener este resultado:
  
```html
<div classList='users-container'>
  <p className="users-item">John</p>
  <p className="users-item">Paul</p>
  <p className="users-item">George</p>
  <p className="users-item">Ringo</p>
</div>
```

3. Haz unos estilos decentes para que cada elemento tenga una caja con un background distinto, un padding, y esten separados entre ellos.

## Ex 2

Crea un componente `FruitListWithAmount`

Este componente va a ser igual que el anterior, pero cada fruta va a tener **un número** al lado que indica la cantidad de esa fruta que hay.

Piensa como debe ser ahora el array de frutas para poder hacer esto.

## Ex 3
 El que tienes de los colores

## Ex 4

Crea un componente `FruitListWithDelete`

Este compo va a ser igual que el anterior, pero:
 - Tendra un boton arriba a la derecha que al hacer click, elimine la ultima fruta del array.
 - Al darle al boton no solo se tiene que borrar del array, tambien se tiene que ver representado en el DOM.
 - Pregunta: Con una variable normal si le actualizas el valor, se acutualiza el DOM? Que tipo de variable necesitas para que al actualizarse se actualice el DOM automaticamente?

## EX 5
Crea un componente `FruitListWithAdd`

Este compo va a ser igual que el anterior, pero:
 - Encima de la lista, añade un boton Crear usando el componente `Button` de Material UI, link abajo, usa el variant contained para que se vea como un boton principal.
 - Una vez puesto el boton, juega con su prop `variant` con los valores "contained", "outlined" y "text" para ver como cambia el estilo del boton.
 - Al dar click al boton, se mostrara un modal usando el `Dialog` de Material UI.
 - El Dialog, tiene que tener el titulo "Añadir fruta", un contenido que diga Hola Mundo, y un boton de "Cerrar" que cierre el modal. 

**Button**: https://mui.com/material-ui/react-button/

**Dialog**: https://mui.com/material-ui/react-dialog/#alerts (usa el Alert dialog)
Fiijate que tiene los compos <DialogTitle/>, <DialogContent/> y <DialogActions/> para separar sus secciones.


## Ex 6

Haz esto sobre el mismo componente anterior pero haciendo lo siguiente:
 - En el modal habra un formulario con un input para el nombre, uno para la cantidad y un select para el color.
 - Usa el input `TextField` de Material UI para los inputs y el `Select` para el select, links abajo.
 - Tienes que poner un boton de `Cancelar` y otro de `Crear` en el modal, usa el `Button` de MUi. 
 - Usa el variant="outlined" para el boton de cancelar y el variant="contained" para el boton de crear.
 - El Boton de Cancelar, tiene que reiniciar el formulario y cerrar el modal.
 - El boton de Crear tiene que añadir la fruta al array, reiniciar el formulario y cerrar el modal. (Fijate que al usar una variable de estado, se actualizara solo el DOM)

NOTA: Fijate que gracias a React, nos olvidamos de manipular el DOM, solo hacemos el HTML inicialmente, y nos concentramos en la parte importante que es la logica de JS.


**Input**: https://mui.com/material-ui/react-text-field/
```jsx
  <TextField      
    id="field-id"
    label="Name" // <-- Esto pone el label automaticamente con unos estilos bonitos.
    variant="outlined" // <-- Esto es para que tenga un borde, puedes cambiarlo a "filled" o "standard" para ver como cambia el estilo
    value={elValorQueSea}
    onChange={
      (e) => {
        // Igual que un input normal, el valor del input esta en e.target.value
      }
    }
  />

    // Aqui uno de tipo numero
   <TextField      
    id="field-id-number"
    type="number" // <-- Esto es para que el input solo acepte numeros
    label="Name" 
    variant="outlined" 
    value={elValorQueSea}
    onChange={(e) => {}}
  />
```


**Select**: https://mui.com/material-ui/react-select/
Para que se vea con los mismos estilos que el Input tienes que usar el `FormControl` e `InputLabel` tambien

```jsx
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label" // Tiene que coincidir con el id del label de arriba
    id="demo-simple-select"
    value={elValorQueSea}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
```
