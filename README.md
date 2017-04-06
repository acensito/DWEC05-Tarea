#DWEC - Tarea 05

Enunciado:
==========

En MercaMona quieren potencia los productos ecológicos. Para ello han decidido
tomar medidas no nocivas contra el medio ambiente. Darle con un martillo de goma
a los topos cada vez que salgan.

Queremos hacer una aplicación en JavaScript para jugar a **Whack-A-Mole**. Será
una versión modificada para la tarea.

Para ello tendrás que dibujar un tablero 3x2, similar al del siguiente vídeo,
con tres agujeros de topo tanto en la primera como en la segunda fíla colocados
a la misma altura. Cada uno de las casillas será una capa div que se generará
desde JavaScript.

Veamos como funciona en un vídeo de este popular juego (¿entre los granjeros
...?.)

Un Pseudoalgoritmo del juego (por si no sabéis como hacerlo):

1.  Se pulsa en el botón de jugar.

2.  Bucle del juego. Debe realizarse un número limitado de veces. 15 veces. 

    1.  Aparece un topo pintando en la casilla. Puede haber un tiempo de espera
        antes de aparecer.

    2.  Hay un breve periodo de tiempo para darle. Sino le das no puntúa.  Si le
        le da al topo el topo desaparece. Y se suman los puntos.  El tiempo que
        aparece el topo debe ser como mínimo 0,5 segundos y como máximo 3
        segundos.

    3.  Desaparece el topo.  Puede haber un tiempo de espera antes de
        desaparecer.

Os va a hacer falta una secuencia de temporización para ello se puede utilizar
setInterval() o settimeout(). Podéis ver más información de como se usa en la
siguiente web:

-   [W3Schools ](http://www.w3schools.com/js/js_timing.asp)

-   [Tutorial en
    español](http://www.aprenderaprogramar.es/index.php?option=com_content&view=article&id=847:ejemplo-reloj-javascript-settimeout-cleartimeout-setinterval-animacion-requestanimationframe-cu01164e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206).

En el juego que vamos a implementar vamos a tener las siguientes restricciones. 

-   El tablero, el marcador,  demás elementos gráficos se crearán utilizando
    JavaScript y métodos del DOM.  O sea capas divs, y botones. Existirá al
    menos el botón start para iniciará el juego. Si va a realizar la tarea extra
    (con los que puedes sacar hasta un 13) debes incorporar otros botones. Para
    saber cuales vaya a criterios de calificación y puntuación. 

-   Se controlarán los eventos a través de clicks del ratón. Otras formas de
    control contarán nota extra. 

-   Se hará para un jugador.  Multijugador se hará si quieres sacar más nota,
    pero recuerda que en criterios de corrección y evaluación contiene más
    información. No quiero liaros a la mayoría que vais a realizar la tarea
    normal.

¿Cómo implementar la parte gráfica? 

-   Si alguno quiere utilizar un archivo CSS y asignarle las clases puede
    hacerlo. Sin embargo se puede hacer en código JavaScript totalmente.
    Sobretodo para los que no estéis dando DIW.

-   Hay que evitar el uso de innerHTML (alguna vez se puede utilizar; por
    ejemplo para mostrar la puntuación obtenida al final de una partida, o el
    nivel de dificultad si lo implementáis ). La idea es usar métodos y
    propiedades del tipo de crear elementos, nodos, hijos de los nodos, etc. La
    elección será vuestra. Si los utilizáis correctamente os ayudarán a entender
    mejor el sistema en árbol utilizado por DOM.

-   Si alguno piensa que los  topos son criaturas buenas y bondadosas y no hay
    que golpearlas que las susitutuya por topos zombie u algún vegetal asesino.

**Notas:**

La programación de la aplicación JavaScript la tendrás que realizar en un
fichero .js y tendrá que ser cross-browser funcionando perfectamente en Firefox,
Google Chrome y Opera (los navegadores de Microsoft no me importan mucho). 

Si alguno piensa que los  topos son criaturas buenas y bondadosas y no hay que
matarlas que las sustituya por topos zombies u algún vegetal asesino.

Los botones deben enlazarse con addEventListener() no con sistemas obsoletos de
Microsoft (o sea, utilizar W3C al igual que en la unidad anterior y no BOM).

Os puede hacer falta la modificación de estilos en JavaScript, sobretodo para
hacerlo bonito. Podéis mirar en
este [enlace](https://norfipc.com/inf/javascript-como-cambiar-modificar-estilo-css-paginas-web.html),
 a parte de los de w3Schools.

 

Queda terminantemente prohibido usar JQuery o similares. Debéis usar DOM
directamente y sin intermediarios

Criterios de corrección:
========================

Los puntos que tiene esta tarea están asignados de la siguiente forma:

-   Código Javascript en un fichero independiente: **0,5 puntos.**

-   Generación del tablero, y demás elementos, empleando métodos del DOM: **2,5
    puntos.**

-   Uso de eventos compatibles testado en Firefox y basados en Webkit (Chrome
    principalmente):** 1 punto.**

-   Temporizadores. En los temporizadores se hará la visualización de los
    topos.  **3 puntos.**

-   Uso del **div** para mostrar el marcador.** 1 punto.**

-   Calidad del código. Comentarios, indentación, etc...** 1 puntos.**

-   Calidad visual (a fin de cuentas estamos haciendo un juego):** 1 punto.**

-   **Puntuación Extra ( 3 puntos extra al final como máximo ). **

    -   Sonido divertido. **(0,25 puntos)**

    -   Utilización del teclado además del ratón. O sea que elijas algunas
        teclas del teclado y les asignes equivalencia a cada una de las casillas
        de los topos.  **(0,5 puntos)**

    -   Has implementado multijugador no simultaneo.  En este caso hay dos
        jugadores y el que consiga más puntuación ganará. **(0,5 puntos)**

    -   Añadir un nuevo tipo de juego. El que propongo yo es con un número
        limitado de fallos (3 por ejemplo) con dificultad variable.   **Se
        aceptan otras ideas preguntándome previamente.  (1 puntos)**

    -   Topos animados. Los topos salen y se oculta y reciben los golpes, se
        ríen, etc.** (0,5 puntos).**

    -   Un marcador con las mejores puntuaciones al estilo de una máquina
        recreativa. Esta tabla usar variables con *local storage*.  **(0,5
        puntos)**

    -   Has implementado multijugador simultaneo (dos jugadores juegan a la
        vez). Tiene bastante complicación ya que tienes que implementar antes el
        uso del teclado y además pueden producirse cosas raras al realizarse dos
        cosas a la vez. Yo no lo he hecho.  **(2 puntos)**

 

**Total: 10 puntos máximo.  El máximo de 13 puntos quedará reflejado en el
cuaderno del profesor para poder realizar la nota media al final del curso. **

Recursos necesarios:
====================

-   Ordenador personal.

-   Editor web para teclear el código de la aplicación.

-   Diferentes navegadores web para ejecutar y probar su funcionamiento y
    compatibilidad cross-browser.

Consejos y recomendaciones:
===========================

-   Revisa la unidad para conocer los métodos de creación de nodos del DOM y
    para conseguir que tu aplicación sea cross-browser.

-   No te atasques en ningún sitio. Si por ejemplo no consigues generar los
    números aleatorios bien, hazlos del 0 al 15. Mejor bajar un poco que no
    entregar nada.

-   Tranquilidad. Y no te olvides de preguntar a tu profesor que para eso
    estamos.
