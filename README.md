# finalProject
This is the final project for Coderhouse Javascript course 

## App objective
Esta aplicación va a ser una calculadora de critpomonedas. Obviamente, no van a estar todas, unicamente seleccionaremos un par, como funciona LemonCash. La idea es que convierta el valor, cargue los gas fee, comisión, etc. 

# CLASE 4 - Comenzar idea proyecto final + funciones

>> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones.

>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador

>>Ejemplo:
Calcular costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.


# CLASE 5 - Agregar objetos y métodos

>> Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Crear al menos un objeto para controlar el funcionamiento de tu simulador.
Incorporarle sus propiedades y su constructor.
Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
Utilizar sus mètodos.


# CLASE 6 - Agregar Arrays y métodos

>> Consigna: Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Incorporar al menos un Array en tu proyecto.
Utilizar algunos de los métodos o propiedades vistos en la clase.


## Comentario de esta tarea: 

El array agregado está en la línea de JS 233 - 247; basícamente es un array donde declaramos nuestras coins y le preguntamos al usuarix si quiere agregar alguna otra criptomoneda a nuestro mercado (esto luego va a ser pensado de una mejor manera para la final app). 

let ourCoins = [
  "Bitcoin",
  "Etherum",
  "Solana",
  "Uniswap",
  "Sandbox"
];

const ourCoinsFeedback = () => {
  let pushCoin = prompt("Write a crypto coin that you want to add to our market");
  ourCoins.push(pushCoin);
  console.log(ourCoins);
}; 


# PRIMERA ENTREGA OFICIAL DE PROYECTO FINAL

## Aclaraciones: 

- Para interactuar con toda la parte de JS solicitada, se debe hacer click en los botones Buy de cada criptomoneda en la sección Crypto prices

![Screenshot](https://user-images.githubusercontent.com/84801914/149342554-88e62702-f57f-475c-b85a-1083e430223a.png)

- La estructura HTML y CSS están trabajandose. Es decir, al realizar esta primera entrega se va a ver que todavía las cosas no tienen un orden, al ir pasando las entregas se irá mejorando. 
- La estructura JS está OKAY para la primer entrega cumpliendo los siguientes términos: 


# OBJETIVOS DE PRIMERA ENTREGA

## Objetivos Generales:
Codificar la funcionalidad inicial del simulador. 
Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

## Objetivos Específicos:
- Capturar entradas mediante prompt(). ✅
- Declarar variables y objetos necesarios para simular el proceso seleccionado. ✅
- Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc). ✅
- Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log(). ✅
- Estructura HTML del proyecto. ✅
- Variables de JS necesarias. ✅
- Funciones esenciales del proceso a simular. ✅
- Objetos de JS. ✅


# CLASE 8 - INTERACTUAR CON HTML - DOM

>> Consigna:  Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. En función del tipo de simulador que hayas elegido, deberás:
Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.
Modificar etiquetas existentes en función del resultado de operaciones.

## 1 Interactuar comprand BTC

![asd](https://user-images.githubusercontent.com/84801914/150454722-c6a4dea5-07ad-4961-b373-3f549da66ec4.png)

## 2 Se agrega la info de la compra

![asdasd1](https://user-images.githubusercontent.com/84801914/150454733-03ed60d8-e1d3-4860-a1ab-5183f5842341.png)

## 3 Se interactua con el botón para modificar dicha información

![asdasd2](https://user-images.githubusercontent.com/84801914/150454740-be034321-d8d9-45eb-bad0-920a1f4da4d2.png)


# CLASE 10 - INCORPORAR EVENTOS (proyecto final)

>> Consigna: Con lo que vimos sobre DOM, ahora puedes sumarlo a tu proyecto, para interactuar entre los elementos HTML y JS. Es decir, asociar eventos que buscamos controlar sobre los elementos  de la interfaz de nuestro simulador
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que opere sobre el DOM manejando eventos.
>>Ejemplo:
Cuando el usuario completa algún dato, por ejemplo cantidad de cuotas, se captura ese dato y se agregan elementos al DOM mediante JS.
Capturar la tecla ENTER para confirmar alguna acción.


## Aclaraciones

Interactuar por el momento solo de Bitcoin a otras monedas, es decir el option 1 dejarlo en bitcoin y solo cambiar valores de abajo. 
Cuando se ingrese el valor y se haga click, se va a agregar el valor convertido a un div abajo.
Si se hace click en enter se muestra un alert informando que se apreto enter. Acá necesito saber cómo puedo importar ese código para usarlo en addEventListener('click) y ('keypress'). Probe con type="modules". Lo agregue a mi archivo package.json, pero me tira que require no se acepta y también probe cambiando mi archivo a ES6 para usar import {asdas} from './', **pero tampoco me funcaaaaa** :'(  😒😒😒😒😒

## Probar como si fuera un celular.

### Dejo pasos de la tarea

![clase10-1](https://user-images.githubusercontent.com/84801914/151087805-670718b5-74b3-4ce2-b20a-838d2f1a7044.png)


![clase 10-2](https://user-images.githubusercontent.com/84801914/151087811-1b8a5d3e-7778-4106-b830-0fef97141d64.png)


![clase 10 3](https://user-images.githubusercontent.com/84801914/151087817-7e76ba06-e13d-49e6-afb3-0313d036326a.png)


