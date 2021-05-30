# Patrones de diseño: **MVC**

**MVC** Es un patrón de diseño y sus siglas significan **Modelo Vista Controlador** (_**Model View Controller**_ en inglés).

## **Qué es un patrón de diseño y por qué MVC?**

Un patrón de diseño es un esquema de trabajo que permite simplificar el codigo. MVC es uno de los patrones mas utilizado y su objetivo es modularizar el codigo en tres pilares y cada uno de estos tiene su propia responsabilidad. Los pilares son: modelos, vistas y controladores.

### **Las vistas**

La vista es todo aquello con lo que interactua el usuario.

### **Los modelos**

El modelo se encarga del manejo de datos, conectarse a la base de datos, realizar consultas y administrar la logica del negocio.

### **Los controladores**

El controlador es el intermediario entre la vista y el modelo. Se encarga de manejar las peticiones de la vista y procesar los datos que recibe desde el modelo.

## **Y qué pasa con las rutas?**

MVC se planteó en un libro que se llama "Design Patterns" de "GOF" (_Gang Of Four_). En este libro se explican un monton de patrones. Y todos, o al menos la mayoría, están pensados para aplicaciones de escritorio desarrolladas en como C++ o en Java, por ejemplo. Medio por arriba, lo que habla sobre MVC es que se tiene una interfaz y cuando se aprieta un botón, esto dispara una función en el controlador que trabaja sobre el modelo y representa algo, como una nueva ventana o un asset nuevo en la ventana actual.

Nuestras aplicaciones web tienen otros conceptos, como las rutas. Se puede pensar que la vista y el controlador están en el servidor pero despues en React, por ejemplo, la vista esta en el front end, en el navegador. Entonces tenemos que la vista esta en el navegador; el controlador y el modelo en el back end. Y medio que se va dispersando un poco todo.

Entonces, qué pasa con las rutas? Las rutas no son parte de ese modelo. Podemos imaginar que las rutas tienen una responsabilidad a parte, dejándonos una especie de MVCR (Modelo Vista Controlador Rutas).

No hay un policia que controle como implementamos MVC, sino que se utiliza como buena practica. **Lo importante es mantener el concepto de separar las responsabilidades**

<br />
<br />
<br />

# Instalar el proyecto

## Requisitos

-   [Node and NPM](https://nodejs.org/en/)

<br>

## Instalation

1- Clonar el repo: `git clone https://github.com/leandromuzzupappa/clase-mvc-digitalhouse.git` <br>
2- Instalar dependencias: `npm install` <br>
3- Ejecutar la app: `node app.js`

<br>

## Rutas

```
Inicio    -> /
Peliculas -> /movies
Pelicula  -> /movies/:id
```

## Live demo

-   [Peliculas](https://github.com/leandromuzzupappa)
