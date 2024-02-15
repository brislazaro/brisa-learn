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



