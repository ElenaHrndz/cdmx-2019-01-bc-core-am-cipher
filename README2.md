# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

##Pre-requisitos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/),
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux como tu Sistema Operativo.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/Laboratoria/cdmx-2019-01-bc-core-am-cipher) de tu cohort, tus _coaches_ te compartirán un _link_ a un repositorio y te
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.

#### Scripts / Archivos

  * `src/index.html`: este es el punto de entrada a la aplicación. Este archivo
    contiene el _markup_ (HTML) y el CSS y JavaScript necesario.
  * `src/cipher.js`: se implementar el objeto cipher, el cual esta
    _exportado_ en el objeto global (`window`). Este objeto (`cipher`) contiene dos métodos:
    - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
      queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
      que queremos cifrar.
    - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
      queremos mover a la izquierda en el alfabeto y `string` el mensaje
      (texto) que queremos descifrar.
  * `src/index.js`: acá se encuentra el llamado a los eventos del DOM, invocar `cipher.encode()`
    o `cipher.decode()` según se necesita.
  * `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y que podras implementar los tests(pruebas ) para `cipher.encode()` y `cipher.decode()`.

####TESTS

 El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm run
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para tener acceso a este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre: qué version de JavaScript/ECMAScript, el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.


## Recursos relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

###Herramientas:
- GitHub y GitHub Pages.
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.


# Encrypt

Programa de cifrado que permite codificar mensajes. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

El programa está pensado para ser una web app, por  lo cual no es necesario hacer ningún tipo de instalación previa, ya que se accede a ella a través de una url.

## Proceso y decisiones de diseño

El diseño está inspirado en é traductor de Google; pretende mantener un diseño minimalista e intuitivo que facilite al usuario su uso.
* La selección de colores está inspirada en la película Matrix, con  la intención de darle un aire enigmático.
* La tipografía del encabezado pretende introducir al usuario en la función de la página, presentando un código de barras en la parte superior.
* La tipografía, en general, busca crear una atmósfera informal, que permita al usuario sentirse identificado.

Siguiendo estas ideas se elaboró una estructura sencilla que presente en una sola ventana el total de la interfaz en la que se debe trabajar.

## Cliente y relación con el producto

El producto está enfocado a un público joven,mayormente adolescentes. La finalidad es permitirle al usuario enviar mensajes que solo puedan ser cifrados por la personas que lo recibe.

## Problemas y necesidades del usuario

Hoy en día es común que los padres revisen los celulares de los hijos, cosa que para los adolescentes puede llegar a ser incómodo. AL mismo tiempo, se dan ocasiones en las que los profesores recogen los celulares o hacen a los alumnos leer los mensajes cuando se dan cuenta de que alguno lo està utilizando.

Debido a este tipo de situaciones que que surge Encrypt, pues pretende dar a los jóvenes la libertad de la que en ocasiones no pueden gozar. Al encriptar los mensajes permite al usuario que solo la persona que él desea entenderlos.

Su principal intención es dar al usuario confidencialidad. Permite que pueda mandar mensajes sin que los padres o maestros se enteren del contenido de los mismos.
