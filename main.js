let nombre_2 = prompt("Ingresa tu nombre");
alert ("Mucho gusto: " + nombre_2);

let num_4 = 15;
num_4 = num_4 + 5;

document.write(num_4);

let texto_1 = "Hola";
let texto_2 = " Jorge";

texto_t = texto_1 + texto_2;

document.write(texto_t);



/* ------------------------------ Practica 1. Mostrar mensaje en la consola del navegador. --------------------------------------- */

console.log('Hola a todos');
console.log(6+9);

/*------------------------------- Practica 2. Declarar variables y mostrarlas en la consola. --------------------------------*/

/* Se declaran las variales utilizando 'let'. En Javascript, no se declaran de que tipo son, el mismo Javascript las define. */

let nombre ='Jorge', apellido = 'Ortiz';
let edad = 25;
let sueldo = 32899.99;
let trabajo = true;
let puesto;
let horario = null;

console.log(nombre, apellido);                        /* --- Muestra el valor de la variable. ---  */
console.log(typeof(nombre), typeof(apellido));        /* --- Muestra el tipo de dato de ambas variables. --- */

console.log(edad);
console.log(typeof(edad));

console.log(sueldo);
console.log(typeof(sueldo));

console.log(trabajo);
console.log(typeof(trabajo));

console.log(puesto);
console.log(typeof(puesto));

console.log(horario);
console.log(typeof(horario));

edad = 'Texto';                                    /* --- El tipo de dato se vuelve a definir y ahora, edad, ya no es númerico, sino de tipo caracter. --- */
console.log(edad);
console.log(typeof(edad));

/* ------------------------------------------------- Practica 3. Operadores matemáticos. -------------------------------------------------- */

let edadMaria, edadAna, diferenciaEdad;
let sumaEdades, anoactual, anoMaria, anoAna;

edadMaria = 36;
edadAna = 30;
diferenciaEdad = edadMaria - edadAna;
sumaEdades = edadMaria + edadAna;
anoactual = 2021;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log(anoactual)
console.log(anoMaria = anoactual - edadMaria);
console.log(anoAna = anoactual - edadAna);
console.log('Maria tiene: ', edadMaria, ' y nació en: ', anoMaria);   /* Muestra el texto: "Maria tiene 36 y nació en 1985." */
console.log('Ana tiene: ', edadAna, ' y nació en: ', anoAna);

/* --------------------------------------------------- Practica 4. Operadores lógicos------------------------------------------------------ */

let edadJorge, edadMario, diferencia;

edadJorge = 25;
edadMario = 18;
diferencia = edadJorge - edadMario;

let mayor = edadJorge > edadMario;     /* Aquí se hace el ciclo IF de C++. Si Jorge es mayor que Mario, TRUE. */
let menor = edadJorge < edadMario;     /* Si Jorge es menor que Mario, FALSE. */
let igual = !(edadJorge == edadMario); /* Este operador '!' cambia el resultado, es decir, en la consola se muestra: TRUE */

console.log (mayor);                   /* Imprime el resultado en la consola: TRUE. */
console.log (menor);                   /* Imprime el resultado en la consola: FALSE. */
console.log (igual);                   /* Imprime el valor TRUE, aunque las edades sean diferentes. */

/* --------------------------------------------------- Practica 5. Operadores unarios------------------------------------------------------ */

let edadZaira;

edadZaira = 25;
console.log (edadZaira);
edadZaira++;
console.log (edadZaira);

/* -------------------------------------------------------- Practica 6. IF ELSE ------------------------------------------------------------- */

/*   --- if (condicional) sentencia [else sentencia2] */

let nombre_d = 'Diego';
let esCasado = false;

if (esCasado == true)
{
    console.log (nombre_d, 'es casado');
}

else
{
    console.log (nombre_d, 'es soltero');
}

/* -------- Condicionales anidades -------- */ 

let num_if = 12;

if ((num_if >= 1) && (num_if <= 5))
{
    console.log ('El numero esta entre 1 y 5.');
}

else 
{
    if ((num_if >= 6) && (num_if<=10))
    {
    console.log ('El numero esta entre 6 y 10.');
    }
    else 
    {
        if ((num_if >= 11) && (num_if <= 15))
        {
            console.log ('El numero esta entre 11 y 15.');
        }
        else
        {
            console.log ('El numero es mayor.');
        }
    }
}

/* ------------------------------------------------------- Practica 6. SWITCH-CASE ----------------------------------------------------------- */

let mes = 2;

switch(mes)
{
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    default:
        console.log('Mes erroneo');
        break;
}

/* ------------------------------------------------------- Practica 7. FOR ----------------------------------------------------------- */

for (i = 1; i <= 10; i++)
{
    console.log(i);
}

for (i = 20; i >= 11; i--)
{
    console.log(i);
}

console.log ('Teminé ciclo FOR');

/* ------------------------------------------------------- Practica 7. WHILE ----------------------------------------------------------- */

let g = 40;

while(g <= 50)
{
    console.log (g);
    g++;
}

console.log ('Teminé ciclo WHILE');

/* ------------------------------------------------------- Practica 7. DO-WHILE ----------------------------------------------------------- */

let h = 100;

do
{
    console.log(h);
    h--;
}while(h >= 91);

console.log ('Teminé ciclo DO-WHILE');

/* -------------------------------------------------------- Practica 8. Funciones ------------------------------------------------------------- */

/* ----------- Solamente mostrando un mensaje llamando la función ----------- */

function mensaje()
{
    console.log ('Mensaje de la función.');
}

mensaje();

/* ----------- Regresar o devolver un valor de la función creada. ------------*/

function func_num()
{
    return 'Este mensaje es de la función';
}

let msj = func_num();
console.log (msj);

/* ------------------ Enviar un valor a la función creada. -------------------- */

let msj_2 = 'Este mensaje viene de afuera de la función, y se imprime en la función.';
mensaje_2 (msj_2);

function mensaje_2(msj_2)
{
    console.log(msj_2);
}

/* ------------------....-- Operación de suma. ---------------------------------- */

let aa, ab;

let ac = triangulo(3, 4);

function triangulo(aa, ab)
{
    return ((aa * ab)/2);
}
   
console.log(ac);

