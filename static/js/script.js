const randomText = document.getElementById('random-text');
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const body = document.body;

const textOptions = [
    'Hola',
    'Mundo',
    'Gato',
    'Perro',
    'Amor',
    'Felicidad',
    'Libertad',
    'Playa',
    'Montaña',
    'Naturaleza',
    'Familia',
    'Amigos',
    'Aventura',
    "¿Por qué los estadounidenses son malos jugadores de ajedrez? Porque perdieron dos torres.",
    "¿Qué hace una mujer fuera de la cocina? -Turismo ",
    "A mis parientes mayores les gustaba burlarse de mí en las bodas, diciendo: ¡Tú serás el siguiente!. Pero dejaron de hacerlo enseguida cuando empecé a hacer lo mismo yo en los funerales.",
    "El médico en la consulta. 'Tengo buenas y malas noticias'. 'Deme primero las buenas', dice el paciente. 'Han llegado los resultados de sus pruebas y solo le quedan dos días de vida'. '¿Esas son las buenas noticias? ¿Y cuál es la mala?', dice el paciente. 'Llevo dos días intentando localizarle'.",
    "¿Qué es peor que seis niños colgados de un árbol? Un niño colgado de seis árboles",
    "Somos suficientes en este planeta como para empezar a disminuir un poco la manada. No estoy diciendo que debamos cazar a los estúpidos. Digo que dejemos que se suiciden. Quitemos algunas advertencias. Quitemos el 'no ingerir' de los botes de pintura. ¡Cómetela! ¿Quieres comerla? ¡Cómetela! Dale de comer a tus hijos tontos también. Nosotros tampoco los queremos.",
    "Mi novia, hablando de astronomía, me preguntó cómo mueren las estrellas. 'Normalmente por sobredosis', le dije.",
    "La vida es una mierda, cuando la miras. La vida es una risa y la muerte es una broma, es verdad. Verás que todo es un espectáculo. Haz que se rían a tu paso. Tan solo recuerda que la última risa es a tu costa",
    "Nunca le rompas el corazón a alguien, solo tienen uno. Rómpele los huesos mejor, tienen 206.",
    "Yo... solía tener un hijo. Solía tener un hijo de dos años, pero murió. De la misma manera que murió el hijo de Eric Clapton. Para conseguir inspiración. (...) Es un chiste complicado, hay que saber muchas cosas. Este chiste es como una cebolla. Tienes que saber quién es Eric Clapton. No es algo garantizado a día de hoy. Tienes que saber sobre su hijo. Tienes que saber lo torpe que era ese muchacho. Tienes que conocer esa maldita canción. Y luego tienes que pensar que todo esto es gracioso",
    "Dos cazadores están en el bosque cuando uno de ellos se desmaya. Su compañero llama inmediatamente a emergencias. 'Mi amigo no respira', grita al teléfono. '¿Qué debo hacer?'. 'Tranquilo', le dice el operador. 'Puedo ayudarle. Primero, asegurémonos de que está muerto'. Se hace el silencio y luego suena un disparo. El tipo vuelve a coger el teléfono y dice: 'Vale, ¿y ahora qué?'",
    "El otro día estaba en el parque una madre se sentó a mi lado. Después de un rato, se inclinó y preguntó: '¿Cuál es el tuyo?'. La miré y le dije: 'Todavía no lo he decidido'.",
    "Quiero morir tranquilamente mientras duermo, como mi abuelo. No gritando, como los pasajeros de su autobús.",
    "Si alguna vez viera que ahorcan a un amputado, me pondría a gritarle letras",
    "Los chistes de humor negro son como los niños de los antivacunas, nunca se hacen viejos",
    "Su humor era tan negro que le disparaba la policía",
    "El dentista al paciente: 'Esto le va a doler un poco'. 'Vale', contesta este. Y el dentista añade: 'Me estoy tirando a su mujer'",
    "El humor negro es como los esclavos, hoy en día muy pocos tenemos uno",
    "Incluso la gente que no sirve para nada tiene la capacidad de sacarte una sonrisa. Por ejemplo, cuando los empujas por las escaleras",
    "Si donas un riñón, todo el mundo te quiere y eres un héroe. Pero dona cinco y de repente todo el mundo se pone a gritar",
    "Un hombre va a la biblioteca y pide un libro sobre cómo suicidarse. El bibliotecario le responde, 'no te lo presto, que no me lo devuelves'",
    "Nunca olvidaré las últimas palabras de mi abuelo justo antes de morir. '¿Sigues sosteniendo la escalera?'",
    "¿Qué tienen en común Miguel Ángel y Kurt Cobain? Que los dos usaros sus cerebros para pintar el techo",
    "El secreto para que una chica caiga rendida a tus pies es regalarle flores. Ayuda que las flores huelan mucho a cloroformo",
    "En un avión el piloto anuncia por megafonía que el avión se va a estrellar y que no queda ninguna esperanza de salvarse. Entonces una pasajera del vuelo se pone en pie y grita: '¿Hay alguien aquí lo suficientemente hombre para hacerme sentir mujer una última vez?'. Entonces un tipo se levanta, se arranca la camiseta y le dice: 'Toma, plancha esto'",
    "¿Qué tienen en común el tofu y un consolador? Ambos son sustitutos de la carne",
    "Estaba cavando un hoyo en nuestro jardín y encontré un cofre lleno de monedas de oro. Quería ir corriendo a casa a contárselo a mi marido. Entonces recordé por qué estaba cavando un hoyo en nuestro jardín",
    "¿Qué tiene mi padre en común con Nemo? No se puede encontrar a ninguno de los dos",
    "Mi mayor héroe es Nelson Mandela. Qué hombre. Encarcelado durante 25 años, fue liberado en 1990 y no ha reincidido. Creo que se está enderezando, lo que demuestra que la cárcel sí funciona",
    "He visitado a mi amigo en su nuevo apartamento. Me dijo que me sintiera como en casa. Así que le eché. Odio tener visitas",
    "No necesitas un paracaídas para hacer paracaidismo. Necesitas un paracaídas para hacer paracaidismo dos veces",
    "¿Recuerdas cuando eras joven y pensabas que tu padre era Superman? Y luego creces y te das cuenta de que sólo es un borracho que lleva una capa",
    "El perro de mi novia se murió, así que le compré otro idéntico. Ella me gritó y me dijo: '¿Qué voy a hacer con dos perros muertos?'",
    "¿Conoces la frase 'la basura de un hombre es el tesoro de otro'? Maravilloso dicho, horrible manera de descubrir que fuiste adoptado",
    "Un hombre va al médico para un chequeo, y este le dice: 'Tengo malas noticias, usted tiene cáncer y alzheimer'. El hombre le responde: '¡Gracias a Dios que no tengo cáncer!'",
    "Si tuviera diez centavos por cada vez que un indigente me ha pedido dinero, seguiría diciendo que no",
    "Mi terapeuta acaba de morir. Era tan bueno que ni siquiera me importa",
    "Hoy le he preguntado a mi teléfono: 'Siri, ¿por qué sigo soltero?'. Y ha activado la cámara frontal",
    "A medida que me hago mayor, me acuerdo de toda la gente que he perdido por el camino. Quizá mi carrera de guía turístico no fue la elección correcta",
    "¿Quieres saber cómo convertir cualquier ensalada en una ensalada César? Apuñálala veintitrés veces",
    'Hola',
    'Mundo',
    'Gato',
    'Perro',
    'Amor',
    'Felicidad',
    'Libertad',
    'Playa',
    'Montaña',
    'Naturaleza',
    'Familia',
    'Amigos',
    'Aventura',
    "¿Por qué llora un libro de matemáticas? ¡Porque tiene muchos problemas!",
    "¿Qué está al final de todo? ¡La letra o!",
    "¿Por qué el profe de música tiene una escalera? ¡Para poder llegar a las notas más altas!",
    "¿Cuál es el baile favorito del tomate? ¡La salsa!",
    "¿Qué le dice un pez a otro? ¡Nada!",
    "¿Cuál es el colmo de un futbolista? ¡Que le hagan la pelota!",
    "¿Tienen libros sobre el cansancio? Sí, pero ahora mismo no hay, ¡están todos agotados!",
    "¿Qué le dice un gusano a otro? Me voy a dar la vuelta a la manzana.",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas",
    "¿Cuál es el colmo del electricista? ¡Que su mujer se llame Luz!",
    "¿Cómo se dice pañuelo en japonés? Sacamoko",
    "¿Cuál es el colmo de un farmacéutico? ¡Que su mujer se llame Remedios!",
    "Profesora, ¿qué quiere decir 'why'? ¿Por qué? Por saberlo",
    "Un hombre entra en un bar de pinchos y dice:¡¡Ayyyyy!!",
    "¿Cuál es la fruta más divertida? ¡La naranjajajajaja!",
    "¿Cuál es el pez que huele mucho? ¡Peztoso!",
    "Papá, ¿hay gelatina? Pues que yo sepa nada más que existe la 'i latina' y la 'y griega'.",
    "Pedro, ¿qué harías tú si te estuvieras ahogando en alta mar? ¡Llorar para desahogarme!",
    "¿Qué le dice un semáforo a otro? ¡No me mires que me estoy cambiando!",
    "¿Qué le dice una pared a otra? ¡Nos vemos en la esquina!",
    "¿Sabes cómo se queda un mago después de comer? Magordito",
    "Papá, ¿cómo se dice perro en inglés? Dog. ¿Y veterinario? Pues Dog-tor.",
    "¿Qué le dijo una pulga a otra pulga? ¿Vamos a pie o esperamos al perro?",
    "Alberto, ¿qué planeta va después de Marte? Miércoles",
    "Pepe, si en esta mano tengo 8 naranjas y en esta otra 6 naranjas. ¿Qué tengo? ¡Unas manos enormes, profe!",
    "¡Mamá, he sacado un 10! ¿En serio? ¿En qué materias? Un 3 en matemáticas, un 2 en sociales, un 3 en inglés y un 2 en geografía.",
    "La M con la A suena MA, ¿y si le pones una tilde? ¡Matilde!",
    "¿Cuál es la montaña más limpia? El volcán. Porque primero echa cenizas y después, lava",
    "¿Qué le dice un pollito a su enemigo? ¡Caldito seas!",
    "¿Cómo se dice guardia civil en holandés? Vandeverde",
    "Érase una vez un chiste tan malo tan malo que pegaba a los otros chistes",
    "¿Por qué las vacas viajan a Nueva York? Para ver los muuuusicales.",
    "¿Está Agustín? No, estoy incomodín",
    "¿De dónde vienen los hamster? De Hamsterdam",
    "Doctor, tengo todo el cuerpo cubierto de pelo. ¿Qué padezco? Padece uzted un ozito.",
    "Había una vez un hombre tan pequeño tan pequeño que se subió encima de una canica y dijo:¡El mundo es mío!",
    "¿Cuál es el colmo de un peluquero? ¡Perder el autobús por los pelos!",
    "¡Qué estrés! Dos más uno.",
    "¿Cuál es el colmo de un libro? ¡Que en otoño se le caigan las hojas!",
    "¿Sabes que mi hermano anda en bicicleta desde los cinco años? ¿Ah sí? ¡Qué lejos debe de estar ya!",
];

const backgroundColors = [
    '#f0f0f0', // Color de fondo predeterminado
    '#aabbcc',
    '#ffee00',
    '#ff5733',
    '#88ff00',
    '#ff00ff'
];

function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    const randomBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    const randomTextColor = getRandomColor();
    
    randomText.textContent = textOptions[randomIndex];
    body.style.backgroundColor = randomBackgroundColor;
    randomText.style.color = randomTextColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

likeButton.addEventListener('click', generateRandomText);
dislikeButton.addEventListener('click', generateRandomText);

generateRandomText(); // Mostrar un texto aleatorio, fondo y color de texto aleatorios al cargar la página

