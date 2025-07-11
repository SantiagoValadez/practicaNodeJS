// funcion que tiene acceso a variables de un ambito externo, incluso depsues de que es funcion haya sterminado de ejecutarse.
// Ambito lexico: cada vez que se declara una funcion, crea su propio ambito lexico, y puede acceder a las variables dentro
// del ambito y a las variables en ambito superiores

function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accede a la variable del ámbito externo
    }
    return innerFunction; // Devuelve la función interna
}

const outerFunction = closureExample(); // Llama a la función externa, que devuelve la función interna


function createCounter (){
    let count = 0;

    return function (){
        count ++
        console.log (count)
    }
}

const counterA = createCounter ()
counterA(); // Imprime 1
counterA(); // Imprime 2
const counterB = createCounter ()
counterB(); // Imprime 1

function outer (){
    let message = "Hello"

    function inner (name) {
        console.log(message + name )
    }
    return inner; // Devuelve la función interna
}

// const closureA = outer(); // Llama a la función externa, que devuelve la función interna
// const closureA = outer(); // Llama a la función externa, que devuelve la función interna

closureA ("Alicia")
closureA ("Bob")
