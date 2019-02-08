# Ejemplo de Jest con Babel

## Instalación

1. Instalamos Jest

    `yarn add --dev jest`

## Configuración

1. Configuramos package.json
   ```
    "scripts": {
        "test": "jest"
    },
    ```
2. Configuramos Jest
    `yarn test --init`

## Prueba

La prueba es sencilla tendríamos, tenemos que testear todo el fichero `index.js`. Este fichero contiene una clase con una función que lo único que hace es obtener los ficheros o carpetas sobre el path pasado como argumento.

A ser posible tendriamos que llegar al 100% de coverage.

## Para el 10.

Hacer refactor del archivo index.js una vez acabado los test.