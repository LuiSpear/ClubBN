# TypeScript

## ¿Qué es?
TypeScript es un superset de JavaScript que agrega tipado estático opcional. Esto permite detectar errores en tiempo de desarrollo y mejorar la calidad del código.

## ¿Cómo instalarlo?
Para instalar TypeScript de forma global en tu sistema, usa:
```sh
npm install -g typescript
```
## Reglas y configutacion
Para configurar TypeScript en un proyecto, ejecuta:
```sh
tsc --init
```
## ¿Cómo se usa?
Crea un archivo index.ts con el siguiente código:
```sh
function saludo(nombre: string): string {
    return `Hola, ${nombre}!`;
}

console.log(saludo("Luis"));
```
## Compila el archivo con:
```sh
tsc index.ts
```
## Esto generará un archivo index.js, que puedes ejecutar con Node.js:
```sh
node index.js
```
