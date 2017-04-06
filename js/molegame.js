/* 
 * 2017 Felipe Rodríguez Gutiérrez
 *
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 *
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 *
 * No se permite un uso comercial de la obra original ni de las posibles obras 
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/* 
 * Módulo: Desarrollo Web Entorno Cliente
 * Tema 05: Modelo de objetos de documento en JavaScript
 * Tarea 5: Whack-A-Mole!
 * Alumno: Felipe Rodríguez Gutiérrez
 */

/**
 * Elementos extras añadidos a la tarea:
 * 
 * - Sonido
 * - Animaciones
 * - Multijugador no simultaneo (no terminado de implementar)
 */

/**
 * Reconocimientos:
 * 
 * Música: The Benny Hill Show Theme - © The Edwin Davids Jazz Band
 * Arte y sonido risa: https://github.com/gloryming/WhackAMole/tree/master/WhackAMole
 * Efectos sonido: http://soundbible.com/1948-Slap.html 
 * 
 */

window.onload = start;

/**
 * Funcion start() que recopila todos las funciones y eventos a ejecutar a la
 * carga de la página.
 */
function start() {
    //Llamamos a la funcion correspondiente para dibujar el tablero
    dibujarTablero();
    
    //Obtenemos todos los elementos de tipo img del formulario
    var elementos = document.getElementsByTagName('img');
    //Le añadimos al evento click de la imagen la función golpe
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', golpe);
    }
    
    //Añadimos el evento click al botón de inicio para comenzar el juego
    document.getElementById('iniciar').addEventListener('click', juego);
}

/**
 * Funcion dibujarTablero() que se encarga de dibujar los elementos en el body de
 * la página web.
 * 
 * Se encuentra tabulado con la disposición padre/hijo que deberia tener.
 * 
 */
function dibujarTablero(){
    
    //LOGO
    //Creamos un elemento div logo
    var logo = document.createElement('div');
    //Le asignamos la clase correspondiente
    logo.setAttribute('class', 'logo');
    //Añadimos el elemento al body de la página
    document.body.appendChild(logo);
    
    //PANEL DE CONTROLES (ajustes y puntuación)
    //Creamos un elemento div controles
    var controles = document.createElement('div');
    //Le asignamos el atributo correspondiente
    controles.setAttribute('class', 'controles');
    //Añadimos el elemento al body de la página
    document.body.appendChild(controles);
    
        //AJUSTES
        //Creamos un div ajustes
        var ajustes = document.createElement('div');
        //Le asignamos el atributo correspondiente
        ajustes.setAttribute('class', 'ajustes');
        //Añadimos el elemento al elemento controles
        controles.appendChild(ajustes);

            //Creamos un elemento label Dificultad
            var labelDificultad = document.createElement('label');
            //Añadimos el elemento al elemento ajustes
            ajustes.appendChild(labelDificultad);
            //Se crea un nodo de texto
            var txtLblDificultad = document.createTextNode('Dificultad');
            //Se asigna al elemento label anterior
            labelDificultad.appendChild(txtLblDificultad);

            //Se crea elemento DIV que contiene el rango de dificultad
            var divDificultad = document.createElement('div');
            //Le asignamos el atributo correspondiente
            divDificultad.setAttribute('class', 'dificultad');
            //Asignamos el elemento divDificultad como hijo al elemento ajustes 
            ajustes.appendChild(divDificultad);

                //Se crea el elemento label Dificil
                var lblDificil = document.createElement('label');
                //Se crea un nodo de texto
                var txtLblDificil = document.createTextNode('Difícil');
                //Se asigna al elemento label anterior
                lblDificil.appendChild(txtLblDificil);

                //Se crea el elemento input de tipo range
                var inputRange = document.createElement('input');
                //Le asignamos los atributos correspondientes
                inputRange.setAttribute('type', 'range');
                inputRange.setAttribute('id', 'dificultad');
                inputRange.setAttribute('min', '0.5');
                inputRange.setAttribute('max', '3000');
                inputRange.setAttribute('step', '0.5');
                inputRange.setAttribute('value', '3000');

                //Se crea el elemento label Fácil
                var lblFacil = document.createElement('label');
                //Se crea un nodo de texto
                var txtLblFacil = document.createTextNode('Fácil');
                //Se asigna al elemento label anterior
                lblFacil.appendChild(txtLblFacil);

                //Los elementos dificil, el input range y fácil se
                //asignan como hijos del elemento div divDificultad.
                divDificultad.appendChild(lblDificil);
                divDificultad.appendChild(inputRange);
                divDificultad.appendChild(lblFacil);

//            //Creamos un elemento label Multijugador
//            var lblMultijugador = document.createElement('label');
//            //Añadimos el elemento al elemento ajustes
//            ajustes.appendChild(lblMultijugador);
//            //Se crea un nodo de texto
//            var txtLblMultijugador = document.createTextNode('Multijugador');
//            //Se asigna al elemento label anterior
//            lblMultijugador.appendChild(txtLblMultijugador);
//
//            //Se crea elemento DIV que contiene el switch multijugador
//            var divMultijugador = document.createElement('div');
//            //Le asignamos el atributo correspondiente
//            divMultijugador.setAttribute('class', 'multi');
//            //Asignamos el elemento divMultijugador como hijo al elemento ajustes 
//            ajustes.appendChild(divMultijugador);
//
//                //Se crea el elemento label 1 Jugador
//                var lblPlayer1 = document.createElement('label');
//                //Se crea un nodo de texto
//                var txtLblPlayer1 = document.createTextNode('1 Jugador');
//                //Se asigna al elemento label anterior
//                lblPlayer1.appendChild(txtLblPlayer1);
//
//                //Se crea el elemento input de tipo range
//                var swtMulti = document.createElement('input');
//                //Le asignamos los atributos correspondientes
//                swtMulti.setAttribute('type', 'range');
//                swtMulti.setAttribute('id', 'multi');
//                swtMulti.setAttribute('min', '0');
//                swtMulti.setAttribute('max', '1');
//                swtMulti.setAttribute('step', '1');
//                swtMulti.setAttribute('value', '0');
//
//                //Se crea el elemento label 2 Jugadores
//                var lblPlayer2 = document.createElement('label');
//                //Se crea un nodo de texto
//                var txtLblPlayer2 = document.createTextNode('2 Jugadores');
//                //Se asigna al elemento label anterior
//                lblPlayer2.appendChild(txtLblPlayer2);
//
//                //Los elementos Player1, el swtMulti y Player2 se
//                //asignan como hijos del elemento div divMultijugador.
//                divMultijugador.appendChild(lblPlayer1);
//                divMultijugador.appendChild(swtMulti);
//                divMultijugador.appendChild(lblPlayer2);

        //BOTON GO
        //Creamos un elemento div
        var divBoton = document.createElement('div');
        //Establecemos los atributos del elemento
        divBoton.setAttribute('class', 'comienzo');
        //Establecemos el elemento como hijo del elemento controles
        controles.appendChild(divBoton);
            //Creamos un elemento input de tipo button
            var boton = document.createElement('input');
            //Le asignamos los atributos correspondientes
            boton.setAttribute('type', 'button');
            boton.setAttribute('id', 'iniciar');
            boton.setAttribute('value', 'GO!!');
            //Asignamos el elemento boton como hijo del elemento controles
            divBoton.appendChild(boton);
        
        //MARCADOR
        //Creamos un elemento div marcador
        var marcador = document.createElement('div');
        //Le asignamos el atributo correspondiente
        marcador.setAttribute('class', 'marcador');
        //Asignamos el elemento como hijo de controles
        controles.appendChild(marcador);
        
            //Creamos un elemento label puntuación
            var lblPuntuacion = document.createElement('label');
            //Se crea un nodo de texto
            var txtPuntuacion = document.createTextNode('Puntuación');
            //Se asigna al elemento label anterior
            lblPuntuacion.appendChild(txtPuntuacion);
            
            //Creamos un elemento span para la puntuación numérica
            var spnPuntuacion = document.createElement('span');
            //Le asignamos los atributos correspondientes
            spnPuntuacion.setAttribute('id', 'puntos');
            //Se crea un nodo de texto
            var txtSpanPuntuacion = document.createTextNode('0');
            //Se asigna al elemento span anterior
            spnPuntuacion.appendChild(txtSpanPuntuacion);
            
            //Los elementos label y span se asignan como hijos del elemento div
            //marcador
            marcador.appendChild(lblPuntuacion);
            marcador.appendChild(spnPuntuacion);
            
    //TABLERO DE JUEGO
    //Creamos el div que hace de tablero
    var tablero = document.createElement('div');
    //Asignamos los atributos correspondientes
    tablero.setAttribute('class', 'boxer');
    //Se asigna el elemento div como hijo del body de la página
    document.body.appendChild(tablero);
        //FILAS Y COLUMNAS
        //Cuatro filas
        for (var i=0; i<4; i++) {
            //Creamos un div que hace de fila
            var boxRow = document.createElement('div');
            //Le asignamos sus atributos
            boxRow.setAttribute('class', 'box-row');
            //Se asigna como hijos del elemento tablero
            tablero.appendChild(boxRow);
            
            //Ahora dependiendo de la fila, se crean las columnas
            switch (i) {
                //Primera fila class='box UP'
                case 0:
                    for (var j=0; j<3; j++) {
                        //Se crea un elemento
                        var boxUP = document.createElement('div');
                        boxUP.setAttribute('class', 'box UP');
                        boxRow.appendChild(boxUP);
                        var imagen = document.createElement('img');
                        imagen.setAttribute('id', 'mole'+j);
                        imagen.setAttribute('class', 'mole hidden');
                        imagen.setAttribute('src', 'art/mole.png');
                        imagen.setAttribute('alt', 'mole');
                        boxUP.appendChild(imagen);
                    }
                break;
                
                case 1:
                case 3:
                    for (var j=0; j<3; j++) {
                        var boxDown = document.createElement('div');
                        boxDown.setAttribute('class', 'box DOWN');
                        boxRow.appendChild(boxDown);
                    }
                break;
                
                case 2:
                    for (var j=3; j<6; j++) {
                        var boxUP = document.createElement('div');
                        boxUP.setAttribute('class', 'box UP');
                        boxRow.appendChild(boxUP);
                        var imagen = document.createElement('img');
                        imagen.setAttribute('id', 'mole'+j);
                        imagen.setAttribute('class', 'mole hidden');
                        imagen.setAttribute('src', 'art/mole.png');
                        imagen.setAttribute('alt', 'mole');
                        boxUP.appendChild(imagen);
                    }
                break;   
            }
        }
      
    //AUDIO


    //Se crea un elemento div para el copyright
    var divAudio = document.createElement('div');
    //Se establece el atributo
    divAudio.setAttribute('class', 'audioplayer');
        //Se crea un elemento audio
        var audio = document.createElement('audio');
        //Se crean sus atributos
        var aplayAudio = document.createAttribute('autoplay');
        var ctrlAudio = document.createAttribute('controls');
        var loopAudio = document.createAttribute('loop');
        //Se establecen los nodos de atributos al elemento
        audio.setAttributeNode(aplayAudio);
        audio.setAttributeNode(ctrlAudio);
        audio.setAttributeNode(loopAudio);
        //Se establece el elemento como elemento hijo del body
        divAudio.appendChild(audio);
            //Se crea un elemento source
            var srcAudio = document.createElement('source');
            //Se establecen sus atributos
            srcAudio.setAttribute('src', 'snd/background.mp3');
            srcAudio.setAttribute('type', 'audio/mpeg');
            //Se establece como elemento hijo del elemento audio
            audio.appendChild(srcAudio);
    //Se establece el elemento como hijo del elemento body
    document.body.appendChild(divAudio);
    
    //FOOTER
    var pie = document.createElement('footer');
    var txtPie = document.createTextNode('DWEC - Tarea 5 - Felipe Rodríguez Gutiérrez');
    pie.appendChild(txtPie);
    //Añadimos el elemento al body de la página
    document.body.appendChild(pie);
}


/** MOTOR DEL JUEGO **/
/*********************/

//SONIDOS DEL JUEGO
/**
 * Funcion para el sonido ambiente de la web
 */
function sonidoFondo(){
    var benny = new Audio('snd/background.mp3');
    benny.play();
}

/**
 * Función para el sonido del golpe al topo
 */
function sonidoGolpe(){
    var slap = new Audio('snd/slap.wav');
    slap.play();
}

/**
 * Función para el sonido de la risa del topo
 */
function sonidoRisa(){
    var laugh = new Audio('snd/laugh.mp3');
    laugh.play(); 
}

/**
 * Obtiene un entero aleatorio definiendo un rango de valores máximos y mínimos
 * que también son incluidos. Usado en diferentes lugares del código.
 * 
 * @param {type} min
 * @param {type} max
 * 
 * @returns {Number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Funcion que muestra un topo aleatorio en el tablero o lo oculta pasado un 
 * tiempo sin golpear
 * 
 * @param {type} velocidad de estado visible del topo
 */
function renderMole(velocidad){
    //Generamos una posición aleatoria de aparición del topo
    var posicion = getRandomInt(0,5);
    //Devolvemos el estado original de la cara del topo por si ha sido cambiada 
    document.getElementById('mole' + posicion).src = 'art/mole.png';
    //Hacemos visible el topo
    document.getElementById('mole' + posicion).className = "mole visible";
    //Si pasados 3 segundos no se ha golpeado
    setTimeout(function(){
        //Si el topo no es golpeado (no cambia a mole dead), lo ocultamos y se rie
        //del jugador con un sonido
        if (document.getElementById('mole' + posicion).className !== 'mole dead'){
            //Ocultamos el topo
            document.getElementById('mole' + posicion).className = 'mole hidden';
            //La cara del topo cambia a reirse
            document.getElementById('mole' + posicion).src = 'art/mole_r.png';
            //Sonido de risa
            sonidoRisa();
        }
    }, velocidad);
}

/**
 * Función que controla las acciones al recibir un golpe el topo. Ocultará el
 * mismo mediante cambio de la clase animada CSS y anotará 10 puntos en el
 * marcador.
 */
function golpe(){
    //Cambiamos la clase como topo muerto, para que se oculte rapidamente
    this.className = "mole dead";
    //Cambiamos la imagen del topo, para que aparezca una golpeada
    this.src = 'art/mole_g.png';
    //Reproducimos el sonido del golpe
    sonidoGolpe();
    //Añadimos 10 puntos al marcador
    var puntos = parseInt(document.getElementById('puntos').innerHTML) + 10;
    document.getElementById('puntos').innerHTML = puntos;
}

/**
 * Function menuActivo que activa o desactiva los controles del menu del juego
 * para que no esten disponibles durante el juego y viceversa.
 * 
 * @param {type} activo booleano para activar desactivar el menu del juego
 */
function menuActivo(activo) {
    document.getElementById('iniciar').disabled = activo;
    document.getElementById('dificultad').disabled = activo;
}

/**
 * Funcion partida() que inicializa una partida
 * 
 * @returns {undefined} true, cuando una partida ha acabado
 */
function partida(){
    //Ponemos el marcador de puntuacion a 0
    document.getElementById('puntos').innerHTML = 0;
    //Obtenemos la velocidad de dificultad
    var velocidad = document.getElementById('dificultad').value;
    //Desactivamos el menu
    menuActivo(true);
    //Iniciamos un bucle del juego temporizado
    (function bucleJuego(i){          
       setTimeout(function (){ 
          //Activamos un topo aleatorio con una velocidad de aparicion definida
          //por la difucultad
          renderMole(velocidad);
          //Si no hemos llegado a la ultima iteracion
          if (--i){
              //Seguimos con el bucle del juego
              bucleJuego(i);
          //En el caso de haberse terminado las rondas
          } else {
              //Activamos el menu de juego nuevamente
              menuActivo();
              //return document.getElementById('puntos').innerHTML;
          }
       //Se define la velocidad del juego de aparicion entre topo y topo
       }, velocidad);
    //Numero total de iteraciones del topo
    })(15);
}

///**
// * Funcion partidaMultijugador() que inicializa una partida multijugador
// * 
// */
//function partidaMultijugador(){
//    //Ponemos el marcador de puntuacion a 0
//    document.getElementById('puntos').innerHTML = 0;
//    //Obtenemos la velocidad de dificultad
//    var velocidad = document.getElementById('dificultad').value;
//    //Desactivamos el menu
//    menuActivo(true);
//    //Iniciamos un bucle del juego temporizado
//    (function bucleJuego(i){          
//        setTimeout(function (){ 
//            //Activamos un topo aleatorio con una velocidad de aparicion definida
//            //por la difucultad
//            renderMole(velocidad);
//            //Si no hemos llegado a la ultima iteracion
//            if (--i){
//                //Seguimos con el bucle del juego
//                bucleJuego(i);
//            //En el caso de haberse terminado las rondas
//            } else {
//                var marcador2 = partida();
//            }
//       //Se define la velocidad del juego de aparicion entre topo y topo
//       }, velocidad);
//    //Numero total de iteraciones del topo
//    })(15);
//}

/**
 * Funcion juego() que determina si la partida es monojugador o multijugador
 * (no implementado el multijugador)
 */
function juego(){
    partida();
}