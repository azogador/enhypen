const TIEMPO_LECTURA = 30;


/* =========================================================
   DESAFÍOS
========================================================= */

const desafios = [

    /* 1 */
    {
        titulo: "Dividir un problema",
        concepto: "Descomposición",

        imagen: "img/enhypen_08.webp",

        teoria:
            "Descomponer significa dividir un problema grande en partes más pequeñas y manejables. Resolver varias partes pequeñas suele ser más sencillo que intentar resolver todo al mismo tiempo.",

        ejemplo:
            "Preparar una fiesta puede dividirse en invitados, comida, música y decoración.",

        tipo: "multiple",

        pregunta:
            "ENHYPEN debe preparar una presentación. ¿Cuál opción muestra mejor una descomposición?",

        opciones: [
            "Organizar todo al mismo tiempo.",
            "Separar vestuario, música, escenario y horarios.",
            "Elegir solamente la música."
        ],

        correcta: 1,

        feedbackCorrecto:
            "¡Muy bien! Separaste un problema grande en partes más pequeñas. Eso es descomposición.",

        feedbackError:
            "Pensá en cuál opción divide el problema en varias partes que después pueden resolverse por separado."
    },


    /* 2 */
    {
        titulo: "Organizar las partes",
        concepto: "Descomposición",

        imagen: "img/enhypen_10.webp",

        teoria:
            "Después de dividir un problema, también conviene organizar sus partes. Un orden lógico permite saber qué debemos hacer primero y qué acciones dependen de otras.",

        ejemplo:
            "Para entregar un trabajo podemos seguir: investigar → escribir → revisar → entregar.",

        tipo: "ordenar",

        pregunta:
            "Ordená las etapas necesarias para realizar una presentación.",

        items: [
            "Realizar la presentación",
            "Retirar los equipos",
            "Preparar el escenario",
            "Probar el sonido"
        ],

        correcta: [
            "Preparar el escenario",
            "Probar el sonido",
            "Realizar la presentación",
            "Retirar los equipos"
        ],

        feedbackCorrecto:
            "¡Correcto! Organizaste las partes de una tarea compleja en una secuencia lógica.",

        feedbackError:
            "Revisá qué acción necesita ocurrir antes que las demás."
    },


    /* 3 */
    {
        titulo: "Descubrir lo que se repite",
        concepto: "Reconocimiento de patrones",

        imagen: "img/enhypen_13.webp",

        teoria:
            "Un patrón es una regla o característica que se repite. Reconocer patrones permite anticipar qué puede suceder y resolver situaciones con mayor facilidad.",

        ejemplo:
            "🔵 🔴 🔵 🔴 🔵 ... El siguiente elemento sería 🔴.",

        tipo: "multiple",

        pregunta:
            "Observá la secuencia: 🎤 🎧 🎤 🎧 🎤 ___ ¿Qué debería aparecer?",

        opciones: [
            "🎧",
            "🎤",
            "⭐"
        ],

        correcta: 0,

        feedbackCorrecto:
            "¡Excelente! Reconociste qué elemento se repite y pudiste anticipar lo que sigue.",

        feedbackError:
            "Mirá la secuencia desde el comienzo y buscá qué dos elementos se alternan."
    },


    /* 4 */
    {
        titulo: "Detectar el intruso",
        concepto: "Reconocimiento de patrones",

        imagen: "img/enhypen_14.webp",

        teoria:
            "A veces podemos descubrir un patrón observando qué elemento no sigue la misma regla que los demás.",

        ejemplo:
            "En 2, 4, 6, 8, 11, el número 11 rompe el patrón porque los anteriores aumentan de 2 en 2.",

        tipo: "multiple",

        pregunta:
            "¿Cuál número rompe el patrón? 3 – 6 – 9 – 12 – 16 – 18",

        opciones: [
            "9",
            "16",
            "18"
        ],

        correcta: 1,

        feedbackCorrecto:
            "¡Muy bien! El 16 rompe la regla. Los demás números continúan aumentando de 3 en 3.",

        feedbackError:
            "Compará cada número con el siguiente. Buscá cuánto aumenta la secuencia."
    },


    /* 5 */
    {
        titulo: "Quedarse con lo importante",
        concepto: "Abstracción",

        imagen: "img/enhypen_05.webp",

        teoria:
            "Abstraer significa identificar la información que realmente necesitamos para resolver un problema y dejar de lado aquello que no ayuda.",

        ejemplo:
            "Para saber cuándo comienza una clase importan el día y la hora. No importa el color favorito del docente.",

        tipo: "multiseleccion",

        pregunta:
            "Queremos saber cuándo y dónde comienza un concierto. Seleccioná todos los datos útiles.",

        items: [
            "Fecha",
            "Hora",
            "Lugar",
            "Comida favorita de un integrante",
            "Color favorito del público"
        ],

        correctas: [
            "Fecha",
            "Hora",
            "Lugar"
        ],

        feedbackCorrecto:
            "¡Correcto! Elegiste solamente los datos que permiten saber cuándo y dónde será el concierto. Eso es abstracción.",

        feedbackError:
            "Preguntate: ¿este dato ayuda realmente a saber cuándo o dónde será el concierto?"
    },


    /* 6 */
    {
        titulo: "Útil o irrelevante",
        concepto: "Abstracción",

        imagen: "img/enhypen_06.webp",

        teoria:
            "Cuando tenemos mucha información, debemos distinguir cuáles datos sirven para resolver el problema y cuáles pueden ignorarse.",

        ejemplo:
            "Si queremos saber dónde vive una persona, su dirección es útil. Su comida favorita no lo es.",

        tipo: "clasificar",

        pregunta:
            "Necesitamos saber en qué salón y horario debe presentarse un estudiante. Clasificá la información.",

        items: [
            {
                texto: "Grupo",
                correcta: "util"
            },

            {
                texto: "Salón",
                correcta: "util"
            },

            {
                texto: "Horario",
                correcta: "util"
            },

            {
                texto: "Videojuego favorito",
                correcta: "irrelevante"
            },

            {
                texto: "Comida preferida",
                correcta: "irrelevante"
            },

            {
                texto: "Color favorito",
                correcta: "irrelevante"
            }
        ],

        feedbackCorrecto:
            "¡Excelente! Separaste la información necesaria de aquella que no afecta la solución.",

        feedbackError:
            "Revisá cuáles datos ayudan realmente a saber dónde y cuándo debe presentarse el estudiante."
    },


    /* 7 */
    {
        titulo: "¿Qué estrategia usamos?",
        concepto: "Integración",

        imagen: "img/enhypen_15.webp",

        teoria:
            "Recordá: descomposición significa dividir; reconocer patrones significa descubrir algo que se repite; abstracción significa quedarse con la información importante.",

        ejemplo:
            "Si separo una tarea grande en varias tareas pequeñas estoy utilizando descomposición.",

        tipo: "relacionar",

        pregunta:
            "Relacioná cada situación con la estrategia correspondiente.",

        items: [

            {
                texto:
                    "Dividir 500 fotos en conciertos, viajes y ensayos.",

                correcta:
                    "Descomposición"
            },

            {
                texto:
                    "Descubrir que una secuencia se repite cada cuatro pasos.",

                correcta:
                    "Patrones"
            },

            {
                texto:
                    "Ignorar datos personales que no ayudan a elegir una ruta.",

                correcta:
                    "Abstracción"
            }

        ],

        feedbackCorrecto:
            "¡Muy bien! Pudiste reconocer cuándo corresponde utilizar cada estrategia del pensamiento computacional.",

        feedbackError:
            "Volvé al recordatorio: dividir = descomposición, repetir = patrones, quedarse con lo importante = abstracción."
    },


    /* 8 */
    {
        titulo: "Elegir la estrategia",
        concepto: "Integración",

        imagen: "img/enhypen_09.webp",

        teoria:
            "Frente a un problema podemos utilizar distintas estrategias. La clave es observar qué estamos intentando hacer.",

        ejemplo:
            "Si buscamos una estructura que aparece varias veces, estamos reconociendo patrones.",

        tipo: "multiple",

        pregunta:
            "Una aplicación analiza muchas canciones y descubre que varias comparten: intro → verso → estribillo → verso → estribillo. ¿Qué estrategia está utilizando?",

        opciones: [
            "Abstracción",
            "Reconocimiento de patrones",
            "Descomposición"
        ],

        correcta: 1,

        feedbackCorrecto:
            "¡Correcto! Encontraste una estructura que aparece repetidamente. Eso es reconocimiento de patrones.",

        feedbackError:
            "La clave está en descubrir algo que se repite de forma similar en distintas canciones."
    },


    /* 9 */
    {
        titulo: "El gran concierto",
        concepto: "Desafío final integrador",

        imagen: "img/enhypen_12.webp",

        teoria:
            "Los problemas complejos pueden necesitar varias estrategias al mismo tiempo. Podemos dividirlos, buscar regularidades y seleccionar solamente la información necesaria.",

        ejemplo:
            "Organizar un gran evento requiere combinar diferentes formas de pensar.",

        tipo: "integrador",

        partes: [

            {
                pregunta:
                    "Se debe organizar público, entradas, escenario, sonido, horarios, seguridad y artistas. ¿Cuál sería una buena forma de comenzar?",

                opciones: [
                    "Resolver todo al mismo tiempo.",
                    "Dividir el trabajo en áreas.",
                    "Elegir primero el color de las entradas."
                ],

                correcta: 1,

                feedbackCorrecto:
                    "¡Muy bien! Dividir un problema grande en distintas áreas es descomposición.",

                feedbackError:
                    "Pensá en cómo convertir un problema enorme en varios problemas más pequeños."
            },

            {
                pregunta:
                    "En distintos conciertos se repite: entrada del público → actuación → intervalo → actuación → salida. ¿Qué estamos reconociendo?",

                opciones: [
                    "Un patrón.",
                    "Una abstracción.",
                    "Un error."
                ],

                correcta: 0,

                feedbackCorrecto:
                    "¡Correcto! Reconociste una secuencia que aparece repetidamente. Eso es un patrón.",

                feedbackError:
                    "Observá que la misma estructura aparece nuevamente en distintos conciertos."
            },

            {
                pregunta:
                    "Para organizar cuándo debe subir un artista tenemos: nombre, horario, escenario, comida favorita, color favorito y duración. ¿Qué datos podemos ignorar?",

                opciones: [
                    "Horario y escenario.",
                    "Comida y color favoritos.",
                    "Nombre y duración."
                ],

                correcta: 1,

                feedbackCorrecto:
                    "¡Excelente! Dejaste de lado los datos que no ayudan a organizar la presentación. Eso es abstracción.",

                feedbackError:
                    "Preguntate qué datos sirven realmente para saber cuándo y dónde debe presentarse el artista."
            }

        ]
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let desafioActual = 0;

let intervaloTimer = null;

let respuestaCorrecta = false;

let accionFeedback = null;

let parteIntegrador = 0;


/* =========================================================
   ELEMENTOS
========================================================= */

const portada =
    document.getElementById("portada");

const zonaDesafio =
    document.getElementById("zonaDesafio");

const pantallaFinal =
    document.getElementById("pantallaFinal");

const btnComenzar =
    document.getElementById("btnComenzar");

const btnReiniciar =
    document.getElementById("btnReiniciar");

const numeroDesafio =
    document.getElementById("numeroDesafio");

const tituloDesafio =
    document.getElementById("tituloDesafio");

const textoProgreso =
    document.getElementById("textoProgreso");

const barraProgreso =
    document.getElementById("barraProgreso");

const imagenDesafio =
    document.getElementById("imagenDesafio");

const textoTeoria =
    document.getElementById("textoTeoria");

const textoEjemplo =
    document.getElementById("textoEjemplo");

const zonaActividad =
    document.getElementById("zonaActividad");

const contador =
    document.getElementById("contador");

const estadoTiempo =
    document.getElementById("estadoTiempo");

const mensajeTiempo =
    document.getElementById("mensajeTiempo");

const modalFeedback =
    document.getElementById("modalFeedback");

const iconoFeedback =
    document.getElementById("iconoFeedback");

const tituloFeedback =
    document.getElementById("tituloFeedback");

const textoFeedback =
    document.getElementById("textoFeedback");

const btnFeedback =
    document.getElementById("btnFeedback");


/* =========================================================
   INICIO
========================================================= */

btnComenzar.addEventListener(
    "click",
    iniciarExperiencia
);

btnReiniciar.addEventListener(
    "click",
    reiniciarExperiencia
);

btnFeedback.addEventListener(
    "click",
    () => {

        modalFeedback.classList.add("oculto");

        if (accionFeedback) {
            accionFeedback();
        }

    }
);


function iniciarExperiencia() {

    portada.classList.remove("activa");

    zonaDesafio.classList.add("activa");

    desafioActual = 0;

    cargarDesafio();

}


function reiniciarExperiencia() {

    pantallaFinal.classList.remove("activa");

    portada.classList.add("activa");

    desafioActual = 0;

}


/* =========================================================
   CARGA
========================================================= */

function cargarDesafio() {

    clearInterval(intervaloTimer);

    parteIntegrador = 0;

    const desafio =
        desafios[desafioActual];


    numeroDesafio.textContent =
        desafioActual === desafios.length - 1
            ? "DESAFÍO FINAL"
            : `DESAFÍO ${desafioActual + 1}`;


    tituloDesafio.textContent =
        desafio.titulo;


    textoProgreso.textContent =
        `${desafioActual + 1} / ${desafios.length}`;


    barraProgreso.style.width =
        `${((desafioActual + 1) / desafios.length) * 100}%`;


    imagenDesafio.src =
        desafio.imagen;


    textoTeoria.textContent =
        desafio.teoria;


    textoEjemplo.textContent =
        desafio.ejemplo;


    zonaActividad.innerHTML = "";

    zonaActividad.classList.add(
        "bloqueada"
    );


    crearActividad(desafio);

    iniciarTemporizador();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   TEMPORIZADOR
========================================================= */

function iniciarTemporizador() {

    let tiempo =
        TIEMPO_LECTURA;


    contador.textContent =
        tiempo;


    estadoTiempo.textContent =
        "Leé y pensá antes de responder";


    mensajeTiempo.textContent =
        `Las respuestas se habilitarán en ${tiempo} segundos.`;


    intervaloTimer =
        setInterval(() => {

            tiempo--;


            contador.textContent =
                tiempo;


            mensajeTiempo.textContent =
                `Las respuestas se habilitarán en ${tiempo} segundos.`;


            if (tiempo <= 0) {

                clearInterval(intervaloTimer);

                habilitarActividad();

            }

        }, 1000);

}


function habilitarActividad() {

    zonaActividad.classList.remove(
        "bloqueada"
    );


    contador.textContent =
        "✓";


    estadoTiempo.textContent =
        "Ahora podés responder";


    mensajeTiempo.textContent =
        "Pensá tu respuesta y comprobala.";

}


/* =========================================================
   ACTIVIDADES
========================================================= */

function crearActividad(desafio) {

    switch (desafio.tipo) {

        case "multiple":
            actividadMultiple(desafio);
            break;

        case "ordenar":
            actividadOrdenar(desafio);
            break;

        case "multiseleccion":
            actividadMultiseleccion(desafio);
            break;

        case "clasificar":
            actividadClasificar(desafio);
            break;

        case "relacionar":
            actividadRelacionar(desafio);
            break;

        case "integrador":
            actividadIntegrador(desafio);
            break;

    }

}


/* =========================================================
   OPCIÓN MÚLTIPLE
========================================================= */

function actividadMultiple(desafio) {

    const titulo =
        document.createElement("h3");

    titulo.textContent =
        desafio.pregunta;


    zonaActividad.appendChild(titulo);


    const opciones =
        document.createElement("div");

    opciones.className =
        "opciones";


    desafio.opciones.forEach(
        (texto, indice) => {

            const boton =
                document.createElement("button");

            boton.className =
                "opcion";

            boton.textContent =
                texto;


            boton.addEventListener(
                "click",
                () => {

                    if (
                        indice ===
                        desafio.correcta
                    ) {

                        mostrarCorrecto(
                            desafio.feedbackCorrecto
                        );

                    } else {

                        mostrarError(
                            desafio.feedbackError
                        );

                    }

                }
            );


            opciones.appendChild(
                boton
            );

        }
    );


    zonaActividad.appendChild(
        opciones
    );

}


/* =========================================================
   ORDENAR
========================================================= */

function actividadOrdenar(desafio) {

    let orden =
        [...desafio.items];


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        desafio.pregunta;


    zonaActividad.appendChild(titulo);


    const lista =
        document.createElement("div");

    lista.className =
        "lista-orden";


    function render() {

        lista.innerHTML = "";


        orden.forEach(
            (texto, indice) => {

                const item =
                    document.createElement("div");

                item.className =
                    "item-orden";


                item.innerHTML =
                    `<span>${indice + 1}. ${texto}</span>`;


                const controles =
                    document.createElement("div");

                controles.className =
                    "controles-orden";


                const subir =
                    document.createElement("button");

                subir.textContent = "▲";


                const bajar =
                    document.createElement("button");

                bajar.textContent = "▼";


                subir.onclick =
                    () => {

                        if (indice > 0) {

                            [
                                orden[indice - 1],
                                orden[indice]
                            ] =
                            [
                                orden[indice],
                                orden[indice - 1]
                            ];

                            render();

                        }

                    };


                bajar.onclick =
                    () => {

                        if (
                            indice <
                            orden.length - 1
                        ) {

                            [
                                orden[indice],
                                orden[indice + 1]
                            ] =
                            [
                                orden[indice + 1],
                                orden[indice]
                            ];

                            render();

                        }

                    };


                controles.append(
                    subir,
                    bajar
                );


                item.appendChild(
                    controles
                );


                lista.appendChild(
                    item
                );

            }
        );

    }


    render();


    zonaActividad.appendChild(
        lista
    );


    const boton =
        crearBotonComprobar();


    boton.onclick =
        () => {

            const correcto =
                orden.every(
                    (valor, indice) =>
                        valor ===
                        desafio.correcta[indice]
                );


            if (correcto) {

                mostrarCorrecto(
                    desafio.feedbackCorrecto
                );

            } else {

                mostrarError(
                    desafio.feedbackError
                );

            }

        };


    zonaActividad.appendChild(
        boton
    );

}


/* =========================================================
   MULTISELECCIÓN
========================================================= */

function actividadMultiseleccion(desafio) {

    const titulo =
        document.createElement("h3");

    titulo.textContent =
        desafio.pregunta;


    zonaActividad.appendChild(titulo);


    desafio.items.forEach(
        texto => {

            const label =
                document.createElement("label");

            label.className =
                "check-item";


            const checkbox =
                document.createElement("input");

            checkbox.type =
                "checkbox";

            checkbox.value =
                texto;


            const span =
                document.createElement("span");

            span.textContent =
                texto;


            label.append(
                checkbox,
                span
            );


            zonaActividad.appendChild(
                label
            );

        }
    );


    const boton =
        crearBotonComprobar();


    boton.onclick =
        () => {

            const seleccion =
                [
                    ...zonaActividad
                        .querySelectorAll(
                            "input:checked"
                        )
                ]
                .map(
                    input =>
                        input.value
                );


            const correcto =
                seleccion.length ===
                    desafio.correctas.length

                &&

                desafio.correctas.every(
                    item =>
                        seleccion.includes(item)
                );


            if (correcto) {

                mostrarCorrecto(
                    desafio.feedbackCorrecto
                );

            } else {

                mostrarError(
                    desafio.feedbackError
                );

            }

        };


    zonaActividad.appendChild(
        boton
    );

}


/* =========================================================
   CLASIFICAR
========================================================= */

function actividadClasificar(desafio) {

    const respuestas = {};


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        desafio.pregunta;


    zonaActividad.appendChild(titulo);


    desafio.items.forEach(
        (item, indice) => {

            const fila =
                document.createElement("div");

            fila.className =
                "clasificacion-item";


            const nombre =
                document.createElement("strong");

            nombre.textContent =
                item.texto;


            const botones =
                document.createElement("div");

            botones.className =
                "botones-clasificar";


            [
                ["util", "ÚTIL"],
                ["irrelevante", "IRRELEVANTE"]
            ]
            .forEach(
                ([valor, etiqueta]) => {

                    const btn =
                        document.createElement("button");

                    btn.textContent =
                        etiqueta;


                    btn.onclick =
                        () => {

                            respuestas[indice] =
                                valor;


                            botones
                                .querySelectorAll(
                                    "button"
                                )
                                .forEach(
                                    b =>
                                        b.classList.remove(
                                            "activo"
                                        )
                                );


                            btn.classList.add(
                                "activo"
                            );

                        };


                    botones.appendChild(
                        btn
                    );

                }
            );


            fila.append(
                nombre,
                botones
            );


            zonaActividad.appendChild(
                fila
            );

        }
    );


    const boton =
        crearBotonComprobar();


    boton.onclick =
        () => {

            const completo =
                desafio.items.every(
                    (_, indice) =>
                        respuestas[indice]
                );


            if (!completo) {

                mostrarError(
                    "Clasificá todos los datos antes de comprobar."
                );

                return;

            }


            const correcto =
                desafio.items.every(
                    (item, indice) =>
                        respuestas[indice] ===
                        item.correcta
                );


            if (correcto) {

                mostrarCorrecto(
                    desafio.feedbackCorrecto
                );

            } else {

                mostrarError(
                    desafio.feedbackError
                );

            }

        };


    zonaActividad.appendChild(
        boton
    );

}


/* =========================================================
   RELACIONAR
========================================================= */

function actividadRelacionar(desafio) {

    const titulo =
        document.createElement("h3");

    titulo.textContent =
        desafio.pregunta;


    zonaActividad.appendChild(titulo);


    desafio.items.forEach(
        item => {

            const fila =
                document.createElement("div");

            fila.className =
                "relacion-fila";


            const texto =
                document.createElement("span");

            texto.textContent =
                item.texto;


            const select =
                document.createElement("select");


            select.dataset.correcta =
                item.correcta;


            select.innerHTML = `
                <option value="">
                    Elegí...
                </option>

                <option value="Descomposición">
                    Descomposición
                </option>

                <option value="Patrones">
                    Patrones
                </option>

                <option value="Abstracción">
                    Abstracción
                </option>
            `;


            fila.append(
                texto,
                select
            );


            zonaActividad.appendChild(
                fila
            );

        }
    );


    const boton =
        crearBotonComprobar();


    boton.onclick =
        () => {

            const selects =
                [
                    ...zonaActividad
                        .querySelectorAll(
                            "select"
                        )
                ];


            if (
                selects.some(
                    s => !s.value
                )
            ) {

                mostrarError(
                    "Relacioná todas las situaciones antes de comprobar."
                );

                return;

            }


            const correcto =
                selects.every(
                    select =>
                        select.value ===
                        select.dataset.correcta
                );


            if (correcto) {

                mostrarCorrecto(
                    desafio.feedbackCorrecto
                );

            } else {

                mostrarError(
                    desafio.feedbackError
                );

            }

        };


    zonaActividad.appendChild(
        boton
    );

}


/* =========================================================
   INTEGRADOR
========================================================= */

function actividadIntegrador(desafio) {

    renderParteIntegrador(
        desafio
    );

}


function renderParteIntegrador(desafio) {

    zonaActividad.innerHTML = "";


    const parte =
        desafio.partes[
            parteIntegrador
        ];


    const indicador =
        document.createElement("div");

    indicador.className =
        "etiqueta";

    indicador.textContent =
        `PARTE ${parteIntegrador + 1} DE ${desafio.partes.length}`;


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        parte.pregunta;


    zonaActividad.append(
        indicador,
        titulo
    );


    const opciones =
        document.createElement("div");

    opciones.className =
        "opciones";


    parte.opciones.forEach(
        (texto, indice) => {

            const boton =
                document.createElement("button");

            boton.className =
                "opcion";

            boton.textContent =
                texto;


            boton.onclick =
                () => {

                    if (
                        indice ===
                        parte.correcta
                    ) {

                        mostrarCorrectoIntegrador(
                            parte.feedbackCorrecto,
                            desafio
                        );

                    } else {

                        mostrarError(
                            parte.feedbackError
                        );

                    }

                };


            opciones.appendChild(
                boton
            );

        }
    );


    zonaActividad.appendChild(
        opciones
    );

}


/* =========================================================
   FEEDBACK
========================================================= */

function mostrarCorrecto(texto) {

    iconoFeedback.textContent =
        "✓";

    tituloFeedback.textContent =
        "¡Muy bien!";

    textoFeedback.textContent =
        texto;

    btnFeedback.textContent =
        desafioActual ===
        desafios.length - 1

        ? "CONTINUAR"

        : "SIGUIENTE DESAFÍO";


    accionFeedback =
        siguienteDesafio;


    modalFeedback.classList.remove(
        "oculto"
    );

}


function mostrarError(texto) {

    iconoFeedback.textContent =
        "↻";

    tituloFeedback.textContent =
        "Probemos otra vez";

    textoFeedback.textContent =
        texto;

    btnFeedback.textContent =
        "VOLVER A INTENTAR";


    accionFeedback =
        () => {};


    modalFeedback.classList.remove(
        "oculto"
    );

}


function mostrarCorrectoIntegrador(
    texto,
    desafio
) {

    iconoFeedback.textContent =
        "✓";

    tituloFeedback.textContent =
        "¡Muy bien!";

    textoFeedback.textContent =
        texto;


    if (
        parteIntegrador <
        desafio.partes.length - 1
    ) {

        btnFeedback.textContent =
            "SIGUIENTE PARTE";


        accionFeedback =
            () => {

                parteIntegrador++;

                renderParteIntegrador(
                    desafio
                );

            };

    } else {

        btnFeedback.textContent =
            "FINALIZAR MISIÓN";


        accionFeedback =
            mostrarPantallaFinal;

    }


    modalFeedback.classList.remove(
        "oculto"
    );

}


/* =========================================================
   NAVEGACIÓN
========================================================= */

function siguienteDesafio() {

    desafioActual++;


    if (
        desafioActual >=
        desafios.length
    ) {

        mostrarPantallaFinal();

        return;

    }


    cargarDesafio();

}


function mostrarPantallaFinal() {

    clearInterval(
        intervaloTimer
    );


    zonaDesafio.classList.remove(
        "activa"
    );


    pantallaFinal.classList.add(
        "activa"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   UTILIDADES
========================================================= */

function crearBotonComprobar() {

    const boton =
        document.createElement("button");

    boton.className =
        "btn-principal btn-comprobar";

    boton.textContent =
        "COMPROBAR RESPUESTA";

    return boton;

}