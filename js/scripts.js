/*1 Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas.*/
/*
function wordToUpper(word) {
  if (word.length > 4) {
    console.log(word.toUpperCase());
  } else console.log(word.toLowerCase());
}

wordToUpper("Hola");*/

const wordToUpper = (word) => {
  if (word.length > 4) {
    console.log(word.toUpperCase());
  } else console.log(word.toLowerCase());
};

wordToUpper("Hola");

/*2.Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.*/
/*
function randomletter(word) {
  const randomPosition = Math.floor(Math.random() * word.length);
  console.log(word.charAt(randomPosition));
}

randomletter("Palabra");*/

const randomLetter = (word) => {
  const randomPosition = Math.floor(Math.random() * word.length);
  console.log(word.charAt(randomPosition));
};

randomLetter("Random");

/*3.Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud, deberá indicarlo.*/

/*function longword(wordA, wordB) {
  if (wordA.length > wordB.length) {
    return `${wordA} es más larga que ${wordB}`;
  } else if (wordB.length > wordA.length) {
    return `${wordB} es más larga que ${wordA}`;
  }
  return `${wordA} es igual de larga que ${wordB}`;
}

const longwordresult = longword("habitat", "casa");
console.log(longwordresult);*/

const longWord = (wordA, wordB) => {
  if (wordA.length > wordB.length) {
    return `${wordA} es más larga que ${wordB}`;
  } else if (wordB.length > wordA.length) {
    return `${wordB} es más larga que ${wordA}`;
  }
  return `${wordA} es igual de larga que ${wordB}`;
};

const longwordresult = longWord("habitat", "casa");
console.log(longwordresult);

/*4.Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".*/

/*function extractTwoLetters(word) {
  const oneLetter = Math.floor(Math.random() * word.lenght);
  const twoLetter = Math.floor(Math.random() * word.lenght);
  return word.charAt(oneLetter) + word.charAt(twoLetter);
}

function generateWord(wordA, wordB, wordC) {
  const wordALetters = extractTwoLetters(wordA);
  const wordBLetters = extractTwoLetters(wordB);
  const wordCLetters = extractTwoLetters(wordC);
  console.log(wordALetters + wordBLetters + wordCLetters);
}

generateWord("hola", "Adios", "Mano");
generateWord("velo", "cara", "ojos"); */

const extractTwoLetters = (word) => {
  const oneLetter = Math.floor(Math.random() * word.lenght);
  const twoLetter = Math.floor(Math.random() * word.lenght);
  return word.charAt(oneLetter) + word.charAt(twoLetter);
};

const generateWord = (wordA, wordB, wordC) => {
  const wordALetters = extractTwoLetters(wordA);
  const wordBLetters = extractTwoLetters(wordB);
  const wordCLetters = extractTwoLetters(wordC);
  console.log(wordALetters + wordBLetters + wordCLetters);
};
generateWord("hola", "Adios", "Mano");
generateWord("velo", "cara", "ojos");

/* 5.Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com". 
Que lea hasta @ y lo imprima, que lea despues del arroba y saque*/

/*function separatemail(email) {
  const arroba = email.indexOf("@");
  const user = email.substring(0, arroba);
  const dominio = email.substring(arroba + 1);

  console.log(`El usuario es ${user}`);
  console.log(`El dominio es ${dominio}`);
}

separatemail("patricia@gmail.com");*/

const separatemail = (email) => {
  const arroba = email.indexOf("@");
  const user = email.substring(0, arroba);
  const dominio = email.substring(arroba + 1);

  console.log(`El usuario es ${user}`);
  console.log(`El dominio es ${dominio}`);
};
separatemail("hola@gmail.com");

/* 6.Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs*/
/*
function fiveletter(word) {
  const oneLetter = word.charAt(0);
  const twoLetter = word.charAt(1);
  const threeLetter = word.charAt(2);
  const fourLetter = word.charAt(3);
  const fiveLetter = word.charAt(4);

  return (
    fiveLetter.toLowerCase() +
    fourLetter.toUpperCase() +
    threeLetter.toLowerCase() +
    twoLetter.toUpperCase() +
    oneLetter.toLowerCase()
  );
}

const fiveletteresult = fiveletter("adios");
console.log(fiveletteresult);
*/

const fiveLetter = (word) => {
  const oneLetter = word.charAt(0);
  const twoLetter = word.charAt(1);
  const threeLetter = word.charAt(2);
  const fourLetter = word.charAt(3);
  const fiveLetter = word.charAt(4);

  return (
    fiveLetter.toLowerCase() +
    fourLetter.toUpperCase() +
    threeLetter.toLowerCase() +
    twoLetter.toUpperCase() +
    oneLetter.toLowerCase()
  );
};
const fiveLetteResult = fiveLetter("adios");
console.log(fiveLetteResult);

/* 7.Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".*/

/*
function nombreapellido(wordA, WordB) {
  return (
    wordA.charAt(0).toUpperCase() + WordB + Math.floor(Math.random() * 100)
  );
}

const nombreapellidoresult = nombreapellido("Patricia", "Duran");
console.log(nombreapellidoresult);*/

const nombreApellido = (wordA, wordB) =>
  wordA.charAt(0).toUpperCase() + wordB + Math.floor(Math.random() * 100);

const nombreApellidoResult = nombreApellido("Patricia", "Duran");
console.log(nombreApellidoResult);

/* 8.Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

function conjugar(verb) {
  if (verb.endsWith("ar")) {
    return ` ${verb} es de la primera conjutación`;
  } else if (verb.endsWith("er")) {
    return ` ${verb} es de la segunda conjutación`;
  } else if (verb.endsWith("ir")) {
    return ` ${verb} es de la tercera conjutación`;
  }
  return ` ${verb} no es válido`;
}

function verb(verb1, verb2) {
  console.log(`El verbo ${conjugar(verb1)} y el verbo ${conjugar(verb2)} `);
}

verb("comer", "vivir");*/

const conjugar = (verb) => {
  if (verb.endsWith("ar")) {
    return ` ${verb} es de la primera conjutación`;
  } else if (verb.endsWith("er")) {
    return ` ${verb} es de la segunda conjutación`;
  } else if (verb.endsWith("ir")) {
    return ` ${verb} es de la tercera conjutación`;
  }
  return ` ${verb} no es válido`;
};

const verb = (verb1, verb2) => {
  console.log(`El verbo ${conjugar(verb1)} y el verbo ${conjugar(verb2)} `);
};
verb("comer", "vivir");

/* 9.Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida. Por ejemplo, si recibe "casa", deberá devolver "asac".*/
/*
function reves(word) {
  const firstLetter = word.charAt(0);
  const secondLetter = word.charAt(1);
  const thirdLetter = word.charAt(2);
  const fourthLetter = word.charAt(3);

  console.log(fourthLetter + thirdLetter + secondLetter + firstLetter);
}

reves("Casa");*/

const reves = (word) => {
  const firstLetter = word.charAt(0);
  const secondLetter = word.charAt(1);
  const thirdLetter = word.charAt(2);
  const fourthLetter = word.charAt(3);

  console.log(fourthLetter + thirdLetter + secondLetter + firstLetter);
};

reves("Pelo");

/* 10.Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 17.*/

function threeword(wordA, wordB, wordC) {
  console.log(wordA.length + wordB.length + wordC.length);
}

threeword("casas", "hola", "pelo");

const threeword2 = (wordA, wordB, wordC) =>
  console.log(wordA.length + wordB.length + wordC.length);

threeword2("casa", "hola", "pelo");

/*11.Crea una función que reciba una frase y devuelva la frase con el formato de título, es decir, que cada palabra comience con mayúscula. Por ejemplo, "hola mundo" se convertiría en "Hola Mundo".
 */
/*
function frase(word) {
  const espacio = word.indexOf(" ");
  const mayus1 = word.charAt(0).toUpperCase();
  const mayus2 = word.charAt(espacio + 1).toUpperCase();

  console.log(
    mayus1 +
      word.substring(1, espacio) +
      " " +
      mayus2 +
      word.substring(espacio + 2)
  );
}

frase("hola mundo");*/

const frase = (word) => {
  const espacio = word.indexOf(" ");
  const mayus1 = word.charAt(0).toUpperCase();
  const mayus2 = word.charAt(espacio + 1).toUpperCase();

  console.log(
    mayus1 +
      word.substring(1, espacio) +
      " " +
      mayus2 +
      word.substring(espacio + 2)
  );
};

frase("hola mundo");

/*12. Crea una función que reciba un nombre y un apellido y devuelva las iniciales en mayúsculas. Por ejemplo, si recibe "Carlos Pérez", deberá devolver "C.P.".


function nombre(name, surname) {
  const nameInicial = name.charAt(0).toUpperCase() + ".";
  const surnameInicial = surname.charAt(0).toUpperCase() + ".";
  console.log(nameInicial + surnameInicial);
}

nombre("Patricia", "Durán"); */

const nombre = (name, surname) => {
  const nameInicial = name.charAt(0).toUpperCase() + ".";
  const surnameInicial = surname.charAt(0).toUpperCase() + ".";
  console.log(nameInicial + surnameInicial);
};

nombre("patricia", "durán");

/*13.Crea una función que reciba 3 palabras y calcule el promedio de la longitud de esas palabras. Por ejemplo, si recibe "hola", "adiós" y "mundo", el promedio sería 4.67.

function promedio(wordA, wordB, wordC) {
  console.log((wordA.length + wordB.length + wordC.length) / 3);
}

promedio("casas", "hola", "pelo");*/

const promedio = (wordA, wordB, wordC) =>
  console.log((wordA.length + wordB.length + wordC.length) / 3);

promedio("casas", "hojas", "pelo");

/*14.Crea una función que reciba un número de teléfono de 10 dígitos (como "1234567890") y lo formatee de la siguiente manera: "(123) 456-7890".

function tennumber(number) {
  const one = String(number).substring(0, 3);
  const two = String(number).substring(3, 6);
  const three = String(number).substring(6, 10);

  console.log(`(${one}) ${two}-${three}.`);
}
tennumber(1234567890);*/

const tenNumber = (number) => {
  const one = String(number).substring(0, 3);
  const two = String(number).substring(3, 6);
  const three = String(number).substring(6, 10);

  console.log(`"(${one}) ${two}-${three}."`);
};

tenNumber(1234567890);

/*15.Crea una función que reciba una palabra de 4 letras y la devuelva en orden inverso, duplicando cada letra. Por ejemplo, si recibe "hola", devolvería "aalloohh".

function reverse(word) {
  const first = word.charAt(0);
  const second = word.charAt(1);
  const third = word.charAt(2);
  const fourth = word.charAt(3);

  return fourth + fourth + third + third + second + second + first + first;
}

const reverseresult = reverse("hola");
console.log(reverseresult);*/

const reverse = (word) => {
  const first = word.charAt(0);
  const second = word.charAt(1);
  const third = word.charAt(2);
  const fourth = word.charAt(3);

  return fourth + fourth + third + third + second + second + first + first;
};
const reverseresult = reverse("hola");
console.log(reverseresult);

/*16.Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false.

function pairnumnber(number) {
  const fistdigit = String(number).charAt(0);
  const seconddigit = String(number).charAt(1);
  return fistdigit % 2 === 0 && seconddigit % 2 === 0;
}*/

const pairNumber = (number) => {
  const firstDigit = String(number).charAt(0);
  const seconDigit = String(number).charAt(1);
  if (firstDigit % 2 === 0 && seconDigit % 2 === 0) {
    return true;
  }
  return false;
};

const pairNumbeResult = pairNumber(23);
console.log(pairNumbeResult);

/*17.Crea una función que reciba dos palabras de 4 letras y verifique si contienen las mismas letras en diferente orden, por ejemplo "amor" y "mora"

function trueWord(wordA, wordB) {
  if (
    wordA.includes(wordB.charAt(0)) &&
    wordA.includes(wordB.charAt(1)) &&
    wordA.includes(wordB.charAt(2)) &&
    wordA.includes(wordB.charAt(3))
  ) {
    return true;
  }
  return false;
}

const resultTrueWord = trueWord("amor", "mora");
console.log(resultTrueWord);*/
const trueWord = (wordA, wordB) => {
  if (
    wordA.includes(wordB.charAt(0)) &&
    wordA.includes(wordB.charAt(1)) &&
    wordA.includes(wordB.charAt(2)) &&
    wordA.includes(wordB.charAt(3))
  ) {
    return true;
  }
  return false;
};

const resultTrueWord = trueWord("amor", "mora");
console.log(resultTrueWord);

/*18.Crea una función que reciba un string y un número n, y devuelva los primeros n caracteres del string (puedes usar el método slice).

function stringN(word, number) {
  return word.slice(-4);
}
const resultstringN = stringN("hola buenas", 4);
console.log(resultstringN);*/

const stringN = (word, number) => word.slice(-4);

const resultstringN = stringN("hola buenas", 4);
console.log(resultstringN);
/*19.Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase

function iswordin(word, phrase) {
  if (phrase.includes(word)) {
    console.log(word + " está en la frase: " + phrase);
  } else {
    console.log(word + " no está en la frase " + phrase);
  }
}

iswordin("jardin", "Estoy en casa");*/

const isWordIn = (word, phrase) => {
  if (phrase.includes(word)) {
    console.log(word + " está en la frase: " + phrase);
  } else {
    console.log(word + " no está en la frase " + phrase);
  }
};

isWordIn("jardin", "Estoy en casa");
